import { html, css } from "iares";
import { ListParams } from "./types";

const template = ({ props }: ListParams) => html`
  <div class="wrap-ctx">
    <ul>
      ${props.data.map((item) => html`<li>${item}</li>`)}
    </ul>
  </div>
`;

export const FamList = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-list {
    display: var(--fam-list-display);
    justify-content: var(--fam-list-justify-content);
    align-items: var(--fam-list-align-items);
    flex-wrap:var(--fam-flex-wrap);
    width:var(( --fam-list-width));
  }
  .wrap-ctx > ul {
    width: var( --fam-list-width);
    color:var(--fam-list-color);
    border-width:var(--fam-list-border-width);
    border-style:var(--fam-list-border-style);
    border-color:var(--fam-list-border-color);
    border-radius:var(--fam-list-border-radius);
  }


`;
