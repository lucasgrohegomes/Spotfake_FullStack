import Express from "express";
import cors from "cors";
import { AuthRoutes } from "./router/authRoutes.js"
import { UserRoutes } from "./router/userRoutes.js"
import { criarTabelas } from "./db.js";

// criarTabelas()
const app = Express()

app.use(Express.json())

app.use(cors())
app.use('/autenticacao', AuthRoutes)
app.use('/usuarios', UserRoutes)

// -------- Porta
app.listen(8000)