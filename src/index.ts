/**
 * Add two numbers
 *
 * See:
 * {@link addAll}
 *
 * ```typescript
 * const sum: number = add(1, 2);
 * ```
 * @param a First number
 * @param b Second number
 * @returns The sum of both numbers
 * @category Algebra
 */
export const add = (a: number, b: number): number => a + b;

/**
 * Add many numbers
 *
 * See:
 * {@link addAll}
 *
 * ```typescript
 * const sum: number = addAll(1, 2, 3, 4);
 * ```
 * @param numbers Numbers to add
 * @returns The sum of all numbers
 * @category Algebra
 */
export const addAll = (...numbers: number[]): number =>
    numbers.reduce((prev, current) => add(prev, current));
