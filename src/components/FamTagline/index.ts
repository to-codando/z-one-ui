import { css, html } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;

export const FamTagline = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-tagline { width: 100%; }

  fam-tagline,
  .wrap-ctx p
  {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx p {
    font-size: --text-size-2
  }

  






`;
