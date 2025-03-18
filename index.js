const videos = {
    Matemática: [
        { title: "Aula 1: Adição", url: "https://www.youtube.com/embed/HjyCT6K5O1I" },
        { title: "Aula 2: Subtração", url: "https://www.youtube.com/embed/fy3CBP0lu8M" },
        { title: "Aula 3: Geometria", url: "https://www.youtube.com/embed/BetgRvNQEC0" },
        { title: "Aula 4: Quiz Matemático", url: "https://www.youtube.com/embed/FZPddOfFmhQ" }
    ],
    Física: [
        { title: "Aula 1: Leis de Newton", url: "https://www.youtube.com/embed/dU14qCv5AuI" },
        { title: "Aula 2: Cinemática", url: "https://www.youtube.com/embed/kbaN17Z41ZM" },
        { title: "Aula 3: Termodinâmica", url: "https://www.youtube.com/embed/U_2AJc1mcas" }
    ],
    Português: [
        { title: "Aula 1: Gramática Básica", url: "https://www.youtube.com/embed/V2-OBq2YVQ4" },
        { title: "Aula 2: Interpretação de Texto", url: "https://www.youtube.com/embed/OxTNN-IKcEQ" }
    ],
    Inglês: [
        { title: "Aula 1: Verbos Básicos", url: "https://www.youtube.com/embed/bSeZlT7Og8I" }
    ],
    História: [
        { title: "Aula 1: Antiguidade", url: "https://www.youtube.com/embed/q7E4XrfGGnE" },
        { title: "Aula 2: Idade Média", url: "https://www.youtube.com/embed/K8zw6r-sw7o" }
    ]
};

function enterSite() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadVideos();
}

function openCategory(category) {
    document.querySelectorAll(".category").forEach(section => {
        section.style.display = "none";
    });
    const selected = document.getElementById(`${category.toLowerCase()}-section`);
    selected.style.display = "block";
}

function loadVideos() {
    for (const [category, vids] of Object.entries(videos)) {
        const container = document.getElementById(`${category.toLowerCase()}-videos`);
        container.innerHTML = "";
        vids.forEach(video => {
            container.innerHTML += `
                <div class="video-item">
                    <p><strong>${video.title}</strong></p>
                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        });
    }
}

document.addEventListener("DOMContentLoaded", loadVideos);
