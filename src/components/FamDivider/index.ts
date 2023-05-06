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
    border: 1px dashed #fff
  }

  fam-divider > [type=dotted]{
    border: 1px dotted #fff
  }

  fam-divider > [type=solid]{
    border: 1px solid #fff
  }

  fam-divider > [type=rounded]{
    border: 1px solid #fff;
    border-radius:5px
  }

  fam-divider > [stroke=size-2]{
    border-width:2px
  }
  fam-divider > [stroke=size-3]{
    border-width:3px
  }
  fam-divider > [stroke=size-4]{
    border-width:4px
  }
  fam-divider > [stroke=size-5]{
    border-width:5px
  }
  fam-divider > [stroke=size-6]{
    border-width:6px
  }
  fam-divider > [stroke=size-7]{
    border-width:7px
  }
  fam-divider > [stroke=size-8]{
    border-width:8px
  }
  fam-divider > [stroke=size-9]{
    border-width:9px
  }
  fam-divider > [stroke=size-10]{
    border-width:10px
  }
  fam-divider > [type=size-11]{
    border-width:11px
  }
  fam-divider > [type=size-12]{
    border-width:12px
  }
 `;
