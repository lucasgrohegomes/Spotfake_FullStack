import Express from "express";

const app = Express()
app.use(Express.json())

// --------- SignIn 
app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('todos os campos devem ser preenchidos');
        return
    }
    res.send('Usuário Criado!')
})

// --------- LogIn
app.post('/login', (req, res) => {
    const {email, senha} = req.body
    if (!email || !senha) {
        res.send('todos os campos devem ser preenchidos');
        return
    }
    res.send('Usuário Logado!')
})

// -------- Porta
app.listen(8000)