const peripherals = [
  // ================== A) PRINTERS ==================
  {
    id: 'printer-epson-tmt88v',
    category: 'Impresora',
    model: 'Epson TM-T88V',
    image: 'epson_tmt88v.jpg',  // A placeholder for an image file
    commonProblems: [
      {
        symptom: 'No enciende, no hay luces.',
        cause: 'Falla de corriente o cable desconectado.',
        solution:
            '1. Verificar que el cable de corriente esté bien conectado a la impresora y al eliminador. 2. Asegurarse que el eliminador esté conectado a un contacto funcional. 3. Probar con otro eliminador si es posible.'
      },
      {
        symptom: 'Luz roja de \'Error\' parpadea.',
        cause: 'Tapa abierta o papel atascado (paper jam).',
        solution:
            '1. Apagar la impresora. 2. Abrir la tapa y retirar cualquier trozo de papel atascado. 3. Colocar el rollo de papel correctamente y cerrar la tapa firmemente hasta que haga clic.'
      },
      {
        symptom: 'Imprime tickets en blanco.',
        cause: 'El rollo de papel térmico está al revés.',
        solution:
            '1. Abrir la tapa. 2. Sacar el rollo de papel y colocarlo en la posición correcta (el papel debe salir por debajo del rollo, no por encima).'
      }
    ]
  },
  {
    id: 'printer-epson-tmt88vi',
    category: 'Impresora',
    model: 'Epson TM-T88VI',
    image: 'epson_tmt88vi.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
      // Example: { symptom: "...", cause: "...", solution: "..." }
    ]
  },

  // ================== B) SCANNERS ==================
  {
    id: 'scanner-datalogic-3300',
    category: 'Scanner',
    model: 'Datalogic 3300 HSI',
    image: 'datalogic_3300.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
      // Example: { symptom: "No lee códigos", cause: "Cristal sucio o cable USB
      // suelto", solution: "1. Limpiar cristal con paño. 2. Reconectar cable
      // USB." }
    ]
  },

  // ================== C) PIN PADS ==================
  {
    id: 'pinpad-pax-sp30',
    category: 'Pin Pad',
    model: 'PAX SP30',
    image: 'pax_sp30.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
    ]
  },
  {
    id: 'pinpad-verifone-p200',
    category: 'Pin Pad',
    model: 'Verifone P200',
    image: 'verifone_p200.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
    ]
  },
  {
    id: 'pinpad-ingenico-ipp320',
    category: 'Pin Pad',
    model: 'Ingenico IPP320',
    image: 'ingenico_ipp320.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
    ]
  },

  // ================== D) MONITORS ==================
  {
    id: 'monitor-nec-m175',
    category: 'Monitor',
    model: 'NEC M175',
    image: 'nec_m175.jpg',
    commonProblems: [
      // TODO: Add problems for this model from your notes
    ]
  },
  // ... Continue this structure for all your other devices (NEC M176, cameras,
  // mobility devices)

];