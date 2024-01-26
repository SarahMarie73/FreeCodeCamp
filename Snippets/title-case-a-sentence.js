function titleCase(str) {
  let arr = str.split(' ');
  let newArr = [];
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    let lowercase = arr[i].toLowerCase();
    let capitalized = lowercase.replace(lowercase.charAt(0), lowercase[0].toUpperCase());
    newArr.push(capitalized);
  }
  newStr = newArr.join(' ');
  console.log(newStr)
  return newStr;
}

titleCase("I'm a little tea pot");