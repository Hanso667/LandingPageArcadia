btnLogin = document.getElementById("Login")
mnLogin = document.getElementById("Login-menu")

function MenuOpen() {
    if (mnLogin.classList.contains("open")) {
        btnLogin.style.transform = "translateX(0)"
        btnLogin.textContent = "Login"
        mnLogin.classList.add('slideUp')
        setTimeout(function () {
            mnLogin.classList.remove('slideUp')
            mnLogin.classList.remove("open")
            mnLogin.classList.add("closed")
        }, 500)
    } else if (mnLogin.classList.contains("closed")) {
        btnLogin.style.transform = "translateX(-110%)";
        btnLogin.textContent = "X"
        mnLogin.classList.remove("closed")
        mnLogin.classList.add("open")
    }
}

let imgs = ['Celeste', 'DarkSouls3', 'HollowKnight', 'Minecraft', 'Portal2', 'RedDead2', 'StardewValley', 'Zelda']

imgs.forEach(Imagem => {
    let Card = document.createElement('img'); // use 'img', não 'image'
    Card.src = `src/img/games/${Imagem}.png`;  // caminho relativo a partir de /script/script.js
    Card.className = 'Teste';
    document.getElementById('card-View').appendChild(Card);
});