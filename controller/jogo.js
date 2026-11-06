import ServiceJogo from '../service/jogo.js'

class Controllerjogo {
    
    Buscar(req, res) {
        try {
            const jogo = await ServiceJogo.Buscar()

            res.status(200).send({ jogo })
        } catch (error) {
            resizeTo.status(500).send({ message: error.message })
        }
    }
    async Buscarum(req, res) {
        try {
            const id = req.params.id
            const jogo = await ServiceJogo.Buscarum(id)

            res.status(200).send({ jogo })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Criar (req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await Servicejogo.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "jogo criado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Alterar(req, res){
        try {
            const id = req.params.id
            const {descricao, data, vencedor } = req.body

            await Servicejogo.Alterar(id, descricao, data, vencedor)

            res.status(200).send({ message: "jogo alterado com sucesso"})
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
    async Deletar(req, res) {
        try {
            const id = req.params.id

            await Servicejogo.Deletar(id)

            res.status(200).send({ message: "jogo deletado "})
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}
export default new CrollerUser