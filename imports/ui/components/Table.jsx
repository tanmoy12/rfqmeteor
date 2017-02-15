import React, {Component} from "react";

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.products = [];

    }

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
    };

    render() {

        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                              onRowAdd={this.handleAddEvent.bind(this)}
                              onRowDel={this.handleRowDel.bind(this)} products={this.state.products}/>
            </div>
        );

    }

}

class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var product = this.props.products.map(function (product) {

            return (<ProductRow onProductTableUpdate={onProductTableUpdate}
                                product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div id="tabledesc" className="table">
                <table id="tabledesc" className="table table-responsive table-bordered table-condensed">

                    <thead>
                    <tr>
                        <th className="col-md-1 text-center">Item</th>
                        <th className="col-md-6 text-center">Description Of Item</th>
                        <th className="col-md-1 text-center">Quantity</th>
                        <th className="col-md-2 text-center">Unit rate of price</th>
                        <th className="col-md-2 text-center">Total Amount</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="col-md-1">
                            <input className="col-md-12" type='text'/>
                        </td>
                        <td className="col-md-6">
                            <input className="col-md-12" type='text'/>
                        </td>
                        <td className="col-md-1">
                            <input className="col-md-12" type='text'/>
                        </td>
                        <td className="col-md-2">
                            <input className="col-md-12" type='text'/>
                        </td>
                        <td className="col-md-2">
                            <input className="col-md-12" type='text'/>
                        </td>
                        <td classNameName="del-cell">
                            <button type="button" className="btn btn-default btn-sm">
                                <span className="glyphicon glyphicon-remove"></span></button>

                        </td>
                    </tr>
                    </tbody>

                </table>
                <button type="button" className="btn btn-table-made btn-md pull-right">Add items</button>

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
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type": "itemNo",
                    value: this.props.product.itemNo,
                    id: this.props.product.itemNo
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "desc",
                    value: "",
                    placeholder: this.props.product.desc,
                    id: this.props.product.desc
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "unit",
                    value: this.props.product.unit,
                    id: this.props.product.unit
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "qty",
                    value: this.props.product.qty,
                    id: this.props.product.qty
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "rate",
                    value: this.props.product.rate,
                    id: this.props.product.rate
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "total",
                    value: this.props.product.total,
                    id: this.props.product.total
                }}/>
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
                </td>
            </tr>
        );

    }

}
class EditableCell extends React.Component {

    render() {
        return (
            <td >
                <input className="tableinput" type='text' name={this.props.cellData.type} id={this.props.cellData.id}
                       value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
            </td>
        );

    }

}


