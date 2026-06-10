// Questão 1 — Média de notas e filtro de aprovados
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const alunosM = alunos
  .map((aluno) => ({
    nome: aluno.nome,
    media: aluno.notas.reduce(
      (media, nota) => media + nota / aluno.notas.length,
      0,
    ),
  }))
  .filter((alunosM) => alunosM.media >= 7)
  .sort((a, b) => b.media - a.media);
console.log(alunosM);

// Tentativa muito mal-sucedida
// let names = alunos.map((alunos) => {nome: alunos.nome, media: alunos.notas.reduce((media, grade) => )})
// console.log(names)
// let grades = alunos.map((alunos) => alunos.notas)
// console.log(grades)

// let medias = grades.reduce((media, grade) => grades[i] / 3)
// console.log(medias)
// let i = 0;
// let media = alunos.reduce((i, alunos) => alunos.notas[i] / 3, 0)
// console.log(media)

// Questão 2 — Catálogo de filmes com busca e ordenação
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero,criterio) {
  const filtro = filmes.filter((filme) => filme.genero === genero);

  if (criterio === 'titulo') {
    filtro.sort((a,b) => a.titulo.localeCompare(b.titulo));
  } else if(criterio === 'ano'){
    filtro.sort((a,b) => (b.ano - a.ano));
  } else {
    console.log('Critério inválido!');
    filtro.length = 0;
  }

  console.log(filtro.map((filme) => `${filme.titulo} (${filme.ano}) - ${filme.genero}`))
}

buscarFilmes('ficção', 'ano');

// Vou buscar manter essa resposta
// const filmesFilter = filmes
//   .map((filmes) => ({
//     Título: filmes.titulo,
//     Ano: filmes.ano,
//     Gênero: filmes.genero,
//   }))
//   .filter((filmesFilter) => filmesFilter.Gênero === "ficção")
//   .sort((a, b) => b.Ano - a.Ano);
// console.log(filmesFilter);
