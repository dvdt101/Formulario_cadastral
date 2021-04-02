class Usuario {
  constructor(nom, mai, tel, data, sexo) {
    this._nome = nom;
    this._mail = mai;
    this._tel = tel;
    this._dataN = data;
    this._sexo = sexo;
  }

  toString() {
    return (
      '<table style="width:100%" id="tab">' +
      "<Caption>" +
      "Relatório" +
      "</Caption>" +
      "<tr>" +
      "<td>Nome</td>" +
      "<td>" +
      this._nome +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>E-mail</td>" +
      "<td>" +
      this._mail +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Teleone</td>" +
      "<td>" +
      this._tel +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Data</td>" +
      "<td>" +
      this._dataN +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Sexo</td>" +
      "<td>" +
      this._sexo +
      "</td>" +
      "</tr>" +
      "</table>"
    );
  }

  get nome() {
    return this._nome;
  }
  set nome(nome) {
    this._nome = nome;
  }

  get mail() {
    return this._mail;
  }
  set mail(mail) {
    this._mail = mail;
  }

  get tel() {
    return this._tel;
  }
  set tel(telefone) {
    this._tel = telefone;
  }

  get dataN() {
    return this._dataN;
  }
  set dataN(dataNascimento) {
    this._dataN = dataNascimento;
  }

  get sexo() {
    return this._sexo;
  }
  set sexo(sexo) {
    this._sexo = sexo;
  }
}
