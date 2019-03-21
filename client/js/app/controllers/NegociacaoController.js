class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document);

    this.inputData = $('#data')
    this.inputQuantidade = $('#quantidade')
    this.inputValor= $('#valor')
  }

  adiciona(event){
    event.preventDefault();

    const helper = new DateHelper();

    let data = helper.textoParaData(this.inputData.value);

    let negociacao = new Negociacao (
      data,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    console.log(negociacao)
    console.log(helper.dataParaTexto(negociacao._data));
  }
}
