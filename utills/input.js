const  csvtojson = require("csvtojson")
const fs =  require("fs")

// Convert csv to json
const Links = (myLinks) => 
{ 
csvtojson()
.fromFile(myLinks)
.then((json) => {
    fs.writeFileSync("outputs.json", JSON.stringify(json), "utf-8", (err) => {
        if(err) console.log(err)
})
})
return myLinks
}

//Convert json to csv using the hash SHA256 method

module.exports = 
{
    Links
}
