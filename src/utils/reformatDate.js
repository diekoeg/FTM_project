function reformatDate(str) {
  let newDate = str.substring(0, str.indexOf('T'));
  return newDate;
}

export default reformatDate