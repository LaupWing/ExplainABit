const fs = require('fs')
const folderPath = './src/ComponentLib' 
const dataPath = './src/store/reducers/data.js'
const {
    app,
    codes,
    indexjs,
    readme,
    baseStyling
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
    return filterOut.join('\n')
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
    splitted.splice(splitted.length-1, 0, `\n${newObj.split('\n').filter(x=>x!=='').join('\n')}`)
    return splitted.join('},')
}

const removeItemFromData = (name) =>{
    const data = fs.readFileSync(dataPath).toString()
    return `export default [${data
        .replace('export default [', '')
        .split('},')
        .filter(x=>!x.includes(name))
        .join('},')}`
}

const changeSomething = (path, oldName, newName)=>{
    const data = fs.readFileSync(path).toString()
    return replaceAll(data, oldName, newName)
}

fs.watch(folderPath, (eventType, filename) => {
    const latestSnapshot = totalFiles
    const totalFilesNow = getAllFiles()
    .filter(file=>!file.endsWith('.js'))
    .length
    console.log(eventType)
    if(
        eventType === 'rename' &&
        totalFilesNow === totalFiles
    ){
        console.log('-------------------------rename------------------------')
        const includes = filesSnapshot.includes(filename)
        if(includes)    return
        const currrentFiles =  getAllFiles().filter(file=>!file.endsWith('.js'))
        const difference = filesSnapshot.filter(x => !currrentFiles.includes(x));
        const oldName = difference[0]

        const changedCodeIndex = changeSomething(`${folderPath}/codesIndex.js`,oldName, filename)
        fs.writeFile(`${folderPath}/codesIndex.js`, changedCodeIndex, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully changed codeIndex from ${oldName} to ${filename}`)
        })

        const changedReducerData = changeSomething(dataPath, oldName, filename)
        fs.writeFile(dataPath, changedReducerData, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully change reducer data from ${oldName} to ${filename}`)
        })
    }
    else if(totalFilesNow > latestSnapshot){
        console.log('-------------------------added------------------------')
        fs.writeFile(`${folderPath}/${filename}/index.js`, indexjs, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully wrote a index.js file in ${filename}`)
        })
        fs.writeFile(`${folderPath}/${filename}/App.js`, app(filename), (err)=>{
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
        fs.writeFile(dataPath, addToStoreData(filename), (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully added ${filename} to data.js file in reducers`)
        })
        fs.writeFile(`${folderPath}/codesIndex.js`, addNewCodeExporter(filename), (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully added ${filename} to codeIndex.js file in ComponentLib`)
        })
        fs.writeFile(`${folderPath}/${filename}/${filename}.module.css`, baseStyling, (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully added ${filename}.module.css ${filename}`)
        })
    }else if(totalFilesNow < latestSnapshot){
        console.log('-------------------------deleted------------------------')
        fs.writeFile(`${folderPath}/codesIndex.js`, removeItemFromCodeExporter(filename), (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully deleted ${filename} from codeIndex`)
        })
        fs.writeFile(dataPath, removeItemFromData(filename), (err)=>{
            if(err) return console.log(err)
            console.log(`Succesfully deleted ${filename} from reducer data`)
        })
    }
    filesSnapshot = getAllFiles()
        .filter(file=>!file.endsWith('.js'))
    totalFiles = totalFilesNow
})

// Utility Functions
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}