import * as React from 'react'
import {
  Box,
  Row,
  Rule,
  Text,
  Col,
  Center,
  ItemRow,
  Space,
  Code,
  Icon,
  Anchor,
  BackgroundImage,
  Svg,
  Img,
} from '@callil/uni-react'

const code = `


`

export default class Home extends React.Component {
  state = {
    code: code,
  }

  render() {
    return (
      <Col>
        <Row>
          <Col>
            {
              // Render Example
            }
          </Col>
          <Col>
            {
              // Code
            }
          </Col>
        </Row>
        <Row>
          {
            // Props table
          }
        </Row>
      </Col>
    )
  }
}
