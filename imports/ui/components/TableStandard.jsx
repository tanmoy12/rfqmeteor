import React, {Component} from "react";

export default class TableStandard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: pro
        };

    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products;

        var newProducts = products.map(function (product) {
            for (var key in product) {
                //console.log(key);
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({
            products: newProducts
        }, function () {
            this.props.sendData(this.state.products);
        });

    };

    render() {
        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                              products={this.state.products}/>
            </div>
        );
    }
}

class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var product = this.props.products.map(function (product) {
            return (
                <ProductRow onProductTableUpdate={onProductTableUpdate} product={product}
                            key={product.id}/>)
        });
        return (
            <div id="tabledesc" className="table">
                <table id="customers" className="table table-responsive table-bordered table-condensed">

                    <thead>
                    <tr >
                        <th className="col-md-1" >SL No</th>
                        <th className="col-md-3">Description of Items</th>
                        <th className="col-md-4">Full Technical Specification
                            and Standards
                        </th>
                        <th className="col-md-2">Make and Origin</th>
                        <th className="col-md-2 text-center">Quantity</th>
                    </tr>

                    </thead>
                    <tbody>
                    {product}
                    </tbody>
                </table>
                <br/><br/>

            </div>
        );

    }

}

class ProductRow extends React.Component {

    render() {
        var pack= this.props.product.spec;
        return (
            <tr>
                <td  className="col-md-1">
                    <p id="item_no">{this.props.product.item_no}</p>
                </td>
                <td className="col-md-3 text-left">
                    {this.props.product.desc}
                </td>
                <td className="col-md-4">
                    <textarea name="spec" id={this.props.product.id} onChange={this.props.onProductTableUpdate} defaultValue={pack}  rows="4" cols="50">

                    </textarea>
                </td>
                <td  className="col-md-2">
                    <textarea name="making" id={this.props.product.id} onChange={this.props.onProductTableUpdate} defaultValue="To Be Mentioned" rows="4" cols="50">

                    </textarea>
                </td>
                <td className="col-md-2 text-left">
                    {this.props.product.qty}
                </td>
            </tr>
        );

    }

}