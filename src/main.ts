import * as core from '@actions/core'
import * as fs from 'fs'
import * as path from 'path'

// get input parameter values from config
var fileName = path.join(
  process.env.RUNNER_TEMP || '',
  core.getInput('fileName')
)

var encodedString = core.getInput('encodedString')

async function run(): Promise<void> {
  try {
    console.log('ENV', process.env)
    const tempFile = Buffer.from(encodedString, 'base64')

    if (tempFile.length == 0) core.setFailed('Temporary file value is not set')

    fs.writeFile(fileName, tempFile, (err: any) => {
      if (err) throw err
      console.log('Wrote file!')
    })

    core.setOutput('filePath', fileName)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
