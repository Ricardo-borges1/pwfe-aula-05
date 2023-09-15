'use strict'

const pessoas = [

    {
        nome: 'Leticia Cobucci',
        imagem: 'leticia.jpeg',
        mensagem: 'Se cuida, te amo',
        contato: 'Ricardo Borges',
        tempo: 'Há 5 min',
        quantidade: '3'
    },

    {
        nome: 'Cristiano Ronaldo',
        imagem: 'cr7.webp',
        mensagem: 'Fala gajo, vem pra Arábia, precisamos de um Meio Campo!',
        contato: 'Ricardo Borges',
        tempo: 'Há 25min',
        quantidade: '1'
    },

    {
        nome: 'Juan',
        imagem: 'juan.jpeg',
        mensagem: 'Me da 5 reais, comprar um salgado aqui',
        contato: 'Ricardo Borges',
        tempo: 'Há 10min',
        quantidade: '2'
    },

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMensagem = document.createElement('span')
    qntMensagem.classList.add('qnt-mensagem')
    qntMensagem.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)




    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMensagem)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)