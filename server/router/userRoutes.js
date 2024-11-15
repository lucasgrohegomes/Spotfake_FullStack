import express from "express"
import { GetUsers, GetUser, DeleteUser, UpdateName, UpdatePass } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.get('/usuario', GetUser)
UserRoutes.delete('/delete', DeleteUser)
UserRoutes.put('/update_name', UpdateName)
UserRoutes.put('/update_pass', UpdatePass)

export { UserRoutes }