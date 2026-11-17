# Birthday Wishes

Birthday Wishes explores how digital birthday wishes can feel more personal, thoughtful, and meaningful.

This first version focuses on the receiver’s experience. The candles go out first, and the birthday card fades in on the same page after a short pause. Finish opens the sender route.

Live site: https://poetic-marigold-085535.netlify.app/

![Make a wish, with the candles lit](Screenshot%202026-11-17%20134248.png)

![The candles after they go out](Screenshot%202026-11-17%20134351.png)

![The birthday card](Screenshot%202026-11-17%20134711.png)

## Current status

The receiver page shows a cake with five candles. Clicking the cake, or a microphone level of 4 or more, puts the flames out. About two seconds later the card fades in. The address stays `/`.

Allow microphone asks for permission with `getUserMedia`, then an `AnalyserNode` reads a level from 0 to 128. The level is printed in the console about once a second. A quiet room reads about 0–2. Speaking reaches about 6–7, and a clap about 12. Blowing stays around 0–1, the same range as silence, though the value can hold at 1 a little longer. The level check therefore catches speech and claps and misses a blow. Clicking the cake still runs the same flame-out and card.

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
