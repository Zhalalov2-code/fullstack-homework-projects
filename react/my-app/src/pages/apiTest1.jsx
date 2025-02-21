import { useState } from "react";
import axios from 'axios'

function ApiTest1() {
    const [api1, setApi1] = useState(null);
    const [api2, setApi2] = useState(null);
    const [api3, setApi3] = useState(null);
    const [value, setValue] = useState('');

    async function apiTest1() {
        const x = await axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/image/random'
        })
        console.log(x);
        if (x.status === 200) {
            setApi1(x)
        }
    }

    async function apiTest2() {
        const x = await axios({
            method: 'get',
            url: 'https://api.ipify.org?format=json'
        })
        console.log(x);
        if(x.status === 200){
            setApi2(x)
        }
    }

    async function apiTest3() {
        const x = await axios({
            method: 'get',
            url: 'https://api.nationalize.io',
            params:{
                name: value
            }
        });
        console.log(x)
        if(x.status === 200){
            setApi3(x);
        }
    }

    return (
        <div className="row text-center">
            <div className="col-12">
                <h3>Api Test1</h3>
                {api1 != null &&
                    <img src={api1.data.message} alt="" width={100} />
                }

                <button onClick={apiTest1}>Get data</button>
            </div>
            <div className="col-12 mt-5">
                <h3>Api Test2</h3>
                <button onClick={apiTest2}>Get data</button>
                {api2 != null &&
                    <p>IP:{api2.data.ip}</p>
                }
            </div>
            <div className="col-12 mt-5">
                <h3>Api Test3</h3>
                <input value={value} type="text" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={apiTest3}>Get data</button>
                {api3 !== null && api3.data.country.length > 0 && (
                    <div>
                        <h4>{value}:</h4>
                        <ul>
                            {api3.data.country.map((item, index) => (
                                <li key={index}>
                                    Country: {item.country_id}, Probability: {item.probability}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ApiTest1;