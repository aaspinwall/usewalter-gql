import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

//These styles are the default nextjs ones, we'll be changing them as we go

const LayoutWrapper = styled.div`
  .spaced {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  .container {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
    padding: 1rem;
  }

  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
  }

  .footer img {
    margin-left: 0.5rem;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .title-light {
    font-style: normal;
    font-weight: 300;
    font-size: calc(48px / 2);
    line-height: calc(62px / 2);
  }

  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .box {
    cursor: pointer;
  }

  .box {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    border-radius: 23px;
    padding: 1rem 2rem;
    transition: 0.4s ease-in-out box-shadow;
    margin: 1.5rem 0;
    :hover,
    :focus {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
    }
    :active {
      box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
    }
  }

  .flex {
    display: flex;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }
  .full {
    > * {
      width: 50%;
      margin: 1rem auto;
    }
  }

  .card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export default LayoutWrapper;
