import { TError } from "./types";

export const validatorFactory = () => {
  const validate = (value: string): TError | null => {
    const error = getError();
    if (!value) return error;
    return null;
  };

  const getError = (): TError => {
    return {
      isValid: false,
      message: "The name or size property is not defined and must be.",
      typeError: "IconError",
    };
  };

  const throwError = (error: TError): void => {
    const exception = new Error(error.message);
    exception.name = error.typeError;
    throw exception;
  };
  return { validate, throwError, getError };
};
