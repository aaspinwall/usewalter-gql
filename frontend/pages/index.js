import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/colors";

export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>useWalter || Package Delivery System</title>
      </Head>
      <h1>Welcome</h1>
      <div className='card'>
        <Link href='/residents'>
          <button>
            <a>Resident</a>
          </button>
        </Link>
        <Link href='/security'>
          <button>
            <a>Security</a>
          </button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  /*  a {
    font-size: 1.5rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    width: 150px;
    height: 55px;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 2px;
    border: 3px solid ${COLORS.SHADES.DARKGREY};
    background: ${COLORS.GREY};

    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    &:active {
      box-shadow: inset 0px 0px 5px ${COLORS.SHADES.DARKGREY};
      outline: none;
      transform: scale(0.9);
    }
  } */

  .card {
    background: ${COLORS.SHADES.OFFWHITE};
    padding: 3.5rem;
    box-shadow: 0 0 5px 3px ${COLORS.SHADES.DARKGREY};
  }
`;

const Header = styled.h1`
  color: ${COLORS.SHADES.WHITE};
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
`;
