import WorkoutForm from "../../src/components/WorkoutForm";

describe("WorkoutForm.cy.tsx", () => {
  it("render input and button", () => {
    cy.mount(<WorkoutForm />);
    cy.get("input").type("testtttt");
    cy.get("button").submit();
  });
});
