// ===============================
// ANDREAFEST 33
// ===============================

const actividades = {

    fotos:{
        titulo:"📸 Muro de recuerdos",
        texto:"Comparte las mejores fotos de la celebración. Cuando termines el formulario, simplemente cierra la pestaña para volver a AndreaFest.",
        url:"https://photos.google.com/share/AF1QipOp_1lkXSYMwHOIyfuScUk4RbEwWFSSxwH-Z9kVi2hce2lnj8IYY8f2NWq3tWC_MQ?key=WHBPR2Q3Nm9ZR3IwQTlhaEcxOS1qTG1SMjlwU2lR"
    },

    trivia:{
        titulo:"🧠 Trivia AndreaFest",
        texto:"¿Qué tanto conoces a Andrea? Completa la trivia y luego cierra la pestaña para volver a AndreaFest.",
        url:"https://docs.google.com/forms/d/e/1FAIpQLScrOXFuTtVVAsT0dpv-EcNrIJgeugvQ5bVAz_a_8Y80EZniaw/viewform?usp=dialog"
    },

    misiones:{
        titulo:"🎯 Misiones",
        texto:"Completa las misiones de la noche. Cuando finalices, cierra la pestaña y continúa disfrutando AndreaFest.",
        url:"https://docs.google.com/forms/d/e/1FAIpQLScNyz2OVM2v576HTKPeqZU_D7BllkKaL6rdNO_1ITVTd9yz0A/viewform?usp=dialog"
    },

    carta:{
        titulo:"💌 Déjame un recuerdo",
        texto:"Escríbeme un mensaje que guardaré para recordar este cumpleaños. Luego cierra la pestaña para volver.",
        url:"https://docs.google.com/forms/d/e/1FAIpQLSe7rbWCXN357vEKNBK7BUjut3INo3ctm6FNg3Jvy_MFaamEDQ/viewform?usp=dialog"
    },

    premios:{
        titulo:"🏆 Premios AndreaFest",
        texto:"Vota por los premios de la noche. Cuando envíes tu voto, cierra la pestaña y vuelve a AndreaFest.",
        url:"https://docs.google.com/forms/d/e/1FAIpQLSeypWeMu5KfAdJ4aoCU6mhNotrcWtuzm3yrFd-gzZYh9G-hSw/viewform?usp=dialog"
    }

};

const modal = new bootstrap.Modal(document.getElementById("actividadModal"));

const titulo = document.getElementById("modalTitulo");

const texto = document.getElementById("modalTexto");

const icono = document.getElementById("modalIcono");

const boton = document.getElementById("btnComenzar");

document.querySelectorAll(".tarjeta").forEach(tarjeta=>{

    tarjeta.addEventListener("click",()=>{

        const actividad = actividades[tarjeta.id];

        titulo.innerHTML = actividad.titulo;

        texto.innerHTML = actividad.texto;

        icono.innerHTML = actividad.titulo.split(" ")[0];

        boton.onclick=()=>{

            window.open(actividad.url,"_blank");

            modal.hide();

        };

        modal.show();

    });

});