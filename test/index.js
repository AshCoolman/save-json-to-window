var package = require('../package.json'),
    saveJsonToWindow = require('../src/index.js'),
    obj = {version: package.version}

saveJsonToWindow('./test/test-output.js', 'version', obj);

// Will create a file called test-output.js containing:
window.version = {"version":"1.0.0"}