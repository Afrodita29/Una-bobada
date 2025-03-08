window.onload = function() {
    console.log("✅ Documento cargado correctamente");
    if (document.getElementById('galeria')) {
        iniciarMusica();
    } else {
        mostrarPantallaInicio();
        configurarBotones();
    }

    // Agregar evento de clic para el botón de confirmación
    const btnFinal = document.getElementById('btn-final');
    if (btnFinal) {
        btnFinal.addEventListener('click', function() {
            console.log("✔ Clic en el botón de confirmación");
            window.location.href = "galeria.html"; // Redirigir a la galería
        });
    }
};

// Configurar los botones de la pantalla inicial
function configurarBotones() {
    const btnSi = document.getElementById('btn-si');
    const btnNo = document.getElementById('btn-no');
    
    if (btnSi) {
        btnSi.addEventListener('click', function() {
            console.log("✅ Clic en el botón Sí");
            mostrarMensajeRomantico();
            
            // Redirigir a la galería después de mostrar el mensaje
            setTimeout(() => {
                window.location.href = "galeria.html";
            }, 3000);
        });
    }
    
    if (btnNo) {
        agregarEfectoBotonNo(btnNo);
    }
}

function mostrarPantallaInicio() {
    document.getElementById('pantalla-inicio').classList.remove('oculto');
}

function mostrarPantallaInicio() {
    document.getElementById('pantalla-inicio').classList.remove('oculto');
}

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
        // Añadir retraso a la animación para efecto escalonado
        contenedor.style.animationDelay = `${i * 0.1}s`;

        const canvas = document.createElement('canvas');
        canvas.classList.add('canvas-corazon');

        const img = document.createElement('img');
        img.src = `imagenes/foto${i}.jpg`;
        img.classList.add('imagen-galeria');
        img.loading = 'lazy';
        img.alt = `Recuerdo ${i}`;

        // 📸 Abrir imagen en modal (Mejorado)
        img.onclick = function() {
            abrirImagen(this.src, i);
        };

        contenedor.appendChild(canvas);
        contenedor.appendChild(img);
        galeria.appendChild(contenedor);
    }
    iniciarEfectoCorazon();
}
/// 🎆 Función para abrir imagen en modal (Mejorada)
function abrirImagen(src, index) {
    let modal = document.getElementById("modal-imagen");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal-imagen";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-contenido">
                <span class="cerrar">&times;</span>
                <img class="imagen-mediana" src="${src}">
                <div class="modal-caption">Recuerdo #${index} ❤️</div>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        modal.querySelector(".imagen-mediana").src = src;
        modal.querySelector(".modal-caption").textContent = `Recuerdo #${index} ❤️`;
        modal.style.display = "flex";
    }

    // Añadir clase active después de un pequeño retraso para la animación
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    modal.querySelector(".cerrar").addEventListener("click", () => {
        cerrarModal(modal);
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) cerrarModal(modal);
    });
}

