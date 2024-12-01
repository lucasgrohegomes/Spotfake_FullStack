INSERT INTO artists (nome, bio, "imageUrl", "createdAt", "updatedAt") VALUES
('Anitta', 'Cantora, compositora e empresária brasileira, conhecida por sua música pop e sucesso internacional.', 'https://suitacdn.cloud-bricks.net/fotos/775977/file/desktop/Anitta.jpg?1685928195', NOW(), NOW()),
('Luan Santana', 'Cantor e compositor de música sertaneja, famoso por suas baladas românticas e grande popularidade no Brasil.', 'https://f.i.uol.com.br/fotografia/2022/01/14/164218087461e1b10ab0d32_1642180874_3x4_md.jpg', NOW(), NOW()),
('Ivete Sangalo', 'Cantora baiana de música pop, axé e samba, reconhecida por sua energia no palco e seu carisma.', 'https://forbes.com.br/wp-content/uploads/2021/02/ForbesMulher-IveteSangalo-250221-GettyImages-.jpg', NOW(), NOW());


INSERT INTO albums (title, "releaseYear", "coverImageUrl", "createdAt", "updatedAt", artista_id) VALUES
('Bang!', 2015, 'https://upload.wikimedia.org/wikipedia/pt/4/43/Capa_de_Bang.jpg', NOW(), NOW(), 1),
('Versions of Me', 2022, 'https://cdn-images.dzcdn.net/images/cover/5e9b628a9d65aaa3e919d19e83e42c35/0x1900-000000-80-0-0.jpg', NOW(), NOW(), 1),

('O Nosso Tempo É Hoje', 2013, 'https://i.ytimg.com/vi/bMMjZRHF424/maxresdefault.jpg', NOW(), NOW(), 2),
('Ao Vivo no Rio', 2011, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgf4C1OqROSRtoqzqqQqwa3LiVpRpo1aViDA&s', NOW(), NOW(), 2),

('Ivete no Maracanã', 2015, 'https://i.ytimg.com/vi/RSf_JiaR-1k/maxresdefault.jpg', NOW(), NOW(), 3),
('Acústico em Trancoso', 2007, 'https://i.ytimg.com/vi/KmXF7ElgWc4/maxresdefault.jpg', NOW(), NOW(), 3);

INSERT INTO musicas (titulo, duracao, "fileUrl", "createdAt", "updatedAt", artista_id, album_id) VALUES
('Bang', 123, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 1),
('Deixa ele Sofrer', 123, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 1),
('Cravo e Canela', 312, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 1),
('Parei', 321, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 1),
('Essa Mina é Louca', 123, 'https://example.com/nasuacara.mp3', NOW(), NOW(), 1, 1),

('Envolver', 321, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 2),
('Gata', 123, 'https://example.com/girlfromrio.mp3', NOW(), NOW(), 1, 2),
('Id Rather Have Sex', 321, 'https://example.com/loco.mp3', NOW(), NOW(), 1, 2),
('Gimme Your Number', 123, 'https://example.com/topreocupada.mp3', NOW(), NOW(), 1, 2),
('Maria Elegante', 321, 'https://example.com/comoanaconda.mp3', NOW(), NOW(), 1, 2),

('Um brinde ao nosso amor', 123, 'https://example.com/teesperando.mp3', NOW(), NOW(), 2, 3),
('Tudo Que Você Quiser', 321, 'https://example.com/quandobad.mp3', NOW(), NOW(), 2, 3),
('Garotas Não Merecem Chorar', 123, 'https://example.com/escreveai.mp3', NOW(), NOW(), 2, 3),
('Cê Topa', 321, 'https://example.com/coracaocigano.mp3', NOW(), NOW(), 2, 3),
('Sogrão Caprichou', 123, 'https://example.com/acordandoopredio.mp3', NOW(), NOW(), 2, 3),

('Adrenalina', 321, 'https://example.com/meteoro.mp3', NOW(), NOW(), 2, 4),
('Um Beijo', 123, 'https://example.com/todecara.mp3', NOW(), NOW(), 2, 4),
('Palácios E Castelos', 321, 'https://example.com/sograocaprichou.mp3', NOW(), NOW(), 2, 4),
('Química do Amor', 123, 'https://example.com/lindogostosocarinhoso.mp3', NOW(), NOW(), 2, 4),
('As Lembranças Vão na Mala', 321, 'https://example.com/teassumiprobrasil.mp3', NOW(), NOW(), 2, 4),

('Never Gonna Give You Up (Abertura Instrumental)', 321, 'https://example.com/realfantasia.mp3', NOW(), NOW(), 3, 5),
('Não quero dinheiro (Só quero amar)', 123, 'https://example.com/eva.mp3', NOW(), NOW(), 3, 5),
('Berimbau metalizado', 321, 'https://example.com/vemmorena.mp3', NOW(), NOW(), 3, 5),
('Corazón partío', 123, 'https://example.com/deixavida.mp3', NOW(), NOW(), 3, 5),
('Ilumina', 321, 'https://example.com/aquelados30.mp3', NOW(), NOW(), 3, 5),

('Cadê Você?', 321, 'https://example.com/realfantasia.mp3', NOW(), NOW(), 3, 6),
('Cena De Amor', 123, 'https://example.com/eva.mp3', NOW(), NOW(), 3, 6),
('Bug Bug Bye Bye', 321, 'https://example.com/vemmorena.mp3', NOW(), NOW(), 3, 6),
('O Doce', 123, 'https://example.com/deixavida.mp3', NOW(), NOW(), 3, 6),
('Eh! Maravilha', 321, 'https://example.com/aquelados30.mp3', NOW(), NOW(), 3, 6);