// @ts-nocheck
export function doStuff(tekst, lengde) {
  let words = tekst.split(' ')
  let processedWords = {}

  words.forEach((word) => {
    if (word.length === lengde) {
      processedWords[word] = words.filter((w) => w === word).length
    }
  })

  return processedWords
}
