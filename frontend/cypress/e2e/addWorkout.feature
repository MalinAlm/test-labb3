Feature: Popupruta

Jag är på hemsidan och ser kalendern, jag klickar på ett datum i kalendern och får upp en ruta där jag senare kommer kunna välja träningstyp och lägga till anteckningar om mitt träningspass.

Scenario: Ett klick

Given Jag är på hemsidan och ser kalendern
When Jag klickar på ett datum
Then En popup visas
