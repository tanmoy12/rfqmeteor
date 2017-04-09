import React, {Component} from "react";

export default class TableStandard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: this.props.data,
            estimate: 0,
            destination: ''
        };

    }
    handleDestination(evt){
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };

        this.setState({
            destination: item.value
        }, function () {
            this.props.sendDestination(this.state.destination);
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
                //console.log(key);
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
                if(item.name == 'rate' || item.name == 'qty'){
                    product['total'] = (Number(product.qty) * Number(product.rate));
                }
            }
            return product;
        });
        var total=0;
        this.state.products.map(function (product) {
            total += Number(product.total);
        });
        this.setState({
            estimate: total,
            products: newProducts
        }, function () {
            this.props.sendData(this.state.products, this.state.estimate);
        });
    };

    render() {
        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                              onDestinationUpdate={this.handleDestination.bind(this)}
                              products={this.state.products} totalestimate={this.state.estimate}/>
            </div>
        );
    }
}

class ProductTable extends React.Component {
    static convertNumberToWords(amount) {
        var words = [];
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        var value;
        if (n_length <= 9) {
            var n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var product = this.props.products.map(function (product) {
            return (
                <ProductRow onProductTableUpdate={onProductTableUpdate} product={product}
                            key={product.id}/>)
        });
        return (
            <div className="table table-bordered table-responsive">
                <table id="customers" className="table">

                    <thead>
                    <tr>
                        <th rowSpan="2">Item No</th>
                        <th rowSpan="2">Description of Items</th>
                        <th rowSpan="2">Unit of Measurement</th>
                        <th rowSpan="2">Qty</th>
                        <th rowSpan="1" colSpan="1" scope="colgroup">Unit rate or price</th>
                        <th rowSpan="1" colSpan="1" scope="colgroup">Total amount</th>
                        <th rowSpan="2">Destination <br/> for <br/>Delivery of <br/> Goods</th>
                    </tr>
                    <tr>
                        <th scope="col">In figures</th>
                        <th scope="col"> In figures/inwords</th>

                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    <tr>
                        <td colSpan="4" rowSpan="2" scope="colgroup" className="text-center"><strong>Total
                            Amount for Supply of Goods and related services <br/>
                            (inclusive of VAT and all applicable taxes; see Note 2 below) </strong></td>

                        <td scope="colgroup">In figures</td>
                        <td rowSpan="1" colSpan="2" className="text-right">{this.props.totalestimate}</td>
                    </tr>

                    <tr>
                        <td scope="colgroup">In Words</td>
                        <td rowSpan="1" colSpan="2" className="text-right">{ProductTable.convertNumberToWords(this.props.totalestimate)}</td>
                    </tr>

                    <tr>
                        <td colSpan="3" scope="colgroup" className="text-left"> Goods to be supplied
                            to
                        </td>

                        <td colSpan="9" scope="colgroup" className="text-center">
                            <input className="text-center" type='text' name="desc" id="destination"
                                   placeholder="Destination" onChange={this.props.onDestinationUpdate}/>
                        </td>

                    </tr>

                    <tr>
                        <td colSpan="3" scope="colgroup" className="text-left"> Total Amount in taka
                            (inwords)
                        </td>

                        <td colSpan="9" scope="colgroup" className="text-center"> {ProductTable.convertNumberToWords(this.props.totalestimate)}.
                        </td>

                    </tr>

                    <tr>
                        <td colSpan="3" scope="colgroup" className="text-left"> Delivery Offered</td>

                        <td colSpan="9" scope="colgroup" className="text-center"> [insert weeks/days]
                            from
                            date of issuing the Purchase Order]
                        </td>

                    </tr>
                    <tr>
                        <td colSpan="3" scope="colgroup" className="text-left"> Warranty Provided</td>

                        <td colSpan="9" scope="colgroup" className="text-center"> [insert weeks/months
                            from
                            date of completion of the delivery; state none if not applicable]
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        );

    }

}

class ProductRow extends React.Component {

    render() {
        var product= this.props.product;
        return (
            <tr>
                <td className="col-md-1 text-center">{product.item_no}</td>
                <td className="col-md-4 text-left">{product.desc}</td>
                <td className="col-md-2 text-right">{product.unit}</td>
                <td className="col-md-1 text-right">{product.qty}</td>
                <td className="col-md-2">
                    <input className="text-right" type='number' name="rate" id={this.props.product.id}
                           placeholder="0" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td className="col-md-2">
                    <input className="text-right" type='number' name="total" id={this.props.product.id}
                           value={this.props.product.total} placeholder="0" onChange={this.props.onProductTableUpdate}/>
                </td>
                <td> DRiCM,BCSIR</td>
            </tr>
        );

    }

}