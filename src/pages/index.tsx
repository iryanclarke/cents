import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { InputBox } from '../components/InputBox'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>
          But it takes more than good ideas to build and grow a business. It takes people to bring them into reality. Are those people
          collaborating and sharing their expertise, or are they in conflict and keeping it to themselves? Do they have the resources
          necessary to execute on their ideas? Or are they constantly under pressure to pluck only the lowest-hanging fruit through bare
          minimum means, while putting their greatest ambitions on the back-burner?
        </p>
        <p>Now go build something great.</p>
        <InputBox />
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
