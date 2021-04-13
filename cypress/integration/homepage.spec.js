/* eslint-disable no-undef */
describe("/company", () => {
	context("check company page", () => {
		it("check homepage", () => {
			cy.visit("/");
			cy.get(".infinite-scroll-component__outerdiv");
		});

		it("fetch data", () => {
			cy.visit("/");
			cy.request("https://pokeapi.co/api/v2/pokemon").should((response) => {
				expect(response.status).to.eq(200);
				expect(response).to.have.property("headers");
				expect(response).to.have.property("duration");
			});
		});

		it("open modal and close it", () => {
			cy.visit("/");
			cy.get(".react-responsive-modal-root").should("not.exist");
			cy.get(".react-responsive-modal-closeButton").should("not.exist");
			cy.get("#card img").first().should("have.attr", "alt", "pokemon").click();
			cy.get(".react-responsive-modal-root").should("exist");
			cy.get(".react-responsive-modal-closeButton").should("exist").click();
			cy.get(".react-responsive-modal-root").should("not.exist");
			cy.get(".react-responsive-modal-closeButton").should("not.exist");
		});
	});
});
