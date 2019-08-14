import { SerializedStyles } from '@emotion/core'

type OptionalSerializedStyles = [SerializedStyles, boolean]
type Style = SerializedStyles | OptionalSerializedStyles | OptionalSerializedStyles[]

const isSerializedStyles = (style: Style): style is SerializedStyles => {
  return !Array.isArray(style)
}

const isOptionalSerializedStyles = (style: OptionalSerializedStyles | OptionalSerializedStyles[]): style is OptionalSerializedStyles => {
  return !Array.isArray(style[0])
}

const getStyle = (style: OptionalSerializedStyles) => style[0]
const isValidStyle = (style: OptionalSerializedStyles) => style[1]

const getValidStyles = (styleList: OptionalSerializedStyles[]): SerializedStyles[] => {
  return styleList.filter(style => isValidStyle(style)).map(style => getStyle(style))
}

const stylesCompiler = (...styleList: Style[]): SerializedStyles[] => {
  const output: SerializedStyles[] = []
  for (const style of styleList) {
    if (style) {
      if (isSerializedStyles(style)) {
        output.push(style)
      } else if (isOptionalSerializedStyles(style)) {
        if (isValidStyle(style)) {
          output.push(getStyle(style))
        }
      } else {
        output.push(...getValidStyles(style))
      }
    }
  }
  return output
}

export { stylesCompiler }
