let imgs = ['Celeste', 'DarkSouls3', 'HollowKnight', 'Minecraft', 'Portal2', 'RedDead2', 'StardewValley', 'Zelda'];

let descriptions = {
    Celeste: "Um jogo de plataforma sobre escalar uma montanha e enfrentar seus próprios medos.",
    DarkSouls3: "Um RPG de ação em um mundo sombrio, conhecido por sua dificuldade desafiadora.",
    HollowKnight: "Um jogo estilo metroidvania com exploração profunda e ambientação marcante.",
    Minecraft: "Um jogo sandbox focado em criatividade, construção e sobrevivência.",
    Portal2: "Um jogo de quebra-cabeças com desafios físicos usando portais.",
    RedDead2: "Um jogo de aventura no velho oeste com mundo aberto e narrativa envolvente.",
    StardewValley: "Um simulador de fazenda relaxante com elementos de vida e comunidade.",
    Zelda: "Uma série de ação e aventura com puzzles, exploração e masmorras."
};

let titulos = {
    Celeste: "Celeste",
    DarkSouls3: "Dark Souls 3",
    HollowKnight: "Hollow Knight",
    Minecraft: "Minecraft",
    Portal2: "Portal 2",
    RedDead2: "Red Dead Redemption 2",
    StardewValley: "Stardew Valley",
    Zelda: "The Legend of Zelda"
};

imgs.forEach(Imagem => {
    let Card = document.createElement('div');
    Card.className = 'Teste';

    let Cardimage = document.createElement('img');
    Cardimage.src = `src/img/games/${Imagem}.png`;
    Cardimage.className = 'Cardimage';
    Card.appendChild(Cardimage);

    let overlay = document.createElement('div');
    overlay.className = 'card-text';

    let title = document.createElement('h3');
    title.textContent = titulos[Imagem] || Imagem;
    overlay.appendChild(title);

    let description = document.createElement('p');
    description.textContent = descriptions[Imagem] || "Descrição não disponível.";
    overlay.appendChild(description);

    Card.appendChild(overlay);
    document.getElementById('card-View').appendChild(Card);
});

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const captcha = document.getElementById('captchaCheck');
    if (!captcha.checked) {
        alert('Por favor, confirme que você não é um robô.');
        return;
    }

    // Se captcha ok, envia o form via fetch para não sair da página
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                form.reset();
            } else {
                alert('Erro ao enviar a mensagem. Tente novamente.');
            }
        })
        .catch(() => {
            alert('Erro na conexão. Tente novamente mais tarde.');
        });
});
