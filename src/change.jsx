import React, { useState } from 'react';

function App() {
  const [first, setFirst] = useState(null);
  const [colorButtonColor, setColorButtonColor] = useState('red');
  const [musicButtonColor, setMusicButtonColor] = useState('red');
  const [gameButtonColor, setGameButtonColor] = useState('red');
  const [animalButtonColor, setAnimalButtonColor] = useState('red');
  const [companyButtonColor, setCompanyButtonColor] = useState('red');

  const handleSubmit = (e, type) => {
    e.preventDefault();
    switch (type) {
      case 'color':
        setColorButtonColor('green');
        break;
      case 'music':
        setMusicButtonColor('green');
        break;
      case 'game':
        setGameButtonColor('green');
        break;
      case 'animal':
        setAnimalButtonColor('green');
        break;
      case 'company':
        setCompanyButtonColor('green');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button
        style={{
          height: "50px",
          display: "-ms-flexbox",
          width: "50px",
          borderRadius: "100%",
          backgroundColor: colorButtonColor
        }}
        onClick={() => setFirst(
          <>
            <label>
              <div className='d2'>
                <h2>What is your favorite color?</h2>
                <input type="radio" name="color" value="red" /> Red<br />
                <input type="radio" name="color" value="blue" /> Blue<br />
                <input type="radio" name="color" value="green" /> Green<br />
                <input type="radio" name="color" value="black" /> Black<br /><br />
                <input type="submit" value="Submit" className="c" onClick={(e) => handleSubmit(e, 'color')}></input>
              </div>
            </label>
          </>
        )}
      >1</button>

      <button
        style={{
          height: "50px",
          display: "-ms-flexbox",
          width: "50px",
          borderRadius: "100%",
          backgroundColor: musicButtonColor
        }}
        onClick={() => setFirst(
          <>
            <label>
              <div className='d2'>
                <h2>What is your favorite Music?</h2>
                <input type="radio" name="music" value="NCS" /> NCS<br />
                <input type="radio" name="music" value="Hollywood" /> Hollywood<br />
                <input type="radio" name="music" value="Bollywood" /> Bollywood<br />
                <input type="radio" name="music" value="South" /> South<br /><br />
                <input type="submit" value="Submit" className="c" onClick={(e) => handleSubmit(e, 'music')}></input>
              </div>
            </label>
          </>
        )}
      >2</button>

      <button
        style={{
          height: "50px",
          display: "-ms-flexbox",
          width: "50px",
          borderRadius: "100%",
          backgroundColor: gameButtonColor
        }}
        onClick={() => setFirst(
          <>
            <label>
              <div className='d2'>
                <h2>What is your favorite Game?</h2>
                <input type="radio" name="game" value="PUBG" /> PUBG<br />
                <input type="radio" name="game" value="BGMI" /> BGMI<br />
                <input type="radio" name="game" value="FREE FIRE" /> FREE FIRE<br />
                <input type="radio" name="game" value="COD" /> COD<br /><br />
                <input type="submit" value="Submit" className="c" onClick={(e) => handleSubmit(e, 'game')}></input>
              </div>
            </label>
          </>
        )}
      >3</button>

      <button
        style={{
          height: "50px",
          display: "-ms-flexbox",
          width: "50px",
          borderRadius: "100%",
          backgroundColor: animalButtonColor
        }}
        onClick={() => setFirst(
          <>
            <label>
              <div className='d2'>
                <h2>What is your favorite Animal?</h2>
                <input type="radio" name="animal" value="Dog" /> Dog<br />
                <input type="radio" name="animal" value="Cat" /> Cat<br />
                <input type="radio" name="animal" value="Lion" /> Lion<br />
                <input type="radio" name="animal" value="Camel" /> Camel<br /><br />
                <input type="submit" value="Submit" className="c" onClick={(e) => handleSubmit(e, 'animal')}></input>
              </div>
            </label>
          </>
        )}
      >4</button>

      <button
        style={{
          height: "50px",
          display: "-ms-flexbox",
          width: "50px",
          borderRadius: "100%",
          backgroundColor: companyButtonColor
        }}
        onClick={() => setFirst(
          <>
            <label>
              <div className='d2'>
                <h2>What is your favorite Mobile Company?</h2>
                <input type="radio" name="company" value="MI" /> MI<br />
                <input type="radio" name="company" value="ASUS" /> ASUS<br />
                <input type="radio" name="company" value="ROG" /> ROG<br />
                <input type="radio" name="company" value="NOKIA" /> NOKIA<br /><br />
                <input type="submit" value="Submit" className="c" onClick={(e) => handleSubmit(e, 'company')}></input>
              </div>
            </label>
          </>
        )}
      >5</button>

      <pre>{first}</pre>
    </>
  );
}

export default App;
