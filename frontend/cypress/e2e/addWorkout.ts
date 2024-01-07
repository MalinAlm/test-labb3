import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är på hemsidan och ser kalendern", () => {
  cy.get("#calendar").should("be.visible");
});

When("Jag klickar på ett datum", () => {
  cy.get(".react-calendar__viewContainer").within(() => {
    cy.get("button").first().click();
  });
});

Then("En popup visas", () => {
  cy.get("#popup-container").should("be.visible");
});
