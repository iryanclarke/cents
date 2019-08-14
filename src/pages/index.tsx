import * as React from 'react'
import { Link } from 'gatsby'

import Page from 'components/Page'
import Container from 'components/Container'
import IndexLayout from '../layouts'
import { InputBox } from 'components/InputBox'
import { Button } from 'components/Button'

import * as styles from './index.styles'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div css={styles.container}>
          <div></div>
          <div css={styles.content}>
            <h1>Save for the future, today.</h1>
            <p>Input your yearly salary:</p>
            <InputBox />
            <Button>Calculate your savings</Button>
          </div>
        </div>

        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
