import { html, render } from "iares";
import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { FamButton } from "@/components/FamButton";

describe("FamButton", () => {
	let cleanup: { (): void };

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	it("Should ensure that the component has the correct properties", () => {
		expect(FamButton()).to.have.all.keys(["template", "styles"]);
	});

	it("Should render button content correctly", () => {
		render(html`
       <${FamButton}>
          <slot target="content">
            <span type="primary-disabled">
              Salvar
            </span>
          </slot>
        </>
    `);
		const element = document.querySelector("fam-button");
		expect(element?.firstChild?.textContent).to.equal("Salvar");
	});
});
