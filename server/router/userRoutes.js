import express from "express"
import { GetUsers, GetUser, DeleteUser, ChangePass, SaveProfilePic } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.post('/usuario', GetUser)
UserRoutes.delete('/delete', DeleteUser)
UserRoutes.put('/mudar_senha', ChangePass)
UserRoutes.put('/mudar_foto', SaveProfilePic)

export { UserRoutes }