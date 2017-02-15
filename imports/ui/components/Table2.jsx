import React, {Component} from "react";

export default class Table2 extends Component {

    constructor(props) {
        super(props);

        //  this.state.products = [];
        this.state = {};
        this.state.filterText = "";
        this.state.products = [];

    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };

    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(evt) {
        var id = (this.state.products.length + 1);
        var product = {
            itemNo: id,
            desc: "desc",
            unit: "unit",
            qty: 0,
            rate: 1,
            total: 2
        };
        this.state.products.push(product);
        this.setState(this.state.products);

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
        this.setState(newProducts);
        console.log(this.state.products);
    };

    render() {

        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                              onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
                              products={this.state.products} filterText={this.state.filterText}/>
            </div>
        );

    }

}

class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function (product) {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            return (
                <ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)}
                            key={product.id}/>)
        });
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
                    <input className="col-md-12" type='text' name="itemNo" id={this.props.product.itemNo}
                           value={this.props.product.total} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-5">
                    <input className="col-md-12" type='text' name="desc" id={this.props.product.itemNo}
                           value={this.props.product.desc} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-1">
                    <input className="col-md-12" type='text' name="unit" id={this.props.product.itemNo}
                           value={this.props.product.unit} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-1">
                    <input className="col-md-12" type='text' name="qty" id={this.props.product.itemNo}
                           value={this.props.product.qty} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-2">
                    <input className="col-md-12" type='text' name="rate" id={this.props.product.itemNo}
                           value={this.props.product.rate} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-2">
                    <input className="col-md-12" type='text' name="Total Amount" id={this.props.product.itemNo}
                           value={this.props.product.total} onChange={this.props.onProductTableUpdate}/>
                </td>
                <td>
                    <button type="button" onClick={this.onDelEvent.bind(this)} className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </td>
            </tr>
        );

    }

}