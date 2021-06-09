export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos=[];
    }

    increver(funcao){
        this._inscritos.push(funcao);
    }

    desinscrever(funcao){
        this._inscritos = this._inscritos.filter(f=> f !==funcao);
    }
 
    
    notificar(){
        this._inscritos.forEach(funcao => {
            funcao(this.notas);
        })
    }


    adicionar(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }
    deletarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
}
class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}