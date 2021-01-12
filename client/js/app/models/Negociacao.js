class Negociacao{

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); //garantindo data imutavel
        this._quantidade = quantidade ;
        this._valor = valor;
        Object.freeze(this); //Congelando o this para que nao seja possivel altera-lo
    }

    get volume(){
        return (this._quantidade * this._valor);
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}