import express from "express"
import { GetUsers, GetUser, DeleteUser, ChangePass, ChangeName } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.get('/usuario', GetUser)
UserRoutes.delete('/delete', DeleteUser)
UserRoutes.put('/mudar_senha/:id', ChangePass)
UserRoutes.put('/mudar_nome/:id', ChangeName)

export { UserRoutes }