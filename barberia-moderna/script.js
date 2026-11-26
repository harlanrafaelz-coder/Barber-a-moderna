
// Actualizar el año automáticamente
document.getElementById("year").textContent =
    new Date().getFullYear();

// Configurar el botón de WhatsApp
const whatsapp = document.getElementById("whatsapp");

// Sustituye este número por el WhatsApp real del negocio.
// Formato internacional: código del país + número, sin espacios.
const telefono = "5500000000000";

const mensaje = encodeURIComponent(
    "Hola, quiero reservar una cita en Barbería Moderna."
);

whatsapp.href = `https://wa.me/${telefono}?text=${mensaje}`;
