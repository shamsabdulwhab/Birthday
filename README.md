# Birthday Wishes

Birthday Wishes explores how digital birthday wishes can feel more personal, thoughtful, and meaningful.

This first version focuses on the receiver’s experience. A click on the cake fades in a personalized birthday card. The microphone can now measure loudness. Treating a blow as that same reveal is the next step.

## Current status

The receiver page shows a cake with five candles. Clicking the cake fades in the birthday card. Finish opens the sender route.

Allow microphone asks for permission with `getUserMedia`, then an `AnalyserNode` shows a level from 0 to 128. A quiet room reads about 0–2. Speaking reaches about 6–7, and a clap about 12. Blowing stays around 0–1, the same range as silence, though the value can hold at 1 a little longer. A loudness threshold would catch speech and claps and miss a blow. The card still opens only when the cake is clicked.

## Next
- Investigate frequency, because a blow is low and breathy while speech and claps spread higher.
- A duration check is only a clue so far. It was not tested, and sustained speaking could still pass it.

## Technologies

- **React:** Builds the receiver and sender pages.
- **React Router:** Serves the receiver at `/` and the sender at `/send`.
- **CSS:** Styles the interface and animates the candle flames.
- **Web Audio API:** Reads the microphone with `getUserMedia` and an `AnalyserNode`.
- **Vite:** Runs the app locally and builds it for the browser.
- **Git and GitHub:** Track changes and store the project code.
