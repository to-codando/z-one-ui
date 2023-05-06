import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamTitle } from "@/components/FamTitle";

describe("AppTitle", () => {
	let cleanup: { (): void };
	let component = FamTitle();

	before(() => {
		cleanup = globalJsdom();
		component = FamTitle();
	});

	after(() => {
		cleanup();
	});

	it("Should have template and style defined", () => {
		expect(component).to.have.all.keys(["template", "styles"]);
	});

	it("Should correctly render title text", () => {
		const title = "Title";
		let componentElement: HTMLElement | null = null;

		render(
			html`
    <${FamTitle}>
      <slot target="content">
        <h1>${title}</h1>
      </slot>
    </>
    `,
			document?.body,
		);

		componentElement = document?.body?.querySelector("fam-title");
		expect(componentElement?.textContent?.trim()).to.be.eql(title);
	});
});
