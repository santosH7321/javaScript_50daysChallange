const people = [
  {
    name: {
      firstName: "Santosh",
      lastName: "Kumar",
    },
    gender: "male",
  },
  {
    name: {
      firstName: "Nishant",
      lastName: "Ranjen",
    },
    gender: "male",
  },

  {
    name: {
      firstName: "Sita",
      lastName: "Kumar",
    },
    gender: "female",
  },
];

for (let person of people) {
  if (person.gender === "male") {
    console.log(person.name.firstName);
  }
}
