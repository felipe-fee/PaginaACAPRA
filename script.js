
function changeContent(id) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.num_dir div').forEach(div => {
        div.style.display = 'none';
    })};

    // Mostra o conteúdo do ID correspondente
    function changeContent(value) {
        document.getElementById("number").textContent = value;
    }



function abrirPopup() {
    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

// Fechar ao clicar fora do popup
window.onclick = function(event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

