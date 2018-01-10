var fs = require('fs')

var source = fs.readFileSync('../file/map.png')

fs.writeFileSync('stream_copy_logo.png', source)