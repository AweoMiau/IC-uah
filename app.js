const datosMalla = {
    "malla": {
        "s1": [
            ["Introducción a la Microeconomía","INTMIC","10","10","PC",[],"I"],
            ["Matemática I","MAT-I","12","12","PC",[],"A"],
            ["Introducción a la Adminsitración I","INAD-I","10","10","PC",[],"I"],
            ["Habilidades de Aprendizaje I","HAB-I","5","5","PC",[],"I"],
            ["Ética General","ETICG","5","5","PC",[],"I"],
            ["Habilidades de Aprendizaje II","HAB-II","3","3","PC",[],"I"]
        ],
        "s2": [
            ["Introducción a la Macroeconomía","INTMAC","10","10","PC",[],"P"],
            ["Matemática II","MAT-II","8","8","PC",["MAT-I"],"A"],
            ["Introducción a la Administración II","INAD-II","8","8","PC",["INAD-I"],"P"],
            ["Contabilidad I","CON-I","8","8","PC",[],"P"],
            ["Habilidades de Aprendizaje III","HAB-III","3","3","PC",[],"P"],
            ["Optativo Formación General","OFG-1","5","5","OFC",[],"I"],
            ["Inglés I","ING-I","10","10","PC",[],"I"]
        ],
        "s3": [
            ["Microeconomía I","MICRO-I","8","8","PC",["MAT-II","INTMIC"],"I"],
            ["Matemática III","MAT-III","8","8","PC",["MAT-II"],"A"],
            ["Pensamiento Estratégico","PENEST","7","7","PC",["INAD-II"],"I"],
            ["Contabilidad II","CON-II","8","8","PC",["CON-I"],"I"],
            ["Tecnología de la Información","TEC","3","3","PC",[],"I"],
            ["Optativo Formación Teológica","OFT-1","5","5","OFC",[],"I"],
            ["Inglés II","ING-II","10","10","PC",["ING-I"],"I"]
        ],
        "s4": [
            ["Macroeconomía I","MACRO-I","8","8","PC",["MAT-II","INTMAC"],"P"],
            ["Matemática IV","MAT-IV","8","8","PC",["MAT-III"],"P"],
            ["Personas y Organizaciones","PYO","7","7","PC",["PENEST"],"P"],
            ["Estadística I","EST-I","8","8","PC",["MAT-II","TEC"],"P"],
            ["Marketing I","MARK-I","8","8","PC",["PENEST"],"P"],
            ["Optativo Formación General","OFG-2","5","5","OFC",[],"P"],
            ["Optativo Formación Teológica","OFT-2","5","5","OFC",[],"P"],
            ["Práctica Básica","PB","13","13","PB",["INTMIC","PENEST"],""]
        ],
        "s5": [
            ["Microeconomía II","MICRO-II","10","10","PC",["MICRO-I"],"I"],
            ["Matemáticas para la Economía","MATPARECO","8","8","ECONOM",["MAT-IV"],"I"],
            ["Estadística II","EST-II","8","8","PC",["EST-I"],"I"],
            ["Gestión de Personas I","GESTPER-I","8","8","ADMIN",["PYO"],"I"],
            ["Finanzas I","FIN-I","8","8","PC",["MAT-II"],"I"],
            ["Habilidades de Apredizaje IV","HAB-IV","5","5","PC",[],"I"],
            ["Inglés III","ING-III","10","10","PC",["ING-II"],"I"]
        ],
        "s6": [
            ["Microeconomía III","MICRO-III","10","10","ECONOM",["MICRO-II","MATPARECO"],"P"],
            ["Macroeconomía II","MACRO-II","10","10","PC",["MACRO-I","MAT-III"],"P"],
            ["Econometría","ECON","10","10","ECONOM",["EST-II","MAT-III"],"P"],
            ["Finanzas Públicas","FINPUB","10","10","ECONOM",["MICRO-I"],"P"],
            ["Habilidades Profesionales I","HABPROF-I","5","5","PC",["HAB-IV"],"P"],
            ["Habilidades Profesionales II","HABPROF-II","5","5","PC",["HAB-IV"],"P"],
            ["Contabilidad para la Gestión","CONPARGE","10","10","ADMIN",["CON-II"],"P"],
            ["Econometría para la Gestión","ECONPARGE","10","10","ADMIN",["MAT-III","EST-II"],"P"],
            ["Marketing II","MARK-II","10","10","ADMIN",["MARK-I"],"P"]
        ],
        "s7": [
            ["Organización Industrial","ORGAIN","10","10","PC",["MICRO-II"],"I"],
            ["Macroeconomía III","MACRO-III","10","10","ECONOM",["MACRO-II"],"I"],
            ["Microeconometría","MIC-ECON","12","12","ECONOM",["ECON"],"I"],
            ["Finanzas II","FIN-II","12","12","PC",["FIN-I"],"I"],
            ["Habilidades Profesionales III","HABPROF-III","5","5","PC",["HAB-IV"],"I"],
            ["Gestión de la innovación","GESTIN","12","12","ADMIN",["PYO"],""],
            ["Gestión de Personas II","GESTPER-II","10","10","ADMIN",["GESTPER-I"],""]
        ],
        "s8": [
            ["Teoría de Juegos","TEODJ","10","10","ECONOM",["MICRO-II"],""],
            ["Economía Internacional","ECONO-INT","10","10","ECONOM",["MACRO-II"],""],
            ["Macroeconometría","MAC-ECON","10","10","ECONOM",["ECON"],""],
            ["Evaluación de Proyectos","EVALDPR","10","10","PC",["PB","FIN-II"],""],
            ["Optativo Formación Complementaria","OFC-I","10","10","OFC",[],""],
            ["Gestión de Personas III","GESTPER-III","10","10","ADMIN",["GESTPER-II"],""],
            ["Gestión de Operaciones","GESTOP","10","10","ADMIN",["EST-II"],""],
            ["Estrategia","EST","12","12","ADMIN",["MARK-I"],""]
        ],
        "s9": [
            ["Práctica Profesional","PP","18","18","PP",["PB","HABPROF-III"],""],
            ["Regulación y Competencia","REYCO","12","12","ECONOM",[ ["ORGAIN","TEODJ"] ],""],
            ["Política Económica","POLECON","10","10","ECONOM",["MACRO-II"],""],
            ["Desarrollo Económico","DECON","12","12","ECONOM",["MIC-ECON"],""],
            ["Ética en los Negocios y la Economía","ETICNYE","8","8","PC",["ETICG","PB"],""],
            ["Emprendimiento","EMP","12","12","ADMIN",["GESTIN"],""],
            ["Consultoría","COSULT","12","12","ADMIN",["GESTPER-II"],""],
            ["Juego de Negocios","JUEGDNEG","10","10","ADMIN",["EST"],""],
            ["Optativo Formación General","OFC-II","10","10","OFC",[],""]
        ],
        "s10": [
            ["Taller de Titulación","TATITUT","20","20","PC",[],""],
            ["Habilidades Profesionales IV","HABPROF-V","8","8","PC",["HAB-IV"],""],
            ["Optativo Formación Complementaria","OFC-III","10","10","OFC",[],""],
            ["Optativo Formación Complementaria","OFC-IV","10","10","OFC",[],""]
        ]
    },
    "categories": {
        "PC": ["var(--color-gris-pc)", "Plan Común", "#FFFFFF"],
        "PB": ["var(--color-naranjo)", "Práctica Básica", "#FFFFFF"],
        "ECONOM": ["var(--color-morado-eco)", "Mención Economía", "#FFFFFF"],
        "ADMIN": ["var(--color-amarillo-adm)", "Mención Administración", "#000000"],
        "OFC": ["var(--color-verde-opt)", "Optativo", "#000000"],
        "PP": ["var(--color-naranjo)", "Práctica Profesional", "#FFFFFF"]
    }
};

