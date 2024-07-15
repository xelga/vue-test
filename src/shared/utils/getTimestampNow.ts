export const getTimestampNow = () => {
  return Math.floor(new Date().getTime() / 1000)
}