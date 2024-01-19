function confirmEnding(str, target) {
  let result = str.substring(str.length-target.length);
  if (result == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));