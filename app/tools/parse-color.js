export default (color = '') => {
  // #1 -> 111111
  // #AC -> ACACAC
  // #123 -> 112233
  // #4321 -> 432111
  // #54321 -> 543211
  // #ABCDEF -> ABCDEF

  const validColor = color.toUpperCase().replace(/[^A-F0-9]/gi, '').slice(0, 6);
  if (validColor.length == 0) return "000000"
  if (validColor.length == 1) return validColor.repeat(6)
  if (validColor.length == 2) return validColor.repeat(3)
  if (validColor.length == 3) return validColor.split('').map(i => i.repeat(2)).join('')
  if (validColor.length == 4) return `${validColor}${validColor[3].repeat(2)}`
  if (validColor.length == 5) return `${validColor}${validColor[4].repeat(1)}`

  return validColor
}