import express from "express"
import { GetUsers, GetUser } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)
UserRoutes.get('/usuario', GetUser)

export { UserRoutes }