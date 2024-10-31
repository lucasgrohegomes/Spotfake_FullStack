import express from "express"
import { GetUsers, GetUser, DeleteUser } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.get('/usuario', GetUser)
UserRoutes.delete('/delete', DeleteUser)

export { UserRoutes }