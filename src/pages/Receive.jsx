import { useEffect, useRef, useState } from "react"
import Cake from "../components/Cake.jsx"
import Candle from "../components/candle.jsx"
import Card from "../components/Card.jsx"
import Envelope from "../components/Envelope.jsx" 

export default function Receive() {
  const [showCard, setShowCard] = useState(false)
  const [candlesOut, setCandlesOut] = useState(false)
  const [message, setMessage] = useState("")
  const [listening, setListening] = useState(false)
  const audioRef = useRef(null)
  const lastLog = useRef(0)
  const cardTimer = useRef(null)
  const candlesBlown = useRef(false)

  function blowOut() {
    if (candlesBlown.current) return
    candlesBlown.current = true
    setCandlesOut(true)
    cardTimer.current = setTimeout(() => setShowCard(true), 2000)
  }

  function stopListening() {
    clearTimeout(cardTimer.current)
    const audio = audioRef.current
    if (!audio) return
    cancelAnimationFrame(audio.frame)
    audio.stream.getTracks().forEach((track) => track.stop())
    audio.context.close()
    audioRef.current = null
  }

  useEffect(() => stopListening, [])

  async function askPermission() {
    stopListening()
    lastLog.current = 0
    candlesBlown.current = false
    setCandlesOut(false)
    setMessage("Waiting for you to allow the microphone…")
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const context = new AudioContext()
      await context.resume()
      const analyser = context.createAnalyser()
      analyser.fftSize = 1024
      context.createMediaStreamSource(stream).connect(analyser)
      const samples = new Uint8Array(analyser.fftSize)
      const audio = { stream, context, frame: 0 }
      audioRef.current = audio

      function readLevel() {
        analyser.getByteTimeDomainData(samples)
        let total = 0
        for (const sample of samples) total += Math.abs(sample - 128)
        const next = Math.round(total / samples.length)
        const now = performance.now()
        if (now - lastLog.current >= 1000) {
          lastLog.current = now
          console.log("Level:", next)
        }
        if (next >= 4) blowOut()
        audio.frame = requestAnimationFrame(readLevel)
      }

      readLevel()
      setListening(true)
      setMessage("")
    } catch {
      setListening(false)
      setMessage("The microphone stays off until you allow it in the browser.")
    }
  }

  return (
    <main className={showCard ? "revealed" : ""}>
      <Envelope />
      <section className={candlesOut ? "wish blown" : "wish"}>
        <h1>Make a wish, Maya</h1>
        <p className="instruction">Then blow out the candles</p>
        <button type="button" className="blow" aria-label="Blow out the candles" onClick={blowOut}>
          <span className="candles">
            {Array.from({ length: 5 }, (_, index) => (
              <Candle key={index} />
            ))}
          </span>
          <Cake />
        </button>
        {listening ? null : (
          <button type="button" className="listen" onClick={askPermission}>
            Allow microphone
          </button>
        )}
        {message ? <p className="mic-message">{message}</p> : null}
      </section>
      <Card />
    </main>
  )
}