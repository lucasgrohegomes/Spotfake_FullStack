import express from "express"
import { GetUsers, GetUser, DeleteUser, ChangePass } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.get('/usuario', GetUser)
UserRoutes.delete('/delete', DeleteUser)
UserRoutes.put('/mudar_senha/:id', ChangePass)

export { UserRoutes }