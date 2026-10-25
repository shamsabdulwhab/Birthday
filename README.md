# Birthday Wishes

Birthday Wishes explores how digital birthday wishes can feel more personal, thoughtful, and meaningful.

This first version focuses on the receiver’s experience. A click on the cake fades in a personalized birthday card. The microphone can now measure loudness. Treating a blow as that same reveal is the next step.

## Current status

The receiver page shows a cake with five candles. Clicking the cake fades in the birthday card. Finish opens the sender route.

Allow microphone asks for permission with `getUserMedia`, then an `AnalyserNode` shows a level from 0 to 128. The number stays small in a quiet room and rises when you speak, clap, or blow. A loud number does not open the card yet.

## Next

- Measure the quiet room and keep that background level.
- Set a threshold above the background.
- Require the sound to stay above the threshold for a short time.
- When both checks pass, stop the microphone and reveal the card, the same result as clicking the cake.
- Compare a fixed threshold, a background threshold, and a background threshold plus duration, using blows, speech, claps, and music.

## Technologies

- **React:** Builds the receiver and sender pages.
- **React Router:** Serves the receiver at `/` and the sender at `/send`.
- **CSS:** Styles the interface and animates the candle flames.
- **Web Audio API:** Reads the microphone with `getUserMedia` and an `AnalyserNode`.
- **Vite:** Runs the app locally and builds it for the browser.
- **Git and GitHub:** Track changes and store the project code.
