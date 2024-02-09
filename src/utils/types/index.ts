import { HTMType, TState } from "iares";

export interface Props extends Object {}
export type TemplateType<T extends Props> = {
  (params: T): HTMType | HTMType[];
};
export type PropsType<T extends Props> = T;
export type ParamsType<T> = { params: T };
export type ActionsType<T extends Props> = T;
export type HooksType<T extends Props> = T;

export type TemplateParamsType<T extends Props> = T;
export type TemplateStateType<T extends Props> = T;
export type StateType<T extends Props> = TState<T>;