const estadoRamos = {};
let mencionSeleccionada = 'ADMIN';

const diccionarioPreReqs = {};
const diccionarioNombres = {}; 

for (const ramos of Object.values(datosMalla.malla)) {
    ramos.forEach(ramoData => {
        const nombre = ramoData[0];
        const codigo = ramoData[1];
        const preReqs = ramoData[5];
        
        diccionarioPreReqs[codigo] = preReqs;
        diccionarioNombres[codigo] = nombre; 
    });
}

function init() {
    cargarProgreso();
    renderLeyenda();
    renderMalla();

    document.getElementById('btn-admin').classList.toggle('activo', mencionSeleccionada === 'ADMIN');
    document.getElementById('btn-eco').classList.toggle('activo', mencionSeleccionada === 'ECONOM');

    actualizarEstados();
}

function renderLeyenda() {
    const contenedor = document.getElementById('leyenda');
    for (const [key, value] of Object.entries(datosMalla.categories)) {
        const item = document.createElement('div');
        item.className = 'leyenda-item';
        item.innerHTML = `<div class="leyenda-color" style="background-color: ${value[0]};"></div> ${value[1]}`;
        contenedor.appendChild(item);
    }
}

function renderMalla() {
    const contenedor = document.getElementById('malla');
    let numSemestre = 1;

    for (const [semestre, ramos] of Object.entries(datosMalla.malla)) {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        
        const titulo = document.createElement('div');
        titulo.className = 'semestre-titulo';
        titulo.innerText = `Semestre ${numSemestre}`;
        col.appendChild(titulo);

        ramos.forEach(ramoData => {
            const [nombre, codigo, creditos, horas, categoria, preReqs] = ramoData;
            
            if (categoria === 'ECONOM' && mencionSeleccionada === 'ADMIN') return;
            if (categoria === 'ADMIN' && mencionSeleccionada === 'ECONOM') return;

            if (estadoRamos[codigo] === undefined) {
                estadoRamos[codigo] = false; 
            }
            
            const configColor = datosMalla.categories[categoria];
            const colorBg = configColor[0];
            const colorText = configColor[2];

            const bgCreditos = colorText === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';

            const divRamo = document.createElement('div');
            divRamo.className = 'ramo';
            divRamo.id = `ramo-${codigo}`;
            divRamo.style.backgroundColor = colorBg;
            divRamo.style.color = colorText;
            
            divRamo.innerHTML = `
                <div class="ramo-creditos" style="background-color: ${bgCreditos}">${creditos} CR</div>
                <div class="ramo-nombre">${nombre}</div>
                <div class="ramo-codigo">${codigo}</div>
            `;
            
            divRamo.onclick = () => toggleRamo(codigo, preReqs);
            col.appendChild(divRamo);
        });

        contenedor.appendChild(col);
        numSemestre++;
    }
}

