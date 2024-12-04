import Sequelize, { DataTypes } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DBNAME,     // Nome do banco de dados
    process.env.DBUSER,     // Usuário do banco de dados
    process.env.DBPASSWORD, // Senha do banco de dados
    {
        host: process.env.DBHOST, // Host do banco de dados
        port: process.env.DBPORT, // Porta do banco de dados
        dialect: 'postgres'        // Dialeto do banco de dados
    }
)

const User = sequelize.define('user', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    sobreNome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo'
    },
    cpf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    foto: {
        type: Sequelize.DataTypes.STRING
    }
})

const Artista = sequelize.define('artists', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    }
})

const Album = sequelize.define('albums', {
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    coverImageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
});

Album.belongsTo(Artista, {
    foreignKey: 'artista_id',
    onDelete: 'CASCADE',
});

Artista.hasMany(Album, {
    foreignKey: 'artista_id',
    as: 'Albums'
});

const Musica = sequelize.define('musicas', {
    titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    duracao: {
        type: Sequelize.DataTypes.INTEGER,  // Duração em segundos
        allowNull: false,
    },
    fileUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

Musica.belongsTo(Album, {
    foreignKey: 'album_id',
    onDelete: 'CASCADE',
});

Musica.belongsTo(Artista, {
    foreignKey: 'artista_id',
    onDelete: 'CASCADE',
});

Album.hasMany(Musica, {
    foreignKey: 'album_id',
    as: 'Musicas'
});

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ alter: true }).then(() => {
        console.log('tabela criada')
    })
}

export { User, sequelize, criarTabelas, Artista, Album, Musica };