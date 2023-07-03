import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class CardsProducts extends Component {
	state = {
		cards: [
			{
				image: "https://1619028l.ha.azioncdn.net/img/2023/04/produto/127851/conjunto-infantil-menino-moletom-tricolor-azul-marinho-3.jpg?ims=fit-in/400x600/filters:fill(white)",
				title: "Produto 1",
				text: "Descrição do produto 1 para vermos a diferença de um para o outro."
			},
			{
				image: "https://1619028l.ha.azioncdn.net/img/2023/04/produto/127719/conjunto-infantil-menina-moletom-girl-marinho-1.jpg?ims=fit-in/400x600/filters:fill(white)",
				title: "Produto 2",
				text: "Descrição do produto 2 para vermos a diferença de um para o outro."
			},
			{
				image: "https://1619028l.ha.azioncdn.net/img/2023/04/produto/127609/sessao-do-studio-134-editar-editar.jpg?ims=fit-in/400x600/filters:fill(white)",
				title: "Produto 3",
				text: "Descrição do produto 3 para vermos a diferença de um para o outro."
			}
		]
	};

	render() {
		return (
			<>
			{
				this.state.cards.map(card =>
					<Card key={card.title} className='mb-3' style={{ width: '18rem' }}>
						<Card.Img variant="top" src={card.image} />
						<Card.Body>
							<Card.Title>{card.title}</Card.Title>
							<Card.Text>{card.text}</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				)
			}
			</>
		);
	};
}

export default CardsProducts;