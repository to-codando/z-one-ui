import { html, css } from "iares";
import { FamButton } from "@/components/FamButton";

const template = () => html`
  <div class="wrap-ctx">
    <${FamButton}>
      <slot target="content">
        <span type="primary">
          <i>me clica</i>
        </span>
      </slot>
    </>
  </div>
`;

export const AppHello = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-hello,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
