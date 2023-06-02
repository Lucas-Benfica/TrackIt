import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	.page{
		background-color: #FFFFFF;
		width: 375px;
		height: 100vh;
		margin: 0 auto;
		font-family: 'Lexend Deca', sans-serif;
		position: relative;
	}
	input{
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: 1px solid #D4D4D4;
		border-radius: 5px;
		padding: 10px;
		color: #666666;
		opacity: 60%;
		font-size: 20px;
		&::placeholder{
			color: #DBDBDB;
		}
	}
`

export default GlobalStyle