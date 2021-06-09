export default class Categorias  {
    constructor() {
        this.categorias =["Musica","Trabalho","Casa"];
        this._inscritos =[];

    }

    increver(funcao){
        this._inscritos.push(funcao);
    }

    desinscrever(funcao){

        this._inscritos = this._inscritos.filter(f=> f !==funcao);

    }


    notificar(){
        this._inscritos.forEach(funcao => {
            funcao(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }

}