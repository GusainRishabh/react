import React from 'react'
import { useState, useEffect } from 'react'
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
    const [secound, setsecound] = useState("")
    const [count, setCount] = useState(300);


    useEffect(() => {
        if (count > 0) {

            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }

        else if (count == 0) {
            setfirst("Time is up")
        }
    }, [count]);



    return (
        <>
            <div style={{ border: "2px solid black", height: "50px", width: "100%", display: "flex", marginTop: "30px", justifyContent: "space-around", paddingTop: "50px" }}>
                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }} onClick={() => setfirst(<>
                    <label>
                        <>
                            <div style={{ border: "2px solid black", height: "50px", width: "100%", display: "flex", marginTop: "30px", justifyContent: "space-around", paddingTop: "50px" }}>
                                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }} onClick={() => setsecound("Hiii")}>1</button>
                                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }} onClick={()=>setfirst("Hii")}>2</button>
                                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }}>3</button>
                                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }}>4</button>
                                <button style={{ height: "30px", display: "-ms-flexbox", width: "30px", borderRadius: "100%", backgroundColor: "red" }}>5</button>
                            </div>

                        </>

                    </label>
                </>)}>1</button>



                <button style={{ height: "50px", display: "-ms-flexbox", width: "50px", borderRadius: "100%", backgroundColor: "white" }} onClick={() => setfirst(<>
                </>)}>{count}</button>
            </div>
            <h1>{first}</h1>
        </>
    )
}

export default section