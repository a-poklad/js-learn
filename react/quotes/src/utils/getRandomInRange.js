function getRandomInRange(number) {
  const min = 0;
  const max = number;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInRange;
