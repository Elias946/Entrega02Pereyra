import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductId } from "../GetProducts";

const ProductDetail = () => {

    const { ProductId } = useParams();

    const [Product, setProducts] = useState([])
    useEffect(() => {
        const LoadData = async () => {
            await GetProductId(ProductId)
                .then((res) => {

                    setProducts(res)
                })
        }

        LoadData()
            .catch(console.error);
    }, [ProductId])

    return (
        <>
            <div key={Product.id} >
                <div className="container mt-5 mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images">
                                            <div className="text-center"> <img id="main-image" className="thumbnail" src={Product.thumbnail} /> </div>
                                            <div className="thumbnail text-center">
                                                {

                                                    Product.images && Product.images.length > 0 && Product.images.map((image, index) => (
                                                        <img key={index} className="mt-4" src={image} width="70" alt={`Product Image ${index}`} />
                                                    ))

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                {/* Todo Link Category */}
                                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Category: {Product.category}</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                            </div>
                                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{Product.brand}</span>
                                                <h5 className="text-uppercase">{Product.title}</h5>
                                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${Product.price}</span></div>
                                            </div>
                                            <p className="about">{Product.description}</p>
                                            <div className="sizes mt-5">
                                                <h6 className="text-uppercase">Quantity: {Product.quantity}</h6>
                                                Todo: Contador
                                            </div>
                                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;