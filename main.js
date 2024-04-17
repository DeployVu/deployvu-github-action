const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    // If you need to get inputs
    // const someInput = core.getInput('some-input-name');

    // Execute commands
    await exec.exec('npm ci');
    await exec.exec('npm run build');
    await exec.exec('npx deployvu-cli preview');

    // If you need to set outputs
    // core.setOutput('some-output-name', 'Some value');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
