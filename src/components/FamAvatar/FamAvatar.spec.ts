import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";
import { render, html } from "iares";

import { FamAvatar } from "@/components/FamAvatar";

describe("FamAvatar", () => {
	let cleanup: { (): void };

	const props = {
		src: "/assets/images/fam-avatar.jpg",
		fallbackSrc: "/assets/images/avatar-fallback-white.png",
		alt: "avatar",
		size: "4",
	};

	const component = FamAvatar({ props });

	before(() => {
		cleanup = globalJsdom();
	});

	after(() => {
		cleanup();
	});

	afterEach(() => {
		document
			.querySelectorAll("fam-image")
			.forEach((FamAvatar) => FamAvatar.remove());
	});

	it("Should have template, styles, action and props", () => {
		expect(component).to.have.all.keys([
			"template",
			"styles",
			"actions",
			"props",
		]);
	});

	it("Should render correctly", () => {
		render(
			html`
      <${FamAvatar} 
        src=${props.src}
        fallbackSrc=${props.fallbackSrc}
        alt=${props.alt}
        size=${props.size}
      />
    `,
			document.body,
		);

		const componentElement = document.querySelector("fam-avatar");
		const image = componentElement?.querySelector("img") as HTMLImageElement & {
			class: string;
		};
		const imageSize = Array.from(image.classList)[0];
		const propsSize = `size-${props.size}`;

		expect(!!image).to.be.true;
		expect(image?.src).to.be.contains(props.src);
		expect(image?.alt).to.be.contains(props.alt);
		expect(imageSize).contains(propsSize);
	});
});
