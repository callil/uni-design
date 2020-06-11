import * as React from 'react'
import { Row, Text } from '@callil/uni-react'

const Subheading = ({ headline, ...props }) => (
  <Row p="7">
    <Text bold fontSize="5">
      {headline}
    </Text>
  </Row>
)

export default Subheading
