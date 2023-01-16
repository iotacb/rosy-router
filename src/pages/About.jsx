import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../lib/defaults/components/Container";
import { useParameter, useRouter } from "../lib/hooks/RouterHooks";

function About({}) {
	const p = useParameter();
	const { setLocation } = useRouter();
	useEffect(() => {
		console.log(p);
	}, []);

	return (
		<Container screen>
			<h1 onClick={() => setLocation("/", { hal: "Habibib" })}>About</h1>
		</Container>
	);
}

export default About;
