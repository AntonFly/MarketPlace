import React, { Component }  from 'react';


class ProductCell extends Component{
    static defaultProps ={
        id: 1

    }

    constructor (...args) {
        super(...args)
        const { id } = this.props
        console.log(id)
        const product = this.getProduct(id)
        console.log(product)
        this.state = {
            product
        }
    }



    render() {
        const {id} = this.props
        const { product } = this.state
        // console.log(productName)
        return (
            <div >
                <img src={"http://localhost:3001/product/img/${id}"} alt={""}/>
                <h1>{product.Name}</h1>;
            </div>
        );
    }

    getProduct(id) {
        let product
        const baseUrl="http://localhost:3001/product/"
        const url=baseUrl+id
         fetch(url).then(res => res.text())
            .then(res => product = JSON.parse(res))
        console.log(product)
        alert(product)
        return product
    }
}

export default ProductCell