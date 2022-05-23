import _ from 'lodash';
import { Fragment, useEffect } from 'react';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import ProductCateBoxItem from '../../components/ProductCategory/ProductCateBoxItem';
import customApi from '../../src/api/wordpress/customApi';

// This gets called on every request
export async function getStaticProps({ req, res }) {
    let getProductCat = async () => {
        let result = [];
        let res = await customApi.GetProductCategories({
            parent: 0,
            order: 'asc',
            orderby: 'name',
            exclude: 15,
            acf_format: 'standard',
        });

        await Promise.all(
            res.map(async (category, index) => {
                let childCategory = await customApi.GetProductCategories({
                    parent: category.id,
                    order: 'asc',
                    orderby: 'name',
                    acf_format: 'standard',
                });
                result.push({
                    cateParent: category,
                    cateChild: childCategory,
                });
            })
        );

        return _.orderBy(result, ['cateParent.name'], ['asc']);
    };

    let productCategories = await getProductCat();

    return { props: { productCategories } };
}

function ProductCategoryList({ productCategories }) {
    return (
        <Fragment>
            <Breadcrumb title={'Shop Category'} />

            <section className="section-b-space">
                <div className="container">
                    <div className="row g-4 product-style-1 mb-5 d-md-flex d-none">
                        {productCategories.map((categoryList, index) => (
                            <div className="col-xl-4 col-md-6" key={index}>
                                <ProductCateBoxItem
                                    categoryData={categoryList}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SubscribeBox />
        </Fragment>
    );
}

export default ProductCategoryList;
