# How the candles are made

This report explains how the five candles on the receiver page are built. They are not images and they are not SVG. Each candle is two empty HTML elements, and CSS paints the wax, the wick, and the flame.

## 1. One candle is a small component

The component lives in `src/components/candle.jsx`. It returns one wrapper and two empty spans. The first span is the flame. The second span is the wax. There is no text inside them, so they have no size until CSS gives them one.

```jsx
function Candle() {
  return (
    <span className="one-candle">
      <span className="flame" />
      <span className="candle" />
    </span>
  )
}
```

`one-candle` is only a holder. In `src/index.css` it is a column, so the flame sits above the wax, and both pieces are centered.

## 2. The page draws that component five times

`src/pages/Receive.jsx` does not copy the candle markup five times. It repeats the component:

```jsx
<span className="candles">
  {Array.from({ length: 5 }, (_, index) => (
    <Candle key={index} />
  ))}
</span>
```

`.candles` is a horizontal row with a 14 pixel gap, so the five candles sit side by side on top of the cake. The row is inside the cake button. Clicking a candle still counts as clicking the cake.

## 3. CSS paints the wax

`.one-candle .candle` turns the empty wax span into a stick:

- `display: block` lets width and height apply. An empty span is inline by default and would stay invisible.
- The stick is 14 pixels wide and 52 pixels tall.
- `border-radius: 3px` softens the corners.
- The background is a left-to-right gradient: darker pink, a pale stripe near the middle, then darker pink again. The pale stripe makes the flat rectangle look round.

## 4. CSS paints the wick

The wick is not another element in `candle.jsx`. `.candle::before` paints an extra box on top of the wax:

- It is 2 pixels wide and 8 pixels tall.
- `top: -7px` pushes it above the wax so it sticks out.
- `left: 50%` and `translateX(-50%)` center it.
- The color is brown (`#c4a574`).

## 5. CSS paints the flame

`.one-candle .flame` paints the fire on the first span:

- The box is 8 pixels wide and 32 pixels tall.
- `border-radius: 50% 50% 45% 45% / 60% 60% 40% 40%` pulls the corners in until the rectangle looks like a teardrop.
- The background fades from pale yellow at the top (`#fff6c8`) through gold to orange at the bottom (`#e2a322`).
- `margin-bottom: -3px` overlaps the flame onto the wick.
- `transform-origin: center bottom` keeps the bottom of the flame fixed when it moves.

## 6. The flicker is a CSS animation

The flame rule includes:

```css
animation: flicker 0.35s infinite alternate ease-in-out;
```

`flicker` is defined in the same file:

```css
@keyframes flicker {
  from {
    transform: scale(1, 1) rotate(-2deg);
  }
  to {
    transform: scale(1.08, 0.92) rotate(2deg);
  }
}
```

`from` is the flame at normal size, tilted 2 degrees left. `to` makes it slightly taller and narrower and tilts it 2 degrees right. The animation lasts 0.35 seconds, then plays back the other way because of `alternate`. `infinite` repeats that forever. Because the transform origin is the bottom center, the tip moves and the base stays on the wick.

## What this does not do yet

The flicker does not depend on the microphone. The level number and the flame are separate. A loud reading does not put the candles out. Clicking the cake still reveals the card while the flames keep moving.
