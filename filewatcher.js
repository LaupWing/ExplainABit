const fs = require('fs')
const folderPath = './src/ComponentLib' 
let totalFiles = null
const {
    app,
    codes,
    indexjs,
    readme
} = require('./boilerplate')

fs.readdir(folderPath, (err,files)=>{
    totalFiles = files.filter(file=>!file.endsWith('.js')).length
})

const getAllFiles = ()=>{
    return fs.readdirSync(folderPath, (err,files)=>{
        return files
    })
}

fs.watch(folderPath, (eventType, filename) => {
    const latestSnapshot = totalFiles
    const totalFilesNow = getAllFiles()
        .filter(file=>!file.endsWith('.js'))
        .length
    if(eventType === 'change')  return
    if(totalFilesNow > latestSnapshot){
        fs.writeFile(`${folderPath}/${filename}/index.js`, indexjs, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully wrote a index.js file in ${filename}`)
        })
        fs.writeFile(`${folderPath}/${filename}/App.js`, app, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully wrote a App.js file in ${filename}`)
        })
        fs.writeFile(`${folderPath}/${filename}/README.md`, readme, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully wrote a README.md file in ${filename}`)
        })
        fs.writeFile(`${folderPath}/${filename}/code.js`, codes, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully wrote a code.js file in ${filename}`)
        })
    }
    totalFiles = totalFilesNow
})