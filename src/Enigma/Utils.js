export function toInt(val) {
  return parseInt(`0${val}`);
}

export function getTimestampKey () {
  let now = new Date();
  return `w${Math.random().toString()}`;
}

export function rudimentaryTranslator(key, obj) {
  if(typeof obj[key] === 'string'){
    return obj[key];
  } else {
    return key;
  }
}
