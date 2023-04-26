import { Actions, TError } from "./types";

const validSizeList = [
  "size-1",
  "size-2",
  "size-3",
  "size-4",
  "size-5",
  "size-6",
  "size-7",
  "size-8",
  "size-9",
  "size-10",
  "size-11",
  "size-12",
];

export const createHooks = (actions: Actions) => {
  const afterRender = (element: Element) => {
    const iconName = element.querySelector("span")?.textContent;
    const iconSize = element.querySelector("div")?.classList.toString() || "";
    const hasValidSize = validSizeList.find((size) => new RegExp(size, "ig").test(iconSize));

    const nameError = actions.validate(iconName || "") as TError;
    const sizeError = actions.validate(hasValidSize || "") as TError;

    if (!nameError && !sizeError) return;

    actions.throwError(nameError || sizeError);
  };

  return { afterRender };
};