function verificarPreReqs(reqs) {
    return reqs.every(req => {
        if (Array.isArray(req)) {
            return req.some(r => estadoRamos[r]);
        } else {
            return estadoRamos[req];
        }
    });
}

function obtenerTextoFaltantes(preReqs) {
    let faltantes = [];
    preReqs.forEach(req => {
        if (Array.isArray(req)) {
            const algunAprobado = req.some(r => estadoRamos[r]);
            if (!algunAprobado) {
                const nombresO = req.map(r => diccionarioNombres[r]).join(" o ");
                faltantes.push(`(${nombresO})`);
            }
        } else {
            if (!estadoRamos[req]) {
                faltantes.push(diccionarioNombres[req]);
            }
        }
    });
    return faltantes;
}

let toastTimeout;
function mostrarNotificacion(mensaje) {
    const toast = document.getElementById('toast-notificacion');
    if (!toast) return; 
    
    toast.innerText = mensaje;
    toast.classList.add('mostrar');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 4000); 
}

function toggleRamo(codigo, preReqs) {
    const preReqCumplidos = verificarPreReqs(preReqs);
    
    if (!preReqCumplidos && !estadoRamos[codigo]) {
        const nombresFaltantes = obtenerTextoFaltantes(preReqs);
        mostrarNotificacion(`Para tomar este curso requieres aprobar:\n• ${nombresFaltantes.join('\n• ')}`);
        return;
    }

    estadoRamos[codigo] = !estadoRamos[codigo];
    
    if (!estadoRamos[codigo]) {
        desaprobarDependientes(); 
    }

    actualizarEstados();
    guardarProgreso();
}

function desaprobarDependientes() {
    let huboCambios;
    do {
        huboCambios = false;
        for (const codigo in estadoRamos) {
            if (estadoRamos[codigo]) {
                const reqs = diccionarioPreReqs[codigo];
                if (!verificarPreReqs(reqs)) {
                    estadoRamos[codigo] = false;
                    huboCambios = true;
                }
            }
        }
    } while (huboCambios); 
}

