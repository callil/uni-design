import * as React from 'react'
import { Center, Text, Rule, Col } from '@callil/uni-react'

const NoMatch = () => (
  <Col expand>
    <Rule />
    <Center height="66vh">
      <Text mono fontSize="10">
        404
      </Text>
    </Center>
  </Col>
)

export default NoMatch
