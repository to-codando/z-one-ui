import { render, html } from "iares";
import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { FamList } from "@/components/FamList";

describe("FamList", () => {
  let cleanup: { (): void };
  let component = FamList();

  before(() => {
    cleanup = globalJsdom();
    component = FamList();
  });

  after(() => {
    cleanup();
  });

  it("Should have template and style defined", () => {
    expect(component).to.have.all.keys(["template", "styles"]);
  });

  it("Should correctly render data props", () => {
    const data = ["a", "b", "c"];
    render(html`<${FamList} data=${data} />`);
    const componentElement = document.querySelector("fam-list");
    const liData = Array.from(componentElement?.querySelectorAll("li") || [])?.map((li) => li.textContent);

    expect(liData).to.be.eql(data);
  });
});
