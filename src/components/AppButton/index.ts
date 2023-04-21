import { html, css } from "iares";

const template = ({ props }) => html`
  <slot id="content"></slot>
`;

export const AppButton = ({ props }) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  app-button {
    width:100%;
    height:50px;
    display:flex;
    margin:1em 1em;
    text-transform: uppercase;
  }
  app-button > *{
    width:100%;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  app-button *[style="primary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft-light);
    background: var(--primary);
    border:2px solid var(--primary-dark-strong)   
  }

  app-button *[style="primary:hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary);
    background:none;
    border:2px solid var(--primary)   
  }

  app-button *[style="primary:disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft);
    background:var(--primary-soft-light);
    border:1px solid var(--primary-soft);  
  }

  app-button *[style="secondary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background: var(--secondary-dark);
    border:2px solid var(--secondary-dark-strong)   
  }

  app-button *[style="secondary:hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-dark-strong);
    background:none;
    border:2px solid var(--secondary-dark-strong)   
  }

  app-button *[style="secondary:disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft);
    background:var(--secondary-soft-light);
    border:1px solid var(--secondary-soft)   
  }
 
  app-button *[style="tertiary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background:var(--tertiary-dark);
    border:2px solid var(--tertiary-dark-strong)   
  }
  
  app-button *[style="tertiary:hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--tertiary-dark-strong);
    background:none;
    border:2px solid var(--tertiary-dark-strong)   
  }

  app-button *[style="tertiary:disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:var(--tertiary-soft-light);
    border:1px solid var(--tertiary-soft)   
  }
`;
