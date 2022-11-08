const task1 = require ('./task1')


test ("Test case1", () => {
    expect(task1.sum(1,2)).toBe(3)
});

test ("Test case2", () => {
    expect(task1.subtract(6,3)).toBe(3)
});

test ("Test case3", () => {
    expect(task1.multiply(2,3)).toBe(6)
});

test ("Test case4", () => {
    expect(task1.divide(12,3)).toBe(4)
});

test ("Test case5", () => {
    expect(task1.divide(12,0)).toBe(undefined)
});