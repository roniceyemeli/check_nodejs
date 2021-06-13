const fs = require("fs");
const path = require("path");
module.exports = (dir, ext, callback) => {
  ext = `.${ext}`;
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);

    const filtered = list.filter(file =>  path.extname(file) === ext);

    return callback(null, filtered);
    });
}

const fs = require('fs')
const path = require('path')

// module.exports = function (dir, filterStr, callback) {        
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
