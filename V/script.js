 const nao = document.getElementById("nao");

    nao.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        nao.style.left = x + "px";
        nao.style.top = y + "px";
    });

    function mostrarPoema() {
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("poema").style.display = "block";
    }