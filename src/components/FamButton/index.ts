import { html, css } from "iares";

const template = () => html`
  <slot id="content"></slot>
`;

export const FamButton = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-button {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    text-transform: var(--fam-button-text-transform);
    cursor: pointer
  }

  fam-button > * {
    display:flex;
   width:var(--fam-button-width);
    height:var(--fam-button-height);
    justify-content: var(--fam-button-justify-content);
    align-items: var(--fam-button-align-items);
    font-weight: var(--fam-button-font-weight)
  }

  fam-button *[type="primary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-color);
    background: var(--fam-buttom-primary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-border-color); 
  }

  fam-button *[type="primary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-hole-color);
    background:var(--fam-buttom-primary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-hole-border-color);  
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

  fam-button *[type="tertiary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background: var(--secondary-dark);
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="tertiary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-dark-strong);
    background:none;
    border:2px solid var(--secondary-dark-strong)   
  }

  fam-button *[type="tertiary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft);
    background:var(--secondary-soft-light);
    border:1px solid var(--secondary-soft)   
  }

  fam-button *[type="tertiary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--secondary-soft-light);
    background:none;
    border:1px solid var(--secondary-soft-light);   
  }
 
  fam-button *[type="secondary"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--white-1);
    background:var(--tertiary-dark);
    border:2px solid var(--tertiary-dark-strong)   
  }
  
  fam-button *[type="secondary-hole"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--tertiary-dark-strong);
    background:none;
    border:2px solid var(--tertiary-dark-strong)   
  }

  fam-button *[type="secondary-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:var(--tertiary-soft-light);
    border:1px solid var(--tertiary-soft)   
  }

  fam-button *[type="secondary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(  --tertiary-soft);
    background:none;
    border:1px solid var(--tertiary-soft-light)   
  }
`;
