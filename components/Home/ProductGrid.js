import ProductCart from '../Product/ProductCard';

function ProductGrid() {
    return (
        <section className="ratio_asos">
            <div className="container">
                <div className="row m-0">
                    <div className="col-sm-12 p-0">
                        <div className="title title-2 text-center">
                            <h2>New Arrival</h2>
                            <h5 className="text-color">Our collection</h5>
                        </div>
                        <div className="product-wrapper product-style-2 row g-sm-4 g-3">
                            {Array(8)
                                .fill(null)
                                .map((item, index) => (
                                    <div key={index} className="col-xl-3 col-lg-4 col-6">
                                        <ProductCart />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;
