import express from "express"
import { GetUsers } from "../controller/userControl.js"

const UserRoutes = express.Router()

UserRoutes.get('/todos', GetUsers)

export { UserRoutes }