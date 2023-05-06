import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { FamIcon } from "@/components/FamIcon";

describe("FamIcon", () => {
  let cleanup: { (): void };
  let component = FamIcon();

  before(() => {
    cleanup = globalJsdom();
    component = FamIcon();
  });

  after(() => {
    cleanup();
  });

  it("Should have template and style defined", () => {
    expect(component).to.have.all.keys(["template", "styles", "actions", "hooks"]);
  });

  it("Should throw an error to empty properties ", () => {
    const nameIcon = "";
    const sizeIcon = "";
    const error = component.actions.getError();

    expect(component.actions.validate(nameIcon)).to.be.eql(error);
    expect(component.actions.validate(sizeIcon)).to.be.eql(error);
  });

  it("Should correctly render with not empty properties", () => {
    const nameIcon = "home";
    const sizeIcon = "size-2";

    expect(component.actions.validate(nameIcon)).to.be.eql(null);
    expect(component.actions.validate(sizeIcon)).to.be.eql(null);
  });
});
