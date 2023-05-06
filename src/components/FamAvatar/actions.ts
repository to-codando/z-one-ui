import { Params } from "./types";

export const createActions = ({ props }: Pick<Params, "props">) => {
	const setFallbackImage = (event: Event & { onerror: null }) => {
		const image = event.target as HTMLImageElement;
		image.src = props.fallbackSrc;
		event.onerror = null;
	};
	return {
		setFallbackImage,
	};
};
