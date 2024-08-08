import React, { useState } from 'react';
import '../Home/index.module.css'; 

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1 && input2 && input3) {
      const newCard = { input1, input2, input3 };
      setCards([...cards, newCard]);
      setInput1('');
      setInput2('');
      setInput3('');
    } else {
      alert('Iltimos, barcha maʼlumotlarni toʻldiring');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
          placeholder="Ma'lumot kriting 1"
          className="input"
        />
        <input 
          type="text" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          placeholder="Ma'lumot kriting 2"
          className="input"
        />
        <input 
          type="text" 
          value={input3} 
          onChange={(e) => setInput3(e.target.value)} 
          placeholder="Ma'lumot kriting 3"
          className="input"
        />
        <button type="submit" className="button">Make a Card</button>
      </form>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>{card.input1}</p>
            <p>{card.input2}</p>
            <p>{card.input3}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
