import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const home = require("../../pages/homepage");

Given(`the main page`, () => {
  cy.visit("https://automationteststore.com/");
});

When(`see the Header`, () => {
  cy.get("header").should("be.visible");
});

When(`see quick access section`, () => {
  home.getQuickAccessSection().should("be.visible");
});

Then(`check {string} button is displayed`, (buttonText) => {
  cy.get("ul#customer_menu_top li>a").should("have.text", buttonText);
});

Then(`check the options: {string}`, (optionList) => {
  optionList = optionList.split(", ");

  home.getQuickAccessMainText().each((element, $index) => {
    home
      .getQuickAccessMainText()
      .eq($index)
      .should("contain.text", optionList[$index]);
  });
});
