import { cn } from "@/lib/utils";

describe("cn | (Unit)", () => {
  it("should merge class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should resolve tailwind conflicts keeping the last value", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });

  it("should ignore falsy values", () => {
    expect(cn("foo", false, undefined, null, "bar")).toBe("foo bar");
  });

  it("should return empty string when no arguments are given", () => {
    expect(cn()).toBe("");
  });
});
