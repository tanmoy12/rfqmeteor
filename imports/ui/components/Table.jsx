import React, {Component} from "react";

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            estimate: 0
        };

    }

    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
        var total=0;
        this.state.products.map(function (product) {
            total += Number(product.total);
        });
        this.setState({
            estimate: total
        }, function () {
            this.props.sendData(this.state.products, this.state.estimate);
        });


    }

    handleAddEvent(evt) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var item = (this.state.products.length + 1);

        var product = {
            id: id,
            item_no: item,
            desc: "",
            unit: "",
            qty: "",
            rate: "",
            total: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);
        var total=0;
        this.state.products.map(function (product) {
            total += Number(product.total);
        });
        this.setState({
            estimate: total
        }, function () {
            this.props.sendData(this.state.products, this.state.estimate);
        });
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
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        var total=0;
        this.state.products.map(function (product) {
            total += Number(product.total);
        });
        this.setState({
            estimate: total
        }, function () {
            this.props.sendData(this.state.products, this.state.estimate);
        });
    };

    render() {
        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                              onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
                              products={this.state.products} totalestimate={this.state.estimate}/>
            </div>
        );
    }
}

class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var product = this.props.products.map(function (product) {
            return (
                <ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)}
                            key={product.id}/>)
        });
        var totalamount = null;
        if (this.props.products.length > 0) {
            totalamount =
                <tr>
                    <th className="col-md-1 text-center"></th>
                    <th className="col-md-5 text-center"></th>
                    <th className="col-md-1 text-center"></th>
                    <th className="col-md-1 text-center"></th>
                    <th className="col-md-2 text-center"></th>
                    <th className="col-md-2 text-right">{this.props.totalestimate}</th>
                    <th></th>
                </tr>
        }

        return (
            <div id="tabledesc" className="table">
                <table id="tabledesc" className="table table-responsive table-bordered table-condensed">

                    <thead>
                    <tr>
                        <th className="col-md-1 text-center">Item</th>
                        <th className="col-md-5 text-center">Description Of Item</th>
                        <th className="col-md-1 text-center">Unit</th>
                        <th className="col-md-1 text-center">Quantity</th>
                        <th className="col-md-2 text-center">Rate/unit</th>
                        <th className="col-md-2 text-center">Total Amount</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    {totalamount}
                    </tbody>
                </table>
                <button type="button" onClick={this.props.onRowAdd} className="btn btn-default btn-sm pull-right">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>

            </div>
        );

    }

}

class ProductRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);
    }

    render() {
        return (
            <tr>
                <td className="col-md-1">
                    <p id="item_no">{this.props.product.item_no}</p>
                </td>
                <td className="col-md-5">
                    <input className="col-md-12 text-center" type='text' name="desc" id={this.props.product.id}
                           placeholder="Description" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-1">
                    <input className="col-md-12 text-center" type='text' name="unit" id={this.props.product.id}
                           placeholder="Unit" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-1">
                    <input className="col-md-12 text-right" type='number' name="qty" id={this.props.product.id}
                           placeholder="0" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-2">
                    <input className="col-md-12 text-right" type='number' name="rate" id={this.props.product.id}
                           placeholder="0" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-2">
                    <input className="col-md-12 text-right" type='number' name="total" id={this.props.product.id}
                           placeholder="0" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td>
                    <button type="button" onClick={this.onDelEvent.bind(this)} className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                </td>
            </tr>
        );

    }

}