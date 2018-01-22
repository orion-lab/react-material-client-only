export default function pxToRem(px, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}
