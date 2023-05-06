import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamContainer } from "@/components/FamContainer";

describe("FamContainer", () => {
	let cleanup: { (): void };
	let component = FamContainer();

	before(() => {
		cleanup = globalJsdom();
		component = FamContainer();
	});

	after(() => {
		cleanup();
	});

	it("Should have template and style defined", () => {
		expect(component).to.have.all.keys(["template", "styles"]);
	});

	it("Should correctly render container text", () => {
		const containerText = "containerText";
		let componentElement: HTMLElement | null = null;

		render(
			html`
    <${FamContainer}>
      <slot target="content">
        <h1>${containerText}</h1>
      </slot>
    </>
    `,
			document?.body,
		);

		componentElement = document?.body?.querySelector("fam-container");
		const titleElement = componentElement?.querySelector("h1");
		expect(titleElement?.textContent?.trim()).to.be.eql(containerText);
	});
});
