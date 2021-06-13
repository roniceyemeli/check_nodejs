const fs = require("fs")

fs.readFile(process.argv[2],'utf8',(err,string)=>{
    return (
        err ? console.error(err) : console.log(string.split('\n').length -1)

    )    
});