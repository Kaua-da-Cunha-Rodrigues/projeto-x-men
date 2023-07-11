/*


    Objetivo: Trocar a borda azul, mudar a imagem grande, o nome e a drescrição do personagem  quando o mouse passa em cima do card de personagens  

    objetivo 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

        passo 1: pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2: adicionar a classe selecionado no personagem que o usuário passar o mouse

        passo 3: verificar se outro card possuia a class selecionado

    Objetivo 2: Quando passar o mouse, trocar a imagem, nome e descrição do personagem grande

        passo 1: pegar o elemento do personagem grande e adicionar as informacoes nele

        passo 2: alterar a imagem

        passo 3: alterar o nome

        passo 4: alterar a descrição

*/

// objetivo 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

//  passo 1: pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll(".personagem"); //Pega todos os elementos class personagem

// passo 2: adicionar a classe selecionado no personagem que o usuário passar o mouse

    //addEventListener só funciona em um elemento só. Laço de repetição pra ele ser aplicado a todos
personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'});
        } //Para celulares
        
        // passo 3: verificar se outro card possuia a class selecionado

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado')

        // Objetivo 2: Quando passar o mouse, trocar a imagem, nome e descrição do personagem grande

        // passo 1: pegar o elemento do personagem grande e adicionar as informacoes nele

        alterarImagemPersonagemSelecionado(personagem);   

        //passo 3: Alterar o nome
        alterarNomePersonagemSelecionado(personagem); /*Pega o valor do atributo data-name no html */

        //passo 4: Alterar descricao
        alterarDescricaoPersonagemSelecionado(personagem);
    })      
})






function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    // passo 2: alterar a imagem
    const idPersonagem = personagem.attributes.id.value; //pega a lista de personagens que a gnt criou anteriormente e pega o valor do id deles
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

