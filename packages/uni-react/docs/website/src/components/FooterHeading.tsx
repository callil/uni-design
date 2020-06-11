import * as React from 'react'

import { Row, Col, Icon, Text, Img, Button } from '@callil/uni-react'
import favicon from '../assets/Favicon.png'

const FooterHeading = (props) => (
  <Col expand>
    <Row expand justifyContent="space-between" p="7">
      <Row alignItems="center">
        <Img width="7" src={favicon} />
        <Text fontSize="4" bold pl="4">
          Indigo
        </Text>
      </Row>
    </Row>
  </Col>
)

export default FooterHeading
