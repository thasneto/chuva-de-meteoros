// Coleção de Objetos
const chuvaDeMeteoros = [
	{ nome: 'Alfa Centaurídeos',     declinacao: -59 },
	{ nome: 'Gama Normídeos',         declinacao:         -50 },
	{ nome: 'Pi Pupídeos',                    declinacao:       -45 },
	{ nome: 'Líridas',                     declinacao:   34  },
	{ nome: 'Eta Aquáridas',               declinacao:         -1  },
	{ nome: 'Eta Líridas',           declinacao:       44  },
	{ nome: 'Bootídeos de Junho',             declinacao: 48  },
	{ nome: 'Alfa Capricornídeos',    declinacao:          -10 },
	{ nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
	{ nome: 'Piscis Austrinídeos',             declinacao:   -30 },
	{ nome: 'Perseidas',              declinacao:     58  },
];

// Filtrando Hemisférios Norte e Sul
function chuvaNorte (chuva) {
	return chuva.declinacao >= 0;
}

function chuvaSul (chuva) {
	return chuva.declinacao <= 0;
}

const chuvasNorte = chuvaDeMeteoros.filter(chuvaNorte);
const chuvasSul = chuvaDeMeteoros.filter(chuvaSul);

// Ordem Crescente pela declinação
function ordenarNorte (a, b) {
	return a.declinacao - b.declinacao;
}

function ordenarSul (a, b) {
	return b.declinacao - a.declinacao;
}

const ordemChuvasNorte = chuvasNorte.sort(ordenarNorte);
const ordemChuvasSul = chuvasSul.sort(ordenarSul)

// Iterando e imprimando a lista
function listaChuvasNorte (chuva, index) {
	let txt = `${index + 1}º - ${chuva.nome} - Dec: ${chuva.declinacao}`;
	console.log(txt);
}

function listaChuvasSul (chuva, index) {
	let txt = `${index + 1}º - ${chuva.nome} - Dec: ${chuva.declinacao}`;
	console.log(txt);
}

// Imprimindo
console.log(`Chuvas no Hemisfério Norte`);
ordemChuvasNorte.forEach(listaChuvasNorte);

console.log(`\nChuvas no Hemisfério Sul`);
ordemChuvasSul.forEach(listaChuvasSul);