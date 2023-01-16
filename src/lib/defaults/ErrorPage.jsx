import React from "react";
import styled from "styled-components";
import Container from "./components/Container";

function ErrorPage({}) {
	return (
		<Container screen>
			<Container>
				<ErrorCode>404</ErrorCode>
				<ErrorText>The page {window.location.pathname} was not found</ErrorText>
			</Container>
		</Container>
	);
}

export default ErrorPage;

const ErrorCode = styled.h1`
	font-size: 10rem;
	font-weight: 900;
`;

const ErrorText = styled.h2`
	font-size: 2rem;
	font-weight: 900;
`;
