import { DB } from "../models/dbMock.js"


export const CommitDB = (data) => {
    try {
        DB.push(data)
        console.log("\n \x1b[30;42m -------- SUCESSO ---------- \x1b[0m")
        return console.log(`\x1b[32m O atributo "${data.nome}" foi salvo! \x1b[0m \n`)

    } catch (e) {
        console.log("\n -------- ERRO ---------- \n")
        return console.log("Erro no momento do save: ", e, "\n")
    }
}