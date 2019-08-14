import React, { FC } from 'react'

import * as styles from './InputBox.styles'

interface Props {
  onNumber: (number: number) => void
}

const InputBox: FC<Props> = ({ onNumber }) => {
  const onUpdate = e => {
    onNumber(e.value)
  }
  return <input type="text" css={styles.input} onChange={onUpdate} />
}

export { InputBox }
