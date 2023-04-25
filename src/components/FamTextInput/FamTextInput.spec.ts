import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamTextInput } from "@/components/FamTextInput";

describe("FamTextInput", () => {
  let cleanup: { (): void };
  let inputElement: HTMLInputElement | null | undefined;
  let componentElement: Element | null | undefined;
  let inputErrorElement: Element | null | undefined;

  before(() => {
    cleanup = globalJsdom();
  });

  after(() => {
    cleanup();
  });

  beforeEach(() => {
    inputElement?.remove();
    componentElement?.remove();
    inputErrorElement?.remove();
  });

  afterEach(() => {});

  it("Should have template and style defined", () => {
    expect(FamTextInput()).to.have.all.keys(["template", "styles"]);
  });

  it("Should correctly render [[ text     ]] input type", () => {
    const type = "text";

    render(
      html`<${FamTextInput} 
        type=${type}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");

    const inputType = inputElement?.getAttribute("type");
    expect(inputType).to.be.equal(type);
  });

  it("Should correctly render [[ tel      ]] input type", () => {
    const type = "tel";

    render(
      html`<${FamTextInput} 
        type=${type}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");

    const inputType = inputElement?.getAttribute("type");
    expect(inputType).to.be.equal(type);
  });

  it("Should correctly render [[ password ]] input type", () => {
    const type = "password";

    render(
      html`<${FamTextInput} 
        type=${type}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");

    const inputType = inputElement?.getAttribute("type");
    expect(inputType).to.be.equal("password");
  });

  it("Should correctly render [[ date     ]] input type", () => {
    const type = "date";

    render(
      html`<${FamTextInput} 
        type=${type}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");

    const inputType = inputElement?.getAttribute("type");
    expect(inputType).to.be.equal(type);
  });

  it("Should render error when input is invalid and error is provided", () => {
    const type = "text";
    const isValid = false;
    const error = "has any error";

    render(
      html`
      <${FamTextInput} 
        type=${type}
        isValid=${isValid}
        error=${error}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputErrorElement = componentElement?.querySelector("fam-input-error p");

    expect(inputErrorElement?.textContent).to.be.equal(error);
  });

  it("Should render and set valid attribute as true when text input is valid", () => {
    const type = "text";
    const isValid = "true";

    render(
      html`
      <${FamTextInput} 
        type=${type}
        isValid=${isValid}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");
    const isValidAttributeValue = inputElement?.getAttribute("valid");

    expect(isValidAttributeValue).to.be.equal(isValid);
  });

  it("Should render and set valid attribute as false when text input is invalid", () => {
    const type = "text";
    const isValid = "false";
    const error = "has any error";

    render(
      html`
      <${FamTextInput} 
        type=${type}
        isValid=${isValid}
        error=${error}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");
    const isValidAttributeValue = inputElement?.getAttribute("valid");

    expect(isValidAttributeValue).to.be.equal(isValid);
  });

  it("Should execute handler when text input changes", async () => {
    const type = "text";
    const isValid = "false";
    const error = "has any error";
    let isExecuted = false;
    const handler = () => (isExecuted = true);

    const event = new KeyboardEvent("keyup", { key: "a" });

    const sleep = (ms: number) => {
      return new Promise((resolve) => {
        return setTimeout(() => resolve(isExecuted), ms);
      });
    };

    render(
      html`
      <${FamTextInput} 
        type=${type}
        isValid=${isValid}
        error=${error}
        handler=${handler}
        debounceTime=${0}
      />`,
    );

    componentElement = document.querySelector("fam-text-input");
    inputElement = componentElement?.querySelector("input");

    inputElement?.dispatchEvent(event);

    expect(await sleep(3)).to.be.equal(true);
  });
});
