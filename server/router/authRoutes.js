import express from "express"
import { SignUp, SignIn } from "../controller/authControl.js";

const AuthRoutes = express.Router()

AuthRoutes.post('/registro', SignUp)
AuthRoutes.post('/login', SignIn)

export { AuthRoutes }