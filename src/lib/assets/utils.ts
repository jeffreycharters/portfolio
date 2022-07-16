export const rotator = (max: number): string => {
  const angle = (Math.random() * max) - (max / 2);
  const rounded = angle.toFixed(2)
  return `transform: rotate(${rounded}deg);`
}