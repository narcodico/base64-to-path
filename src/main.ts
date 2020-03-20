/* eslint no-console: 0*/

import * as core from '@actions/core'
import * as fs from 'fs'

async function run(): Promise<void> {
  try {
    const encodedString = core.getInput('encodedString')
    if (!encodedString) core.setFailed('Invalid encoded string.')

    console.log(process.env)
    const filePath = core.getInput('filePath')
    if (!filePath) core.setFailed('Invalid file path.')

    const tempFile = Buffer.from(encodedString, 'base64')
    if (!tempFile) core.setFailed('Temporary file buffer is empty.')

    fs.writeFile(filePath, tempFile, error => {
      if (error) throw error
      console.log(`File successfully written to ${filePath}!`)
    })

    core.setOutput('filePath', filePath)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
