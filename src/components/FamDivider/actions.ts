import { TError } from "./types";

export const createActions = () => {
	const validate = (type: string): TError | null => {
		const validTypes = ["dashed", "solid", "dotted", "rounded"];
		const error = getError(type);
		if (!validTypes.includes(type)) return error;
		return null;
	};

	const getError = (type: string): TError => {
		return {
			isValid: false,
			message: `Invalid type: ${type}, expect one of types: [dashed, solid, dotted, rounded] `,
			typeError: "DividerError",
		};
	};

	const throwError = (error: TError): void => {
		const exception = new Error(error.message);
		exception.name = error.typeError;
		throw exception;
	};
	return { validate, throwError, getError };
};
