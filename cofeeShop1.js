class CoffeeShop {
    _name;
    _menu;
    #orders;
    #totalAmount;
    constructor(name, menu) {
      this._name = name;
      this._menu = menu;
      this.#orders = [];
      this.#totalAmount = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get menu() {
      return this._menu;
    }
  
    addOrder(productName) {
      const foundProduct = this._menu.find(({ name }) => name === productName);
  
      if (foundProduct) {
        const { name, price } = foundProduct;
        this.#orders.push(name);
        this.#totalAmount = this.#totalAmount + price;
  
        return "Order added!";
      }
  
      return "This item is currently unavailable!";
    }
  
    fulfillOrder() {
      if (this.#orders.length) {
        const fulfilledOrder = this.#orders.shift();
  
        return `${fulfilledOrder} is ready!`;
      }
  
      return "All orders have been fulfilled!";
    }
  
    cheapestItem() {
      return ({ name } = this._menu.reduce((acc, product) => {
        if (product.price < acc.price) return product;
  
        return acc;
      }));
    }
  
    foodsOnly() {
      // version 1 (using filter and map (O(2n)))
      // return this._menu
      //   .filter(({ type }) => type === "food")
      //   .map(({ name }) => name);
  
      // version 2 (using reduce (O(n)))
      return this._menu.reduce((acc, { type, name }) => {
        if (type === "food") {
          acc.push(name);
        }
  
        return acc;
      }, []);
    }
  
    drinksOnly() {
      return this._menu
        .filter(({ type }) => type === "drink")
        .map(({ name }) => name);
    }
  
    listOrders() {
      return this.#orders;
    }
  
    dueAmount() {
      return this.#totalAmount;
    }
  }
  
  const menu = [
    { name: "Espresso", type: "drink", price: 2.5 },
    { name: "Cappuccino", type: "drink", price: 3.0 },
    { name: "Latte", type: "drink", price: 3.5 },
    { name: "Mocha", type: "drink", price: 3.75 },
    { name: "Tea", type: "drink", price: 2.0 },
    { name: "Americano", type: "drink", price: 2.75 },
    { name: "Croissant", type: "food", price: 2.25 },
    { name: "Bagel", type: "food", price: 2.0 },
    { name: "Muffin", type: "food", price: 2.5 },
    { name: "Sandwich", type: "food", price: 4.5 },
    { name: "Salad", type: "food", price: 5.0 },
  ];
  
  const coffeeShop = new CoffeeShop("Klassniy Kofe ot Artasha", menu);
  
  console.log(coffeeShop.dueAmount());
  console.log(coffeeShop.listOrders());
  
  coffeeShop.addOrder("Espresso");
  coffeeShop.addOrder("Mocha");
  
  console.log(coffeeShop.dueAmount());
  console.log(coffeeShop.listOrders())