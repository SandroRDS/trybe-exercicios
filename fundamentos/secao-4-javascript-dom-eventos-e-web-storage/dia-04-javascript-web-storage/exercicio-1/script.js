const paragrafo = {
  elemento: document.querySelector(".paragraph"),
  backgroundColor: "white",
  color: "black",
  fontSize: "12pt",
  lineHeight: "normal",
  fontFamily: "Times New Roman",
  alterarFormatacao(propriedade, valor) {
    this[propriedade] = valor;
    this.elemento.style[propriedade] = valor;
    this.salvarFormatacao();
  },
  salvarFormatacao() {
    const { backgroundColor, color, fontSize, lineHeight, fontFamily } = this;
    const dados = Object.assign(
      {},
      { backgroundColor, color, fontSize, lineHeight, fontFamily }
    );
    localStorage.setItem("formatacao", JSON.stringify(dados));
  },
  recarregarFormatacao() {
    const dados = JSON.parse(localStorage.getItem("formatacao"));
    console.log("🚀 -> recarregarFormatacao -> dados:", dados);

    if (dados) {
      for (const [chave, valor] of Object.entries(dados)) {
        console.log(`${chave}: ${valor}`);
        this.alterarFormatacao(chave, valor);
      }
    }
  },
};

const atualizarFormatacao = ({ target }) =>
  paragrafo.alterarFormatacao(
    target.parentNode.dataset.estilo,
    target.innerText
  );

const buttons = document.querySelectorAll(".options button");
buttons.forEach((botao) =>
  botao.addEventListener("click", atualizarFormatacao)
);

paragrafo.recarregarFormatacao();
