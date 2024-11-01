import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { User } from '../db.js'

const SignUp = async (req, res) => {
    const { nome, sobreNome, email, senha, dataNascimento } = req.body
    if (!nome || !sobreNome || !email || !senha || !dataNascimento) {
        res.send('todos os campos devem ser preenchidos');
        return
    }

    const userExiste = await User.findOne({ where: { email: email } })
    console.log(userExiste)
    if (userExiste) {
        res.send('usuario já existe.')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)
    const Registrar = await User.create({ nome, sobreNome, email, senha: senhaCriptografada, dataNascimento })

    res.send('Usuario registrado com sucesso!')
}

const SignIn = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        res.send('todos os campos devem ser preenchidos');
        return
    }

    const userExiste = await User.findOne({ where: { email: email } })
    console.log(!userExiste)
    if (!userExiste) {
        res.send('este usuario não existe.')
        return
    }

    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida) {
        res.send('senha invalida')
        return
    }

    const token = jsonwebtoken.sign(
        {
            "nome_completo": `${userExiste.nome} ${userExiste.sobreNome}`,
            "email": userExiste.email,
            "status": userExiste.status
        },
        "chavecriptografiajwt",
        { expiresIn: 1000 * 60 * 5 }
    )

    if(userExiste.email === "admin" && userExiste.email === "admin"){
        res.send('Admin logado com sucesso!')
    }
    else{
        res.send('Usuario logado com sucesso!')
    }
    
}

export { SignUp, SignIn }