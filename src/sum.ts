export const sum: {
  (src: number[]): number
  (...args: number[]): number
} = (
  ...args: any[]
) => {
  let idx = -1
  let sum = 0
  const src = Array.isArray (args[0]) ? args[0] : args
  const len = src.length

  while (++idx < len) sum += src[idx]
  return sum
}
