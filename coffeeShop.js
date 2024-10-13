let menu = [
    {name: "Capuccino", price: 1200, type: "Drink"} ,
    {name: "Latte", price: 800, type: "Drink"} ,
    {name: "Americano", price: 600, type: "Drink"} ,
    {name: "Peperoni", price: 2500, type: "Food"} ,
    {name: "Sandwich", price: 3200, type: "Food"}
]

class Coffee {
   
    constructor (name , menu) {
        this.name = name
        this.menu = menu
        this._orders = []
}

addOrder (item) {
        menu.forEach(({name}) => {
            if(name === item) {
                this._orders.push(item)
                return "Your Order is estimated"

}
            
            return "This item is currently unavailable!"
            }) 
                
    }


    get orders () {
       return this._orders
    }

    
    fullFillOrder () {
        if(this._orders.length !== 0) {
            return this._orders.shift() + " is ready"
        }
        else return "All orders have been fulfiled"
}

dueAmount () {
    let res = 0
    this._orders.forEach((item) => {
        this.menu.forEach(({name , price}) => {
            if(item === name) res += price
        })
    }
 )
       
    return res
}

cheapestItem () {
    let res = +Infinity
    return this.menu.reduce((acc , it => {
        if(res > it.price) return it
        else return res
    }))
}



listOrdders () {
    if(this._orders.length !== 0 ) return this._orders
    else return []
}

drinksOnly () {
   return  this.menu.filter(({type}) => {
        type === "Drink"
    });
}

foodsOnly () {
    return this.menu.filter(function ({type}){
        type === "Food"
    })
}
}

