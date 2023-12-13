Feature: Kalender

Jag är på hemsidan och ser en kalender där jag kan välja datum. När datumet är klickat på så markeras det för att man ska kunna se vilket datum som är valt.

Scenario: Ett klick

Given Jag är på hemsidan och ser en kalender
When Jag klickar på ett datum
Then Datumet markeras
