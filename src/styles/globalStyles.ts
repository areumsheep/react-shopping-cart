import { css } from '@emotion/react';
import './utils.css';

export const globalStyles = css`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    color: inherit;
    background-color: transparent;
  }

  textarea,
  input {
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  a {
    display: block;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
    width: max-content;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }

  svg {
    vertical-align: middle;
  }
`;
