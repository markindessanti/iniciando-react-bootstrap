import { Button, Container } from 'react-bootstrap';
import NavBar from './components/CustomNavbar';
import Carousel from './components/CustomCarousel';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<Container>
				<h1>
					Meu Aplicativo
				</h1>
				<p>Estudos de desevolvimento com React</p>
				<Button variant='primary'>Enviar</Button>
			</Container>

			<Container fluid className='px-0'>
				<Carousel />
			</Container>
		</div>
	);
}

export default App;
