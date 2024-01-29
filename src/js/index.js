/* 

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.
    passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    passo 2 - adicionar a classe ativo no botão para que o conteúdo dele apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido
    passo 1 - verificar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
   elementoPlataformas.classList.toggle("ativo");
} );

