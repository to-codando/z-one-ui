import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <p>Insert a component here</p>
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

  .wrap-ctx {
    max-width: 450px;
  }
`;
