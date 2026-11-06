import RepositoryPartida from '../repository/jogo.js'

class Servicejogo {

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