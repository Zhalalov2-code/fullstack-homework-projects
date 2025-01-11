import React, { useState } from 'react';

function FuelCalc() {

    let [distance, setDistance] = useState('');
    let [price, setPrice] = useState('');
    let [consumption, setConsumption] = useState('');
    let [result, setResult] = useState(null);

    let handleCalculate = () => {
        if (distance && price && consumption) {
            let fuelConsumed = (distance * consumption) / 100;
            let cost = fuelConsumed * price;
            setResult({ fuelConsumed, cost });
        }
    };

    let handleReset = () => {
        setDistance('');
        setPrice('');
        setConsumption('');
        setResult(null);
    };

    return (
        <div>
            <div className="divAverage m-3">
                <div className="row text-center">
                    <h3>Fuel Calculator</h3>
                </div>
                <div className="row mt-3 m-2">
                    <div className="col-6">
                        <div className="col-12">
                            <label htmlFor="distance">Distance (km)</label>
                            <input
                                type="number"
                                id="distance"
                                className="form-control"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="price">Price per liter ($)</label>
                            <input
                                type="number"
                                id="price"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="consumption">Fuel Consumption (liters/100km)</label>
                            <input
                                type="number"
                                id="consumption"
                                className="form-control"
                                value={consumption}
                                onChange={(e) => setConsumption(e.target.value)}
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <button
                                className="btn btn-success form-control"
                                onClick={handleCalculate}
                            >
                                Calculate
                            </button>
                            <button
                            className="btn btn-primary form-control mt-3"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        {result && (
                            <div>
                                <h5>
                                    You have consumed {result.fuelConsumed.toFixed(2)} liters of fuel,
                                    which cost ${result.cost.toFixed(2)}
                                </h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FuelCalc;
