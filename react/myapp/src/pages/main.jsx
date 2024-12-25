import Navbar from "../components/navbar";

function Main(){
    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row row1">
                    <div className="col-12">
                        <div class="overlay"></div>
                        <div className="divData">
                            <div className="container p-4">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="text-center ">Найдем, где остановится!</h3>
                                    </div>
                                    <div className="col-12">
                                        <p className="text-secondary mx-2">Квартиры, отели, гостевые дома 3000 вариантов</p>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <input className="form-control form-control-lg" type="text" placeholder="Куда едем"/>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <input className="form-control form-control-lg" type="text" placeholder="Заезд - Отъезд"/>
                                    </div>
                                    <div className="col-2 mt-4">
                                        <button type="button" class="btn btn-danger">Поиск</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 p-5">
                        <h2>Поиск по типу размещение</h2>
                        <h4 className="mt-3 text-secondary">Основные типы недвижимости</h4>
                    </div>
                </div>
                <div className="row p-5">   
                    <div className="col-3 kub1 m-5 text-center">
                        <i class="fa-solid fa-house-chimney homeicon"></i>
                        <p className="p">Дом</p>
                        <div className="span1 text-center">37</div>
                    </div>
                    <div className="col-3 kub1 m-5 text-center">
                        <i class="fa-solid fa-hotel homeicon"></i>
                        <p className="p">Квартиры</p>
                        <div className="span1 text-center">141</div>
                    </div>
                    <div className="col-3 kub1 m-5 text-center">
                        <i class="fa-solid fa-bed homeicon"></i>
                        <p className="p">Комнаты</p>
                        <div className="span1 text-center">40</div>
                    </div>
                    <div className="col-3 kub1 m-5 text-center">
                        <i class="fa-solid fa-hotel homeicon"></i>
                        <p className="p">Хостел</p>
                        <div className="span1 text-center">1</div>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 text-center mt-5 p-5">
                        <h2>Последние поступления</h2>
                        <h4 className="mt-3 text-secondary">Недавно добавленные объявления</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;