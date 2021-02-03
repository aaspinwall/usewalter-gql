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

	button, input {
		font-weight: bold;
		letter-spacing: 0.15rem;
	}



	input[type="text"]{ padding: 20px 10px; line-height: 18px; }

	::placeholder {
		color: black;
		font-style: italic;

	}
	
	* {
	  box-sizing: border-box;
	}`;

export default GlobalStyles;
