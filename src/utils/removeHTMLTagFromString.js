function removeHTMLTagFromString(str) {
  let cleanStr = str.replace(/<\/?[^>]+(>|$)/gi, '');
  return cleanStr;
}

export default removeHTMLTagFromString