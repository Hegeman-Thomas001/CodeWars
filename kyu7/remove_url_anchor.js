function removeUrlAnchor(url) {
  // TODO: complete
  const indexOfAnchor = url.indexOf("#");

  if (indexOfAnchor >= 0) {
    return url.slice(0, indexOfAnchor);
  }

  return url;

  // return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/"));
