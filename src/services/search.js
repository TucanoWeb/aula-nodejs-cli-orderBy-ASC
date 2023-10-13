import { DB } from "../models/dbMock.js"

export const SearchDB = () => {

    const list = DB.sort((a, b) => {
        return a.nome >= b.nome ? 1 : -1
    })

    console.log("\n \x1b[30;42m -------- LISTA DE VALORES ---------- \x1b[0m \n")
    list.forEach((element) => {
        console.log(element)
    })
    console.log("\n \x1b[30;42m ------------------------------------ \x1b[0m \n")
}