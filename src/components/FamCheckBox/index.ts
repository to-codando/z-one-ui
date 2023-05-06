import { PropsType } from "@/utils/types";
import { html, css } from "iares";

type HtmlInputEvent = Event & {
	target: HTMLInputElement;
};

type Props = {
	props: {
		label: string;
		isChecked: boolean;
		handler: (event: HtmlInputEvent) => void;
	};
};

const template = ({ props }: Props) => html`
  <div class="wrap-ctx">
    <label>
    ${
			props.isChecked
				? html`<input type="checkbox" onChange=${props.handler} checked="${props.isChecked}"/>`
				: html`<input type="checkbox" onChange=${props.handler} />`
		}
      <span>${props.label}</span>
    </label>
  </div>
`;

export const FamCheckBox = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  fam-check-box,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx > label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx input {
    display: flex;
  }
  .wrap-ctx span {
    display: flex;
    width: 100%;
    color: white;
    margin-left:0.5em;
  }
`;
