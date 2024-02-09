import { css, html } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;

export const FamTitle = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-title { width: 100%; }

  fam-title,
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3
  {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-1);
  }

  
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    width:100%;
    padding: 1em;
  }  
  
  .wrap-ctx h1 {
    font-size: var(--title-primary);
    font-weight: 200
  }
  
  .wrap-ctx h2 {
    font-size: var(--title-secondary);
  }
  
  .wrap-ctx h3 {
    font-size: var(--title-size-4);
    font-weight: 600;
  }






`;
