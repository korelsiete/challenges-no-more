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

## Camel Case

Given a string, return its camel case version using the following rules:

- Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (\_). Treat any sequence of these as a word break.
- The first word should be all lowercase.
- Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
- All spaces and separators should be removed.

#### Some tests:

- `toCamelCase("hello world")` should return `"helloWorld"`.
- `toCamelCase("HELLO WORLD")` should return `"helloWorld"`.
- `toCamelCase("secret agent-X")` should return `"secretAgentX"`.
- `toCamelCase("FREE cODE cAMP")` should return `"freeCodeCamp"`.
- `toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk")` should return `"yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"`.

#### My solution:

```js
function toCamelCase(s) {
  s = s.toLowerCase();
  const words = s.split(/[^a-zA-Z0-9]+/g);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}
```

---

## Array Duplicates

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

- Only include one instance of each value in the returned array.

#### Some tests:

- `findDuplicates([1, 2, 3, 4, 5])` should return `[]`.
- `findDuplicates([1, 2, 3, 4, 1, 2])` should return `[1, 2]`.
- `findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])` should return `[-6, 0, 2, 4, 5, 23]`.

#### My solution:

```js
function findDuplicates(arr) {
  const duplicates = arr.filter((item, index) => arr.includes(item, index + 1));
  const ordered = duplicates.sort((a, b) => a - b);
  return [...new Set(ordered)];
}
```
