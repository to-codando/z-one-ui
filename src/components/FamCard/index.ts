import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
   <slot id="content"></slot>
  </div>
`;

export const FamCard = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  fam-card,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
  .wrap-ctx {
    padding: 1em;
    border-width:var(--fam-card-border-width);
    border-style:var(--fam-card-border-style);
    border-color:var(--fam-card-border-color);
    border-radius:var(--fam-card-border-radius);
    background:var(--fam-card-background);
  }
`;
