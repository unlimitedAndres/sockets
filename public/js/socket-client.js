const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('CONECTADO');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del server');
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log( payload );
});


btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    payload = {
        mensaje,
        id: '123asb',
        fecha: new Date().getDate()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log( 'Desde el server', id );
    });

})