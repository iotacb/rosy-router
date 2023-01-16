import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../lib/defaults/components/Container";
import { useParameter, useRouter } from "../lib/hooks/RouterHooks";

function Home({}) {
	const p = useParameter();
	const { setLocation } = useRouter();
	useEffect(() => {
		console.log(p);
	}, []);

	return (
		<Container screen>
			<h1 onClick={() => setLocation("/about", { tobiIsDoof: true })}>Home</h1>
		</Container>
	);
}

export default Home;
