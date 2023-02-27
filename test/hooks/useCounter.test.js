import { act, renderHook } from "@testing-library/react"
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const {counter, increment, decrement, reset} = result.current;

        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con un valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const {counter} = result.current;
        expect(counter).toBe(100);
    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter(10) );
        const {increment} = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(13);
    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(10) );
        const {decrement} = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);
    });

    test('Debe de hacer reset al contador', () => {

        const { result } = renderHook( () => useCounter(10) );
        const {increment, reset} = result.current;

        act( () => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(10);
    });
})