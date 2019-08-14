import React, { FC } from 'react'

import * as styles from './InputBox.styles'

interface Props {
  className?: string
}

const InputBox: FC<Props> = () => {
  return <input type="text" css={styles.input} />
}

export { InputBox }
