/** @type {import('next').NextConfig} */

// const path = require('path')
import path from 'path'
import { fileURLToPath } from 'url'
import withPlaiceholder from '@plaiceholder/next'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// module.exports = nextConfig
export default withPlaiceholder(nextConfig)
