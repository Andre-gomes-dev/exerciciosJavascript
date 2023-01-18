var numeros = [];
var res = document.querySelector("div#res");
function analisaNumero() {
  var addNumber = document.querySelector("input#addnumber");
  var gua = document.querySelector("select#guaNumero");

  numero = Number(addNumber.value);
  var item = document.createElement("option");

  if (addNumber.value.length == 0) {
    window.alert("Digite algum valor antes de continuar");
  } else if (numero > 0 && numero < 101) {
    if (numeros.includes(numero)) {
      window.alert("valor invalido ou ja presente na lista");
    } else {
      numeros.push(numero);
      item.text = `Valor ${numero} adcionado`;
      gua.appendChild(item); //adciona o item na section
      res.innerHTML = "";
    }
  } else {
    window.alert("o numero tem de estar entre 1 e 100, tente novamente");
  }
  addnumber.value = "";
  addNumber.focus();
}

// function finalizar() {}

function finalizar() {
  let soma = 0;
  //retornar o total de numeros.
  res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados</p>`;
  //retornar o maior valor
  var maximo = Math.max.apply(Math, numeros);
  var minimo = Math.min.apply(Math, numeros);
  res.innerHTML += `<p>maior valor -> ${maximo} </p>`;
  //o menor valor
  res.innerHTML += ` menor valor ->${minimo}`;
  //soma de todos os valores
  for (i in numeros) {
    soma += numeros[i];
  }
  res.innerHTML += `<p>Somandos todos os valores obtemos: ${soma} <br></p>`;
  //a media dos valores.
  var media = soma / numeros.length;
  res.innerHTML += `<p>A média dos valores digitados é ${media} <br></p>`;
}

// function finalizar() {
//   var res = document.querySelector("div#res");
//   let soma = 0;
//   //retornar o total de numeros.
//   res.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados`;
//   //retornar o maior valor
//   var maximo = Math.max.apply(Math, numeros);
//   var minimo = Math.min.apply(Math, numeros);
//   res.innerHTML += `maior valor -> ${maximo} menor valor ->${minimo}`;
//   //o menor valor
//   //soma de todos os valores
//   for (i in numeros) {
//     soma += numeros[i];
//   }
//   res.innerHTML += `Somandos todos os valores obtemos: ${soma}`;
//   //a media dos valores.
//   var media = soma / numeros.length;
//   res.innerHTML += `A média dos valores digitados é ${media}`;
// }
