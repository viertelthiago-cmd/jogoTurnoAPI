import partida from '../model/partida.js'
import ServicePartida from '../service/partida.js'

class Controllerpartida {
    
    async Buscar(req, res) {
        try {
            const partida = await ServicePartida.Buscar()

            res.status(200).send({ partida })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Buscarum(req, res) {
        try {
            const id = req.params.id
            const partida = await ServicePartida.Buscarum(id)

            res.status(200).send({ partida })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Criar (req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServicePartida.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "jogo criado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Alterar(req, res){
        try {
            const id = req.params.id
            const {descricao, data, vencedor } = req.body

            await ServicePartida.Alterar(id, descricao, data, vencedor)

            res.status(200).send({ message: "partida alterado com sucesso"})
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServicePartida.Deletar(id)

            res.status(200).send({ message: "partida deletado "})
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}
export default new Controllerpartida