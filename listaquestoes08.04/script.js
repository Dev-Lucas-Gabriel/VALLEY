// QUESTÃO 1
const user = {
    email: "dev.lucasgabriel1@gmail.com",
    nome: "Lucas Gabriel",
    idade: 19,
// QUESTÃO 2
    message: function() {
        console.log(`olá meu nome é ${user.nome}`)
    }
}
user.message()

// QUESTÃO 3
user.email = "dev.lucasgabriel2@gmail.com"
console.log(user.email)

// QUESTÃO 4
console.log(user["idade"])

// QUESTÃO 5
const address = {
    endereco: {
        cidade: "Amontada"
    },   
}

console.log(address.endereco.cidade)

// QUESTÃO 6

const obj = {
    city: "Itapipoca",
    // name: "Judas",
    id: "12345",

    mensagem : function () {
        console.log(this?.name)
    }
}

obj.mensagem()

// QUESTÃO 7
let content = {
    locate: "amontada",
    idd: null
}
console.log(content.idd ?? "default")

// QUESTÃO 8
let frase = "estou estudando javascript intermediario"
console.log(frase.toUpperCase)
console.log(frase.toLowerCase)

// QUESTÃO 9
let password = "23421"

if (password.length < 6) {
    console.log("Sua senha deve conter no minimo 6 caracteres")
}

// QUESTÃO 10 
console.log(frase.replace("estudando" , "aprendendo"))

// QUESTÃO 11
console.log(frase.slice(0, 5))

// QUESTÃO 12
let spaces = "          judas           "
console.log(spaces.trim)

// QUESTÃO 13
let fullName = "Judas Escariote"
console.log(fullName.split(" "))

// QUESTÃO 14
const palavras = ["olá", "mundo", "javascript"]
const resultado = palavras.join("-")

console.log(resultado)

// QUESTÃO 15
const texto = "Judas Escariote"
const palavra = "escariote"
const existe = texto.toLowerCase().includes(palavra.toLowerCase())
console.log(existe)

// QUESTÃO 16
let exmp = ["banana", "maçã", "manga"]
console.log(exmp.length)

// QUESTÃO 17
let nums = ["10", "20", "30"]
console.log(nums[0])
console.log(nums[nums.length - 1])

// QUESTÃO 18
const numbers = [2, 3, 4]

numbers.unshift(1)
numbers.push(5)

console.log(numbers)

// QUESTÃO 19
numbers.pop()
numbers.shift()

console.log(numbers)

// QUESTÃO 20
let letras = ["a", "b", "c"]
console.log(letras.indexOf("a"))

// QUESTÃO 21
console.log(letras.splice(2,2))

// QUESTÃO 23
let capitals = ["Fortal", "SP", "DF"]
console.log(capitals.includes("Fortal"))

// QUESTÃO 24

for (i = 0; i <= 10; i++) {
    console.log(i)
}

// QUESTÃO 25
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// QUESTÃO 26
let i = 1

while (i <= 5) {
  console.log(i)
  i++
}

// QUESTÃO 27
let index = 10

do {
  console.log("Executou pelo menos uma vez")
} while (index < 5)

// QUESTÃO 28
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}

// QUESTÃO 29

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}

// QUESTÃO 30
const data = new Date()


const dia = data.getDate()
const mes = data.getMonth() + 1
const ano = data.getFullYear()

console.log(`${dia}/${mes}/${ano}`)
console.log(data.toLocaleDateString("pt-BR"))
console.log(data.toLocaleString("pt-BR"))