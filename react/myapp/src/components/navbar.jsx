function Navbar(){
    return(
        <header className="Navbar">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img1" src="https://static.vecteezy.com/system/resources/previews/018/930/582/non_2x/reddit-logo-reddit-icon-transparent-free-png.png" alt="" />
                    </div>
                    <div className="col-8">
                        <div className="glavnaia"><p className="p1">Главная</p></div>
                        <div className="about"><p className="p1">О нас</p></div>
                        <div className="contact"><p className="p1">Контакты</p></div>
                    </div>
                    <div className="col-2">
                        <div className="SignIn">
                            <i class="fa-solid fa-arrow-right-to-bracket signin"></i>
                            <p className="p2">Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;