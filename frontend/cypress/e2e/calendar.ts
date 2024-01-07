import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är på hemsidan och ser en kalender", () => {
  cy.get("#calendar").should("be.visible");
});

When("Jag klickar på ett datum", () => {
  // cy.get(":nth-child(16)").click();
  cy.get(".react-calendar__viewContainer").within(() => {
    cy.get("button").first().click();
  });
});

Then("Datumet markeras", () => {
  cy.get(".react-calendar__tile--active");
});
