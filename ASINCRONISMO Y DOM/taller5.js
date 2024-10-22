//Creamos la funcion para la visualizacion de los detalles de un producto
async function cargarDetallesProducto(productoId) {
    try {
//Peticion
        let respuestaproducto = await fetch(`https://api.acer.com/productos/${productoId}`);
        
        if (!respuestaproducto.ok) {
            throw new Error('Error al cargar detalles del producto');
        }
        
        let producto = await respuestaproducto.json();
        mostrarDetallesProducto(producto);
        
    } catch (error) {
        console.error('Error en la solicitud de detalles:', error);
    }
}

// Creamos la funcion para lograr visualizar los detalles de la pagina
function mostrarDetallesProducto(producto) {
    const contenedorDetalles = document.getElementById('detalles-producto');
    contenedorDetalles.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>Descripción: ${producto.descripcion}</p>
        <p>Especificaciones: ${producto.especificaciones}</p>
    `;
}

// Click en un producto y lo que se muestra 
document.querySelectorAll('.producto').forEach(item => {
    item.addEventListener('click', () => {
        const productoId = item.getAttribute('data-id');
        cargarDetallesProducto(productoId);
    });
});