function actualizarEstados() {
    const todosLosRamos = document.querySelectorAll('.ramo');
    
    todosLosRamos.forEach(el => {
        const codigo = el.id.replace('ramo-', '');
        const reqs = diccionarioPreReqs[codigo]; 
        
        el.classList.remove('estado-bloqueado', 'estado-disponible', 'estado-aprobado');

        if (estadoRamos[codigo]) {
            el.classList.add('estado-aprobado');
        } else {
            const preReqCumplidos = verificarPreReqs(reqs);
            if (preReqCumplidos) {
                el.classList.add('estado-disponible');
            } else {
                el.classList.add('estado-bloqueado');
            }
        }
    });
}

function cambiarMencion(nuevaMencion) {
    if (mencionSeleccionada === nuevaMencion) return; 

    mencionSeleccionada = nuevaMencion;
    
    document.getElementById('btn-admin').classList.toggle('activo', nuevaMencion === 'ADMIN');
    document.getElementById('btn-eco').classList.toggle('activo', nuevaMencion === 'ECONOM');

    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';

    renderMalla();
    desaprobarDependientes();
    actualizarEstados();
    guardarProgreso();
}

// ==========================================
// MEMORIA LOCAL (GUARDADO AUTOMÁTICO)
// ==========================================
function guardarProgreso() {
    localStorage.setItem('mallaUAH_estadoRamos', JSON.stringify(estadoRamos));
    localStorage.setItem('mallaUAH_mencion', mencionSeleccionada);
}

function cargarProgreso() {
    const ramosGuardados = localStorage.getItem('mallaUAH_estadoRamos');
    const mencionGuardada = localStorage.getItem('mallaUAH_mencion');
    const temaOscuroGuardado = localStorage.getItem('mallaUAH_temaOscuro'); // <-- NUEVO

    if (ramosGuardados) {
        Object.assign(estadoRamos, JSON.parse(ramosGuardados));
    }
    
    if (mencionGuardada) {
        mencionSeleccionada = mencionGuardada;
    }

    // <-- NUEVO: Aplicar el modo oscuro si estaba guardado
    if (temaOscuroGuardado === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('btn-dark').innerText = '☀️ Modo Claro';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('btn-dark');
    
    // <-- NUEVO: Guardar la preferencia al apretar el botón
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = '☀️ Modo Claro';
        localStorage.setItem('mallaUAH_temaOscuro', 'true');
    } else {
        btn.innerText = '🌙 Modo Oscuro';
        localStorage.setItem('mallaUAH_temaOscuro', 'false');
    }
}

function exportarMalla() {
    mostrarNotificacion("📸 Preparando imagen de alta calidad...");

    setTimeout(() => {
        document.body.classList.add('modo-exportacion');

        html2canvas(document.body, {
            scale: 2, 
            backgroundColor: document.body.classList.contains('dark-mode') ? '#121212' : '#FFFFFF',
            windowWidth: 1600 
        }).then(canvas => {
            document.body.classList.remove('modo-exportacion');

            const enlace = document.createElement('a');
            enlace.download = 'Mi_Malla_UAH.png';
            enlace.href = canvas.toDataURL('image/png');
            enlace.click();

            setTimeout(() => {
                mostrarNotificacion("✅ ¡Malla descargada Correctamente!");
            }, 200);
        });
    }, 400); 
}

// ==========================================
// NAVEGACIÓN Y MENÚ LATERAL
// ==========================================
function toggleSidebar() {
    document.getElementById('sidebar-left').classList.toggle('activo');
    document.getElementById('sidebar-overlay').classList.toggle('activo');
}

