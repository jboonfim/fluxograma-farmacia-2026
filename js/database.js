/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#47a3ff"];


window.courses = [
    // 1º Período
    { name: "Bases Morfol Aplicadas à Farm", credits: 6, code: "BMW103", semester: 1 },
    { name: "Bioquímica FF I", credits: 3, code: "BQM101", semester: 1 },
    { name: "Farmacêutico e Sociedade", credits: 2, code: "FFW111", semester: 1 },
    { name: "Ativ Curricular Extensão - Far", credits: 0, code: "FFWZ50", semester: 1 },
    { name: "Química Geral I", credits: 4, code: "IQG114", semester: 1 },
    { name: "Cálculo para Farmácia", credits: 3, code: "MAC108", semester: 1 },

    // 2º Período
    { name: "Bioquímica FF II", credits: 3, code: "BQM103", semester: 2, requirements: [1] },
    { name: "Fisiologia Humana", credits: 6, code: "CFF122", semester: 2, requirements: [0, 1] },
    { name: "Polít e Plan em Saúde Pública", credits: 2, code: "FFW121", semester: 2, requirements: [2] },
    { name: "Fisico-quimica I F", credits: 2, code: "IQF235", semester: 2, requirements: [4, 5] },
    { name: "Quím Inorgânica Estrutural FF", credits: 2, code: "IQG122", semester: 2, requirements: [4] },
    { name: "Química Orgânica I F", credits: 4, code: "IQO120", semester: 2, requirements: [4] },

    // 3º Período
    { name: "Farmacocin e Farmacodi Fundam", credits: 4, code: "BMF310", semester: 3, requirements: [7] },
    { name: "Farmácia Clínica", credits: 2, code: "FFW231", semester: 3, requirements: [7, 2] },
    { name: "Diag Lab Cuidado Farmacêutico", credits: 2, code: "FFW232", semester: 3, requirements: [6, 7] },
    { name: "Est Sup Farmácia Comunitária", credits: 3, code: "FFWU10", semester: 3, requirements: [8] },
    { name: "Química Analítica Farm I", credits: 2, code: "IQA123", semester: 3, requirements: [4] },
    { name: "Físico-química II FF", credits: 2, code: "IQF232", semester: 3, requirements: [9] },
    { name: "Métodos Espectrométricos", credits: 3, code: "IQO220", semester: 3, requirements: [11] },
    { name: "Quimica Orgânica II F", credits: 4, code: "IQO230", semester: 3, requirements: [11] },

    // 4º Período 
    { name: "PCQ I", credits: 3, code: "FFW241", semester: 4, requirements: [16, 18] },
    { name: "Química Farmac e Medicinal I", credits: 2, code: "FFW242", semester: 4, requirements: [12, 19], corequirements: [22] },
    { name: "MACF", credits: 1, code: "FFW243", semester: 4, requirements: [12, 19], corequirements: [21] },
    { name: "Química Analítica Farm II", credits: 2, code: "IQA233", semester: 4, requirements: [16], corequirements: [24] },
    { name: "Química Analítica Farm Exp", credits: 1, code: "IQA240", semester: 4, requirements: [16, 4], corequirements: [23] },
    { name: "Química de Coordenação", credits: 2, code: "IQG241", semester: 4, requirements: [10] },
    { name: "Quím Orgânica Experimental FF", credits: 2, code: "IQO242", semester: 4, requirements: [18, 19] },

    // 5º Período
    { name: "Toxicologia Geral", credits: 2, code: "FFW351", semester: 5, requirements: [21], corequirements: [28] },
    { name: "Quím Farm II e Toxicológica", credits: 2, code: "FFW352", semester: 5, requirements: [21, 22], corequirements: [27] },
    { name: "Gestão e Plan da Assist Farma", credits: 4, code: "FFW353", semester: 5, requirements: [8] },
    { name: "PCQ II", credits: 4, code: "FFW354", semester: 5, requirements: [20] },
    { name: "Hematologia F", credits: 2, code: "FFW355", semester: 5, requirements: [12, 14] },
    { name: "Microbiologia e Imunologia F", credits: 5, code: "IMW360", semester: 5, requirements: [6, 7] },
    { name: "Atividades Acad. Optativas (Farm I)", credits: 7, semester: 5 },

    // 6º Período 
    { name: "CIF I", credits: 5, code: "FFW361", semester: 6, requirements: [13, 14, 21, 32] },
    { name: "CIF II", credits: 4, code: "FFW362", semester: 6, requirements: [13, 14, 21, 32] },
    { name: "Farmacobotânica", credits: 1, code: "FFW363", semester: 6, requirements: [0] },
    { name: "Gestão Farmacêutica", credits: 2, code: "FFW364", semester: 6, requirements: [8] },
    { name: "PCQ III", credits: 3, code: "FFW365", semester: 6, requirements: [20] },

    // 7º Período 
    { name: "CIF III", credits: 6, code: "FFW471", semester: 7, requirements: [13, 14, 21] },
    { name: "CIF IV", credits: 4, code: "FFW472", semester: 7, requirements: [13, 14, 21] },
    { name: "Farmacognosia", credits: 4, code: "FFW473", semester: 7, requirements: [36, 26] },
    { name: "PCQ IV", credits: 2, code: "FFW474", semester: 7, requirements: [30, 38] },
    { name: "Atividades Acad. Optativas (Farm II)", credits: 6, semester: 7 },

    // 8º Período 
    { name: "CIF V", credits: 4, code: "FFW481", semester: 8, requirements: [13, 14, 21] },
    { name: "Farmacoepidem e Bioestat Aplic", credits: 3, code: "FFW482", semester: 8, requirements: [8] },
    { name: "PCQ V", credits: 2, code: "FFW483", semester: 8, requirements: [30, 38] },
    { name: "Gen e Bio Mol Aplicadas à Farm", credits: 2, code: "FFW484", semester: 8, requirements: [0, 6] },
    { name: "Biotecnologia Farmacêutica", credits: 2, code: "FFW485", semester: 8, requirements: [32] },
    { name: "Metodologia Científica", credits: 2, code: "FFW486", semester: 8 },
    { name: "Est Sup em Farmácia Magistral", credits: 1, code: "FFWU11", semester: 8, requirements: [42] },
    { name: "Atividades Acad. Optativas", credits: 4, semester: 8 },

    // 9º Período
    { name: "CIF VI", credits: 6, code: "FFW591", semester: 9, requirements: [13, 14, 21] },
    { name: "Proc e Contr de Quali Aliment", credits: 3, code: "FFW592", semester: 9, requirements: [6, 23] },
    { name: "PCQ VI", credits: 1, code: "FFW593", semester: 9, requirements: [46] },
    { name: "Trabalho Conclusão Curso (TCC)", credits: 1, code: "FFWK03", semester: 9, requirements: [49] },
    { name: "Economia e Administ Emp Farmac", credits: 3, code: "IEE326", semester: 9 },
    { name: "Atividades Acad. Optativas", credits: 4, semester: 9 },
    { name: "Atividades Acad. Optativas (Farm III)", credits: 2, semester: 9 },
    { name: "Atividades Acad. Optativas (Complementares)", credits: 2, semester: 9 },

    // 10º Período
    { name: "Farmacoterapia no Cuidado Farm", credits: 3, code: "FFW501", semester: 10, requirements: [34, 35, 39, 40, 44, 52] },
    { name: "CIF VII", credits: 4, code: "FFW502", semester: 10, requirements: [13, 14, 21] },
    { name: "PCQ VII", credits: 2, code: "FFW503", semester: 10, requirements: [41, 46] },
    { name: "Atividades Acad. Optativas", credits: 4, semester: 10 },
];
