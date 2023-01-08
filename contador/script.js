function contarInicioFim() {
  var resultado = document.querySelector("div#res");

  var ini = document.querySelector("input#inicio");
  var fin = document.querySelector("input#fim");
  var pas = document.querySelector("input#passo");

  // var inicial = Number(ini.value);
  // var final = Number(fin.value);
  // var passo = Number(pas.value);

  // var ini = document.getElementById("inicio");
  // var fin = document.getElementById("fim");
  // var pas = document.getElementById("passo");

  if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
    alert("faltam dados");
    resultado.innerHTML = `Impossivel Contar, tente novamente`;
  } else {
    resultado.innerHTML = "Contando...";

    let inicial = Number(ini.value);
    let final = Number(fin.value);
    let passo = Number(pas.value);

    if (passo <= 0) {
      alert("passo invalido, considerando passo como 1");
      passo = 1;
    }

    if (inicial < final) {
      for (let contador = inicial; contador <= final; contador += passo) {
        resultado.innerHTML += `${contador}, \u{1f449}`;
      }
    } else {
      resultado.innerHTML = "Contando...";

      let inicial = Number(ini.value);
      let final = Number(fin.value);
      let passo = Number(pas.value);

      for (let contador = inicial; contador >= final; contador -= passo) {
        resultado.innerHTML += `${contador}, \u{1f449}`;
      }
    }
    resultado.innerHTML += `\u{1f3f4}`;
  }
}
