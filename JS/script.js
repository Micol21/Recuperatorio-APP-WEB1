

// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM donde se mostrarán las cotizaciones
    const compraValores = document.getElementById('compra-valores');
    const ventaValores = document.getElementById('venta-valores');

    // Formatear números con decimales y formato Argentina
    const formatoArgentina = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });//Es una API de JavaScript para formatear números según un formato local

    // Verifica que el arreglo cotizaciones esté definido y tenga datos
    if ( cotizaciones.compra && cotizaciones.venta) {
        // Mostrar cotizaciones de compra
        cotizaciones.compra.forEach(cotizacion => {
            const div = document.createElement('div');
            div.classList.add('cotizacion-item');
            div.innerHTML = `
                <p>${cotizacion.tipo}</p>
                <p>${formatoArgentina.format(cotizacion.valor)}</p>
            `;
            compraValores.appendChild(div);
        });

        // Mostrar cotizaciones de venta
        cotizaciones.venta.forEach(cotizacion => {
            const div = document.createElement('div');
            div.classList.add('cotizacion-item');
            div.innerHTML = `
                <p>${cotizacion.tipo}</p>
                <p>${formatoArgentina.format(cotizacion.valor)}</p>
            `;
            ventaValores.appendChild(div);
        });
    } else {
        console.error('Error: Los datos de cotizaciones no están disponibles.');
    }
});
