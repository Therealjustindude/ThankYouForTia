class MenuSelection{
	static selections = []
	constructor(id, title, price) {
		this.id = id;
		this.title = title;
		this.price = price;
		MenuSelection.addToCart(this)
	}

	static addToCart(item) {
		const itemCart = document.createElement("div");
		itemCart.id = "item-cart";
		document.getElementById("main-content").appendChild(itemCart)
		const cartHead = document.createElement("div");
		cartHead.id = "cart-head";
		let ul = document.createElement("ul")
		ul.id = "cart-ul"
		let div = document.createElement("div")
		div.id = "cart-price-div"
		let btn = document.createElement("button")
		btn.setAttribute("data-menu-item-id", item.id)
		btn.innerText = "Remove Item"
		btn.addEventListener("click", removeFromCart)
		//add check out button that post fetchs selections to db
		if (itemCart.innerText == "") {
			cartHead.innerText = "Cart"
			itemCart.appendChild(cartHead)
			itemCart.appendChild(div)
			itemCart.appendChild(ul)
		}
		const cartUl = document.getElementById("cart-ul");
		
		const priceDiv = document.getElementById("cart-price-div");
		let li = document.createElement("li")
		li.id = `cart-item-${item.id}`
		li.innerText = `$${item.price} | ${item.title}`
		li.appendChild(btn)
		cartUl.appendChild(li)
		this.selections.push(item)
		MenuSelection.priceTotal()
		priceDiv.innerText = `Total: $${MenuSelection.newTotal}`

	}

	static newTotal = 0

	static priceTotal() {
		let obj = MenuSelection.selections
		MenuSelection.newTotal= 0
		for (let i = 0; i < obj.length; i++){
			MenuSelection.newTotal = MenuSelection.newTotal + obj[i].price
		}
		return MenuSelection.newTotal
	}

	

}