function cambiarVista(vista) {
    toggleSidebar(); 
    document.querySelectorAll('.btn-nav').forEach(btn => btn.classList.remove('activo'));

    document.getElementById('vista-malla').style.display = 'none';
    document.getElementById('vista-calendario').style.display = 'none';
    document.getElementById('vista-calculadora').style.display = 'none';
    document.querySelector('.acciones-container .btn-exportar').style.display = 'none'; 

    if (vista === 'malla') {
        document.getElementById('vista-malla').style.display = 'block';
        document.querySelector('.acciones-container .btn-exportar').style.display = 'inline-block'; 
        document.querySelectorAll('.btn-nav')[0].classList.add('activo');
    } else if (vista === 'calendario') {
        document.getElementById('vista-calendario').style.display = 'block';
        document.querySelectorAll('.btn-nav')[1].classList.add('activo');
        // Borramos la función que dibujaba el calendario roto
    } else if (vista === 'calculadora') {
        document.getElementById('vista-calculadora').style.display = 'block';
        document.querySelectorAll('.btn-nav')[2].classList.add('activo');
        inicializarCalculadora();
    }
}

// ==========================================
// CALCULADORA DE NOTAS (SISTEMA DE PERFILES)
// ==========================================

let perfilesCalc = JSON.parse(localStorage.getItem('mallaUAH_calcPerfiles')) || { 
    "Ramo General": { meta: 4.0, pesoExamen: 30, evaluaciones: [] } 
};
let perfilActualCalc = localStorage.getItem('mallaUAH_calcPerfilActual') || "Ramo General";
let modoModalPerfil = 'crear'; // Puede ser 'crear' o 'renombrar'

// Asegurar que exista un perfil si hay errores en caché
if (!perfilesCalc[perfilActualCalc]) {
    perfilActualCalc = Object.keys(perfilesCalc)[0];
}

function inicializarCalculadora() {
    actualizarSelectorPerfiles();
    renderizarPerfilCalc();
}

function actualizarSelectorPerfiles() {
    const selector = document.getElementById('calc-selector-ramo');
    selector.innerHTML = '';
    
    Object.keys(perfilesCalc).forEach(nombre => {
        const option = document.createElement('option');
        option.value = nombre;
        option.innerText = nombre;
        if (nombre === perfilActualCalc) option.selected = true;
        selector.appendChild(option);
    });
}

function cambiarPerfilCalc() {
    perfilActualCalc = document.getElementById('calc-selector-ramo').value;
    localStorage.setItem('mallaUAH_calcPerfilActual', perfilActualCalc);
    renderizarPerfilCalc();
}

// ---- CONTROL DE MODALES (SIN ALERTS NATIVOS) ----

function abrirModalCrearPerfil() {
    modoModalPerfil = 'crear';
    document.getElementById('modal-perfil-titulo').innerText = "Nuevo Ramo";
    document.getElementById('input-nombre-perfil').value = "";
    document.getElementById('modal-perfil-calc').style.display = 'flex';
}

function abrirModalRenombrarPerfil() {
    modoModalPerfil = 'renombrar';
    document.getElementById('modal-perfil-titulo').innerText = "Renombrar Ramo";
    document.getElementById('input-nombre-perfil').value = perfilActualCalc;
    document.getElementById('modal-perfil-calc').style.display = 'flex';
}

function cerrarModalPerfil() {
    document.getElementById('modal-perfil-calc').style.display = 'none';
}

function guardarModalPerfil() {
    const nombreNuevo = document.getElementById('input-nombre-perfil').value.trim();
    
    if (nombreNuevo === "") {
        mostrarNotificacion("⚠️ Debes ingresar un nombre.");
        return;
    }
    
    if (perfilesCalc[nombreNuevo] && nombreNuevo !== perfilActualCalc) {
        mostrarNotificacion("⚠️ Ya existe un ramo con ese nombre.");
        return;
    }

    if (modoModalPerfil === 'crear') {
        perfilesCalc[nombreNuevo] = { meta: 4.0, pesoExamen: 30, evaluaciones: [] };
        perfilActualCalc = nombreNuevo;
        mostrarNotificacion(`✅ Ramo "${nombreNuevo}" creado.`);
    } 
    else if (modoModalPerfil === 'renombrar') {
        if (nombreNuevo !== perfilActualCalc) {
            perfilesCalc[nombreNuevo] = perfilesCalc[perfilActualCalc];
            delete perfilesCalc[perfilActualCalc];
            perfilActualCalc = nombreNuevo;
            mostrarNotificacion("✅ Ramo renombrado.");
        }
    }
    
    guardarEnMemoriaCalc();
    actualizarSelectorPerfiles();
    renderizarPerfilCalc();
    cerrarModalPerfil();
}

