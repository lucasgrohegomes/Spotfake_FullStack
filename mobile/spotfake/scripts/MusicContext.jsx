import React, { createContext, useState } from "react";

export const MusicContext = createContext()

export const MusicProvider = ({children}) => {
    const [album, setAlbum] = useState(null)
    const [musica, setMusica] = useState(null)
    const [artista, setArtista] = useState(null)

    return(
        <MusicContext.Provider value={{ album, setAlbum, musica, setMusica, artista, setArtista }}>
            {children}
        </MusicContext.Provider>
    )
}