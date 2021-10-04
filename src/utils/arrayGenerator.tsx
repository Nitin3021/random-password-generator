const arrayFromLowToHigh = (low: number = 0, high: number = 0) => {
  const resultArray = [] as Array<number>

  if (!low && !high) return resultArray

  for (let i = low; i <= high; i++) {
    resultArray.push(i)
  }

  return resultArray
}

export default arrayFromLowToHigh
