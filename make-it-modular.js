const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, (err, filteredList)=>{
    if(err) return console.error(err);
    filteredList.forEach( file => {
        console.log(file);
    });
});


// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })