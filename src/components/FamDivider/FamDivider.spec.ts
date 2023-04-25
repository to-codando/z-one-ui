import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";
import { FamDivider } from "@/components/FamDivider";

describe("FamDivider", () => {
  let cleanup: { (): void };
  const component = FamDivider();
  let componentElement: Element | null;

  before(() => {
    cleanup = globalJsdom();
  });

  after(() => {
    cleanup();
  });

  beforeEach(() => {
    componentElement?.remove();
  });

  it("Should have template and style defined", () => {
    expect(component).to.have.all.keys(["template", "styles", "actions", "hooks"]);
  });

  it("Should correctly render the divider component type property", () => {
    const type = "dashed";

    render(
      html`
      <${FamDivider} type=${type} stroke="3"/>
      `,
      document?.body,
    );

    componentElement = document?.querySelector("fam-divider > div");
    const dividerType = componentElement?.getAttribute("type");
    expect(dividerType).to.be.eql(type);
  });

  it("Should throw an exception when the divider type is invalid", () => {
    const invalidType = "xxxx";
    const error = component.actions.getError(invalidType);
    expect(component.actions.validate(invalidType)).to.be.eql(error);
  });
});
