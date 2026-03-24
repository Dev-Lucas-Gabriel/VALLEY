// Questão 1:  Explique com suas palavras o que é uma função em JavaScript e por que ela é importante na organização do código.
// R: é um bloco de codigo que faz uma tarefa especifica, que ajuda na organização pelo fato de que a função feita pode ser chamada em outras partes do codigo sem precisar fazer um novo bloco de codigo.

// Questão 2: Explique a diferença entre parâmetro e argumento. Em seguida, crie um exemplo simples para ilustrar sua resposta.
// R: O parametro é a variável que vai receber o valor, e o argumento é o valor recebido pela variavel
function parametro(nome) {
    console.log('Seu nome é:, ', nome)
}
//Argumento:
parametro(Iris)

// Questão 3:
// Explique a diferença entre:
// ● função que apenas executa uma ação
// ● função que retorna um valor 
// depois, escreva um exemplo de cada caso.
// R: Função que apenas executa uma ação: Ela faz algo, mas não devolve nenhum valor, serve para executar tarefas (mostrar mensagem, alterar algo)
function message() {
    console.log("Olá, mundo!");
}
message(); // executa a ação

// Função com return: Ela processa algo e devolve um resultado, usa a palavra-chave return e o valor retornado pode ser usado depois.
function somar(a, b) {
    return a + b;
}
let resultado = somar(5, 3);
console.log(resultado); 

// Questão 4
// Explique por que a ordem dos argumentos é importante em uma função com múltiplos
// parâmetros.
// R: cada valor passado vai para o parâmetro correspondente na mesma ordem em que foi definido na função. Se você trocar a ordem dos argumentos,
// os valores vão parar nos lugares errados e isso pode gerar resultados incorretos.

// Questão 5
// Explique o que acontece quando uma função não possui return.
// R: executa o código dentro dela e termina sem devolver nenhum valor útil, ou seja, não retorna nada ultilizavel depois.

// Questão 6
// Crie uma função chamada saudacao que exiba no console a mensagem:
// Bem-vindo(a) ao estudo de funções!
// Depois, chame essa função 3 vezes.
function message() {
    console.log("Bem-vindo(a) ao estudo de funções")
}
message()
message()
message()

// Questão 7
// Crie uma função chamada mostrarNome que receba um nome como parâmetro e exiba no
// console:
// Olá, [nome]!
// Teste a função com pelo menos 3 nomes diferentes.
function mostrarNome(nome){
    console.log("Olá, " + nome + "!" )
}
mostrarNome("João")
mostrarNome("Maria")
mostrarNome("Igor")

// Questão 8
// Crie uma função chamada somar que receba dois números e exiba a soma deles no console.
// Teste com 3 pares de valores diferentes.
function sum(a, b) {
    console.log(a + b)
}
sum(4, 6)
sum(8, 2)
sum(5, 5)

// Questão 9
// Crie uma função chamada apresentarAluno que receba três parâmetros:
// ● nome
// ● curso
// ● turma
// A função deve exibir uma frase apresentando o aluno com essas informações.
function apresentarAluno(nome, curso, turma) {
    console.log("Bem-vindo(a), " + nome + "ao curso de" + curso + "na turma" + turma + "!")
}
apresentarAluno("Gabriel", "Fullstack", "6")

// Questão 10
// Crie uma função chamada montarNomeCompleto que receba:
// ● primeiroNome
// ● sobrenome
// A função deve retornar o nome completo, e não apenas exibir.
function montarNomeCompleto(primeiroNome, sobreNome) {
    return primeiroNome + " " + sobreNome
}
let nomeCompleto = montarNomeCompleto("Lucas Gabriel", "Gomes de Araujo") 
console.log(nomeCompleto)

// Questão 11
// Crie uma função chamada exibirMensagem que receba dois parâmetros:
// ● mensagem
// ● nome
// Defina "Aluno(a)" como valor padrão para nome.
// A função deve exibir no console uma frase usando os dois valores.

let nome = "Aluno(a)"
function exibirMensage(mensagem, nome) {
    console.log(mensagem + ", " + nome + "!")
}
exibirMensage("Bem-vindo(a)")
exibirMensage("olá", "Lucas")

// Questão 12
// Crie uma função chamada calcularMedia que receba 3 notas e retorne a média aritmética.
// Depois:
// ● armazene o retorno em uma variável
// ● exiba o resultado no console
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
let resultadoMedia = calcularMedia(6, 8, 9)
console.log(resultadoMedia)

// Questão 13
// Crie uma função chamada verificarAprovacao que receba a média de um aluno e:
// ● retorne "Aprovado(a)" se a média for maior ou igual a 7
// ● retorne "Recuperação" se a média for maior ou igual a 5 e menor que 7
// ● retorne "Reprovado(a)" nos demais casos
function verificarAprovacao(media) {
    if (media >= 7) {
        return "Aprovado(a)";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado(a)";
    }
}

// Questão 14
// Crie uma função chamada calcularDesconto que receba:
// ● valorProduto
// ● percentualDesconto
// A função deve retornar o valor final com desconto aplicado.
function calcularDesconto(valorProduto, percentualDesconto) {
    let desconto = valorProduto * (percentualDesconto / 100);
    return valorProduto - desconto;
}

