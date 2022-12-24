function alphabetPosition(text) {
  const textLC = text.toLowerCase();
  const charaArr = [];

  for (const chara of textLC) {
    const charaCode = chara.charCodeAt();

    if (charaCode > 96 && charaCode < 123) {
      charaArr.push(charaCode - 96);
    }
  }

  return charaArr.join(" ");
}

console.log(alphabetPosition("abc def ghi"));
