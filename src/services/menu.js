import inquirer from "inquirer";
import { ControllerInsert } from "../controller/saveDB/index.js";
import { ControllerSearch } from "../controller/searchDB/index.js";
import { insert, menu } from "../models/menu.js"

async function questions(option) {
    if (option === "Inserir Valor") {
        await inquirer.prompt(insert).then((value) => {
            ControllerInsert(value.insert)
        })
        initial()
    }

    if (option === "Listar Valores") {
        ControllerSearch()
        initial()
    }

    if (option === "Sair") {
        ControllerSearch()
        return console.log("\n \x1b[30;45m Saindo do console... \x1b[0m \n")
    }
}

export async function initial() {
    await inquirer.prompt(menu).then((answers) => {
        let selectMenu = answers.select
        questions(selectMenu)
    })
}