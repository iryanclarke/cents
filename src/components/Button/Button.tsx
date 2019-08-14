import React, { FC } from 'react'

import { stylesCompiler } from 'styles/index'

import * as styles from './Button.styles'

interface Props {
  isText?: boolean
  isOutlined?: boolean
  isInverted?: boolean
  isStatic?: boolean
  isLoading?: boolean
  isSize?: 'small' | 'normal'
}

const Button: FC<Props> = ({ isText, isOutlined, isLoading, isSize, children, ...rest }) => {
  const buttonBuilder = () => {
    return stylesCompiler(styles.button.base)
  }

  return (
    <button css={buttonBuilder()} {...rest}>
      {children}
    </button>
  )
}

export { Button }
