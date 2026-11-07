import partida from '../model/partida.js'

class RepositoryPartida {

    async Find() {
        const partida = await partida.findAll()

        return partida
    }
    async FindById(id) {
        const partidaDetalhes = await partida.FindByPk(id)

        return partidaDetalhes
    }
    async Create(marca, ano) {
        const partidaCreate = await partida.create({marca, ano})

        return partidaCreate
    }
    async Update() {
        const uapdated = await partida.Update()

        return uapdated
    }
    async Delete(id){
        const partidaDeletar = await partida.findByPk(id)

        if(!partidaDeletar) {
            throw new Error ("partida não encontrado")
        }
        await partidaDeletar
    }
}

export default new RepositoryPartida()