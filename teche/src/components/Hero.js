import React, { Component } from 'react';
import Card from './Card';
class MyComponent extends Component {
    
  render() {
    const cardsData = [
        {
          title: 'Card 1',
          description: 'This is the first card.',
          
        },
        {
          title: 'Card 2',
          description: 'This is the second card.',
         
        },
        {
          title: 'Card 3',
          description: 'This is the third card.',
          
        },
      ];
    return (
        <div className="App">
        <h1>Card Gallery</h1>
        <div className="card-container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyComponent;
