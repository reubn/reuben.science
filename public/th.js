const path = require('path')
const fs = require('fs')

const dirpath = path.join(__dirname, '/me-360e')

fs.readdir(dirpath, function(err, files) {
  const filesA = files.map(file => [+file.replace(/(frame-)|(\.png)/g, ''), file]).filter(([n]) => (n % 3) === 0)

  filesA.forEach(([n, file]) => {
    const filePath = path.join(__dirname, '/me-360e/', file)
    
    fs.rename(filePath, filePath.replace('frame-', 'a-frame-'), function (err) {
        if (err) {console.log(err)}
    });
  })
})
