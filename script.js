window.onload = function() {
    console.log("✅ Documento cargado correctamente");

    // 💖 Botón "Sí" activa los fuegos artificiales y muestra la galería
    document.getElementById('btn-si').addEventListener('click', function() {
        mostrarPantallaContenido();
    });

    // 💔 Botón "No" activa la pantalla de confirmación
    document.getElementById('btn-no').addEventListener('click', function() {
        document.getElementById('pantalla-inicio').classList.add('oculto');
        document.getElementById('pantalla-confirmacion').classList.remove('oculto');
    });

    // 🔁 Botón de confirmación en la pantalla "No"
    document.getElementById('btn-final').addEventListener('click', function() {
        mostrarPantallaContenido();
    });

    // 🏁 Mostrar pantalla de inicio al cargar la página
    document.getElementById('pantalla-inicio').classList.remove('oculto');
};

// 📸 Función para mostrar la pantalla de contenido con retardo
function mostrarPantallaContenido() {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('pantalla-confirmacion').classList.add('oculto');
    document.getElementById('contenido').classList.remove('oculto');
    
    lanzarFuegosArtificiales();
    mostrarGaleria();
}

// 📸 Mostrar mensaje y luego cargar la galería
function mostrarGaleria() {
    const mensaje = document.getElementById('mensaje-inicial');
    const galeria = document.getElementById('galeria');

    setTimeout(() => {
        mensaje.classList.add('oculto');  
        galeria.classList.remove('oculto');  
        cargarGaleria();
    }, 3000);
}

// 📸 Cargar imágenes en la galería
function cargarGaleria() {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = ''; 
    console.log("Cargando imágenes...");

    for (let i = 1; i <= 30; i++) {
        const img = document.createElement('img');
        img.src = `imagenes/foto${i}.jpg`;
        img.classList.add('imagen-galeria');
        img.loading = 'lazy';
        img.onclick = () => abrirImagen(img.src);

        img.onload = () => console.log(`✅ Imagen ${i} cargada`);
        img.onerror = () => console.error(`❌ ERROR al cargar imagen ${i}`);

        galeria.appendChild(img);
    }
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

// 🎵 Control de música corregido
window.addEventListener("DOMContentLoaded", function() {
    const musica = document.getElementById('musica');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    // 🔹 Verifica que el archivo de música se cargue correctamente
    musica.addEventListener('error', function() {
        console.error("❌ ERROR: No se pudo cargar la canción. Verifica la ruta del archivo.");
    });

    playPauseBtn.addEventListener('click', () => {
        if (musica.paused) {
            musica.play().catch(error => console.error("🎵 Error al reproducir la música:", error));
            playPauseBtn.innerHTML = '⏸️';
        } else {
            musica.pause();
            playPauseBtn.innerHTML = '▶️';
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
        },10000);
    } else {
        console.error("❌ Fireworks.js no está disponible aún.");
    }
}
