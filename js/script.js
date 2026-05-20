let livros = JSON.parse(localStorage.getItem("livros")) || {
  lidos: [],
  queroLer: []
};

let lugares = JSON.parse(localStorage.getItem("lugares")) || {
  fomos: [],
  queremosIr: []
};

let contadorAnimacao = Number(localStorage.getItem("contadorAnimacao")) || 0;

function aplicarTemaSalvo() {
  const tema = localStorage.getItem("temaPagina");

  if (tema === "homem-ferro") {
    document.body.classList.add("tema-homem-ferro");
  } else if (tema === "capitao-america") {
    document.body.classList.add("tema-capitao-america");
  }
}

function alternarTemaHomemFerro() {
  document.body.classList.remove("tema-capitao-america");
  document.body.classList.toggle("tema-homem-ferro");

  if (document.body.classList.contains("tema-homem-ferro")) {
    localStorage.setItem("temaPagina", "homem-ferro");
  } else {
    localStorage.setItem("temaPagina", "normal");
  }
}

function alternarTemaCapitaoAmerica() {
  document.body.classList.remove("tema-homem-ferro");
  document.body.classList.toggle("tema-capitao-america");

  if (document.body.classList.contains("tema-capitao-america")) {
    localStorage.setItem("temaPagina", "capitao-america");
  } else {
    localStorage.setItem("temaPagina", "normal");
  }
}

function abrirCoracao3D() {
  const fundoCoracao = document.getElementById("fundoCoracao");

  if (!fundoCoracao) {
    return;
  }

  fundoCoracao.classList.add("ativo");
}

function fecharCoracao3D() {
  const fundoCoracao = document.getElementById("fundoCoracao");

  if (!fundoCoracao) {
    return;
  }

  fundoCoracao.classList.remove("ativo");
}

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
  mostrarAnimacaoHeroi();
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
  mostrarGlobo();
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

function mostrarAnimacaoHeroi() {
  const batmanFundo = document.getElementById("batmanFundo");

  if (!batmanFundo) {
    return;
  }

  batmanFundo.classList.remove("ativo");
  batmanFundo.classList.remove("batman-ativo");
  batmanFundo.classList.remove("spiderman-ativo");

  if (contadorAnimacao % 2 === 0) {
    batmanFundo.classList.add("batman-ativo");
  } else {
    batmanFundo.classList.add("spiderman-ativo");
  }

  contadorAnimacao++;
  localStorage.setItem("contadorAnimacao", contadorAnimacao);

  void batmanFundo.offsetWidth;

  batmanFundo.classList.add("ativo");

  setTimeout(function() {
    batmanFundo.classList.remove("ativo");
    batmanFundo.classList.remove("batman-ativo");
    batmanFundo.classList.remove("spiderman-ativo");
  }, 2000);
}

function mostrarGlobo() {
  const fundoGlobo = document.getElementById("fundoGlobo");

  if (!fundoGlobo) {
    return;
  }

  fundoGlobo.classList.remove("ativo");

  void fundoGlobo.offsetWidth;

  fundoGlobo.classList.add("ativo");

  setTimeout(function() {
    fundoGlobo.classList.remove("ativo");
  }, 1900);
}

aplicarTemaSalvo();
mostrarLivros();
mostrarLugares();
