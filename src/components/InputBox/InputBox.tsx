import React, { FC } from 'react'

import * as styles from './InputBox.styles'

interface ContainerProps {
  className?: string
}

const InputBox: FC<ContainerProps> = () => {
  return <input type="text" css={styles.thing} />
}

export { InputBox }
