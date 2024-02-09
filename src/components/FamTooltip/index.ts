import { css, html } from "iares";

const template = () => html`
  <div class="wrap-ctx">
     <div class="tooltip-ctx">
        <i class="material-symbols-rounded">info</i>
        <div class="content-ctx">
          <slot id="content"></slot>
        </div>
     </div>
  </div>
`;

export const FamTooltip = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-tooltip {
    display: flex;
    width: 100%;
  }

  .tooltip-ctx {
    display: flex;
    width:100%;
    cursor: pointer;
    position: relative;
    color:var(--white-1)
  }

  .content-ctx{
    display: flex;
    justify-content: center;
    width:max-content;
    max-width:180px;
    padding: 5px 10px;
    border-radius:var(--border-primary);
    color: var(--black-1);
    background: var(--white-1);
    font-size:var(--text-size-2);
    opacity:0;
    position: absolute;
    top: 2.6em;
    left:50%;
    transform:translateX(-50%);
    z-index: 999;
  }

  .content-ctx:after {
    display: flex;
    content:'';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0; height: 0;
    border-bottom: 8px solid var(--white-1);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .tooltip-ctx:hover > .content-ctx {
    opacity: 0.9;
  }

  
`;
