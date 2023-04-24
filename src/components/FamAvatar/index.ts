import { html, css } from "iares";
import { createActions } from "./actions";
import { Params } from "./types";

const template = ({ props, actions }: Params) => html`
  <div class="wrap-ctx">
    <img src=${props?.src}  alt=${props?.alt} onerror=${actions.setFallbackImage} class="size-${props?.size || 1}-ctx"/>
  </div>
`;

export const FamAvatar = ({ props }: Pick<Params, "props">) => {
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
    border-radius: 100%;
  }

  .size-1-ctx {
    width: var(--fam-avatar-size-1);
    height: var(--fam-avatar-size-1);
  }

  .size-2-ctx {
    width: var(--fam-avatar-size-2);
    height: var(--fam-avatar-size-2);
  }

  .size-3-ctx {
    width: var(--fam-avatar-size-3);
    height: var(--fam-avatar-size-3);
  }

  .size-4-ctx {
    width: var(--fam-avatar-size-4);
    height: var(--fam-avatar-size-4);
  }

  .size-5-ctx {
    width: var(--fam-avatar-size-5);
    height: var(--fam-avatar-size-5);
  }

  .size-6-ctx {
    width: var(--fam-avatar-size-6);
    height: var(--fam-avatar-size-6);
  }


  






`;
