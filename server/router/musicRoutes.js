import express from "express"
import { getAlbum, getAlbums, getArtists, getMusica, getArtist } from "../controller/musicControl.js"

const MusicRoutes = express.Router()

MusicRoutes.get("/albuns", getAlbums)
MusicRoutes.get("/artistas", getArtists)
MusicRoutes.post("/musica", getMusica)
MusicRoutes.post("/album", getAlbum)
MusicRoutes.post("/artista", getArtist)

export { MusicRoutes }