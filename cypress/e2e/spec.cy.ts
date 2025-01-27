describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h3").should("contain", "Add your journey");
  });
});
