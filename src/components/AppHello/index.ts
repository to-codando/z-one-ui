import { html, css } from "iares";
import { AppButton } from "@/components/AppButton";

const template = () => html`
  <div class="wrap-ctx">
    <${AppButton}>
      <slot target="content">
        <span style="tertiary:disabled">
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
