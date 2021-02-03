import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";
const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: "Source Sans Pro", sans-serif;
		font-size: 14px;
	}
	
	a {
	  color: inherit;
	  text-decoration: none;
	}

	h3 {
		/* Subheader - Heavy */
		font-weight: 600;
		font-size: 32px;
		line-height: 46px;
		/* identical to box height, or 144% */
	}

	button {
		font-family: "Source Sans Pro", sans-serif;
		font-size: 1.2rem;
		line-height: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: bold;
		background: #B8A376;
		color: white;
		padding: 1rem;
		margin: 1rem 0;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
		border-radius: 23px;
		border: none;
    transition: 0.4s ease-in-out box-shadow;
    margin: 1.5rem 0;
    :hover,
    :focus {
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
			cursor: pointer;
    }
    :active {
      box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
		}
	}

	p {
		font-weight: bold;
		font-size: 14px;
		line-height: 20px;
	}

	section {
		max-width: 1000px;
		margin: auto;
		padding: 0 1rem;
	}

	header{
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem auto;
	}

	/* input[type="text"]{ padding: 20px 10px; line-height: 18px; } */


	
	* {
	  box-sizing: border-box;
	}`;

export default GlobalStyles;
