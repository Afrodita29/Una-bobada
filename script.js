window.onload = function() {
    console.log("✅ Documento cargado correctamente");

    // 💖 Botón "Sí" activa los fuegos artificiales y muestra la galería
    document.getElementById('btn-si').addEventListener('click', function() {
        document.getElementById('pantalla-inicio').classList.add('oculto');
        document.getElementById('contenido').classList.remove('oculto');
        setTimeout(() => {
            cargarGaleria();
            lanzarFuegosArtificiales();
            iniciarCorazones();
            
        }, 500);
    });

    // 💔 Botón "No" activa la pantalla de confirmación
    document.getElementById('btn-no').addEventListener('click', function() {
        document.getElementById('pantalla-inicio').classList.add('oculto');
        document.getElementById('pantalla-confirmacion').classList.remove('oculto');
    });
    
    document.getElementById('btn-final').addEventListener('click', function() {
        document.getElementById('pantalla-confirmacion').classList.add('oculto');
        document.getElementById('contenido').classList.remove('oculto');
        setTimeout(() => {
            cargarGaleria();
            lanzarFuegosArtificiales();
            iniciarCorazones();
            
        }, 500);
    });

    // 🏁 Mostrar pantalla de inicio al cargar la página
    document.getElementById('pantalla-inicio').classList.remove('oculto');
};

// 📸 Cargar imágenes en la galería
function cargarGaleria() {
    const galeria = document.getElementById('galeria');
    if (!galeria) {
        console.error("❌ ERROR: No se encontró el contenedor #galeria");
        return;
    }

    galeria.innerHTML = ''; // Limpiar contenido previo
    console.log("Cargando imágenes...");

    const imagenes = [];
    for (let i = 1; i <= 30; i++) {
        imagenes.push(`imagenes/foto${i}.jpg`);
    }

    imagenes.forEach((imagenSrc, index) => {
        const img = document.createElement('img');
        img.src = imagenSrc;
        img.classList.add('imagen-galeria');

        img.onload = () => console.log(`✅ Imagen ${index + 1} cargada: ${imagenSrc}`);
        img.onerror = () => console.error(`❌ ERROR al cargar la imagen ${index + 1}: ${imagenSrc}`);

        img.addEventListener('click', () => abrirImagen(imagenSrc)); // Añadir evento para abrir en modal

        galeria.appendChild(img);
    });
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


// 🎵 Control de música
window.addEventListener("DOMContentLoaded", function() {
    const musica = document.getElementById('musica');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    if (!musica || !playPauseBtn || !volumeControl) {
        console.error("❌ ERROR: Elementos del reproductor no encontrados");
        return;
    }

    playPauseBtn.addEventListener('click', () => {
        if (musica.paused) {
            musica.play().catch(error => console.error("🎵 Error al reproducir la música:", error));
            playPauseBtn.innerHTML = '⏸️ Pausar';
        } else {
            musica.pause();
            playPauseBtn.innerHTML = '▶️ Reproducir';
        }
    });

    volumeControl.addEventListener('input', (event) => {
        musica.volume = event.target.value;
    });
});

// 🎆 Fuegos artificiales con Fireworks.js

document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/fireworks-js@2/dist/index.umd.js";
    script.onload = function () {
        console.log("✅ Fireworks.js cargado correctamente");

        const contenedor = document.createElement("div");
        contenedor.id = "contenedor-fuegos";
        contenedor.style.position = "fixed";
        contenedor.style.top = "0";
        contenedor.style.left = "0";
        contenedor.style.width = "100vw";
        contenedor.style.height = "100vh";
        contenedor.style.pointerEvents = "none";
        document.body.appendChild(contenedor);

        window.fireworks = new Fireworks.default(contenedor, {
            speed: 2,
            acceleration: 1.80,
            particles: 250,
            explosion: 100,
            intensity: 10,
            friction: 0.96,
            gravity: 0.05
        });

        console.log("🎇 Fireworks.js inicializado");
    };

    document.head.appendChild(script);
});

// 🛑 Función para iniciar los fuegos artificiales
function lanzarFuegosArtificiales() {
    if (window.fireworks) {
        console.log("🎆 Activando fuegos artificiales...");
        window.fireworks.start();
        setTimeout(() => {
            window.fireworks.stop();
            console.log("🛑 Fuegos artificiales detenidos.");
        }, 5000); // Se detiene en 5s
    } else {
        console.error("❌ Fireworks.js no está disponible aún.");
    }
}
