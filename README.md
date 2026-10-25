# Birthday Wishes

Birthday Wishes explores how digital birthday wishes can feel more personal, thoughtful, and meaningful.

This first version focuses on the receiver’s experience. A click on the cake stands in for blowing out the candles. After that click, a personalized birthday card fades in. Blowing into the microphone is the interaction this project is building toward.

## Current status

The receiver page shows a cake with five candles. Clicking the cake fades in the birthday card. Finish opens the sender route. Microphone detection is the next step.

## Next

- Request microphone access with `getUserMedia`.
- Measure the sound level with the Web Audio API.
- Treat a blow as the same action as the cake click: reveal the card.
- Explore ways to reduce accidental triggers from background noise.

## Technologies

- **React:** Builds the receiver and sender pages.
- **React Router:** Serves the receiver at `/` and the sender at `/send`.
- **CSS:** Styles the interface and animates the candle flames.
- **Vite:** Runs the app locally and builds it for the browser.
- **Git and GitHub:** Track changes and store the project code.
