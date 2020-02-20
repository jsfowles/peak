export const round = (value: number, precision: number = 0) => {
  const mult = 10 ** precision;
  return Math.round(value * mult) / mult;
};