// Questão 15
// Crie uma função chamada testeEscopo e, dentro dela, declare uma variável mensagem com
// qualquer texto.
// Depois:
// ● exiba essa variável dentro da função
// ● tente explicar, em comentário, por que ela não pode ser acessada fora da função
function testeEscopo() {
    let mensagem = "Olá, escopo!";
    console.log(mensagem);
}
testeEscopo();
// console.log(mensagem);
// mensagem não pode ser acessada fora da função, porque ela foi declarada dentro do escopo da função

// Questão 16
// Crie uma função chamada exibirRelatorio e, dentro dela, crie outra função chamada linha.
// A função linha deve exibir:
// --------------------
// A função principal deve:
// ● chamar linha()
// ● exibir uma mensagem
// ● chamar linha() novamente
function exibirRelatorio() {
    function linha() {
        console.log("--------------------");
    }

    linha();
    console.log("relatorio aqui");
    linha();
}

// Questão 17
// Escreva um pequeno comentário explicando o que é hoisting de funções.
// Depois, crie um exemplo em que uma função declarada com function seja chamada antes de
// sua definição.
mostrar();

function mostrar() {
    console.log("Funcionou antes da declaração!");
}
// Hoisting é quando funções declaradas com "function"
// são "movidas" para o topo do código automaticamente


// Questão 18
// Crie uma função anônima armazenada em uma constante chamada boasVindas.
// Essa função deve receber um nome e exibir:
// Seja bem-vindo(a), [nome]!
const boasVindas = function(nome) {
    console.log("Seja bem-vindo(a), " + nome + "!");
};

// Questão 19
// Reescreva a função da questão anterior usando arrow function.
const boasVindasArrow = (nome) => {
    console.log("Seja bem-vindo(a), " + nome + "!");
};

// Questão 20
// Crie uma arrow function chamada dobrarNumero que receba um número e retorne o dobro dele.
const dobrarNumero = (numero) => numero * 2;

// Questão 21
// Crie uma função chamada executarOperacao que receba dois números e uma operação.
// Faça uma versão para cada caso abaixo:
// ● usando função declarada com function
// ● usando função anônima
// ● usando arrow function
// function
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

// anônima
const executarOperacaoAnon = function(a, b, operacao) {
    return operacao(a, b);
};

// arrow
const executarOperacaoArrow = (a, b, operacao) => operacao(a, b);


// Questão 22
// Crie uma função chamada executarTarefa que receba:
// ● nomeDaTarefa
// ● callback
// Essa função deve:
// 1. exibir Executando tarefa: [nomeDaTarefa]
// 2. executar a callback recebida
function executarTarefa(nomeDaTarefa, callback) {
    console.log("Executando tarefa: " + nomeDaTarefa);
    callback();
}

// Questão 23
// Utilize a função da questão anterior passando:
// ● uma função separada como callback
function minhaTarefa() {
    console.log("Tarefa executada!");
}

executarTarefa("Estudar JS", minhaTarefa);

// Questão 24
// Utilize novamente a mesma função, mas agora passando:
// ● uma função anônima como callback

executarTarefa("Treinar código", function() {
    console.log("Callback anônima executada!");
});


// Questão 25
// Utilize novamente a mesma função, mas agora passando:
// ● uma arrow function como callback
executarTarefa("Praticar arrow", () => {
    console.log("Callback arrow executada!");
});

//aqui p baixo a cabeça do dev foi de arrasta

// Questão 26
// Crie uma função chamada multiplicar que receba dois números e retorne o resultado da
// multiplicação.
// Documente essa função usando JSDoc, informando:
// ● descrição da função
// ● tipo dos parâmetros
// ● tipo do retorno
// Questão 27
// Crie uma função chamada criarUsuario que receba:
// ● nome
// ● email
// Ela deve retornar uma frase com esses dados.
// Documente a função usando JSDoc.
// Questão 28
// Crie um pequeno sistema com funções para uma situação de cadastro de aluno.
// Seu programa deve ter, no mínimo, as seguintes funções:
// ● uma função para montar o nome completo
// ● uma função para calcular a média
// ● uma função para verificar a situação do aluno
// ● uma função para exibir um relatório final no console
// O relatório final deve mostrar algo como:
// ● nome do aluno
// ● notas
// ● média
// ● situação final
// Requisitos do desafio
// No desafio final, obrigatoriamente você deve usar:
// ● pelo menos 1 função com return
// ● pelo menos 1 função com valor padrão

// ● pelo menos 1 arrow function
// ● pelo menos 1 callback
// ● pelo menos 1 função documentada com JSDoc

// Critérios de avaliação
// 1. Compreensão dos conceitos
// Será observado se o aluno demonstra entender corretamente:
// ● o que é uma função
// ● parâmetros e argumentos
// ● retorno
// ● escopo
// ● callback
// ● diferenças entre function, função anônima e arrow function
// 2. Implementação correta
// Será avaliado se:
// ● as funções foram criadas corretamente
// ● os parâmetros foram usados de forma adequada
// ● os retornos foram aplicados quando necessário
// ● o código executa sem erros
// 3. Organização do código
// Será considerado:
// ● clareza dos nomes
// ● estrutura do código
// ● legibilidade
// ● uso adequado de comentários quando necessário