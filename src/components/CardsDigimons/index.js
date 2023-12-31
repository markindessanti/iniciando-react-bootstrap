import { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import api from "../../services/api";

class CardsDigimons extends Component {
	state = {
		digimons: [
			{

			}
		]
	};

	async componentDidMount() {
		const digimons_api = await api.get();

		this.setState(
			{
				digimons: digimons_api.data
			}
		);
	}

	render() {
		return (
			<>
				{
					this.state.digimons.map((digimon, index) =>
						index < 12 ?
							<Col className='d-flex justify-content-center' sm={6} md={4} lg={3} xxl={2}>
								<Card key={digimon.name} className='mb-3' style={{ width: '18rem' }}>
									<Card.Img variant="top" src={digimon.img} />
									<Card.Body>
										<Card.Title>{digimon.name}</Card.Title>
										<Card.Text className="d-flex">
											<label className="fw-bold me-1" htmlFor="digimon-level">Level:</label>
											<p name="digimon-level">{digimon.level}</p>
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
								</Card>
							</Col> : ""
					)
				}
			</>
		);
	};
}

export default CardsDigimons;