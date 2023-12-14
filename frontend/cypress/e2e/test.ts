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
  cy.get("#pickDate").click();
  cy.contains("data-handler='selectDay' a").click();
});

Then("Datumet markeras", () => {});
