import React, { Component } from "react";
import { Fade } from "react-reveal";

import Button from "../ui/Button";
import Amount from "../ui/Amount";
import Sizes from "../ui/Sizes";

export default class ShopItem extends Component {
  state = {
    sizeError: false,
    selectedSize: "",
    purchased: false,
  };

  handlePurchase = () => {
    const { selectedSize, sizeError } = this.state;
    if (!selectedSize && !sizeError) {
      this.setState({ sizeError: true });
    } else {
      this.setState({ purchased: true });
    }
  };

  handleSizeChange = (e) => {
    const selectedSize = e.target.innerText;
    this.setState({ selectedSize, sizeError: false });
  };

  render() {
    const { url, type, name, price, sizes } = this.props;
    const { sizeError, selectedSize, purchased } = this.state;

    return (
      <div className={`shop_item ${purchased ? "shop__item--purchased" : ""}`}>
        <img src={url} alt={type} className="shop__item" />
        <div className="shop__name">{name}</div>
        <div className="shop__price">${price}</div>
        <div className="shop__details">
          {sizeError && !selectedSize && (
            <Fade duration={500}>
              <div className="shop__size-error">Please select a size first</div>
            </Fade>
          )}
          <Sizes
            clickHandler={this.handleSizeChange}
            sizes={sizes}
            selectedSize={selectedSize}
          />
          <Amount />
        </div>
        <Button
          clickHandler={this.handlePurchase}
          text={purchased ? "In your basket" : "Purchase"}
        />
      </div>
    );
  }
}
