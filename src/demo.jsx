import React from 'react'
import { useState ,useEffect} from 'react'
const Header = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
}

function section() {
    const [first, setfirst] = useState("")
    const [count, setCount] = useState(300);
    

    useEffect(() => {
        if (count > 0) {
    
          const timer = setTimeout(() => {
            setCount(count - 1);
          }, 1000);
    
          return () => clearTimeout(timer);
        }
    
        else if (count==0){
          setfirst("Time is up")
        }
      }, [count]);
    
    

  return (
    <>
    <div style={{border:"2px solid black", height:"100px", width:"100%",display:"flex", marginTop:"30px",justifyContent : "space-around",paddingTop:"50px"}}>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" onClick={Header}></input>
        </div>
    </label>
    </>)}>1</button>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite Music?</h2>
          <input type="radio" name="color" value="red" /> NCS<br/>
          <input type="radio" name="color" value="blue" /> HoliWood<br/>
          <input type="radio" name="color" value="green" /> BollyWood<br/>
          <input type="radio" name="color" value="black" /> South<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>2</button><button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite Game</h2>
          <input type="radio" name="color" value="red" /> PUBG<br/>
          <input type="radio" name="color" value="blue" /> BGMI<br/>
          <input type="radio" name="color" value="green" /> FREE FIRE<br/>
          <input type="radio" name="color" value="black" /> COD<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>3</button><button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite Mobile Company?</h2>
          <input type="radio" name="color" value="red" /> MI<br/>
          <input type="radio" name="color" value="blue" /> ASUS<br/>
          <input type="radio" name="color" value="green" /> ROG<br/>
          <input type="radio" name="color" value="black" /> NOKIA<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>4</button><button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite Animal?</h2>
          <input type="radio" name="color" value="red" /> Dog<br/>
          <input type="radio" name="color" value="blue" /> Cat<br/>
          <input type="radio" name="color" value="green" /> Lion<br/>
          <input type="radio" name="color" value="black" /> Cammel<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>5</button>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>6</button>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>7</button><button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>8</button><button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>9</button>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"red"}} onClick={()=>setfirst(<>
    <label>
    <div className='d2'>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" value="Submit" className="c" ></input>
        </div>
    </label>
    </>)}>10</button>
    <button style={{height:"50px",display:"-ms-flexbox" ,width:"50px",borderRadius:"100%",backgroundColor:"white"}} onClick={()=>setfirst(<>
        </>)}>{count}</button>
    </div>
   <h1>{first}</h1>
    </>
  )
}

export default section