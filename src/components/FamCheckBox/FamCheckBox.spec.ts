import { html, render } from "iares";
import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { FamCheckBox } from "@/components/FamCheckBox";

describe("FamCheckBox", () => {
  let cleanup: { (): void };
  let element: HTMLInputElement | null = null;
  let isHandlerExecuted = false;
  const label = "name";
  const checked = true;

  before(() => {
    cleanup = globalJsdom();
  });

  beforeEach(() => {
    const handler = () => (isHandlerExecuted = true);
    render(
      html`
       <${FamCheckBox} label=${label} isChecked=${checked} handler=${handler}/>
    `,
      document.body,
    );
    element = document.querySelector("fam-check-box");
  });

  afterEach(() => {
    element?.remove();
  });

  after(() => {
    cleanup();
  });

  it("Should ensure that the component has the correct properties", () => {
    expect(FamCheckBox()).to.have.all.keys(["template", "styles"]);
  });

  it("Should render correctly component label ", () => {
    const labelElement = element?.querySelector("span");
    expect(labelElement?.textContent).to.equal(label);
  });

  it("Should render correctly checked input component", () => {
    const inputElement = element?.querySelector("input");
    expect(inputElement?.checked).to.equal(checked);
  });

  it("Should execute handler when input change", () => {
    const inputElement = element?.querySelector("input");
    inputElement?.click();
    expect(isHandlerExecuted).to.equal(true);
  });
});
