import { useNavigate } from "react-router-dom"

function Card() {
  const navigate = useNavigate()

  return (
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
            <audio src="/path/to/voice-message.mp3" controls />
          </div>
        </div>
      </article>
      <button type="button" className="finish" onClick={() => navigate("/send")}>
        Finish
      </button>
    </section>
  )
}

export default Card
