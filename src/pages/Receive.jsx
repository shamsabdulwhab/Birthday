import { useEffect, useRef, useState } from "react"
import Cake from "../components/Cake.jsx"
import Candle from "../components/candle.jsx"
import Card from "../components/Card.jsx"
import Envelope from "../components/Envelope.jsx" 

export default function Receive() {
  const [showCard, setShowCard] = useState(false)
  const [message, setMessage] = useState("")
  const [level, setLevel] = useState(null)
  const audioRef = useRef(null)

  function stopListening() {
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
    setLevel(null)
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
        setLevel((current) => (current === next ? current : next))
        audio.frame = requestAnimationFrame(readLevel)
      }

      readLevel()
      setMessage("Blow, speak, or clap. The level should rise.")
    } catch {
      setMessage("The microphone stays off until you allow it in the browser.")
    }
  }

  return (
    <main className={showCard ? "revealed" : ""}>
      <Envelope />
      <section className="wish">
        <h1>Make a wish, Maya</h1>
        <p className="instruction">Then blow out the candles</p>
        <button type="button" className="listen" onClick={askPermission}>
          Allow microphone
        </button>
        {message ? <p className="mic-message">{message}</p> : null}
        {level !== null ? <p className="mic-message">Level: {level}</p> : null}

        <button type="button" className="blow" aria-label="Blow out the candles" onClick={() => setShowCard(true)}>
          <span className="candles">
            {Array.from({ length: 5 }, (_, index) => (
              <Candle key={index} />
            ))}
          </span>
          <Cake />
        </button>
      </section>
      <Card />
    </main>
  )
}