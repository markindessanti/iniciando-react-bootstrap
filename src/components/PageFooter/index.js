import React from 'react';
import { Container } from 'react-bootstrap';

export default function PageFooter() {

	return (
		<>
			<footer className="py-3 w-100" style={{background: "#3c3c3c"}}>
				<Container fluid>
					<ul class="nav justify-content-center border-bottom pb-3 mb-3">
						<li className="nav-item"><a href="#dummy" className="px-2 nav-link text-light">Home</a></li>
						<li className="nav-item"><a href="#dummy" className="px-2 nav-link text-light">Features</a></li>
						<li className="nav-item"><a href="#dummy" className="px-2 nav-link text-light">Pricing</a></li>
						<li className="nav-item"><a href="#dummy" className="px-2 nav-link text-light">FAQs</a></li>
						<li className="nav-item"><a href="#dummy" className="px-2 nav-link text-light">About</a></li>
					</ul>
					<p class="text-center text-light">© 2023 Dessanti Web Design, Inc</p>
				</Container>
			</footer>
		</>
	)
}