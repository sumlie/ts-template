// example test file for demonstration purposes

import { fibonacci } from "@/utils/fibonacci";

describe("fibonacci", () => {
  it("calculates the first numbers correctly", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(10)).toBe(55);
  });

  it("throws on negative and non-integer input", () => {
    expect(() => fibonacci(-1)).toThrow();
    expect(() => fibonacci(1.5)).toThrow();
    expect(() => fibonacci(NaN)).toThrow();
    expect(() => fibonacci(undefined as unknown as number)).toThrow();
  });
});
