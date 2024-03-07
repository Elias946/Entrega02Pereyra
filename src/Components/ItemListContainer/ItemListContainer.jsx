// eslint-disable-next-line react/prop-types
import { useEffect, useState } from "react";
import { GetProducts } from "../GetProducts";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const getCategory = useLocation().pathname
    const Title = getCategory === "/" ? "Home" : getCategory.replace("/", "");

    useEffect(() => {
        GetProducts(getCategory)
            .then(res => {
                setProducts(res)
            })
    }, [getCategory])
    return (
        <>
            { }
            <h1>{Title}</h1>
            {products.map((product) => {
                return (
                    < >
                        <Link to={`/Products/${product.id}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 card-link" key={product.id}>
                            <div className="card border-0 rounded-0 shadow ">
                                <img src={product.thumbnail} className="card-img-top rounded-0" />
                                <div className="card-body mt-3 mb-3">
                                    <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title">{product.title}</h4>
                                            <p className="card-text">
                                                {product.brand}
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <i className="bi bi-bookmark-plus fs-2"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center text-center g-0">
                                    <div className="col-4">
                                        <h5>${product.price}</h5>
                                    </div>
                                    <form id="" className="col-8 d-flex align-items-center justify-content-center">
                                        <div className="col-6"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"></path>
                                        </svg>

                                        </div>
                                        <div className="col-6">
                                            <button type="submit" className="btn btn-dark w-100 p-3 rounded-0 text-warning"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"></path>
                                            </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </>
    )
}
export default ItemListContainer;