function abrirModalEliminarPerfil() {
    if (Object.keys(perfilesCalc).length === 1) {
        mostrarNotificacion("⚠️ No puedes borrar tu único ramo.");
        return;
    }
    document.getElementById('nombre-ramo-borrar').innerText = perfilActualCalc;
    document.getElementById('modal-eliminar-perfil').style.display = 'flex';
}

function cerrarModalEliminarPerfil() {
    document.getElementById('modal-eliminar-perfil').style.display = 'none';
}

function confirmarEliminarPerfil() {
    delete perfilesCalc[perfilActualCalc];
    perfilActualCalc = Object.keys(perfilesCalc)[0]; 
    
    guardarEnMemoriaCalc();
    actualizarSelectorPerfiles();
    renderizarPerfilCalc();
    cerrarModalEliminarPerfil();
    mostrarNotificacion("🗑️ Ramo eliminado.");
}

// ---- LOGICA INTERNA Y MATEMÁTICAS ----

function guardarEnMemoriaCalc() {
    localStorage.setItem('mallaUAH_calcPerfiles', JSON.stringify(perfilesCalc));
    localStorage.setItem('mallaUAH_calcPerfilActual', perfilActualCalc);
}

function guardarEstadoCalc() {
    if (!perfilesCalc[perfilActualCalc]) return;
    
    perfilesCalc[perfilActualCalc].meta = parseFloat(document.getElementById('calc-meta').value) || 4.0;
    perfilesCalc[perfilActualCalc].pesoExamen = parseFloat(document.getElementById('calc-peso-examen').value) || 0;
    
    const filas = document.querySelectorAll('.calc-fila');
    const evaluaciones = [];
    
    filas.forEach(fila => {
        const id = fila.id.replace('calc-fila-', '');
        evaluaciones.push({
            id: id,
            nombre: fila.querySelector('.val-nombre').value,
            nota: fila.querySelector('.val-nota').value,
            peso: fila.querySelector('.val-peso').value
        });
    });
    
    perfilesCalc[perfilActualCalc].evaluaciones = evaluaciones;
    guardarEnMemoriaCalc();
    calcularNotas(); 
}

function renderizarPerfilCalc() {
    const data = perfilesCalc[perfilActualCalc];
    document.getElementById('calc-meta').value = data.meta;
    document.getElementById('calc-peso-examen').value = data.pesoExamen;
    
    const contenedor = document.getElementById('calc-filas');
    contenedor.innerHTML = '';
    
    data.evaluaciones.forEach(ev => {
        dibujarFilaEnPantalla(ev.id, ev.nombre, ev.nota, ev.peso);
    });
    
    calcularNotas();
}

function agregarFilaCalc() {
    const nuevoId = Date.now().toString(); 
    dibujarFilaEnPantalla(nuevoId, "", "", "");
    guardarEstadoCalc();
}

function eliminarFilaCalc(id) {
    const fila = document.getElementById(`calc-fila-${id}`);
    if (fila) fila.remove();
    guardarEstadoCalc();
}

function dibujarFilaEnPantalla(id, nombre, nota, peso) {
    const contenedor = document.getElementById('calc-filas');
    const fila = document.createElement('div');
    fila.className = 'calc-fila';
    fila.id = `calc-fila-${id}`;
    
    fila.innerHTML = `
        <input type="text" class="input-calc val-nombre" placeholder="Nombre (opcional)" maxlength="30" value="${nombre}" oninput="guardarEstadoCalc()">
        <input type="text" class="input-calc val-nota" placeholder="1.0 - 7.0" value="${nota}" oninput="formatearNota(event, this)">
        <input type="number" class="input-calc val-peso" placeholder="%" step="1" min="0" max="100" value="${peso}" oninput="guardarEstadoCalc()">
        <button onclick="eliminarFilaCalc('${id}')" class="btn-eliminar-fila" title="Eliminar fila">✖</button>
    `;
    contenedor.appendChild(fila);
}

