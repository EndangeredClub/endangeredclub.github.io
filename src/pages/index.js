import React from 'react'

import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Headline>Endangered Club</Headline>
    </Container>
  </>
)

export default HomePage
