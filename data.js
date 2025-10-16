// data.js
const errorCodes = [
  {
    code: '50.1',
    title: 'Host no responde (Pinpad)',
    cause:
        'Fallo de comunicación entre el POS y la Pinpad (terminal de tarjeta).',
    solution:
        '1. Reiniciar Pinpad (dejar presionado botón amarillo + #). 2. Verificar que el cable USB esté bien conectado al POS y a la Pinpad. 3. Reiniciar el equipo XPOS.'
  },
  {
    code: '101',
    title: 'Impresora sin papel',
    cause: 'El rollo de papel térmico se terminó o está mal colocado.',
    solution:
        '1. Abrir la tapa de la impresora. 2. Colocar un nuevo rollo de papel en la posición correcta. 3. Cerrar la tapa y presionar el botón de avance (feed).'
  },
  {
    code: '215',
    title: 'Error de lectura (Scanner)',
    cause:
        'El código de barras está dañado/sucio o el scanner no lo puede leer.',
    solution:
        '1. Limpiar el cristal del scanner. 2. Intentar escanear un producto diferente para confirmar si el problema es el código de barras. 3. Ingresar el código manualmente.'
  }  // ... add more error codes here
];