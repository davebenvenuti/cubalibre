export default [
  {
    body: "Government Base or City lacks Government Control, Troops, or Police?",
    yes: "train"
  },
  {
    body: "26 July + DR at EC Underground or exceeds cubes?",
    yes: "garrison"
  },
  {
    body: "Assault would add Government Control or remove Base or 3+ guerrillas?",
    no: "sweep",
    yes: "assault"
  }
];
