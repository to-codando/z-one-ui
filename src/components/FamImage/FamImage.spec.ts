// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import globalJsdom from "global-jsdom";
import { html, render } from "iares";

import { FamImage } from "@/components/FamImage";

describe("FamImage", () => {
  let cleanup: { (): void };

  const props = {
    src: "/assets/images/oclock.jpg",
    fallbackSrc: "/assets/images/fallback-white.png",
    alt: "relógio branco",
  };

  const component = FamImage({ props });

  before(() => {
    cleanup = globalJsdom();
  });

  after(() => {
    cleanup();
  });

  afterEach(() => {
    const components = document.querySelectorAll("fam-image");
    for (const element of components) {
      element.remove();
    }
  });

  it("Should have template, styles, action and props", () => {
    expect(component).to.have.all.keys(["template", "styles", "actions", "props"]);
  });

  it("Should render correctly", () => {
    render(
      html`
      <${FamImage} 
        src="/assets/images/oclock.jpg",
        fallbackSrc="/assets/images/fallback-white.png",
        alt="relógio branco",
      />
    `,
      document.body,
    );

    const componentElement = document.querySelector("fam-image");
    const image = componentElement?.querySelector("img");

    expect(!!image).to.be.true;
    expect(image?.src).to.be.contains(props.src);
    expect(image?.alt).to.be.contains(props.alt);
  });
});
