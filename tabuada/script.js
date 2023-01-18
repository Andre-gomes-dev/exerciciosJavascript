function tabuada() {
  var mult = document.querySelector("input#mult");
  var tab = document.querySelector("select#seltab");

  if (mult.value.length == 0) {
    window.alert("digite um numero, a caixa de texto nao pode estar vazia");
  } else {
    var multiplicando = Number(mult.value);
    for (let cont = 1; cont <= 10; cont++) {
      var item = document.createElement("option");
      item.text = `${multiplicando} x ${cont} = ${multiplicando * cont}`;
      item.value = `tab${cont}`;
      tab.appendChild(item);
    }
  }

  // result.innerHTML += `abaixo a tabuada de ${multiplicando} <br>`;
}
