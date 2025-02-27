// script.js

// Variables para los campos
const nombreEmpresa = document.getElementById("nombre-empresa");
const departamento = document.getElementById("departamento");
const municipio = document.getElementById("municipio");
const actividadPrincipal = document.getElementById("actividad-principal");
const figuraLegal = document.getElementById("figura-legal");
//const continuarBtn = document.getElementById("continuar");

// Lógica para el botón Continuar

continuarBtn2.addEventListener("click", () => {
  const datosBasicos = {
    nombreEmpresa: nombreEmpresa.value,
    departamento: departamento.value,
    municipio: municipio.value,
    actividadPrincipal: actividadPrincipal.value,
    figuraLegal: figuraLegal.value,
  };

  // Validar campos obligatorios
  if (
    !datosBasicos.nombreEmpresa ||
    !datosBasicos.departamento ||
    !datosBasicos.municipio ||
    !datosBasicos.actividadPrincipal ||
    !datosBasicos.figuraLegal
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  console.log("Datos Básicos:", datosBasicos);
  alert("Datos registrados correctamente.");
});

// Variables para los campos
const nombre = document.getElementById("nombre");
const sector = document.getElementById("sector");
const cargo = document.getElementById("cargo");
const tamano = document.getElementById("tamano");
const sectorTecnologia = document.getElementsByName("sector-tecnologia");

// Función para obtener la respuesta seleccionada de los botones de radio
function obtenerRespuestaRadio(nodo) {
  for (let i = 0; i < nodo.length; i++) {
    if (nodo[i].checked) {
      return nodo[i].value;
    }
  }
  return null;
}

// Lógica para validar y capturar los datos
continuarBtn.addEventListener("click", () => {
  const informacionAdicional = {
    nombre: nombre.value,
    sector: sector.value,
    cargo: cargo.value,
    tamano: tamano.value,
    sectorTecnologia: obtenerRespuestaRadio(sectorTecnologia),
  };

  // Validar campos obligatorios
  if (
    !informacionAdicional.nombre ||
    !informacionAdicional.sector ||
    !informacionAdicional.cargo ||
    !informacionAdicional.tamano ||
    !informacionAdicional.sectorTecnologia
  ) {
    alert(
      "Por favor, completa todos los campos de la sección 'Información adicional'."
    );
    return;
  }

  console.log("Información adicional:", informacionAdicional);
  alert("Información adicional registrada correctamente.");
});

// Función para cambiar de sección
function cambiarSeccion(idSiguiente) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll("section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Muestra la sección solicitada
  const siguienteSeccion = document.getElementById(idSiguiente);
  if (siguienteSeccion) {
    siguienteSeccion.style.display = "block";
  }
}

// Captura de respuestas al final de "Recursos Humanos"
function capturarRespuestas() {
  // Obtener respuestas de "Autonomía de los empleados" Pregunta 1
  const herramientasSeleccionadas = Array.from(
    document.querySelectorAll("input[name='herramientas']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Necesidad de los empleadores" Pregunta 2
  const estrategiasSeleccionadas = Array.from(
    document.querySelectorAll("input[name='estrategias']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Habilidades de los empleados" Pregunta 3
  const planContratacion = document.querySelector(
    "input[name='contratacion']:checked"
  )?.value;

  // Obtener respuesta única de "Personal capacitado" Pregunta 4
  const numeroPersonas = document.querySelector(
    "input[name='personas']:checked"
  )?.value;

  // Obtener respuesta única de "Diseño centrado en el usuario" Pregunta 5
  const factor = document.querySelector("input[name='factor']:checked")?.value;

  // Obtener respuesta única de "Diseño sensible al valor" Pregunta 6
  const integraPrincipios = document.querySelector(
    "input[name='principios']:checked"
  )?.value;

  console.log({
    herramientasSeleccionadas,
    estrategiasSeleccionadas,
    planContratacion,
    numeroPersonas,
    factor,
    integraPrincipios,
  });

  alert("Respuestas registradas correctamente.");
}

// Función para cambiar de sección condicionalmente
function cambiarSeccionCondicional(seccionDestino) {
  // Oculta todas las secciones actuales
  const secciones = document.querySelectorAll("section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Muestra la sección condicional correspondiente
  const destino = document.getElementById(seccionDestino);
  if (destino) {
    destino.style.display = "block";
  }
}

// Función general para cambiar entre secciones
function cambiarSeccion(seccionSiguiente) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll("section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Mostrar la siguiente sección
  const siguiente = document.getElementById(seccionSiguiente);
  if (siguiente) {
    siguiente.style.display = "block";
  }
}

// Captura de respuestas al final de "Visión Técnica"
function capturarRespuestas() {
  // Obtener respuestas de "Tecnología M2M" Pregunta 7
  const desafiosM2M = Array.from(
    document.querySelectorAll("input[name='desafiosm2m']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Optimización" Pregunta 8
  const metodosOptimizacion = Array.from(
    document.querySelectorAll("input[name='optimizacion']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Simulación" Pregunta 9
  const procesosSimulacion = document.querySelector(
    "input[name='simulacion']:checked"
  )?.value;

  // Obtener respuesta única de "Autonomía de las máquinas" Pregunta 10
  const metrica = document.querySelector(
    "input[name='metrica']:checked"
  )?.value;

  // Obtener respuesta única de "Instalaciones de producción" Pregunta 11
  const instalacionesProduccion = document.querySelector(
    "input[name='produccion']:checked"
  )?.value;

  // Obtener respuestas de "TIC" Pregunta 12
  const tic = Array.from(
    document.querySelectorAll("input[name='tic']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Realidad virtual" Pregunta 13
  const aplicacionRvirtual = document.querySelector(
    "input[name='rvirtual']:checked"
  )?.value;

  // Obtener respuestas de "Impresión 3D" Pregunta 14
  const ventajasImpresion3d = Array.from(
    document.querySelectorAll("input[name='impresion3d']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Sistemas ciberfísicos" Pregunta 15
  const sistemasCiberfisicos = document.querySelector(
    "input[name='ciberfisicos']:checked"
  )?.value;

  // Obtener respuesta única de "Inteligencia artificial" Pregunta 16
  const usoIa = document.querySelector("input[name='ia']:checked")?.value;

  // Obtener respuestas de "Interfaces hombre-máquina" Pregunta 17
  const tecnologíasHmi = Array.from(
    document.querySelectorAll("input[name='hmi']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "IoT" Pregunta 18
  const beneficiosIot = Array.from(
    document.querySelectorAll("input[name='iot']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Computación en la nube" Pregunta 19
  const cloud = document.querySelector("input[name='cloud']:checked")?.value;

  // Obtener respuesta única de "CAD" Pregunta 20
  const integracionCad = document.querySelector(
    "input[name='cad']:checked"
  )?.value;

  // Obtener respuesta única de "Sistemas TI" Pregunta 21
  const sistemasTi = document.querySelector("input[name='ti']:checked")?.value;

  console.log({
    desafiosM2M,
    metodosOptimizacion,
    procesosSimulacion,
    metrica,
    instalacionesProduccion,
    tic,
    aplicacionRvirtual,
    ventajasImpresion3d,
    sistemasCiberfisicos,
    usoIa,
    tecnologíasHmi,
    beneficiosIot,
    cloud,
    integracionCad,
    sistemasTi,
  });

  alert("Respuestas registradas correctamente.");
}

// Función para cambiar de sección
function cambiarSeccion(seccionDestino) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll("section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Muestra la sección solicitada
  const destino = document.getElementById(seccionDestino);
  if (destino) {
    destino.style.display = "block";
  }
}

// Captura de respuestas al final de "Visión Estratégica"
function finalizar() {
  // Obtener respuestas de "Misión y visión" Pregunta 22
  const mision = Array.from(
    document.querySelectorAll("input[name='mision']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Innovación abierta y disruptiva" Pregunta 23
  const innovacion = document.querySelector(
    "input[name='innovacion']:checked"
  )?.value;

  // Obtener respuestas de "Tendencias tecnológicas" Pregunta 24
  const tendencias = Array.from(
    document.querySelectorAll("input[name='tendencias']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Estado de situación" Pregunta 25
  const responsabilidad = document.querySelector(
    "input[name='responsabilidad']:checked"
  )?.value;

  // Obtener respuestas de "Marco de innovación" Pregunta 26
  const estrategiasInnovacion = Array.from(
    document.querySelectorAll("input[name='einnovacion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Plan de acción" Pregunta 27
  const planAccion = Array.from(
    document.querySelectorAll("input[name='accion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Implementación" Pregunta 28
  const implementacion = Array.from(
    document.querySelectorAll("input[name='implementacion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Unidades organizativas" Pregunta 29
  const unidadesOrganizativas = Array.from(
    document.querySelectorAll("input[name='organizativas']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Gestión de organizaciones Dinámicas" Pregunta 30
  const mejoras = Array.from(
    document.querySelectorAll("input[name='mejoras']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Responsabilidad individual" Pregunta 31
  const respIndividual = document.querySelector(
    "input[name='individual']:checked"
  )?.value;

  console.log({
    mision,
    innovacion,
    tendencias,
    responsabilidad,
    estrategiasInnovacion,
    planAccion,
    implementacion,
    unidadesOrganizativas,
    mejoras,
    respIndividual,
  });

  alert("Respuestas registradas correctamente.");
}

// Función para calcular el puntaje de una pregunta abierta
function calcularPuntajeAbierta(opcionesMarcadas) {
    switch (opcionesMarcadas) {
        case 5:
            return 20; // Excelente
        case 4:
            return 15;  // Bueno
        case 2:
        case 3:
            return 10;  // Aceptable
        case 1:
            return 5;  // Insuficiente
        default:
            return 0;   // No se marcó ninguna opción
    }
}

// Función para calcular el puntaje de una pregunta cerrada
function calcularPuntajeCerrada(opcionSeleccionada) {
    switch (opcionSeleccionada) {
        case 1:
            return 20; // Excelente
        case 2:
            return 15;  // Bueno
        case 3:
            return 10;  // Aceptable
        case 4:
            return 5;  // Insuficiente
        default:
            return 0;   // No se seleccionó ninguna opción
    }
}

// Función para calcular el puntaje de la Visión de Recursos Humanos
function calcularPuntajeRecursosHumanos() {
    const respuestas = {
        herramientas: Array.from(document.querySelectorAll("input[name='herramientas']:checked")).length,
        estrategias: Array.from(document.querySelectorAll("input[name='estrategias']:checked")).length,
        contratacion: document.querySelector("input[name='contratacion']:checked")?.value,
        personas: document.querySelector("input[name='personas']:checked")?.value,
        factor: document.querySelector("input[name='factor']:checked")?.value,
        principios: document.querySelector("input[name='principios']:checked")?.value,
    };

    let puntaje = 0;
    puntaje += calcularPuntajeAbierta(respuestas.herramientas);
    puntaje += calcularPuntajeAbierta(respuestas.estrategias);
    puntaje += calcularPuntajeCerrada(respuestas.contratacion);
    puntaje += calcularPuntajeCerrada(respuestas.personas);
    puntaje += calcularPuntajeCerrada(respuestas.factor);
    puntaje += calcularPuntajeCerrada(respuestas.principios);

    return puntaje;
}

// Función para calcular el puntaje de la Visión Técnica
function calcularPuntajeTecnica() {
    const respuestas = {
        desafiosm2m: Array.from(document.querySelectorAll("input[name='desafiosm2m']:checked")).length,
        optimizacion: Array.from(document.querySelectorAll("input[name='optimizacion']:checked")).length,
        simulacion: document.querySelector("input[name='simulacion']:checked")?.value,
        metrica: document.querySelector("input[name='metrica']:checked")?.value,
        produccion: document.querySelector("input[name='produccion']:checked")?.value,
        tic: Array.from(document.querySelectorAll("input[name='tic']:checked")).length,
        rvirtual: document.querySelector("input[name='rvirtual']:checked")?.value,
        impresion3d: Array.from(document.querySelectorAll("input[name='impresion3d']:checked")).length,
        ciberfisicos: document.querySelector("input[name='ciberfisicos']:checked")?.value,
        ia: document.querySelector("input[name='ia']:checked")?.value,
        hmi: Array.from(document.querySelectorAll("input[name='hmi']:checked")).length,
        iot: Array.from(document.querySelectorAll("input[name='iot']:checked")).length,
        cloud: document.querySelector("input[name='cloud']:checked")?.value,
        cad: document.querySelector("input[name='cad']:checked")?.value,
        ti: document.querySelector("input[name='ti']:checked")?.value,
    };

    let puntaje = 0;
    puntaje += calcularPuntajeAbierta(respuestas.desafiosm2m);
    puntaje += calcularPuntajeAbierta(respuestas.optimizacion);
    puntaje += calcularPuntajeCerrada(respuestas.simulacion);
    puntaje += calcularPuntajeCerrada(respuestas.metrica);
    puntaje += calcularPuntajeCerrada(respuestas.produccion);
    puntaje += calcularPuntajeAbierta(respuestas.tic);
    puntaje += calcularPuntajeCerrada(respuestas.rvirtual);
    puntaje += calcularPuntajeAbierta(respuestas.impresion3d);
    puntaje += calcularPuntajeCerrada(respuestas.ciberfisicos);
    puntaje += calcularPuntajeCerrada(respuestas.ia);
    puntaje += calcularPuntajeAbierta(respuestas.hmi);
    puntaje += calcularPuntajeAbierta(respuestas.iot);
    puntaje += calcularPuntajeCerrada(respuestas.cloud);
    puntaje += calcularPuntajeCerrada(respuestas.cad);
    puntaje += calcularPuntajeCerrada(respuestas.ti);

    return puntaje;
}

// Función para calcular el puntaje de la Visión Estratégica
function calcularPuntajeEstrategica() {
    const respuestas = {
        mision: Array.from(document.querySelectorAll("input[name='mision']:checked")).length,
        innovacion: document.querySelector("input[name='innovacion']:checked")?.value,
        tendencias: Array.from(document.querySelectorAll("input[name='tendencias']:checked")).length,
        responsabilidad: document.querySelector("input[name='responsabilidad']:checked")?.value,
        einnovacion: Array.from(document.querySelectorAll("input[name='einnovacion']:checked")).length,
        accion: Array.from(document.querySelectorAll("input[name='accion']:checked")).length,
        implementacion: Array.from(document.querySelectorAll("input[name='implementacion']:checked")).length,
        organizativas: Array.from(document.querySelectorAll("input[name='organizativas']:checked")).length,
        mejoras: Array.from(document.querySelectorAll("input[name='mejoras']:checked")).length,
        individual: document.querySelector("input[name='individual']:checked")?.value,
    };

    let puntaje = 0;
    puntaje += calcularPuntajeAbierta(respuestas.mision);
    puntaje += calcularPuntajeCerrada(respuestas.innovacion);
    puntaje += calcularPuntajeAbierta(respuestas.tendencias);
    puntaje += calcularPuntajeCerrada(respuestas.responsabilidad);
    puntaje += calcularPuntajeAbierta(respuestas.einnovacion);
    puntaje += calcularPuntajeAbierta(respuestas.accion);
    puntaje += calcularPuntajeAbierta(respuestas.implementacion);
    puntaje += calcularPuntajeAbierta(respuestas.organizativas);
    puntaje += calcularPuntajeAbierta(respuestas.mejoras);
    puntaje += calcularPuntajeCerrada(respuestas.individual);

    return puntaje;
}


function enviarDatos() {
  console.log("Enviando datos...");
  const datos = {
    nombreEmpresa: document.getElementById("nombre-empresa")?.value || "",
    departamento: document.getElementById("departamento")?.value || "",
    municipio: document.getElementById("municipio")?.value || "",
    actividadPrincipal: document.getElementById("actividad-principal")?.value || "",
    figuraLegal: document.getElementById("figura-legal")?.value || "",
    nombre: document.getElementById("nombre")?.value || "",
    sector: document.getElementById("sector")?.value || "",
    cargo: document.getElementById("cargo")?.value || "",
    tamano: document.getElementById("tamano")?.value || "",
    sectorTecnologia: obtenerRespuestaRadio(document.getElementsByName("sector-tecnologia")) || "",
    herramientas: Array.from(document.querySelectorAll("input[name='herramientas']:checked"))
      .map((input) => input.value)
      .join(", "),
    estrategias: Array.from(document.querySelectorAll("input[name='estrategias']:checked"))
      .map((input) => input.value)
      .join(", "),
    contratacion: document.querySelector("input[name='contratacion']:checked")?.value || "",
    personas: document.querySelector("input[name='personas']:checked")?.value || "",
    factor: document.querySelector("input[name='factor']:checked")?.value || "",
    principios: document.querySelector("input[name='principios']:checked")?.value || "",
    desafiosm2m: Array.from(document.querySelectorAll("input[name='desafiosm2m']:checked"))
      .map((input) => input.value)
      .join(", "),
    optimizacion: Array.from(document.querySelectorAll("input[name='optimizacion']:checked"))
      .map((input) => input.value)
      .join(", "),
    simulacion: document.querySelector("input[name='simulacion']:checked")?.value || "",
    metrica: document.querySelector("input[name='metrica']:checked")?.value || "",
    produccion: document.querySelector("input[name='produccion']:checked")?.value || "",
    tic: Array.from(document.querySelectorAll("input[name='tic']:checked"))
      .map((input) => input.value)
      .join(", "),
    rvirtual: document.querySelector("input[name='rvirtual']:checked")?.value || "",
    impresion3d: Array.from(document.querySelectorAll("input[name='impresion3d']:checked"))
      .map((input) => input.value)
      .join(", "),
    ciberfisicos: document.querySelector("input[name='ciberfisicos']:checked")?.value || "",
    ia: document.querySelector("input[name='ia']:checked")?.value || "",
    hmi: Array.from(document.querySelectorAll("input[name='hmi']:checked"))
      .map((input) => input.value)
      .join(", "),
    iot: Array.from(document.querySelectorAll("input[name='iot']:checked"))
      .map((input) => input.value)
      .join(", "),
    cloud: document.querySelector("input[name='cloud']:checked")?.value || "",
    cad: document.querySelector("input[name='cad']:checked")?.value || "",
    ti: document.querySelector("input[name='ti']:checked")?.value || "",
    mision: Array.from(document.querySelectorAll("input[name='mision']:checked"))
      .map((input) => input.value)
      .join(", "),
    innovacion: document.querySelector("input[name='innovacion']:checked")?.value || "",
    tendencias: Array.from(document.querySelectorAll("input[name='tendencias']:checked"))
      .map((input) => input.value)
      .join(", "),
    responsabilidad: document.querySelector("input[name='responsabilidad']:checked")?.value || "",
    einnovacion: Array.from(document.querySelectorAll("input[name='einnovacion']:checked"))
      .map((input) => input.value)
      .join(", "),
    accion: Array.from(document.querySelectorAll("input[name='accion']:checked"))
      .map((input) => input.value)
      .join(", "),
    implementacion: Array.from(document.querySelectorAll("input[name='implementacion']:checked"))
      .map((input) => input.value)
      .join(", "),
    organizativas: Array.from(document.querySelectorAll("input[name='organizativas']:checked"))
      .map((input) => input.value)
      .join(", "),
    mejoras: Array.from(document.querySelectorAll("input[name='mejoras']:checked"))
      .map((input) => input.value)
      .join(", "),
    individual: document.querySelector("input[name='individual']:checked")?.value || "",
  };

  for (const key in datos) {
    if (Array.isArray(datos[key])) {
      datos[key] = datos[key].join(", ");
    }
  }
  console.log("Datos a enviar:", datos);

  fetch("https://indice-industria-4-0.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        alert("¡Respuestas guardadas con éxito!");
      } else {
        alert("Error al guardar: " + data.message);
      }
    })
    .catch((error) => console.error("Error en la solicitud:", error));
  console.log("Datos enviados.");
}

// Botón de finalización para enviar datos
function finalizarCuestionario() {
  enviarDatos(); // Captura los datos del cuestionario
  alert("¡Cuestionario enviado correctamente!");
}

// Función para recolectar respuestas y calcular puntajes
function procesarResultados() {
  const seccion = document.getElementById("seccion-42");
  seccion.style.display = "block";
  // Obtener puntajes individuales para cada visión
  const puntajeRecursosHumanos = calcularPuntajeRecursosHumanos();
  const puntajeTecnica = calcularPuntajeTecnica();
  const puntajeEstrategica = calcularPuntajeEstrategica();

  // Calcular puntaje total
  let puntajeTotal =
    puntajeRecursosHumanos * 0.3 + // Ponderación 30%
    puntajeTecnica * 0.36 + // Ponderación 36%
    puntajeEstrategica * 0.34; // Ponderación 34%

  // Normalizar el puntaje total a una escala de 0 a 100
  puntajeTotal = Math.min(puntajeTotal, 100);

  // Mostrar gráficos
  generarGraficoBarra(puntajeTotal);
  generarGraficoCircular([
    puntajeRecursosHumanos,
    puntajeTecnica,
    puntajeEstrategica,
  ]);
}

// Función para generar gráfico de barra
function generarGraficoBarra(puntajeTotal) {
  const canvas = document.getElementById("grafico-barra");
  if (!canvas) {
    console.error("Canvas element #grafico-barra not found.");
    return;
  }
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Puntaje Total"],
      datasets: [
        {
          label: "",
          data: [puntajeTotal],
          backgroundColor: ["rgba(54, 162, 235, 0.5)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
}

// Función para generar gráfico circular
function generarGraficoCircular(puntajes) {
  const canvas = document.getElementById("grafico-circular");
  if (!canvas) {
    console.error("Canvas element #grafico-circular not found.");
    return;
  }

  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Visión de Recursos Humanos",
        "Visión Técnica",
        "Visión Estratégica",
      ],
      datasets: [
        {
          label: "Distribución del Puntaje",
          data: puntajes,
          backgroundColor: [
            "rgba(75, 192, 192, 0.5)",
            "rgba(255, 99, 132, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
}
