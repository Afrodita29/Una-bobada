window.onload = function() {
    console.log("✅ Documento cargado correctamente");
    if (document.getElementById('galeria')) {
        iniciarMusica();
    } else {
        mostrarPantallaInicio();
    }
};

function mostrarPantallaInicio() {
    document.getElementById('pantalla-inicio').classList.remove('oculto');
}

// 📸 Mostrar la galería después del mensaje inicial
document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.getElementById("mensaje-inicial");
    const galeria = document.getElementById("galeria");

    if (mensaje && galeria) {
        setTimeout(() => {
            mensaje.style.display = "none";
            galeria.classList.remove("oculto");
            cargarGaleria();
        }, 3000);
    }

    // Dibujar corazón en el mensaje inicial
    const canvasMensaje = document.getElementById("canvas-corazon-mensaje");
    if (canvasMensaje) {
        dibujarCorazonMensaje(canvasMensaje);
    }
});

// 🎶 Iniciar música en la galería
function iniciarMusica() {
    const audio = document.getElementById('musica');
    if (audio) {
        audio.play();
    }
}

// 📸 Cargar imágenes en la galería con el efecto corazón
function cargarGaleria() {
    const galeria = document.getElementById('galeria');
    if (!galeria) return;
    galeria.innerHTML = ''; 

    for (let i = 1; i <= 30; i++) {
        const contenedor = document.createElement('div');
        contenedor.classList.add('imagen-con-efecto');

        const canvas = document.createElement('canvas');
        canvas.classList.add('canvas-corazon');

        const img = document.createElement('img');
        img.src = `imagenes/foto${i}.jpg`;
        img.classList.add('imagen-galeria');
        img.loading = 'lazy';

        // 📸 Abrir imagen en modal (Correcto)
img.onclick = function() {
    abrirImagen(this.src);
};


        contenedor.appendChild(canvas);
        contenedor.appendChild(img);
        galeria.appendChild(contenedor);
    }
    iniciarEfectoCorazon();
}

// 🎆 Función para abrir imagen en modal
function abrirImagen(src) {
    let modal = document.getElementById("modal-imagen");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal-imagen";
        modal.innerHTML = `
            <div class="modal-contenido">
                <span class="cerrar">&times;</span>
                <img class="imagen-mediana" src="${src}">
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        modal.querySelector(".imagen-mediana").src = src;
        modal.style.display = "flex";
    }

    modal.querySelector(".cerrar").addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
}

// ❤️ Dibujar corazones alrededor de imágenes
function iniciarEfectoCorazon() {
    document.querySelectorAll(".canvas-corazon").forEach((canvas) => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const ctx = canvas.getContext("2d");

        function dibujarCorazon() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 0, 68, 0.8)";
            ctx.shadowColor = "#f20044";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 3);
            ctx.bezierCurveTo(canvas.width * 0.2, 0, 0, canvas.height * 0.6, canvas.width / 2, canvas.height);
            ctx.bezierCurveTo(canvas.width, canvas.height * 0.6, canvas.width * 0.8, 0, canvas.width / 2, canvas.height / 3);
            ctx.fill();
        }
        setInterval(dibujarCorazon, 500);
    });
}

// ❤️ Dibujar corazón en el mensaje inicial
function dibujarCorazonMensaje(canvas) {
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    function dibujarCorazon() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 68, 0.8)";
        ctx.shadowColor = "#f20044";
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 3);
        ctx.bezierCurveTo(canvas.width * 0.2, 0, 0, canvas.height * 0.6, canvas.width / 2, canvas.height);
        ctx.bezierCurveTo(canvas.width, canvas.height * 0.6, canvas.width * 0.8, 0, canvas.width / 2, canvas.height / 3);
        ctx.fill();
    }
    setInterval(dibujarCorazon, 500);
}
