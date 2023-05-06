import { Actions } from "./types";

export const createHooks = (actions: Actions) => {
	const afterRender = (element: Element) => {
		const dividerType = element.querySelector("div")?.getAttribute("type");
		const validation = actions.validate(dividerType || "");
		if (!validation) return;
		actions.throwError(validation);
	};

	return { afterRender };
};
