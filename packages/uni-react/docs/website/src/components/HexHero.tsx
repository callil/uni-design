import * as React from 'react'
import styled from 'styled-components'
import { Row, Col } from '@callil/uni-react'
import { useWindowSize } from '../hooks'
import { isOdd, sequence } from '../utils'

const hexAdj = 0.867

const styles = [
  ['green', 'green6'],
  ['yellow', 'yellow7'],
  ['red', 'red7'],
  ['blue', 'blue6'],
  ['gray3', 'gray5'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
  ['white', 'gray2'],
]

type DiscProps = {
  diameter: number
  styleIndex: number
}

const Disc = styled.div<DiscProps>`
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  min-width: ${(p) => p.diameter}px;
  min-height: ${(p) => p.diameter}px;
  max-width: ${(p) => p.diameter}px;
  max-height: ${(p) => p.diameter}px;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  background-color: ${(p) => {
    const c = styles[p.styleIndex][0]
    return p.theme.colors[c]
  }};

  border-color: ${(p) => {
    const c = styles[p.styleIndex][1]
    return p.theme.colors[c]
  }};
`

const HexRow = ({ isOdd, length, diameter, rowIndex, styleMatrixRow }) => {
  const x = isOdd ? diameter / 2 : 0
  const y = rowIndex * diameter * hexAdj
  length = isOdd ? length - 1 : length

  return (
    <Row height="0" style={{ transform: `translate(${x}px, ${y}px)` }}>
      {sequence(length).map((_, j) => (
        <Disc diameter={diameter} styleIndex={styleMatrixRow[j]} />
      ))}
    </Row>
  )
}

const HexHero = ({ matrix }) => {
  const width = useWindowSize().width || 0
  const cols = width >= 2000 ? 32 : width >= 1024 ? 22 : width >= 768 ? 12 : 8
  const rows = width >= 2000 ? 11 : width >= 1024 ? 10 : width >= 768 ? 10 : 10
  const diameter = Math.floor((width - 32 - 32) / cols)

  return (
    <Row expand py="8" px="7" alignItems="center">
      <Col height={diameter * rows * hexAdj + 'px'}>
        {matrix === null
          ? null
          : sequence(rows).map((_, i) => (
              <HexRow
                isOdd={isOdd(i)}
                rowIndex={i}
                styleMatrixRow={matrix[i]}
                length={cols}
                diameter={diameter}
              />
            ))}
      </Col>
    </Row>
  )
}

export default HexHero