function formatearNota(e, input) {
    if (e.inputType === 'deleteContentBackward') {
        guardarEstadoCalc();
        return;
    }
    
    let val = input.value.replace(/[^0-9]/g, ''); 
    if (val.length > 2) val = val.substring(0, 2);
    
    if (val.length === 2) {
        input.value = val.charAt(0) + '.' + val.charAt(1);
    } else {
        input.value = val;
    }
    guardarEstadoCalc();
}

function calcularNotas() {
    let sumaPesos = 0;
    let sumaPonderada = 0;
    let meta = parseFloat(document.getElementById('calc-meta').value) || 4.0;
    let pesoExamen = parseFloat(document.getElementById('calc-peso-examen').value) || 0;
    
    const filas = document.querySelectorAll('.calc-fila');
    
    filas.forEach(fila => {
        const notaStr = fila.querySelector('.val-nota').value;
        const pesoStr = fila.querySelector('.val-peso').value;
        
        let peso = 0;
        if (pesoStr !== "") {
            peso = parseFloat(pesoStr);
            sumaPesos += peso;
        }

        if (notaStr !== "" && peso > 0) {
            const nota = parseFloat(notaStr);
            sumaPonderada += (nota * (peso / 100));
        }
    });

    const txtSumaPeso = document.getElementById('calc-suma-peso');
    const txtPromedio = document.getElementById('calc-promedio');
    const cajaMensaje = document.getElementById('calc-mensaje-final');
    
    txtSumaPeso.innerText = `${sumaPesos}%`;
    txtSumaPeso.style.color = (sumaPesos + pesoExamen) > 100 ? '#d9534f' : 'inherit';
    
    let promedioActual = 0;
    if (sumaPesos > 0) {
        promedioActual = sumaPonderada / (sumaPesos / 100);
    }
    txtPromedio.innerText = sumaPesos > 0 ? promedioActual.toFixed(2) : '-';
    
    cajaMensaje.className = ''; 
    cajaMensaje.style.background = '';
    cajaMensaje.style.color = '';
    cajaMensaje.style.border = '';
    
    if (sumaPesos === 0) {
        cajaMensaje.innerHTML = "Ingresa tus calificaciones y sus ponderaciones.";
        cajaMensaje.style.background = 'var(--bg-bloqueado)';
        return;
    }

    if ((sumaPesos + pesoExamen) > 100) {
        cajaMensaje.className = 'calc-alerta-roja';
        cajaMensaje.innerHTML = "Error: La suma de las ponderaciones de las notas y el examen supera el 100%.";
        return;
    }

    if ((sumaPesos + pesoExamen) < 100) {
        cajaMensaje.className = 'calc-alerta-naranja';
        const faltante = 100 - sumaPesos - pesoExamen;
        cajaMensaje.innerHTML = `Falta un <strong>${faltante}%</strong> de evaluaciones por registrar en la tabla para realizar el cálculo del examen.`;
        return;
    }

    if (pesoExamen === 0) {
        if (sumaPonderada >= meta) {
            cajaMensaje.className = 'calc-alerta-verde';
            cajaMensaje.innerHTML = `Curso aprobado. Tu promedio final es <strong>${sumaPonderada.toFixed(2)}</strong>.`;
        } else {
            cajaMensaje.className = 'calc-alerta-roja';
            cajaMensaje.innerHTML = `Curso reprobado. Tu promedio final es <strong>${sumaPonderada.toFixed(2)}</strong>.`;
        }
        return;
    }

    const notaNecesaria = (meta - sumaPonderada) / (pesoExamen / 100);

    if (notaNecesaria > 7.0) {
        cajaMensaje.className = 'calc-alerta-roja';
        cajaMensaje.innerHTML = `Matemáticamente imposible. Requieres un <strong>${notaNecesaria.toFixed(2)}</strong> en el examen final.`;
    } else if (notaNecesaria <= 1.0) {
        cajaMensaje.className = 'calc-alerta-verde';
        cajaMensaje.innerHTML = `Situación asegurada. Incluso obteniendo <strong>1.0</strong> en el examen final, apruebas el curso.`;
    } else {
        cajaMensaje.className = 'calc-alerta-naranja';
        cajaMensaje.innerHTML = `Necesitarás un <strong>${notaNecesaria.toFixed(2)}</strong> en el examen final para aprobar.`;
    }
}

window.onload = init;