import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamTagline } from "@/components/FamTagline";

describe("FamTagline", () => {
  let cleanup: { (): void };
  let component = FamTagline();

  before(() => {
    cleanup = globalJsdom();
    component = FamTagline();
  });

  after(() => {
    cleanup();
  });

  it("Should have template and style defined", () => {
    expect(component).to.have.all.keys(["template", "styles"]);
  });

  it("Should correctly render tagline text", () => {
    const tagline = "tagline";
    let componentElement: HTMLElement | null = null;

    render(
      html`
    <${FamTagline}>
      <slot target="content">
        <h1>${tagline}</h1>
      </slot>
    </>
    `,
      document?.body,
    );

    componentElement = document?.body?.querySelector("fam-tagline");
    expect(componentElement?.textContent?.trim()).to.be.eql(tagline);
  });
});
