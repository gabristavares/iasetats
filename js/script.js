let livros = JSON.parse(localStorage.getItem("livros")) || {
  lidos: [],
  queroLer: []
};

let lugares = JSON.parse(localStorage.getItem("lugares")) || {
  fomos: [],
  queremosIr: []
};

function salvarLivros() {
  localStorage.setItem("livros", JSON.stringify(livros));
}

function salvarLugares() {
  localStorage.setItem("lugares", JSON.stringify(lugares));
}

function adicionarLivro() {
  const nomeLivro = document.getElementById("nomeLivro").value.trim();
  const tipoLivro = document.getElementById("tipoLivro").value;

  if (nomeLivro === "") {
    alert("Digite o nome do livro.");
    return;
  }

  livros[tipoLivro].push(nomeLivro);
  salvarLivros();

  document.getElementById("nomeLivro").value = "";
  mostrarLivros();
}

function removerLivro(tipo, posicao) {
  livros[tipo].splice(posicao, 1);
  salvarLivros();
  mostrarLivros();
}

function mostrarLivros() {
  const listaLidos = document.getElementById("listaLidos");
  const listaQueroLer = document.getElementById("listaQueroLer");

  if (!listaLidos || !listaQueroLer) {
    return;
  }

  listaLidos.innerHTML = "";
  listaQueroLer.innerHTML = "";

  livros.lidos.forEach(function(livro, posicao) {
    listaLidos.innerHTML += `
      <li>
        <span>${livro}</span>
        <button onclick="removerLivro('lidos', ${posicao})">Excluir</button>
      </li>
    `;
  });

  livros.queroLer.forEach(function(livro, posicao) {
    listaQueroLer.innerHTML += `
      <li>
        <span>${livro}</span>
        <button onclick="removerLivro('queroLer', ${posicao})">Excluir</button>
      </li>
    `;
  });
}

function adicionarLugar() {
  const nomeLugar = document.getElementById("nomeLugar").value.trim();
  const tipoLugar = document.getElementById("tipoLugar").value;

  if (nomeLugar === "") {
    alert("Digite o nome do lugar.");
    return;
  }

  lugares[tipoLugar].push(nomeLugar);
  salvarLugares();

  document.getElementById("nomeLugar").value = "";
  mostrarLugares();
}

function removerLugar(tipo, posicao) {
  lugares[tipo].splice(posicao, 1);
  salvarLugares();
  mostrarLugares();
}

function mostrarLugares() {
  const listaFomos = document.getElementById("listaFomos");
  const listaQueremosIr = document.getElementById("listaQueremosIr");

  if (!listaFomos || !listaQueremosIr) {
    return;
  }

  listaFomos.innerHTML = "";
  listaQueremosIr.innerHTML = "";

  lugares.fomos.forEach(function(lugar, posicao) {
    listaFomos.innerHTML += `
      <li>
        <span>${lugar}</span>
        <button onclick="removerLugar('fomos', ${posicao})">Excluir</button>
      </li>
    `;
  });

  lugares.queremosIr.forEach(function(lugar, posicao) {
    listaQueremosIr.innerHTML += `
      <li>
        <span>${lugar}</span>
        <button onclick="removerLugar('queremosIr', ${posicao})">Excluir</button>
      </li>
    `;
  });
}

mostrarLivros();
mostrarLugares();