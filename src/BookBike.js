import React, { Component } from 'react';

const data = [{
        "id": 1,
        "product_name": "Adult Bike",
        "product_type": "bike",
        "product_price": [{
                "duration": 1,
                "price": 7
            },
            {
                "duration": 2,
                "price": 14
            },
            {
                "duration": 4,
                "price": 20
            },
            {
                "duration": 24,
                "price": 35
            }
        ],
        "description": "Fusce faucibus tempus orci, in facilisis nisi tempus eu. Phasellus rhoncus, odio eu consequat rhoncus, nisl mi vulputate arcu, non viverra tellus massa quis justo. Praesent pretium risus ut tempus laoreet. Etiam blandit commodo sem eget finibus. Praesent nec felis est. Integer nec sem sed purus consequat aliquam. Aenean eget tellus quis tortor pharetra ultrices."
    },
    {
        "id": 2,
        "product_name": "Kid Bike",
        "product_type": "bike",
        "product_price": [{
                "duration": 1,
                "price": 6
            },
            {
                "duration": 2,
                "price": 13
            },
            {
                "duration": 4,
                "price": 19
            },
            {
                "duration": 24,
                "price": 34
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo ac arcu porta maximus vel sed ante. Aenean quis scelerisque arcu. Fusce efficitur faucibus dolor, vel laoreet ex. Donec augue velit, suscipit vel eleifend id, auctor quis sapien. Nulla scelerisque nulla magna, sed scelerisque orci imperdiet pellentesque. Sed metus magna, iaculis in lacus quis, ornare hendrerit lorem. Sed ac laoreet nisl. Aliquam eleifend cursus nisl, quis condimentum ligula scelerisque et."
    },
    {
        "id": 3,
        "product_name": "Bike Basket",
        "product_type": "addon",
        "product_price": [{
                "duration": 1,
                "price": 7
            },
            {
                "duration": 2,
                "price": 14
            },
            {
                "duration": 4,
                "price": 20
            },
            {
                "duration": 24,
                "price": 35
            }
        ],
        "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis rhoncus diam nisl, vitae imperdiet turpis commodo posuere."
    }
]

class BookBike extends Component {

    constructor() {
        super()
        this.state = {
            productName: '',
            id: 1,
            duration: 1,
            currentProduct: '',
            info: data,
            price: 7
        }

        this.handleChange = this.handleChange.bind(this)
        this.calcPrice = this.calcPrice.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }

    updatePrice(newprice) {

      this.setState({
            price: newprice
       })
    }

    calcPrice(index) {
        let THIS = this;
        let priceField = document.querySelector('.price');
        let prices = data[index].product_price;
        let curDuration = this.state.duration;

        prices.forEach(function(el, index) {

            if (el.duration == curDuration) {
                THIS.updatePrice(el.price);
            }
        })

    }

    handleChange(event) {
        const { name, value } = event.target
        let bike = document.querySelector('.bike');

        console.dir(data);


        this.setState({
            [name]: value
        }, () => {
            bike.innerHTML = data[this.state.id - 1].product_name;
            this.calcPrice(this.state.id - 1);
        })
    }

    componentDidMount() {
        const bikeList = document.querySelector('.bike-type');
        const durationList = document.querySelector('.duration');
        let option1;
        let option2;


        data.forEach(function(el, index) {
            option1 = document.createElement('option');
            option1.text = el.product_name;
            option1.value = el.id;
            bikeList.add(option1);

            option2 = document.createElement('option');
            option2.text = el.product_price[index].duration;
            option2.value = el.product_price[index].duration;
            durationList.add(option2);

        })

    }

    render() {

        return (
            <div className="book-a-bike">
            <form>
              <div>
                <h3>What would you like to rent?</h3>
                <select className="bike-type" name="id" onChange={this.handleChange}>
                </select>
              </div>
              <div>
                <h3>For how long?</h3>
                <select className="duration" name="duration" onChange={this.handleChange}>
                </select>
              </div>
              <div>
                <p>Bike type: <span className="bike">{this.state.currentProduct}</span></p>
                <p>Duration: <span>{this.state.duration} hours</span></p>
              </div>
              <div>
                <p>Price: $<span className="priceField">{this.state.price}</span></p>
              </div>
              <input type="submit" value="Submit"></input>
            </form>
      </div>
        );
    }
}

export default BookBike;