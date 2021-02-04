import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import IconCircle from "../components/ui/icon";

export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>useWalter || Package Delivery System</title>
      </Head>
      <section className='two'>
        <img src='/imgs/package.png' />
        <div>
          <h1>Welcome</h1>
          <p>
            Click on the resident button to log into your account. You'll be
            able to see your packages and change your profile and notification
            settings.
          </p>
          <p>
            Security personnel is able to register new packages and update their
            status.
          </p>
        </div>
      </section>
      <div>
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

  img {
    align-self: center;
  }
  .two {
    display: grid;
    grid-template-columns: auto 1fr;
    max-width: 500px;
    gap: 2rem;
    margin-top: 4rem;
  }

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
