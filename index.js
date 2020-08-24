const core = require('@actions/core'),
      github = require('@actions/github');
let fs = require('fs');

try{
    //"who-to-greet" input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet')
    console.log(`hello ${nameToGreet}`)

    const time = (new Date()).toTimeString()
    core.setOutput('time', time)

    // get the JSON webhook payload for the event that triggered the workflow

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`the event payload: ${payload}`)

    const htmlLine = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
        `;

fs.writeFile('index.html', htmlLine, err => {
    if(err) throw err;
    console.log('index.html file is created successfully!')
})
}catch(error){
    core.setFailed(error.message)
}