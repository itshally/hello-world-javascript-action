const core = require('@actions/core'),
      github = require('@actions/github');

try{
    //"who-to-greet" input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet')
    console.log(`hello ${nameToGreet}`)

    const time = (new Date()).toTimeString()
    core.setOutput('time', time)

    // get the JSON webhook payload for the event that triggered the workflow

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`the event payload: ${payload}`)
}catch(error){
    core.setFailed(error.message)
}