// Adicionando uma função simples para animar o scroll suave
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Array de projetos
const projects = [
    {
        title: "Chat UDP",
        description: "Chat UDP desenvolvido no período de faculdade. Tecnologias usadas: Python.",
        liveUrl: null, // Exemplo de URL ao vivo
        githubLink: "https://github.com/Luis-FernandoD/Project_Chat_UDP"
    },
    {
        title: "BootStrap Landing Page",
        description: "Landing page de uma empresa de marketing. Tecnologias usadas: Bootstrap.",
        liveUrl: "https://luis-fernandod.github.io/bootstrap-web-site", // Exemplo de URL ao vivo
        githubLink: "https://github.com/Luis-FernandoD/bootstrap-web-site/tree/main"
    },
    {
        title: "Projeto 3",
        description: "Descrição do projeto 3. Tecnologias usadas: Vue, Firebase.",
        liveUrl: null, // Sem versão ao vivo
        githubLink: "https://github.com/usuario/projeto3"
    }
];

// Função para renderizar os projetos
function renderProjects() {
    const container = document.getElementById("carousel-items");

    if (projects.length === 0) {
        console.warn("Nenhum projeto encontrado.");
        return;
    }

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("carousel-item");

        // Verifica se o projeto tem uma URL ao vivo
        const projectContent = project.liveUrl
            ? `<iframe src="${project.liveUrl}" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>`
            : `<img src="img/placeholder.png" alt="${project.title}" />`; // Fallback para imagem

        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            ${projectContent}
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank" class="btn">Ver no GitHub</a>
        `;

        container.appendChild(projectItem);
    });
}

// Função para controlar o movimento do carrossel
let scrollPosition = 0;
const itemWidth = 320; // Largura de cada item do projeto (incluindo margem)

function moveCarousel(direction) {
    const container = document.querySelector(".carousel-items");
    const maxScroll = container.scrollWidth - container.offsetWidth;

    scrollPosition += direction * itemWidth; // Mover a quantidade de largura do item

    // Limitar o movimento para não ultrapassar os limites
    scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

    container.style.transform = `translateX(-${scrollPosition}px)`;
}

// Inicializa os projetos e renderiza
renderProjects();

// Eventos de navegação
document.querySelector(".prev-btn").addEventListener("click", () => moveCarousel(-1));
document.querySelector(".next-btn").addEventListener("click", () => moveCarousel(1));