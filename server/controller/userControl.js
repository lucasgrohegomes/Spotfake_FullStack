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
    const OneUser = await User.findOne({ where: { email: email } })
    res.send(OneUser)
}

const DeleteUser = async (req, res) => {
    const { email } = req.body

    if (!email) {
        res.send('Insira o email do usuário na qual você gostaria de deletar.');
        return
    }
    
    const ByeUser = await User.destroy({ where: { email: email } })
    if (ByeUser) {
        res.send("Usuário deletado");
    } else {
        res.send("Usuário não encontrado.");
    }
}

const UpdateName = async (req, res) => {
    const { usuarioId, novoNome, novoSobrenome } = req.body;

    if (!usuarioId || !novoNome || !novoSobrenome) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    try {
        const user = await User.findByPk(usuarioId);
        
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }

        user.nome = novoNome;
        user.sobreNome = novoSobrenome;
        await user.save();

        res.status(200).send('Nome e sobrenome atualizados com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar nome:', error);
        res.status(500).send('Erro ao atualizar nome e sobrenome');
    }
}

const UpdatePass = async (req, res) => {
    const { usuarioId, novaSenha, senhaAtual } = req.body;

    if (!usuarioId || !novaSenha || !senhaAtual) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    try {
        const user = await User.findByPk(usuarioId);
        
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }

        const senhaValida = bcryptjs.compareSync(senhaAtual, user.senha);
        if (!senhaValida) {
            return res.status(400).send('Senha atual inválida');
        }

        user.senha = bcryptjs.hashSync(novaSenha, 10);
        await user.save();

        res.status(200).send('Senha atualizada com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar senha:', error);
        res.status(500).send('Erro ao atualizar senha');
    }
}

export { GetUsers, GetUser, DeleteUser, UpdateName, UpdatePass }