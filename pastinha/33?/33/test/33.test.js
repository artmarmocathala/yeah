
function has33(string){
    if(string.length < 2) return -1;
    if(string.some((elemento) => typeof elemento !== 'number')) return -1;
    for(let i = 0; i < string.length - 1; i++){
        if(string[i] === 3 && string[i + 1] === 3) return 1;
    }
    return 0;
}

describe('has33', () => {

    it('deve retornar -1 se tiver menos de 2 elementos', () => {

        expect(has33([1])).toBe(-1);
        expect(has33([])).toBe(-1);

    });

    it('deve retornar -1 se houver caracteres não numéricos', () => {

        expect(has33(['a', 'b'])).toBe(-1);
        expect(has33(['a', 1])).toBe(-1);
        expect(has33([1, 'a'])).toBe(-1);

    });

    it('deve retornar 1 se houver 2 3 seguidos', () => {

        expect(has33([3, 3])).toBe(1);
        expect(has33([1, 3, 3])).toBe(1);
        expect(has33([1, 3, 3, 1])).toBe(1);

    });

    it('deve retornar 0 se não houver 2 3 seguidos', () => {

        expect(has33([1, 1])).toBe(0);
        expect(has33([1, 3])).toBe(0);
        expect(has33([3, 1, 3])).toBe(0);

    });

})