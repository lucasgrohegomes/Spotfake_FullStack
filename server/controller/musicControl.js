import { Artista, Album, Musica } from '../db.js'

const getArtist = async(req, res) => {
    const {id} = req.body
    const artista = await Artista.findOne({where: {id: id}})

    if(!artista){
        return res.status(404).send("Artista nao encontrado")
    }

    const albums = await Album.findAll({where: {artista_id: id}})
    res.status(200).send({artista, albums})
}

const getArtists = async (req, res) => {
    const allArtists = await Artista.findAll()
    res.status(200).send(allArtists)
}

const getAlbums = async (req, res) => {
    const allAlbums = await Album.findAll()
    res.status(200).send(allAlbums)
}

const getAlbum = async(req, res) => {
    const {id} = req.body
    const album = await Album.findOne({where: {id: id}})
    if(!album){
        return res.status(404).send("Album não encontrado")
    }
    const musicas = await Musica.findAll({where: {album_id: id}})
    res.status(200).send({album: album, musicas: musicas})
}

const getMusica = async(req, res) => {
    const {id} = req.body
    const musica = await Musica.findOne({where: {id: id}})
    if(!musica){
        return res.status(404).send("Musica não encontrada")
    }
    res.status(200).send(musica)
}

export { getArtist, getArtists, getAlbums, getAlbum, getMusica }