import Express from "express";
import { User } from "./db.js";
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())

// --------- SignIn
app.post('/registro', async (req, res) => {
    const {nome, sobreNome, email, senha, dataNascimento} = req.body
    if (!nome || !sobreNome || !email || !senha || !dataNascimento) {
        res.send('todos os campos devem ser preenchidos');
        return
    }

    const userExiste = await User.findOne({where: {email:email}})
    console.log(userExiste)
    if (userExiste){
        res.send('usuario já existe.')
        return
    }

    const senhaCriptografada = bcryptjs.hashSync(senha,10)
    const Registrar = await User.create({nome, sobreNome, email, senha:senhaCriptografada, dataNascimento})
    res.send('usuario criado')
})

// --------- LogIn
app.post('/login', async (req, res) => {
    const {email, senha} = req.body

    if (!email || !senha) {
        res.send('todos os campos devem ser preenchidos');
        return
    }

    const userExiste = await User.findOne({where: {email:email}})
    console.log(!userExiste)
    if (!userExiste){
        res.send('este usuario não existe.')
        return
    }

    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida){
        res.send('senha invalida')
        return
    }
    
    res.send('Usuário Logado!')
    
})

// -------- Porta
app.listen(8000)