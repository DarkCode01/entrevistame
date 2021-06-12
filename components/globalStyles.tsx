import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  :root {
    --primary-color: #0070f3;
    --secondary-color: #eaeaea;
    --light-color: #fafafa;

    --dark-blue-color: rgb(31, 41, 55);
    --dark2-blue-color: rgb(28, 37, 49);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default globalStyles;
