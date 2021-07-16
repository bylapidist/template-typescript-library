import { add, addAll } from './index';

test('it adds two numbers', () => {
    expect(add(1, 1)).toEqual(2);
});

test('it adds many numbers', () => {
    expect(addAll(1, 1, 1)).toEqual(3);
});
