const { readFile, writeFile} = require('fs/promises')
class Repository{
    constructor({file}){
        this.file = file
    }

    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }
    async find(itemId){
        const all = await this._currentFileContent()
        if(!itemId) return all

        return all.find(({ id }) => itemId === id)
    }
    async create(data){
        const currentFile = await this._currentFileContent()
        currentFile.push(data)

        await writeFile(this.file, JSON.stringify(currentFile))

        return data.id
    }
}
module.exports = Repository

const repository = new Repository({
    file: './../../database/data.json'
})
//repository.create({ id:2, name: 'Lucas'})
//.then(console.log).catch(error => console.log('error', error))
//repository.find(1).then(console.log).catch(error => console.log('error'))