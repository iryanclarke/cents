import { css } from '@emotion/core'
import { colors } from 'styles/index'

export const button = {
  base: css`
    appearance: none;
    box-shadow: none;

    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    line-height: 1.5;
    vertical-align: top;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 1rem;
    text-align: center;

    // States
    &:focus,
    &.is-focused,
    &:active,
    &.is-active {
      outline: none;
    }
    &[disabled],
    fieldset[disabled] & {
      cursor: not-allowed;
    }

    transition: all 0.2s ease-out;
    cursor: pointer;
    color: ${colors.white};
    background-color: ${colors.green};
    border-color: ${colors.green};
    font-weight: 600;
    height: 2.75rem;

    padding-top: calc(0.375rem - 1px);
    padding-bottom: calc(0.375rem - 1px);
    padding-left: 1rem;
    padding-right: 1rem;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.orange};
    }

    &[disabled] {
      font-weight: 500;
      opacity: 0.9;
      user-select: none;
    }
  `,
  small: css`
    height: 2.25rem;
  `
}
