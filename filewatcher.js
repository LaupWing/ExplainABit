const fs = require('fs')
const folderPath = './src/ComponentLib' 
const dataPath = './src/store/reducers/data.js'
const {
    app,
    codes,
    indexjs,
    readme
} = require('./boilerplate')

let totalFiles = null
let filesSnapshot= []

fs.readdir(folderPath, (err,files)=>{
    totalFiles = files.filter(file=>!file.endsWith('.js')).length
    filesSnapshot = files.filter(file=>!file.endsWith('.js'))
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
    console.log(splitted)
    splitted.splice(splitted.length-1, 0, `\n${newObj.split('\n').filter(x=>x!=='').join('\n')}`)
    return splitted.join('},')
}

const removeItemFromData = (name) =>{
    const data = fs.readFileSync(dataPath).toString()
    return `export default [${data
        .replace('export default [')
        .split('},')
        .filter(x=>!x.includes(name))
        .join('},')}`
}

const changeNameInData = (oldName, newName)=>{
    const data = fs.readFileSync(dataPath).toString()
    return replaceAll(data, oldName, newName)
}

console.log(changeNameInData('Axios', 'Test'))
fs.watch(folderPath, (eventType, filename) => {
    const latestSnapshot = totalFiles
    const totalFilesNow = getAllFiles()
    .filter(file=>!file.endsWith('.js'))
    .length
    console.log(eventType)
    if(eventType === 'rename'){
        const includes = filesSnapshot.includes(filename)
        if(includes)    return
        const currrentFiles =  getAllFiles().filter(file=>!file.endsWith('.js'))
        const difference = filesSnapshot.filter(x => !currrentFiles.includes(x));
        const oldName = difference[0]
        console.log('rename type', filename)
    }
    else if(totalFilesNow > latestSnapshot){
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
        // fs.writeFile(dataPath, addToStoreData(filename), (err)=>{
        //     if(err) return console.log(err)
        //     console.log(`Succesfully rewritten data.js file in reducers with the name${filename}`)
        // })
        // console.log(addToStoreData(filename))
        // console.log(addNewCodeExporter(filename))
    }else{
        console.log('deleted--------------------------')
        console.log(removeItemFromData(filename))
        // console.log(removeItemFromCodeExporter(filename))
    }
    console.log('----------------------end-------------------')
    filesSnapshot = getAllFiles()
        .filter(file=>!file.endsWith('.js'))
    totalFiles = totalFilesNow
})


// Utility Functions
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}