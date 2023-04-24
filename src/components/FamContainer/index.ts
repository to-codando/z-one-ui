import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;

export const FamContainer = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-container,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    
    max-width: var(--fam-container-max-width);
    margin-left: var(--fam-container-margin-left);
    margin-right: var(--fam-container-margin-right);

    border-radius: var(--fam-container-border-radius);
    border-width: var(--fam-container-border-width);
    border-color: var(--fam-container-border-color);
    border-style: var(--fam-container-border-style);

    background: var(--fam-container-background)
  }
`;
