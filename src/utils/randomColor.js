import rN from "./randomNumber";
export default function randomCssColor() {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let colorString = "";
  for (let i = 0; i < 6; i++) {
    colorString = colorString + hex[rN(0, 15)];
  }
  return `#${colorString}`;
}
