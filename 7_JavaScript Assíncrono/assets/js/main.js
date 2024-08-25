// fetch('pessoas.json')
//       .then(resposta => resposta.json())
//       .then(json => carregaElementosNaPagina(json))
//       .catch(error => console.error('Erro ao carregar o JSON:', error));

// Usando Axios para buscar o arquivo JSON
axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data))
  .catch(error => console.error('Erro ao carregar o JSON:', error));

function carregaElementosNaPagina(json) {
  // Cria a tabela
  const table = document.createElement('table');

  // Cria o cabeçalho da tabela
  const header = table.createTHead();
  const headerRow = header.insertRow();
  ['Nome', 'Idade', 'Salário'].forEach(text => {
    const th = document.createElement('th');
    th.innerText = text;
    headerRow.appendChild(th);
  });

  // Cria o corpo da tabela
  const tbody = table.createTBody();

  // Preenche as linhas da tabela com os dados do JSON
  for (let pessoa of json) {
    const tr = tbody.insertRow();
    
    let td = tr.insertCell();
    td.innerText = pessoa.nome;

    td = tr.insertCell();
    td.innerText = pessoa.idade;

    td = tr.insertCell();
    td.innerText = pessoa.salario;
  }

  // Adiciona a tabela ao elemento com a classe "resultado"
  const resultado = document.querySelector('.resultado');
  if (resultado) {
    resultado.appendChild(table);
  } else {
    console.error('Elemento com a classe "resultado" não encontrado');
  }
}
