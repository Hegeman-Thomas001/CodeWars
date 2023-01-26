function countDevelopers(list) {
  // your awesome code here :)
  return list.reduce((acc, curr) => {
    if (curr.continent === "Europe" && curr.language === "JavaScript") {
      return acc + 1;
    }
    return acc;
  }, 0);

  // OR
  // return list.filter(
  //   (el) => el.continent === "Europe" && el.language === "JavaScript"
  // ).length;
}

console.log(
  countDevelopers([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ])
);

console.log(
  countDevelopers([
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 19,
      language: "HTML",
    },
    {
      firstName: "Lukas",
      lastName: "R.",
      country: "Austria",
      continent: "Europe",
      age: 89,
      language: "HTML",
    },
  ])
);
