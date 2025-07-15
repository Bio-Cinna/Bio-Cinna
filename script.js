
const ramos = {
    "I Semestre": [
        { id: 1, nombre: "Química General I", creditos: 5, requisitos: [] },
        { id: 2, nombre: "Técnicas de Laboratorio Químico", creditos: 4, requisitos: [] },
        { id: 3, nombre: "Mecánica", creditos: 4, requisitos: [] },
        { id: 4, nombre: "Introducción al Cálculo", creditos: 5, requisitos: [] },
        { id: 5, nombre: "Razonamiento y Comunicación Científica", creditos: 5, requisitos: [] },
        { id: 6, nombre: "Inglés I", creditos: 3, requisitos: [] },
        { id: 7, nombre: "Cursos de Formación General", creditos: 4, requisitos: [] }
    ],
    "II Semestre": [
        { id: 8, nombre: "Química General II", creditos: 5, requisitos: [1] },
        { id: 9, nombre: "Laboratorio de Química General", creditos: 4, requisitos: [1,2] },
        { id: 10, nombre: "Electromagnetismo", creditos: 4, requisitos: [3,4] },
        { id: 11, nombre: "Cálculo Diferencial e Integral", creditos: 5, requisitos: [4] },
        { id: 12, nombre: "Biología General", creditos: 5, requisitos: [] },
        { id: 13, nombre: "Cursos de Formación General", creditos: 4, requisitos: [] },
        { id: 14, nombre: "Inglés II", creditos: 3, requisitos: [6] }
    ]
};

function crearMalla() {
    const contenedor = document.getElementById("contenedor-semestres");
    contenedor.innerHTML = "";
    let creditos = 0;

    for (const [semestre, lista] of Object.entries(ramos)) {
        const columna = document.createElement("div");
        columna.className = "semestre";
        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        columna.appendChild(titulo);

        for (const ramo of lista) {
            const aprobado = localStorage.getItem(`ramo_${ramo.id}`) === "true";
            const requisitosOk = ramo.requisitos.every(r => localStorage.getItem(`ramo_${r}`) === "true");

            const div = document.createElement("div");
            div.className = "ramo";
            div.textContent = `${ramo.nombre} (${ramo.creditos} SCT)`;
            div.title = ramo.requisitos.length ? `Requiere: ${ramo.requisitos.join(", ")}` : "Sin requisitos";

            if (aprobado) {
                div.classList.add("aprobado");
                creditos += ramo.creditos;
            } else if (requisitosOk || ramo.requisitos.length === 0) {
                div.classList.add("habilitado");
            }

            div.onclick = () => {
                const nuevo = !(localStorage.getItem(`ramo_${ramo.id}`) === "true");
                localStorage.setItem(`ramo_${ramo.id}`, nuevo.toString());
                crearMalla();
            };

            columna.appendChild(div);
        }

        contenedor.appendChild(columna);
    }

    document.getElementById("creditos").textContent = `Créditos aprobados: ${creditos} SCT`;
}

function reiniciar() {
    for (let key in localStorage) {
        if (key.startsWith("ramo_")) localStorage.removeItem(key);
    }
    crearMalla();
}

