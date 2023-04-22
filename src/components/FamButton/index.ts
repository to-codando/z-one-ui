import { html, css } from "iares";

const template = ({ props }) => html`
  <slot id="content"></slot>
`;

export const FamButton = ({ props }) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  fam-button {
    width:100%;
    height:50px;
    display:flex;
    margin:1em 1em;
    text-transform: uppercase;
  }

  fam-button > *{
    width:100%;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  fam-button *[type="primary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft-light);
    background: var(--primary);
    border:2px solid var(--primary-dark-strong)   
  }

  fam-button *[type="primary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary);
    background:none;
    border:2px solid var(--primary)   
  }

  fam-button *[type="primary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-dark);
    background:var(--blue-5);
    border:1px solid var(--blue-5);  
  }

  fam-button *[type="primary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft);
    background:none;
    border:1px solid var(--primary-soft);  
  }

  fam-button *[type="secondary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background: var(--secondary-dark);
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="secondary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-dark-strong);
    background:none;
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="secondary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft);
    background:var(--secondary-soft-light);
    border:1px solid var(--secondary-soft)   
  }

  fam-button *[type="secondary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft-light);
    background:none;
    border:1px solid var(--secondary-soft-light);   
  }
 
  fam-button *[type="tertiary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background:var(--tertiary-dark);
    border:2px solid var(--tertiary-dark-strong)   
  }
  
  fam-button *[type="tertiary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--tertiary-dark-strong);
    background:none;
    border:2px solid var(--tertiary-dark-strong)   
  }

  fam-button *[type="tertiary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:var(--tertiary-soft-light);
    border:1px solid var(--tertiary-soft)   
  }

  fam-button *[type="tertiary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:none;
    border:1px solid var(--tertiary-soft-light)   
  }
`;
