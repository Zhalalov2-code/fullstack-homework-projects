import { useEffect, useState } from "react";

function Auto() {
    const auto = [
        {
            mark: 'kia',
            name: 'Optima',
            price: 10500
        },
        {
            mark: 'kia',
            name: 'Soul',
            price: 8500
        },
        {
            mark: 'kia',
            name: 'K5',
            price: 12000
        },
        {
            mark: 'Lexus',
            name: 'Lx 470',
            price: 22500
        },
        {
            mark: 'Lexus',
            name: 'Es 3000',
            price: 9000
        },
        {
            mark: 'Toyota',
            name: 'Camry',
            price: 15200
        },
        {
            mark: 'Toyota',
            name: 'prius',
            price: 7000
        },
        {
            mark: 'Bmw',
            name: 'M5',
            price: 23400
        },
        {
            mark: 'Bmw',
            name: 'M3',
            price: 12300
        },
        {
            mark: 'Bmw',
            name: 'E34',
            price: 5400
        }
    ]

    let [priceFrom, setPriceFrom] = useState(0);
    let [priceUp, setPriceUp] = useState(0);
    let [search, setSearch] = useState('');
    let [mark, setMark] = useState('');
    let [filteredCars, setFilteredCars] = useState(auto)

    function filtredPrice(cars) {
        return cars.filter((car) => {
            let priceInRange = (priceFrom ? car.price >= priceFrom : true) &&
                (priceUp ? car.price <= priceUp : true);
            return priceInRange;
        });
    }

    function filtredMark(cars) {
        return cars.filter((car) => {
            return mark ? car.mark.toLowerCase() === mark.toLowerCase() : true;
        });
    }

    function filtredName(cars) {
        return cars.filter((car) => {
            return car.name.toLowerCase().includes(search.toLocaleLowerCase());
        });
    }

    useEffect(() => {
        let result = auto;

        result = filtredMark(result);
        result = filtredName(result);
        result = filtredPrice(result);

        setFilteredCars(result);
    }, [priceFrom, priceUp, search, mark]);

    return (
        <div>
            <div className="row p-3">
                <div className="col-4">
                    <select className="form-control" onChange={(e) => setMark(e.target.value)}>
                        <option value="" id="">Выберите Марку</option>
                        <option value="kia">Kia</option>
                        <option value="lexus">Lexus</option>
                        <option value="toyota">Toyota</option>
                        <option value="bmw">Bmw</option>
                    </select>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-6">
                            <input className="form-control" type="number" placeholder="Цена от:" onChange={(e) => setPriceFrom(e.target.value)} />
                        </div>
                        <div className="col-6">
                            <input className="form-control" type="number" placeholder="Цена до:" onChange={(e) => setPriceUp(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <input className="form-control" type="text" placeholder="Поиск" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="row p-3">
                <div className="row">
                    {filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                            <div className="col-3" key={`${car.mark}-${car.name}`}>
                                <div className="border border-1 border-black p-2">
                                    <p><strong>Марка:</strong> {car.mark}</p>
                                    <p><strong>Модель:</strong> {car.name}</p>
                                    <p><strong>Цена:</strong> ${car.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>Нет автомобилей по заданным критериям</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Auto;