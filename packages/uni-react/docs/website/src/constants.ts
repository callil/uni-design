const links = {
  reactNPM: 'https://www.npmjs.com/package/@callil/uni-react',
  reactGithub: 'https://github.com/callil/uni-react',
  tokensNPM: 'https://www.npmjs.com/package/@callil/uni-tokens',
  tokensGithub: 'https://github.com/callil/uni-tokens',
}

const baseurl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1234'
    : 'https://design.uniswap.org'

const assetUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1234'
    : 'https://design.uniswap.org'

export { links, baseurl, assetUrl }
