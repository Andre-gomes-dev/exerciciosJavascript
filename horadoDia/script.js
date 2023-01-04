function verificaHora() {
  var hora = new Date();
  //var horaAtual = hora.getHours();
  var horaAtual = 0;
  var TempoDoDia = "";
  var resultado = document.querySelector("div#res");
  var tempo = document.querySelector("div#tempo");

  var img = document.createElement("img");
  img.setAttribute("id", "imagem");

  if (horaAtual >= 0 && horaAtual < 5) {
    //madrugada
    TempoDoDia = "Madrugada";
    img.setAttribute("src", "images/madrugada.jpg");
    document.body.style.background = "rgb(" + [50, 32, 50].join(",") + ")";
  } else if (horaAtual >= 5 && horaAtual < 12) {
    //manha
    TempoDoDia = "Manhã";
    img.setAttribute("src", "images/manha.jpg");
    document.body.style.background = "rgb(" + [219, 190, 21].join(",") + ")";
    //rgb(219, 190, 21);
  } else if (horaAtual >= 12 && horaAtual < 18) {
    //tarde
    TempoDoDia = "Tarde";
    img.setAttribute("src", "images/tarde.jpg");
    document.body.style.background = "rgb(" + [184, 108, 9].join(",") + ")";
    //rgb(184, 108, 9);
  } else {
    TempoDoDia = "Noite";
    img.setAttribute("src", "images/noite.jpg");
    document.body.style.background = "rgb(" + [52, 96, 243].join(",") + ")";
    //rgb(52, 96, 243);
  }
  resultado.appendChild(img);
  tempo.innerHTML = `Agora é ${TempoDoDia}`;
  //resultado.innerHTML = `agora são ${horaAtual} horas`;
  //resultado.appendChild = `${TempoDoDia}`;
}
