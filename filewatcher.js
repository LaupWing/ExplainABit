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

const addNewCodeExporter = (name) =>{
    const data = fs.readFileSync(`${folderPath}/codesIndex.js`).toString().split('\n')
    data.splice(data.length-2, 0, `Codes['${name}'] = require('./${name}/code').default;\r`)
    return data.join('\n')
}
const removeItemFromCodeExporter = (name) =>{
    const data = fs.readFileSync(`${folderPath}/codesIndex.js`).toString().split('\n')
    const filterOut = data.filter(item=>!item.includes(name))
    return filterOut
}

const addToStoreData = (name)=>{
    const data = fs.readFileSync('./src/store/reducers/data.js').toString()
    const date = new Date()
    const newObj =`
    {
        name: '${name}',
        date: [${date.getFullYear()},${date.getMonth()},${date.getDate()}],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, dapibus non nisl eget, lobortis rhoncus nisl. Praesent nec dictum justo. Quisque non pharetra enim, auctor dapibus felis.'
    `
    const splitted = data.split('},')
    splitted.splice(splitted.length-2, 0, `\n${newObj.split('\n').filter(x=>x!=='').join('\n')}`)
    return splitted.join('},')
}

const removeItemFromData = (name) =>{
    const data = fs.readFileSync('./src/store/reducers/data.js').toString()
    return `export default [${data
        .replace('export default [')
        .split('},')
        .filter(x=>!x.includes(name))
        .join('},')}`
}
// console.log(addToStoreData('test'))
console.log(removeItemFromData('Axios'))

fs.watch(folderPath, (eventType, filename) => {
    const latestSnapshot = totalFiles
    const totalFilesNow = getAllFiles()
        .filter(file=>!file.endsWith('.js'))
        .length
    if(eventType === 'change')  return
    if(totalFilesNow > latestSnapshot){
        // fs.writeFile(`${folderPath}/${filename}/index.js`, indexjs, (err)=>{
        //     if(err) return console.log(err)
        //     console.log(`Succesfully wrote a index.js file in ${filename}`)
        // })
        // fs.writeFile(`${folderPath}/${filename}/App.js`, app, (err)=>{
        //     if(err) return console.log(err)
        //     console.log(`Succesfully wrote a App.js file in ${filename}`)
        // })
        // fs.writeFile(`${folderPath}/${filename}/README.md`, readme, (err)=>{
        //     if(err) return console.log(err)
        //     console.log(`Succesfully wrote a README.md file in ${filename}`)
        // })
        // fs.writeFile(`${folderPath}/${filename}/code.js`, codes, (err)=>{
        //     if(err) return console.log(err)
        //     console.log(`Succesfully wrote a code.js file in ${filename}`)
        // })

    }
    totalFiles = totalFilesNow
})