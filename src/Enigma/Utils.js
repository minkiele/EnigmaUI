export function toInt(val) {
  return parseInt(`0${val}`);
}

export function getTimestampKey () {
  let now = new Date();
  return `w${Math.random().toString()}`;
}
