class Pilha {
    constructor() {
        this.topo = -1;
        this.elementos = {};
    }

    get peek() {
        return this.elementos[this.topo];
    }

    push(elemento) {
        this.topo += 1;
        this.elementos[this.topo] = elemento;
    }

}

describe('Pilha', () => {

    let pilha;

    beforeEach(() => {
        pilha = new Pilha();
    });

    it('deve ser criada vazia', () => {


        expect(pilha.topo).toBe(-1);
        expect(pilha.elementos).toEqual({});    
    });

    it('deve empilhar um elemento', () => {

        pilha.push('elemento');
        expect(pilha.topo).toBe(0);
        expect(pilha.peek).toBe('elemento');

    });

    it.todo('deve desempilhar um elemento');

})