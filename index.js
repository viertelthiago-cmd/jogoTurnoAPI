import express from 'express'
import jogo from './router/jogo.js'
import usuario from './router/usuario.js'
import database from './config/database.js'
import cors from 'cors'

const app = express()
app.use(express.json())