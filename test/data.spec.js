import {  sortAscNum, sortDesNum } from '../src/data.js';

// const num = [{ "num": "10"}, { "num": "12"}, { "num": "15"}];

describe('funcion que ordena en orden descendente', () => {    
  it('se espera una funcion', () => {    
    expect(typeof sortDesNum).toBe('function');
})
});

  // it('ordenar de 251 a 1', () => {
  //   expect(sortDesNum(num)).toEqual([{ "num": "15"}, { "num": "12"}, { "num": "10"}]); // expect lo que recibe y tobe es lo que se espera
  // });
  // });

  describe('funcion que ordena en orden ascendente', () => {    
    it('se espera una funcion', () => {    
      expect(typeof sortAscNum).toBe('function');
    });
  });