// Función para cerrar el modal con animación
function cerrarModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// // ❤️ Dibujar corazones alrededor de imágenes
// function iniciarEfectoCorazon() {
//     document.querySelectorAll(".canvas-corazon").forEach((canvas) => {
//         canvas.width = canvas.offsetWidth;
//         canvas.height = canvas.offsetHeight;
//         const ctx = canvas.getContext("2d");
// 
//         function dibujarCorazon() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillStyle = "rgba(255, 0, 68, 0.8)";
//             ctx.shadowColor = "#f20044";
//             ctx.shadowBlur = 20;
//             ctx.beginPath();
//             ctx.moveTo(canvas.width / 2, canvas.height / 3);
//             ctx.bezierCurveTo(canvas.width * 0.2, 0, 0, canvas.height * 0.6, canvas.width / 2, canvas.height);
//             ctx.bezierCurveTo(canvas.width, canvas.height * 0.6, canvas.width * 0.8, 0, canvas.width / 2, canvas.height / 3);
//             ctx.fill();
//         }
//         setInterval(dibujarCorazon, 500);
//     });
// }
// ❤️ Dibujar corazón en el mensaje inicial
function dibujarCorazonMensaje(canvas) {
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
// 
//     function dibujarCorazon() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = "rgba(255, 0, 68, 0.8)";
//         ctx.shadowColor = "#f20044";
//         ctx.shadowBlur = 20;
//         ctx.beginPath();
//         ctx.moveTo(canvas.width / 2, canvas.height / 3);
//         ctx.bezierCurveTo(canvas.width * 0.2, 0, 0, canvas.height * 0.6, canvas.width / 2, canvas.height);
//         ctx.bezierCurveTo(canvas.width, canvas.height * 0.6, canvas.width * 0.8, 0, canvas.width / 2, canvas.height / 3);
//         ctx.fill();
//     }
//     setInterval(dibujarCorazon, 500);
}
// Función para crear el fondo de corazones flotantes
function crearFondoCorazones() {
    const corazonesFondo = document.createElement('div');
    corazonesFondo.className = 'corazones-fondo';
    document.body.appendChild(corazonesFondo);
    // Agregar corazones flotantes iniciales
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            crearCorazonFlotante(corazonesFondo);
        }, i * 300);
    }
    // Agregar más corazones periódicamente
    setInterval(() => {
        crearCorazonFlotante(corazonesFondo);
    }, 2000);
}
// Función para crear corazones flotantes
function crearCorazonFlotante(contenedor) {
    const corazon = document.createElement('div');
    corazon.className = 'corazon';
    corazon.innerHTML = '❤️';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (Math.random() * 6 + 3) + 's';
    corazon.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
    contenedor.appendChild(corazon);
    // Eliminar el corazón después de la animación
    setTimeout(() => {
        corazon.remove();
    }, 10000);
}
// Función para agregar efecto de movimiento al botón "No"
function agregarEfectoBotonNo(btnNo) {
    btnNo.addEventListener('mouseover', function(e) {
        // Calcular nueva posición aleatoria dentro de la ventana
        const maxX = window.innerWidth - this.offsetWidth;
        const maxY = window.innerHeight - this.offsetHeight;
        // Asegurar que el botón permanezca visible
        const newX = Math.max(20, Math.min(maxX - 20, Math.random() * maxX));
        const newY = Math.max(20, Math.min(maxY - 20, Math.random() * maxY));
        this.style.position = 'fixed';
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
    });
}
function mostrarMensajeRomantico() {
    const mensaje = document.createElement('div');
    mensaje.className = 'mensaje-romantico';
    mensaje.innerHTML = `
        <div class="mensaje-contenido">
            <h2>💖 ¡Gracias por decir que sí! 💖</h2>
            <div class="corazon-animado">❤️</div>
        </div>
    `;
    document.body.appendChild(mensaje);
    // Add this CSS to your stylesheet
    const style = document.createElement('style');
    style.textContent = `
        .mensaje-romantico {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .mensaje-contenido {
            background: linear-gradient(145deg, #ff6b6b, #ff8e8e);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            color: white;
            box-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
            animation: aparecer 0.5s ease-out;
        }
        .corazon-animado {
            font-size: 3rem;
            animation: latido 1s infinite;
        }
        @keyframes aparecer {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        @keyframes latido {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}
localStorage.clear();
sessionStorage.clear();
// Función para crear la lluvia de corazones
function crearLluviaCorazones() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    // 📸 Cargar imágenes en la galería con estilo romántico
    function cargarGaleria() {
        const galeria = document.getElementById('galeria');
        if (!galeria) return;
        galeria.innerHTML = ''; 
    
        for (let i = 1; i <= 30; i++) {
            const contenedor = document.createElement('div');
            contenedor.classList.add('imagen-con-efecto');
            // Añadir retraso a la animación para efecto escalonado
            contenedor.style.animationDelay = `${i * 0.1}s`;
    
            const marco = document.createElement('div');
            marco.classList.add('marco-romantico');
    
            const img = document.createElement('img');
            img.src = `imagenes/foto${i}.jpg`;
            img.classList.add('imagen-galeria');
            img.loading = 'lazy';
            img.alt = `Recuerdo ${i}`;
    
            // Añadir decoración romántica
            const decoracion = document.createElement('div');
            decoracion.classList.add('decoracion-imagen');
            
            // 📸 Abrir imagen en modal
            img.onclick = function() {
                abrirImagen(this.src, i);
            };
    
            marco.appendChild(img);
            contenedor.appendChild(marco);
            contenedor.appendChild(decoracion);
            galeria.appendChild(contenedor);
        }
        // Mostrar la galería después de cargar las imágenes
        setTimeout(() => {
            galeria.classList.remove('oculto');
            document.getElementById('mensaje-inicial').classList.add('oculto');
        }, 3000);
    }
    // 🎆 Función para abrir imagen en modal
    function abrirImagen(src, index) {
        const modal = document.getElementById("modal-imagen");
        const imagen = modal.querySelector(".imagen-mediana");
        const caption = modal.querySelector(".modal-caption");
        
        imagen.src = src;
        caption.textContent = `Nuestro recuerdo #${index} ❤️`;
        
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    // Cerrar modal al hacer clic en la X o fuera de la imagen
    modal.querySelector(".cerrar").onclick = function() {
        cerrarModal();
    };
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            cerrarModal();
        }
    };
}

function cerrarModal() {
    const modal = document.getElementById("modal-imagen");
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Iniciar la lluvia de corazones en la galería
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.gallery-page')) {
        crearLluviaCorazones();
        cargarGaleria();
    }
});
}
    