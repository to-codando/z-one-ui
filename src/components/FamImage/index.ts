import { html, css } from "iares";
import { createActions } from "./actions";
import { Params } from "./types";

const template = ({ props, actions }: Params) => html`
  <div class="wrap-ctx">
    <img src=${props?.src}  alt=${props?.alt} onerror=${actions.setFallbackImage}/>
  </div>
`;

export const FamImage = ({ props }: Pick<Params, "props">) => {
  const actions = createActions({ props });
  return {
    actions,
    template,
    styles,
    props,
  };
};

const styles = () => css`
  fam-image { width: 100%; }

  fam-image,
  .wrap-ctx > img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx img {
    width:100%;
    border-radius: 8px;
    background: url(var(--fam-image-fallback))
  }

  






`;
