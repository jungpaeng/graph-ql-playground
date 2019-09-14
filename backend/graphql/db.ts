export const people = [
  {
    id: 0,
    name: "Yongbeen.0",
    age: 20,
    gender: "male"
  },
  {
    id: 1,
    name: "Yongbeen.1",
    age: 20,
    gender: "male"
  },
  {
    id: 2,
    name: "Yongbeen.2",
    age: 20,
    gender: "male"
  },
  {
    id: 3,
    name: "Yongbeen.3",
    age: 20,
    gender: "male"
  },
  {
    id: 4,
    name: "Yongbeen.4",
    age: 20,
    gender: "male"
  },
];

export const getById = (id: number) => (
  people.filter(person => id === person.id)[0]
);