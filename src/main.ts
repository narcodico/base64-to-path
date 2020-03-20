import * as core from '@actions/core'
import * as fs from 'fs'

var encodedString = core.getInput('encodedString')

async function run(): Promise<void> {
  try {
    console.log(process.env)
    const filePath = core.getInput('filePath')
    if (!filePath) core.setFailed('Invalid file path.')

    const tempFile = Buffer.from(encodedString, 'base64')
    if (!tempFile) core.setFailed('Temporary file buffer is empty.')

    fs.writeFile(filePath, tempFile, (error: any) => {
      if (error) throw error
      console.log(`File successfully written to ${filePath}!`)
    })

    core.setOutput('filePath', filePath)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
