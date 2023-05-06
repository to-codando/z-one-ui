import { HtmlInputEvent } from "./types";

export type Thandler = {
	(args: HtmlInputEvent): void;
};

export type Handler = {
	(args: HtmlInputEvent): void;
};

export type Tdebounc = {
	(callback: Thandler | Handler, delay?: number): Thandler;
};

export const debounce: Tdebounc = (callback, delay = 500) => {
	let timer!: NodeJS.Timeout;

	return (args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(args);
		}, delay);
	};
};
