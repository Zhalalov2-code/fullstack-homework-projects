import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailsApiTest3() {
    const { id } = useParams();
    const [productsDetails3, setProductDetails3] = useState(null);

    async function productDetails3() {
        const x = await axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${id}`
        });
        if (x.status === 200) {
            setProductDetails3(x.data);
        }
    }

    useEffect(() => {
        productDetails3();
    }, [id]);

    return (
        <div>
            {productsDetails3 != null && (
                <div className="col-4">
                    <img src={productsDetails3.image} width={200} alt="..." />
                    <h2>{productsDetails3.title}</h2>
                    <p>{productsDetails3.description}</p>
                    <Link to={'/apiTest3'}><button className="btn btn-primary">Back</button></Link>
                </div>
            )}
        </div>
    );
}

export default DetailsApiTest3;
