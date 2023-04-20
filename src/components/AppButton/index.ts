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
    display:flex;
    width:100%;
    
  }

  app-button *[style="success"] {
    width:100%;
    height:50px;
    padding:1em;
    margin:1em 1em;
    border-radius: 8px;
    border:1px solid blue   
  }
  
  
`;
