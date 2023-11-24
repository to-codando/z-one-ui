import { html, css } from "iares";

import { createActions } from "./actions";
import { createHooks } from "./hooks";
import { templateParams } from "./types";

const template = ({ props }: templateParams) => html`
  <div type=${props.type} stroke="size-${props.stroke}"></div>
`;

export const FamDivider = () => {
	const actions = createActions();
	const hooks = createHooks(actions);
	return {
		template,
		styles,
		actions,
		hooks,
	};
};

const styles = () => css`
  fam-divider,
  fam-divider > div {
    display: flex;
    width: 100%;
  }

  fam-divider > [type=dashed]{
    border-top: 1px dashed var(--fam-divider-color)
  }

  fam-divider > [type=dotted]{
    border-top: 1px dotted var(--fam-divider-color)
  }

  fam-divider > [type=solid]{
    border-top: 1px solid var(--fam-divider-color)
  }

  fam-divider > [type=rounded]{
    border-top: 1px solid var(--fam-divider-color);
    border-radius:100%
  }

  fam-divider > [stroke=size-1]{
    border-top-width:1px;
  }
  fam-divider > [stroke=size-2]{
    border-top-width:2px
  }
  fam-divider > [stroke=size-3]{
    border-top-width:3px
  }
  fam-divider > [stroke=size-4]{
    border-top-width:4px
  }
  fam-divider > [stroke=size-5]{
    border-top-width:5px
  }
  fam-divider > [stroke=size-6]{
    border-top-width:6px
  }
  fam-divider > [stroke=size-7]{
    border-top-width:7px
  }
  fam-divider > [stroke=size-8]{
    border-top-width:8px
  }
  fam-divider > [stroke=size-9]{
    border-top-width:9px
  }
  fam-divider > [stroke=size-10]{
    border-top-width:10px
  }
  fam-divider > [type=size-11]{
    border-top-width:11px
  }
  fam-divider > [type=size-12]{
    border-top-width:12px
  }
 `;
