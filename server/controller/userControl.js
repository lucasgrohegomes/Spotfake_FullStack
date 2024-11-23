import bcryptjs from "bcryptjs";
import { User } from '../db.js'

const GetUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
}

const GetUser = async (req, res) => {
    const data = req.body

    if (!data.email) {
        res.send('Insira o email do usuário na qual você gostaria de verificar.');
        return
    }
    const user = await User.findOne({ where: { email: data.email }, attributes: ['nome', 'sobreNome', 'email', 'status', 'dataNascimento', 'foto'] })
    res.send(user)
}

const DeleteUser = async (req, res) => {
    const data = req.body

    if (!data.email) {
        res.send('Insira o email do usuário na qual você gostaria de deletar.');
        return
    }

    const user = await User.destroy({ where: { email: data.email } })
    if (user) {
        res.send("Usuário deletado");
    } else {
        res.send("Usuário não encontrado.");
    }
}

const ChangePass = async (req, res) => {
    const data = req.body;
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
        res.send("Usuário não encontrado.")
        return
    }

    const senhaCriptografada = bcryptjs.hashSync(data.senha, 10);

    user.senha = senhaCriptografada;
    await user.save();
    res.send('Senha atualizada com sucesso.')
}

const SaveProfilePic = async (req, res) => {
    try {
        const data = req.body
        const user = await User.findOne({ where: { email: data.email } })
        if (!user) {
            return res.send("Usuário não encontrado.")
        }

        console.log(data.foto)
        const update = await User.update({ foto: data.foto }, { where: { email: data.email } })
        res.send('Foto de perfil atualizada com sucesso.')
    } catch (error) {
        console.log(error)
    }
    
}

export { GetUsers, GetUser, DeleteUser, ChangePass, SaveProfilePic }