// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";
import { html, render } from "iares";

import { FamTooltip } from "@/components/FamTooltip";

describe("FamTooltip", () => {
  let cleanup: { (): void };

  before(() => {
    cleanup = globalJsdom();
  });

  after(() => {
    cleanup();
  });

  it("Should ensure that the component has the correct properties", () => {
    expect(FamTooltip()).to.have.all.keys(["template", "styles"]);
  });

  it("Should render tooltip content correctly", () => {
    const text = "tooltip text";

    render(html`
       <${FamTooltip}>
          <slot target="content">
            <p>${text}</p>
          </slot>
        </>
    `);
    const element = document.querySelector("fam-tooltip p");
    expect(element?.firstChild?.textContent).to.equal(text);
  });
});
