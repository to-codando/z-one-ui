import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamCard } from "@/components/FamCard";

describe("AppTitle", () => {
	let cleanup: { (): void };
	let component = FamCard();

	before(() => {
		cleanup = globalJsdom();
		component = FamCard();
	});

	after(() => {
		cleanup();
	});

	it("Should have template and style defined", () => {
		expect(component).to.have.all.keys(["template", "styles"]);
	});
});
