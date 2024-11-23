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
        res.send('Esse usuário já existe.')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)
    const Registrar = await User.create({ nome, sobreNome, email, senha: senhaCriptografada, dataNascimento })

    res.send('Usuario registrado com sucesso!')
}

const SignIn = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ error: 'Todos os campos devem ser preenchidos.' });
    }

    const userExiste = await User.findOne({ where: { email: email } })
    if (!userExiste) {
        return res.status(404).json({ error: 'Esse usuário não existe.' });
    }

    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida) {
        return res.status(401).json({ error: 'Senha inválida.' });
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

    res.json({
        tokenJWT: token
    })
    
}

export { SignUp, SignIn }