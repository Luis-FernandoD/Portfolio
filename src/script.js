// Array de projetos
const projetos = [
    {
        titulo: "Projeto 1",
        descricao: "Descrição do projeto 1",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: "assets/img/projeto1.jpg",
        link: "https://github.com/seu-usuario/projeto1"
    },
    {
        titulo: "Projeto 2",
        descricao: "Descrição do projeto 2",
        tecnologias: ["React", "Node.js"],
        imagem: "assets/img/projeto2.jpg",
        link: "https://github.com/seu-usuario/projeto2"
    }
    // Adicione mais projetos conforme necessário
];

// Função para renderizar os projetos
function renderizarProjetos() {
    const projetosContainer = document.querySelector('.projetos-scroll');
    
    projetos.forEach(projeto => {
        const projetoElement = document.createElement('div');
        projetoElement.className = 'projeto-card';
        
        projetoElement.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="tecnologias">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${projeto.link}" target="_blank" class="btn">Ver Projeto</a>
        `;
        
        projetosContainer.appendChild(projetoElement);
    });
}

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderizarProjetos);
