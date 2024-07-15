export const getMaxId = <T extends { id: number }>(items: T[]) => {
  return items.reduce((acc, item) => (item.id > acc ? item.id : acc), 0) + 1
}
