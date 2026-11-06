import jogo from '../model/jogo.js'

class Repositoryjogo {

    async Find() {
        const carros = await carro.findAll()

        return carros
    }
    async FindById(id) {
        const carroDetalhes = await carro.FindByPk(id)

        return carroDetalhes
    }
    async Create(marca, ano) {
        const carroCreate = await carro.create({marca, ano})

        return carroCreate
    }
    async Update() {
        const uapdated = await carro.Update()

        return uapdated
    }
    async Delete(id){
        const carroDeletar = await carro.findByPk(id)

        if(!carroDeletar) {
            throw new Error ("Carro não encontrado")
        }
        await carroDeletar
    }
}

export default new Repositoryjogo()