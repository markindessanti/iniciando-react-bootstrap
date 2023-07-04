import { Button, Container, Row } from 'react-bootstrap';
import NavBar from './components/CustomNavbar';
import Carousel from './components/CustomCarousel';
import CardsProducts from './components/CardsProducts';
import CardsDigimons from './components/CardsDigimons';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<Container className='text-center mt-2 mb-3'>
				<h1>
					Meu Aplicativo
				</h1>
				<p>Estudos de desevolvimento com React</p>
				<Button variant='primary'>Enviar</Button>
			</Container>

			<Container fluid className='px-0 mb-3'>
				<Carousel />
			</Container>

			<Container fluid>
				<Row className="text-center mb-3"><h1>PRODUTOS</h1></Row>
				<Row className='d-flex justify-content-around'>
					<CardsProducts />
				</Row>
			</Container>

			<Container fluid>
				<Row className="text-center mb-3"><h1>DIGIMONS</h1></Row>
				<Row className='d-flex justify-content-around'>
					<CardsDigimons />
				</Row>
			</Container>
		</div>
	);
}

export default App;
