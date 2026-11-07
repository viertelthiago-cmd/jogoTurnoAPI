import RepositoryPartida from '../repository/partida.js'

class ServicePartida {

async Buscar() {
    return RepositoryPartida.Buscar()
}

async Buscarum(id) {
    if (!id) {
        throw new Error("porfavor informar ID")
    }

    return RepositoryPartida.Buscarum(id)
}

async Criar(descricao, data, vencedor) {
    if (!descricao || !data || !vencedor) {
        throw new Error("porfavor informar todos os parametros!!")
    }

    await RepositoryPartida.Criar(descricao, data, vencedor)
}
    async Alterar(id, descricao, data, vencedor) {
        if(!id || !descricao || !data || !vencedor) {
            throw new Error("porfavor informar todos os parametros")
        }

        await RepositoryPartida.Alterar(id , descricao, data, vencedor)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar ID")
        }
        await RepositoryPartida.Delete(id)
    }

}

export default new ServicePartida()
