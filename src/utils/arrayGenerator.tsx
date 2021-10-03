const arrayFromLowToHigh = (low: number, high: number) => {
  const resultArray = []

  for (let i = low; i <= high; i++) {
    resultArray.push(i)
  }

  return resultArray
}

export default arrayFromLowToHigh
