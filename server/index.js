import Express from "express";
import cors from "cors";
import { AuthRoutes } from "./router/authRoutes.js"
import { UserRoutes } from "./router/userRoutes.js"
import { MusicRoutes } from "./router/musicRoutes.js";
import { criarTabelas } from "./db.js";

const app = Express()

// criarTabelas()
app.use(Express.json())

app.use(cors())
app.use('/autenticacao', AuthRoutes)
app.use('/usuarios', UserRoutes)
app.use('/musicas', MusicRoutes)

// -------- Porta
app.listen(8000)