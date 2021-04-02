var colecao = [];
let demo = document.getElementById("demo");

function relatorio() {
  nome = document.getElementById("Nome").value;
  email = document.getElementById("E-mail").value;
  telefone = document.getElementById("telefone").value;
  data = document.getElementById("data").value;
  if (document.getElementById("radiogenero1").checked) {
    sex = "Masculino";
  } else if (document.getElementById("radiogenero2").checked) {
    sex = "Feminino";
  }

  var user = new Usuario(nome, email, telefone, data, sex);
  colecao.push(user);
  demo.innerHTML = user.toString();
}

function listarCadastrados() {
  var Tab = " ";
  fLen = colecao.length;
  for (var i = 0; i < fLen; i++) {
    Tab = Tab + colecao[i].nome + "&nbsp |";
    Tab = Tab + colecao[i].mail + "&nbsp |";
    Tab = Tab + colecao[i].tel + "&nbsp |";
    Tab = Tab + colecao[i].dataN + "&nbsp |";
    Tab = Tab + colecao[i].sexo + "<br>";
  }
  demo.innerHTML = Tab;
}

function gerarRelacaoPDF() {
  let line = 50;
  let doc = new jsPDF();
  doc.setFontSize(30);
  doc.text(30, 30, "Relação de usuarios cadastrados");
  doc.setFontSize(18);
  doc.text(10, 40, "Nome");
  doc.text(50, 40, "Email");
  doc.text(95, 40, "Telefone");
  doc.text(127, 40, "Data Nascimento");
  doc.text(185, 40, "Sexo");
  doc.setFontSize(12);
  for (let user of colecao) {
    doc.text(3, line, user.nome);
    doc.text(40, line, user.mail);
    doc.text(95, line, user.tel);
    doc.text(140, line, user.dataN);
    doc.text(185, line, user.sexo);
    line += 10;
  }
  doc.save("a4.pdf");
}
