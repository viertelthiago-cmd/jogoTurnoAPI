import express from "express"
import Controllerpartida from "../controller/partida.js"

const router = express.Router()

router.get('/buscar', Controllerpartida.Buscar)
router.get('/buscarum/:id,', Controllerpartida.Buscarum)
router.post('/criar', Controllerpartida.Criar)
router.put('/alterar/:id', Controllerpartida.Alterar)
router.delete('/deletar/:id', Controllerpartida.Deletar)

export default router
