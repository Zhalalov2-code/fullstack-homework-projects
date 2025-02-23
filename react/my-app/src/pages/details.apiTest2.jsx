import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailsApiTest2() {
    const { id } = useParams();
    const [productsDetails, setProductDetails] = useState(null);

    async function productDetails() {
        const x = await axios({
            method: 'get',
            url: `https://api.escuelajs.co/api/v1/products/${id}`
        });
        if (x.status === 200) {
            setProductDetails(x.data);
        }
    }

    useEffect(() => {
        productDetails();
    }, [id]);

    return (
        <div>
            {productsDetails != null && (
                <div className="col-4">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={productsDetails.images[0]} width={450} alt="..." />
                            </div>
                            {productsDetails.images.slice(1).map((image, index) => (
                                <div className="carousel-item" key={index}>
                                    <img src={image} width={450} alt="..." />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h2>{productsDetails.title}</h2>
                    <p>{productsDetails.description}</p>
                    <Link to={'/apiTest2'}><button className="btn btn-primary">Back</button></Link>
                </div>
            )}
        </div>
    );
}

export default DetailsApiTest2;
