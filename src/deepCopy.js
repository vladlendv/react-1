function deepCopy(obj) {
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

export default deepCopy;
