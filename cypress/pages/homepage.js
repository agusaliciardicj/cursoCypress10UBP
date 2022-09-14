class HomePage {
  getQuickAccessSection() {
    return cy.get("section.promo_section");
  }

  getQuickAccessMainText() {
    return cy.get("div.promo_text h2");
  }
}
module.exports = new HomePage();
