import 'source-map-support/register'

import path from 'path'

import createExamples from '@meltwater/examplr'

import error from './error'

export const examples = {
  error
}

const envVars = [
  'LOG_LEVEL'
]

const defaultOptions = {}

const { createExample, runExample } = createExamples({
  examples,
  envVars,
  defaultOptions
})

if (require.main === module) {
  runExample({
    local: path.resolve(__dirname, 'local.json')
  })
}

export default createExample
