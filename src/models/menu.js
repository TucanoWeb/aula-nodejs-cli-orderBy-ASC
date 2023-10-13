export const welcome = `
Olá,

Bem vindo(a) ao sistema de ordenação de valores.
`

export const menu = [
    {
        type: "list",
        name: "select",
        message: "Por favor, escolha uma das opções abaixo: ",
        choices: ["Inserir Valor", "Listar Valores", "Sair"]
    }
]

export const insert = {
    type: "input",
    name: "insert",
    message: "Por favor, insira o nome do atributo: "
}