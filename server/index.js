import { createServer } from "node:http"

const servidor = createServer((Request, Response) => {
    console.log('qualquer coisa');
    Response.write('ta funcionando');
    return Response.end()
})

servidor.listen(8000)