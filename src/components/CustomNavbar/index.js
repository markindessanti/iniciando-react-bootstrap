import React from 'react';
import { Button, Navbar, Container, Nav, Form } from 'react-bootstrap';

export default function CustomNavbar() {

	return (
		<>
			<Navbar expand="md" bg="dark" variant="dark">
				<Container fluid>
					<Navbar className="w-100" collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Container>
							<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link href="#features">Features</Nav.Link>
									<Nav.Link href="#pricing">Pricing</Nav.Link>
								</Nav>
								<Form className="d-flex">
									<Form.Control
										type="search"
										placeholder="Search"
										className="me-2"
										aria-label="Search"
									/>
									<Button variant="outline-success">Search</Button>
								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Container>
			</Navbar>
		</>
	)
}