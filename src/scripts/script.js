
let imgs = ['Celeste', 'DarkSouls3', 'HollowKnight', 'Minecraft', 'Portal2', 'RedDead2', 'StardewValley', 'Zelda']

imgs.forEach(Imagem => {
    let Card = document.createElement('img'); // use 'img', não 'image'
    Card.src = `src/img/games/${Imagem}.png`;  // caminho relativo a partir de /script/script.js
    Card.className = 'Teste';
    document.getElementById('card-View').appendChild(Card);
});