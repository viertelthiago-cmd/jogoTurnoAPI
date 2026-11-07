import express from 'express'
import routerpartida from './router/partida.js'
import database from './config/database.js'


const app = express()
app.use(express.json())

app.use('/api/v1/jogo', routerpartida)

database.db
.sync({force: false})
.then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
})
.catch((e) => {
    console.log(e)
}) 