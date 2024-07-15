export const getDateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
