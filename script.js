const btn = document.getElementById("playBtn");
const music = document.getElementById("music");
const foto = document.getElementById("foto");

const frases = [
    "Eu te amo ❤️",
    "Você é meu mundo 🌍",
    "Sempre juntos 💑",
    "Meu coração é seu 💖",
    "Você é especial ✨",
    "Pra sempre nós 💞"
];

btn.addEventListener("click", () => {

    music.play();
    btn.style.display = "none";
    foto.classList.add("show");

    setInterval(criarFrase, 800);
    setInterval(coracaoCaindo, 300);
});

/* frases subindo */
function criarFrase(){
    const msg = document.createElement("div");
    msg.className = "msg";
    msg.innerText = frases[Math.floor(Math.random()*frases.length)];

    msg.style.left = Math.random()*90 + "vw";
    msg.style.bottom = "0px";

    document.body.appendChild(msg);
    setTimeout(()=>msg.remove(),4000);
}

/* chuva de corações */
function coracaoCaindo(){
    const heart = document.createElement("div");
    heart.className="fall";
    heart.innerText="❤️";
    heart.style.left = Math.random()*100+"vw";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),5000);
}
