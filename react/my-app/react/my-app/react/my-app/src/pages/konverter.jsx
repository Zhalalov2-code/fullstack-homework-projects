import { useState } from "react";

function Konverter(){
    let [kilograms, setKilograms] = useState(0);
    let [pounds, setPounds] = useState(0);
    let [ounces, setOunces] = useState(0);
    let [grams, setGrams] = useState(0);
    let [stones, setStones] = useState(0);

    function konvert(kg){
       if(kg || kg === 0){
        setKilograms(kg);
        setPounds(kg * 2.20462);
        setOunces(kg * 35.274);
        setGrams(kg * 1000);
        setStones(kg * 0.157474);
       }
    };

    function Updated(a){
        let kg = Number(a.target.value);
        setKilograms(kg)
        konvert(kg);
    }

    return(
        <div>
            <h1>Weight Converter</h1>
            <h3>Enter a value in the Kilograms field to convert:</h3>
            <h3>Kilograms <input type="number" onChange={Updated} /></h3>
            <h3>Pounds:{pounds}</h3>
            <h3>Ounces:{ounces}</h3>
            <h3>Grams:{grams}</h3>
            <h3>Stones:{stones}</h3>
        </div>
    )
}

export default Konverter;