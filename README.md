# challenges-no-more

I will put my ideas in the solved files so you don't think it's ia 😃

## Mile Pace

Given a number of miles ran, and a time in `"MM:SS"` (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format `"MM:SS"`.

- Add leading zeros when needed.

#### Some tests:

- `milePace(3, "24:00")` should return`"08:00"`.
- `milePace(1, "06:45")` should return `"06:45"`.
- `milePace(2, "07:00")` should return `"03:30"`.
- `milePace(26.2, "120:35")` should return `"04:36"`.

#### My solution:

```js
function milePace(miles, duration) {
  let [m, s] = duration.split(":");
  let avg = (m * 60 + +s) / miles;
  [s, m] = [parseInt(avg % 60), parseInt(avg / 60)];
  return `${m <= 9 ? "0" : ""}${m}:${s <= 9 ? "0" : ""}${s}`;
}
```

---
