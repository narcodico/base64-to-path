import * as core from '@actions/core'
const fs = require('fs')
const path = require('path')

// get input parameter values from config
var fileName = path.join(process.env.RUNNER_TEMP, core.getInput('fileName'))

var encodedString = core.getInput('encodedString')

async function run(): Promise<void> {
  try {
    console.log(process.env)
    const tempFile = Buffer.from(encodedString, 'base64')

    if (tempFile.length == 0) core.setFailed('Temporary file value is not set')

    fs.writeFile(fileName, tempFile, err => {
      if (err) throw err
      console.log('Wrote file!')
    })

    core.setOutput('filePath', fileName)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
