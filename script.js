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
  // Obtener respuestas de "Misión y visión"
  const mision = Array.from(
    document.querySelectorAll("input[name='mision']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Innovación abierta y disruptiva"
  const innovacion = document.querySelector(
    "input[name='innovacion']:checked"
  )?.value;

  // Obtener respuestas de "Tendencias tecnológicas"
  const tendencias = Array.from(
    document.querySelectorAll("input[name='tendencias']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Estado de situación"
  const responsabilidad = document.querySelector(
    "input[name='responsabilidad']:checked"
  )?.value;

  // Obtener respuestas de "Marco de innovación"
  const estrategiasInnovacion = Array.from(
    document.querySelectorAll("input[name='einnovacion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Plan de acción"
  const planAccion = Array.from(
    document.querySelectorAll("input[name='accion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Implementación"
  const implementacion = Array.from(
    document.querySelectorAll("input[name='implementacion']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Unidades organizativas"
  const unidadesOrganizativas = Array.from(
    document.querySelectorAll("input[name='organizativas']:checked")
  ).map((input) => input.value);

  // Obtener respuestas de "Gestión de organizaciones Dinámicas"
  const mejoras = Array.from(
    document.querySelectorAll("input[name='mejoras']:checked")
  ).map((input) => input.value);

  // Obtener respuesta única de "Responsabilidad individual"
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

// Función para calcular el puntaje de la Visión de Recursos Humanos
function calcularPuntajeRecursosHumanos() {
  const respuestas = {
    herramientas: Array.from(
      document.querySelectorAll("input[name='herramientas']:checked")
    ).map((input) => input.value),

    estrategias: Array.from(
      document.querySelectorAll("input[name='estrategias']:checked")
    ).map((input) => input.value),

    contratacion: document.querySelector("input[name='contratacion']:checked")
      ?.value,

    personas: document.querySelector("input[name='personas']:checked")?.value,

    factor: document.querySelector("input[name='factor']:checked")?.value,

    principios: document.querySelector("input[name='principios']:checked")
      ?.value,
  };

  let puntaje = 0;

  // Calificaciones específicas
  if (respuestas.herramientas.includes("gestion_proyectos")) puntaje += 0.688;
  if (respuestas.herramientas.includes("analisis_datos")) puntaje += 0.688;
  if (respuestas.herramientas.includes("comunicacion")) puntaje += 0.688;
  if (respuestas.herramientas.includes("capacitacion")) puntaje += 0.688;
  if (respuestas.herramientas.includes("clientes")) puntaje += 0.688;

  if (respuestas.estrategias.includes("capacitacion_interna")) puntaje += 0.688;
  if (respuestas.estrategias.includes("cursos_externos")) puntaje += 0.688;
  if (respuestas.estrategias.includes("eventos")) puntaje += 0.688;
  if (respuestas.estrategias.includes("proyectos")) puntaje += 0.688;
  if (respuestas.estrategias.includes("incentivos")) puntaje += 0.688;

  if (respuestas.contratacion === "integral") puntaje += 3;
  if (respuestas.contratacion === "parcial") puntaje += 2.25;
  if (respuestas.contratacion === "en_desarrollo") puntaje += 1.5;
  if (respuestas.contratacion === "desconocido") puntaje += 0.75;

  if (respuestas.personas === "mas_100") puntaje += 3;
  if (respuestas.personas === "26-100") puntaje += 2.25;
  if (respuestas.personas === "1-25") puntaje += 1.5;
  if (respuestas.personas === "desconocido") puntaje += 0.75;

  if (respuestas.factor === "fundamental") puntaje += 3;
  if (respuestas.factor === "importante") puntaje += 2.25;
  if (respuestas.factor === "menor_importancia") puntaje += 1.5;
  if (respuestas.factor === "desconocido") puntaje += 0.75;

  if (respuestas.principios === "integrados") puntaje += 3;
  if (respuestas.principios === "en_desarrollo") puntaje += 2.25;
  if (respuestas.principios === "no_integrados") puntaje += 1.5;
  if (respuestas.principios === "desconocido") puntaje += 0.75;

  return puntaje;
}

// Función para calcular el puntaje de la Visión Técnica
function calcularPuntajeTecnica() {
  const respuestas = {
    desafiosm2m: Array.from(
      document.querySelectorAll("input[name='desafiosm2m']:checked")
    ).map((input) => input.value),

    optimizacion: Array.from(
      document.querySelectorAll("input[name='optimizacion']:checked")
    ).map((input) => input.value),

    simulacion: document.querySelector("input[name='simulacion']:checked")
      ?.value,

    metrica: document.querySelector("input[name='metrica']:checked")?.value,

    produccion: document.querySelector("input[name='produccion']:checked")
      ?.value,

    tic: Array.from(document.querySelectorAll("input[name='tic']:checked")).map(
      (input) => input.value
    ),

    rvirtual: document.querySelector("input[name='rvirtual']:checked")?.value,

    impresion3d: Array.from(
      document.querySelectorAll("input[name='impresion3d']:checked")
    ).map((input) => input.value),

    ciberfisicos: document.querySelector("input[name='ciberfisicos']:checked")
      ?.value,

    ia: document.querySelector("input[name='ia']:checked")?.value,

    hmi: Array.from(document.querySelectorAll("input[name='hmi']:checked")).map(
      (input) => input.value
    ),

    iot: Array.from(document.querySelectorAll("input[name='iot']:checked")).map(
      (input) => input.value
    ),

    cloud: document.querySelector("input[name='cloud']:checked")?.value,

    cad: document.querySelector("input[name='cad']:checked")?.value,

    ti: document.querySelector("input[name='ti']:checked")?.value,
  };

  let puntaje = 0;

  // Calificaciones específicas
  if (respuestas.desafiosm2m.includes("compatibilidad")) puntaje += 0.688;
  if (respuestas.desafiosm2m.includes("costos")) puntaje += 0.688;
  if (respuestas.desafiosm2m.includes("estandares")) puntaje += 0.688;
  if (respuestas.desafiosm2m.includes("ciberseguridad")) puntaje += 0.688;
  if (respuestas.desafiosm2m.includes("capacitacion")) puntaje += 0.688;

  if (respuestas.optimizacion.includes("integracion")) puntaje += 0.688;
  if (respuestas.optimizacion.includes("automatizacion")) puntaje += 0.688;
  if (respuestas.optimizacion.includes("analisis")) puntaje += 0.688;
  if (respuestas.optimizacion.includes("estandares")) puntaje += 0.688;
  if (respuestas.optimizacion.includes("ia")) puntaje += 0.688;

  if (respuestas.simulacion === "uso_regular") puntaje += 3;
  if (respuestas.simulacion === "uso_parcial") puntaje += 2.25;
  if (respuestas.simulacion === "no_implementada") puntaje += 1.5;
  if (respuestas.simulacion === "desconocido") puntaje += 0.75;

  if (respuestas.metrica === "metricas_claras") puntaje += 3;
  if (respuestas.metrica === "metricas_basicas") puntaje += 2.25;
  if (respuestas.metrica === "sin_metricas") puntaje += 1.5;
  if (respuestas.metrica === "desconocido") puntaje += 0.75;

  if (respuestas.produccion === "cumplimiento_total") puntaje += 3;
  if (respuestas.produccion === "cumplimiento_parcial") puntaje += 2.25;
  if (respuestas.produccion === "con_plan") puntaje += 1.5;
  if (respuestas.produccion === "sin_cumplimiento") puntaje += 0.75;

  if (respuestas.tic.includes("eficiencia")) puntaje += 0.688;
  if (respuestas.tic.includes("areas_especificas")) puntaje += 0.688;
  if (respuestas.tic.includes("en_desarrollo")) puntaje += 0.688;
  if (respuestas.tic.includes("rol_complementario")) puntaje += 0.688;
  if (respuestas.tic.includes("oportunidades")) puntaje += 0.688;

  if (respuestas.rvirtual === "alta_efectividad") puntaje += 3;
  if (respuestas.rvirtual === "uso_experimental") puntaje += 2.25;
  if (respuestas.rvirtual === "evaluacion_futura") puntaje += 1.5;
  if (respuestas.rvirtual === "desconocido") puntaje += 0.75;

  if (respuestas.impresion3d.includes("produccion_rapida")) puntaje += 0.688;
  if (respuestas.impresion3d.includes("flexibilidad")) puntaje += 0.688;
  if (respuestas.impresion3d.includes("reduccion_desperdicio"))
    puntaje += 0.688;
  if (respuestas.impresion3d.includes("experimentacion")) puntaje += 0.688;
  if (respuestas.impresion3d.includes("agil_produccion")) puntaje += 0.688;

  if (respuestas.ciberfisicos === "implementacion_avanzada") puntaje += 3;
  if (respuestas.ciberfisicos === "implementacion_parcial") puntaje += 2.25;
  if (respuestas.ciberfisicos === "en_evaluacion") puntaje += 1.5;
  if (respuestas.ciberfisicos === "no_implementados") puntaje += 0.75;

  if (respuestas.ia === "implementación_integral") puntaje += 3;
  if (respuestas.ia === "implementacion_parcial") puntaje += 2.25;
  if (respuestas.ia === "en_evaluacion") puntaje += 1.5;
  if (respuestas.ia === "no_implementada") puntaje += 0.75;

  if (respuestas.hmi.includes("interfaces_intuitivas")) puntaje += 0.688;
  if (respuestas.hmi.includes("herramientas_visualizacion")) puntaje += 0.688;
  if (respuestas.hmi.includes("tiempo_real")) puntaje += 0.688;
  if (respuestas.hmi.includes("automatizacion_inteligente")) puntaje += 0.688;
  if (respuestas.hmi.includes("simulacion")) puntaje += 0.688;

  if (respuestas.iot.includes("visibilidad_seguimiento")) puntaje += 0.688;
  if (respuestas.iot.includes("analisis_prevencion")) puntaje += 0.688;
  if (respuestas.iot.includes("optimizacion_rutas")) puntaje += 0.688;
  if (respuestas.iot.includes("decisiones")) puntaje += 0.688;
  if (respuestas.iot.includes("reduccion_costos")) puntaje += 0.688;

  if (respuestas.cloud === "implementacion_efectiva") puntaje += 3;
  if (respuestas.cloud === "implementacion_parcial") puntaje += 2.25;
  if (respuestas.cloud === "uso_limitado") puntaje += 1.5;
  if (respuestas.cloud === "no_implementada") puntaje += 0.75;

  if (respuestas.cad === "integracion_completa") puntaje += 3;
  if (respuestas.cad === "integracion_parcial") puntaje += 2.25;
  if (respuestas.cad === "con_intencion") puntaje += 1.5;
  if (respuestas.cad === "sin_integracion") puntaje += 0.75;

  if (respuestas.ti === "proteccion_avanzada") puntaje += 3;
  if (respuestas.ti === "proteccion_parcial") puntaje += 2.25;
  if (respuestas.ti === "sin_protección_adecuada") puntaje += 1.5;
  if (respuestas.ti === "sin_informacion_clara") puntaje += 0.75;

  return puntaje;
}

// Función para calcular el puntaje de la Visión Estratégica
function calcularPuntajeEstrategica() {
  const respuestas = {
    mision: Array.from(
      document.querySelectorAll("input[name='mision']:checked")
    ).map((input) => input.value),

    innovacion: document.querySelector("input[name='innovacion']:checked")
      ?.value,

    tendencias: Array.from(
      document.querySelectorAll("input[name='tendencias']:checked")
    ).map((input) => input.value),

    responsabilidad: document.querySelector(
      "input[name='responsabilidad']:checked"
    )?.value,

    einnovacion: Array.from(
      document.querySelectorAll("input[name='einnovacion']:checked")
    ).map((input) => input.value),

    accion: Array.from(
      document.querySelectorAll("input[name='accion']:checked")
    ).map((input) => input.value),

    implementacion: Array.from(
      document.querySelectorAll("input[name='implementacion']:checked")
    ).map((input) => input.value),

    organizativas: Array.from(
      document.querySelectorAll("input[name='organizativas']:checked")
    ).map((input) => input.value),

    mejoras: Array.from(
      document.querySelectorAll("input[name='mejoras']:checked")
    ).map((input) => input.value),

    individual: document.querySelector("input[name='individual']:checked")
      ?.value,
  };

  let puntaje = 0;

  // Calificaciones específicas
  if (respuestas.mision.includes("tecnologias_avanzadas")) puntaje += 0.688;
  if (respuestas.mision.includes("automatizacion_flexibilidad"))
    puntaje += 0.688;
  if (respuestas.mision.includes("innovacion")) puntaje += 0.688;
  if (respuestas.mision.includes("sostenibilidad_seguridad")) puntaje += 0.688;
  if (respuestas.mision.includes("adaptabilidad")) puntaje += 0.688;

  if (respuestas.innovacion === "transformacion_activa") puntaje += 3;
  if (respuestas.innovacion === "transformacion_parcial") puntaje += 2.25;
  if (respuestas.innovacion === "enfoque_tradicional") puntaje += 1.5;
  if (respuestas.innovacion === "sin_informacion_clara") puntaje += 0.75;

  if (respuestas.tendencias.includes("conectividad_avanzada")) puntaje += 0.688;
  if (respuestas.tendencias.includes("inteligencia_artificial"))
    puntaje += 0.688;
  if (respuestas.tendencias.includes("robotica")) puntaje += 0.688;
  if (respuestas.tendencias.includes("fabricacion_aditiva")) puntaje += 0.688;
  if (respuestas.tendencias.includes("seguridad")) puntaje += 0.688;

  if (respuestas.responsabilidad.includes("evaluacion_madurez"))
    puntaje += 0.688;
  if (respuestas.responsabilidad.includes("evaluacion_competencias"))
    puntaje += 0.688;
  if (respuestas.responsabilidad.includes("analisis_impacto")) puntaje += 0.688;
  if (respuestas.responsabilidad.includes("consultorias")) puntaje += 0.688;
  if (respuestas.responsabilidad.includes("monitoreo")) puntaje += 0.688;

  if (respuestas.einnovacion.includes("desarrollo_estrategias"))
    puntaje += 0.688;
  if (respuestas.einnovacion.includes("cultura_innovacion")) puntaje += 0.688;
  if (respuestas.einnovacion.includes("desarrollo_habilidades"))
    puntaje += 0.688;
  if (respuestas.einnovacion.includes("alianzas_estrategicas"))
    puntaje += 0.688;
  if (respuestas.einnovacion.includes("optimizacion_tecnologias"))
    puntaje += 0.688;

  if (respuestas.accion.includes("definicion_objetivos")) puntaje += 0.688;
  if (respuestas.accion.includes("seleccion_tecnologias")) puntaje += 0.688;
  if (respuestas.accion.includes("liderazgo")) puntaje += 0.688;
  if (respuestas.accion.includes("integracion_sistemas")) puntaje += 0.688;
  if (respuestas.accion.includes("monitoreo")) puntaje += 0.688;

  if (respuestas.implementacion.includes("roi")) puntaje += 0.688;
  if (respuestas.implementacion.includes("eficiencia_operativa"))
    puntaje += 0.688;
  if (respuestas.implementacion.includes("indicadores_desempeño"))
    puntaje += 0.688;
  if (respuestas.implementacion.includes("impacto_costos")) puntaje += 0.688;
  if (respuestas.implementacion.includes("satisfaccion")) puntaje += 0.688;

  if (respuestas.organizativas.includes("capacitacion")) puntaje += 0.688;
  if (respuestas.organizativas.includes("innovacion")) puntaje += 0.688;
  if (respuestas.organizativas.includes("integracion")) puntaje += 0.688;
  if (respuestas.organizativas.includes("colaboracion")) puntaje += 0.688;
  if (respuestas.organizativas.includes("evaluacion")) puntaje += 0.688;

  if (respuestas.mejoras.includes("adopcion_tecnologias")) puntaje += 0.688;
  if (respuestas.mejoras.includes("metodologias_agiles")) puntaje += 0.688;
  if (respuestas.mejoras.includes("cultura_organizacional")) puntaje += 0.688;
  if (respuestas.mejoras.includes("colaboracion")) puntaje += 0.688;
  if (respuestas.mejoras.includes("analisis_datos")) puntaje += 0.688;

  if (respuestas.individual === "impacto_crucial") puntaje += 3;
  if (respuestas.individual === "contribucion_significativa") puntaje += 2.25;
  if (respuestas.individual === "dependencia_organizacional") puntaje += 1.5;
  if (respuestas.individual === "desconocido") puntaje += 0.75;

  return puntaje;
}

function enviarDatos() {
  console.log("Enviando datos...");
  const datos = {
    nombreEmpresa: document.getElementById("nombre-empresa").value,
    departamento: document.getElementById("departamento").value,
    municipio: document.getElementById("municipio").value,
    actividadPrincipal: document.getElementById("actividad-principal").value,
    figuraLegal: document.getElementById("figura-legal").value,
    nombre: document.getElementById("nombre").value,
    sector: document.getElementById("sector").value,
    cargo: document.getElementById("cargo").value,
    tamano: document.getElementById("tamano").value,
    sectorTecnologia: obtenerRespuestaRadio(
      document.getElementsByName("sector-tecnologia")
    ),
    herramientas: Array.from(
      document.querySelectorAll("input[name='herramientas']:checked")
    )
      .map((input) => input.value)
      .join(", "),
    estrategias: Array.from(
      document.querySelectorAll("input[name='estrategias']:checked")
    )
      .map((input) => input.value)
      .join(", "),
    contratacion: document.querySelector("input[name='contratacion']:checked")
      ?.value,
    personas: document.querySelector("input[name='personas']:checked")?.value,
    factor: document.querySelector("input[name='factor']:checked")?.value,
    principios: document.querySelector("input[name='principios']:checked")
      ?.value,
    desafiosm2m: Array.from(
      document.querySelectorAll("input[name='desafiosm2m']:checked")
    ).map((input) => input.value),
    optimizacion: Array.from(
      document.querySelectorAll("input[name='optimizacion']:checked")
    ).map((input) => input.value),
    simulacion: document.querySelector("input[name='simulacion']:checked")
      ?.value,
    metrica: document.querySelector("input[name='metrica']:checked")?.value,
    produccion: document.querySelector("input[name='produccion']:checked")
      ?.value,
    tic: Array.from(document.querySelectorAll("input[name='tic']:checked")).map(
      (input) => input.value
    ),
    rvirtual: document.querySelector("input[name='rvirtual']:checked")?.value,
    impresion3d: Array.from(
      document.querySelectorAll("input[name='impresion3d']:checked")
    ).map((input) => input.value),
    ciberfisicos: document.querySelector("input[name='ciberfisicos']:checked")
      ?.value,
    ia: document.querySelector("input[name='ia']:checked")?.value,
    hmi: Array.from(document.querySelectorAll("input[name='hmi']:checked")).map(
      (input) => input.value
    ),
    iot: Array.from(document.querySelectorAll("input[name='iot']:checked")).map(
      (input) => input.value
    ),
    cloud: document.querySelector("input[name='cloud']:checked")?.value,
    cad: document.querySelector("input[name='cad']:checked")?.value,
    ti: document.querySelector("input[name='ti']:checked")?.value,
    mision: Array.from(
      document.querySelectorAll("input[name='mision']:checked")
    ).map((input) => input.value),
    innovacion: document.querySelector("input[name='innovacion']:checked")
      ?.value,
    tendencias: Array.from(
      document.querySelectorAll("input[name='tendencias']:checked")
    ).map((input) => input.value),
    responsabilidad: document.querySelector(
      "input[name='responsabilidad']:checked"
    )?.value,
    einnovacion: Array.from(
      document.querySelectorAll("input[name='einnovacion']:checked")
    ).map((input) => input.value),
    accion: Array.from(
      document.querySelectorAll("input[name='accion']:checked")
    ).map((input) => input.value),
    implementacion: Array.from(
      document.querySelectorAll("input[name='implementacion']:checked")
    ).map((input) => input.value),
    organizativas: Array.from(
      document.querySelectorAll("input[name='organizativas']:checked")
    ).map((input) => input.value),
    mejoras: Array.from(
      document.querySelectorAll("input[name='mejoras']:checked")
    ).map((input) => input.value),
    individual: document.querySelector("input[name='individual']:checked")
      ?.value,
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
  const puntajeTotal =
    puntajeRecursosHumanos * 0.3 + // Ponderación 30%
    puntajeTecnica * 0.36 + // Ponderación 36%
    puntajeEstrategica * 0.34; // Ponderación 34%

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
