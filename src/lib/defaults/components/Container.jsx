import React from "react";
import styled from "styled-components";

function Container({ screen = false, children }) {
	return <ContainerElement screen={screen}>{children}</ContainerElement>;
}

export default Container;

const ContainerElement = styled.div`
	width: 100vw;
	padding: 1rem 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({ screen }) => screen && `height: 100vh;`}
`;
