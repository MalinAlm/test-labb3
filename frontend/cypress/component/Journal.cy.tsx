import Journal from "../../src/pages/Journal";

describe("Journal.cy.tsx", () => {
  it("renders wourkout data", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/journal",
      },
      {
        body: [
          {
            date: "2024-01-07",
            workout: "Cardio",
            notes: "Idag har jag sprungit i 45 min",
          },
          {
            date: "2024-01-08",
            workout: "Yoga",
            notes: "Idag har jag tränat yoga i 50 min",
          },
          {
            date: "2024-01-09",
            workout: "Weight lifting",
            notes: "Idag har jag tränat ben",
          },
        ],
      }
    ).as("journal");

    cy.mount(<Journal />);
    cy.wait("@journal");
    cy.get("p").should("contain", "2024-01-07");
    cy.get("p").should("contain", "Cardio");
    cy.get("p").should("contain", "Idag har jag sprungit i 45 min");

    cy.get("p").should("contain", "2024-01-08");
    cy.get("p").should("contain", "Yoga");
    cy.get("p").should("contain", "Idag har jag tränat yoga i 50 min");

    cy.get("p").should("contain", "2024-01-09");
    cy.get("p").should("contain", "Weight lifting");
    cy.get("p").should("contain", "Idag har jag tränat ben");
  });
});
