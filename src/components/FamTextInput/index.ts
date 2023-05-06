import { html, css } from "iares";
import { debounce } from "@/utils/debounce";
import { ErrorInputParams, Params } from "./types";

const FamInputError = ({ props }: ErrorInputParams) => {
	if (props.isValid) return html``;
	return html`<p>${props.error}</p>`;
};

const template = ({ props }: Params) => html`
  <div class="wrap-ctx">
    <label>
      
      <input 
        type=${props?.type || "text"}
        value=${props?.value || ""} 
        onKeyup=${debounce(props?.handler, props?.debounceTime)}
        valid=${props?.isValid}
      />

      <span>${props?.label}</span>
    </label>
    <${FamInputError} isValid=${props.isValid} error=${props.error} />
  </div>
`;

export const FamTextInput = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`

  fam-text-input,
  .wrap-ctx {
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: var(--black-2);
    width: 100%;
  }

  .wrap-ctx label {
    position: relative
  }

  .wrap-ctx label,
  .wrap-ctx fam-input-error {
    display: flex;
    flex-wrap: wrap;
  }

  .wrap-ctx input,
  .wrap-ctx label,
  .wrap-ctx span,
  .wrap-ctx fam-input-error {
    width: 100%
  }

  .wrap-ctx span {
    margin-bottom: 0.5em;
    position: absolute;
    left: 0;
    top: -20px;
  }

  .wrap-ctx input {
    height: 50px;
    padding: 0 1em;

    font-size: var(--text-size-4);
    color: var(--text-input-text-color);

    border-width: var(--text-input-border-width);
    border-radius: var(--text-input-border-radius);
    border-style: var(--text-input-border-style);
    border-color: var(--text-input-border-color);

    outline-color: none;
    outline-width: none;
    outline-style: none;

    background: var(--text-input-background);
  }

  .wrap-ctx input:focus {
    outline-color: var(--text-input-outline-color);
    outline-width: var(--text-input-outline-width);
    outline-style: var(--text-input-border-style);

  }

  .wrap-ctx span {
    font-size: var(--text-size-3);
    font-weight: 600;
    color: var(--text-input-label-color);
    margin: 0 0 8px 8px;
  }

.wrap-ctx input[valid=true] {
  background: var(--text-input-valid-background);
  color: var(--text-input-valid-text-color);
  border-color: var(--text-input-valid-border-color);
}

.wrap-ctx input[valid=true] + span {
  color: var(--text-input-valid-text-color);
}

.wrap-ctx input[valid=false] {
  background: var(--text-input-invalid-background);
  color: var(--text-input-invalid-text-color);
  border-color: var(--text-input-invalid-border-color);
}  

.wrap-ctx input[valid=false] + span {
  color: var(--text-input-invalid-text-color);
}

 .wrap-ctx fam-input-error {
  color: var(--text-input-invalid-text-color);
 }

 .wrap-ctx fam-input-error p:not(:empty) {
    padding: 0.5em 0;
    line-height: 1.2em;
    font-size: var(--text-size-3)
 }

`;
