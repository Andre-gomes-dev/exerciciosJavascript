function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (formAno.value.length == 0 || formAno.value >= ano) {
    window.alert("Error, verifique os dados e verifique novamente.");
  } else {
    var formgen = window.document.getElementsByName("radgen");
    var idade = ano - Number(formAno.value);
    // res.innerHTML = `Idade calculada: ${idade}`;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formgen[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        //kid
      } else if (idade < 21) {
        //young
      } else if (idade < 60) {
        //adult
      } else {
        //old
      }
    } else if (formgen[1].checked) {
      genero = "mulher";

      if (idade >= 0 && idade < 10) {
        //kid
      } else if (idade < 21) {
        //young
      } else if (idade < 60) {
        //adult
      } else {
        //old
      }
    }
    res.innerHTML = `Foi Detectado ${genero} com ${idade}anos de idade`;
  }
}
