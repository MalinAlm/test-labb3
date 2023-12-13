import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är på hemsidan och ser en kalender", () => {});

When("Jag klickar på ett datum", () => {});

Then("Datumet markeras", () => {});