crearMalla();
,
// Semestres del III al XI
    "III Semestre": [
        { id: 15, nombre: "Química Orgánica I", creditos: 5, requisitos: [8] },
        { id: 16, nombre: "Química Analítica I", creditos: 5, requisitos: [8, 9] },
        { id: 17, nombre: "Laboratorio I de Química Orgánica", creditos: 4, requisitos: [8, 9] },
        { id: 18, nombre: "Estadística y Análisis de Datos", creditos: 3, requisitos: [11] },
        { id: 19, nombre: "Fisiología Celular", creditos: 4, requisitos: [1, 10, 12] },
        { id: 20, nombre: "Cultura Científica: Divulgación y Enseñanza", creditos: 4, requisitos: [5] },
        { id: 21, nombre: "Inglés III", creditos: 3, requisitos: [6] },
        { id: 22, nombre: "Cursos de Formación General", creditos: 2, requisitos: [] }
    ],
    "IV Semestre": [
        { id: 23, nombre: "Química Orgánica II", creditos: 5, requisitos: [15] },
        { id: 24, nombre: "Laboratorio de Análisis Químico", creditos: 4, requisitos: [16, 9, 18] },
        { id: 25, nombre: "Química Analítica II", creditos: 5, requisitos: [16] },
        { id: 26, nombre: "Fisicoquímica I", creditos: 5, requisitos: [3, 11, 15] },
        { id: 27, nombre: "Fisiología de Sistemas", creditos: 4, requisitos: [19] },
        { id: 28, nombre: "Taller de Cultura Científica", creditos: 4, requisitos: [20] },
        { id: 29, nombre: "Inglés IV", creditos: 3, requisitos: [21] }
    ],
    "V Semestre": [
        { id: 30, nombre: "Laboratorio de Análisis Instrumental", creditos: 4, requisitos: [24, 25] },
        { id: 31, nombre: "Bioquímica General", creditos: 9, requisitos: [23, 26] },
        { id: 32, nombre: "Estructura y Función de Organelos Celulares", creditos: 6, requisitos: [23, 27] },
        { id: 33, nombre: "Fisicoquímica para Ciencias Biológicas", creditos: 7, requisitos: [26] },
        { id: 34, nombre: "Electivo Especializado", creditos: 4, requisitos: [] }
    ],
    "VI Semestre": [
        { id: 35, nombre: "Estructura y Función de Proteínas", creditos: 8, requisitos: [31, 33] },
        { id: 36, nombre: "Genética Molecular", creditos: 8, requisitos: [31] },
        { id: 37, nombre: "Inmunología Celular y Molecular", creditos: 8, requisitos: [32] },
        { id: 38, nombre: "Microbiología General", creditos: 6, requisitos: [32] }
    ],
    "VII Semestre": [
        { id: 39, nombre: "Química Fisiológica y Patológica", creditos: 6, requisitos: [35, 37] },
        { id: 40, nombre: "Genética Molecular en Eucariontes", creditos: 6, requisitos: [36] },
        { id: 41, nombre: "Fisiología y Genética Microbiana", creditos: 8, requisitos: [36, 38] },
        { id: 42, nombre: "Administración y Gestión", creditos: 4, requisitos: [28] },
        { id: 43, nombre: "Unidad de Investigación en Bioquímica", creditos: 6, requisitos: [30, 31] }
    ],
    "VIII Semestre": [
        { id: 44, nombre: "Bioquímica Clínica y Patológica", creditos: 8, requisitos: [39] },
        { id: 45, nombre: "Fisiología y Bioquímica Vegetal", creditos: 4, requisitos: [40] },
        { id: 46, nombre: "Bioética", creditos: 3, requisitos: [39] },
        { id: 47, nombre: "Formulación y Evaluación de Proyectos Científicos", creditos: 4, requisitos: [35] },
        { id: 48, nombre: "Bioinformática", creditos: 5, requisitos: [35, 40] },
        { id: 49, nombre: "Práctica Profesional I", creditos: 6, requisitos: [35, 36] }
    ],
    "IX Semestre": [
        { id: 50, nombre: "Laboratorio de Bioquímica Clínica", creditos: 6, requisitos: [42, 44] },
        { id: 51, nombre: "Tópicos de Farmacología", creditos: 4, requisitos: [44, 46] },
        { id: 52, nombre: "Biotecnología", creditos: 6, requisitos: [44, 46] },
        { id: 53, nombre: "Electivo Especializado", creditos: 4, requisitos: [] },
        { id: 54, nombre: "Electivo Especializado", creditos: 4, requisitos: [] },
        { id: 55, nombre: "Práctica Profesional II", creditos: 6, requisitos: [49] }
    ],
    "X Semestre": [
        { id: 56, nombre: "Unidad de Investigación Avanzada en Bioquímica", creditos: 6, requisitos: [47, 50, 52] },
        { id: 57, nombre: "Bioprocesos Industriales", creditos: 6, requisitos: [42, 52] },
        { id: 58, nombre: "Electivo Especializado", creditos: 4, requisitos: [] },
        { id: 59, nombre: "Electivo Especializado", creditos: 4, requisitos: [] },
        { id: 60, nombre: "Anteproyecto Memoria de Título", creditos: 9, requisitos: [50, 51, 52] }
    ],
    "XI Semestre": [
        { id: 61, nombre: "Memoria de Título", creditos: 30, requisitos: [60] }
    ]
};
crearMalla();
