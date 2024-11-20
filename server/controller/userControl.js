import bcryptjs from "bcryptjs";
import { User } from '../db.js'

const GetUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
}

const GetUser = async (req, res) => {
    const { email } = req.body

    if (!email) {
        res.send('Insira o email do usuário na qual você gostaria de verificar.');
        return
    }
    const user = await User.findOne({ where: { email: email } })
    res.send(user)
}

const DeleteUser = async (req, res) => {
    const { email } = req.body

    if (!email) {
        res.send('Insira o email do usuário na qual você gostaria de deletar.');
        return
    }

    const user = await User.destroy({ where: { email: email } })
    if (user) {
        res.send("Usuário deletado");
    } else {
        res.send("Usuário não encontrado.");
    }
}

const ChangePass = async (req, res) => {
    const { id } = req.params;
    const { senhaAtual, novaSenha } = req.body;

    if (!senhaAtual || !novaSenha) {
        res.send('todos os campos devem ser preenchidos');
        return
    }

    try {

        const user = await User.findByPk(id);
        if (!user) {
            res.send("Usuário não encontrado.")
            return
        }

        const senhaValida = bcryptjs.compareSync(senhaAtual, user.senha)
        if (!senhaValida) {
            res.send('senha invalida')
            return
        }

        const senhaCriptografada = bcryptjs.hashSync(novaSenha, 10);
        user.senha = senhaCriptografada;
        await user.save();
        res.send('Senha atualizada com sucesso.')
    } catch (error) {
        console.error(error)
    }
}


export { GetUsers, GetUser, DeleteUser, ChangePass }