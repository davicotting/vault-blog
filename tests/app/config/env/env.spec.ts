describe("env | (Unit)", () => {
  it("should load successfully with valid environment variables", async () => {
    const { env } = await import("@/app/config/env/env");
    expect(env).toBeDefined();
  });
});
