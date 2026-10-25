import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cake from "../components/Cake.jsx"
import Candle from "../components/candle.jsx"
import Envelope from "../components/Envelope.jsx" 

export default function Receive() {
  const [showCard, setShowCard] = useState(false)
  const navigate = useNavigate()

  return (
    <main className={showCard ? "revealed" : ""}>
      <Envelope />
      <section className="wish">
        <h1>Make a wish, Maya</h1>
        <p className="instruction">Then blow out the candles</p>

        <button type="button" aria-label="Blow out the candles" onClick={() => setShowCard(true)}>
          <span className="candles">
            {Array.from({ length: 5 }, (_, index) => (
              <Candle key={index} />
            ))}
          </span>
          <Cake />
        </button>
      </section>
      <section className="letter">
        <h1>For All the little moment</h1>
        <article className="card">
          <div className="photo" role="img" aria-label="Friends together" />
          <div className="note">
            <p className="greeting">Maya,</p>
            <p>
              You make ordinary days feel like the ones worth remembering.
              <br />
              I'm so grateful I get to do life with you.
              <br />
              Here is to everything waiting for you this year.
            </p>
            <div className="closing">
              <p className="signature">
                Your friend
                <br />
                Shams
              </p>
              <p className="signoff">Always Smile</p>
            </div>
          </div>
          <div className="voice">
            <p>Voice message for you</p>
            <div className="player">
              <button type="button" aria-label="Play voice message">
                ▶
              </button>
              <span className="wave" aria-hidden="true">
                {Array.from({ length: 48 }, (_, index) => (
                  <span key={index} style={{ height: `${6 + ((index * 17) % 16)}px` }} />
                ))}
              </span>
              <span className="time">1:55</span>
            </div>
          </div>
        </article>
        <button type="button" className="finish" onClick={() => navigate("/send")}>
          Finish
        </button>
      </section>
    </main>
  )
}