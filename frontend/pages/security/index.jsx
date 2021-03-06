import React, { useState } from 'react';
import Link from 'next/link';
import AllPackages from '../../utilities/getData';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Security = () => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <Wrapper>
      <header>Security Panel</header>
      <section>
        <p className="instructions">
          To update the status of a package, click on it. If you're receiving a new package, select new delivery.
        </p>
        <div className="full">
          <button onClick={() => setSeeAll(!seeAll)}>{!seeAll ? 'Show' : 'Hide'} all packages</button>
          <Link href="/packages/new">
            <button>
              <a>New delivery</a>
            </button>
          </Link>
          <Link href="/">
            <button>
              <a>Log out</a>
            </button>
          </Link>
        </div>
        {seeAll ? <AllPackages /> : null}
      </section>
    </Wrapper>
  );
};

export default Security;
