// Aragorn Restaurant Data
let aragorn = {
    name: "Aragorn's Orc BBQ", //The name of the restaurant
    min_order: 20, //The minimum order amount required to place an order
    delivery_charge: 5, //The delivery charge for this restaurant
    //The menu
    menu: {
        //First category
        "Appetizers": {
            //First item of this category
            0: {
                name: "Orc feet",
                description: "Seasoned and grilled over an open flame.", //
                price: 5.50
            },
            1: {
                name: "Pickled Orc fingers",
                description: "Served with warm bread, 5 per order.",
                price: 4.00
            },
            2: { 
                name: "Sauron's Lava Soup",
                description: "It's just really spicy water.",
                price: 7.50
            },
            3: {
                name: "Eowyn's (In)Famous Stew",
                description: "Bet you can't eat it all.",
                price: 0.50
            },
            4: {
                name: "The 9 rings of men.",
                description: "The finest of onion rings served with 9 different dipping sauces.",
                price: 14.50
            }
        },
        "Combos": {
            5: {
                name: "Buying the Farm",
                description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
                price: 15.99
            },
            6: {
                name: "The Black Gate Box",
                description: "Lots of unidentified pieces. Serves 50.",
                price: 65.00
            },
            7: {
                name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
                description: "Smeagol's favorite.",
                price: 15.75
            },
            8: { 
                name: "Morgoth's Scorched Burgers with Chips",
                description: "Blackened beyond recognition.",
                price: 13.33

            },
            10: {
                name: "Slab of Lurtz Meat with Greens.",
                description: "Get it while supplies last.",
                price: 17.50
            },
            11: {
                name: "Rangers Field Feast.",
                description: "Is it chicken? Is it rabbit? Or...",
                price: 5.99
            }
        },
        "Drinks": {
            12: {
                name: "Orc's Blood Mead",
                description: "It's actually raspberries - Orc's blood would be gross.",
                price: 5.99
            },
            13: {
                name: "Gondorian Grenache",
                description: "A fine rose wine.",
                price: 7.99
            },
            14: {
                name: "Mordor Mourvedre",
                description: "A less-fine rose wine.",
                price: 5.99
            }
        }	
    }
};

// Legolas Restaurant Data
let legolas = {
    name: "Lembas by Legolas",
    min_order: 15,
    delivery_charge: 3.99,
    menu: {
        "Lembas": {
            0: {
                name: "Single",
                description: "One piece of lembas.",
                price: 3
            },
            1: {
                name: "Double",
                description: "Two pieces of lembas.",
                price: 5
            },
            2: { 
                name: "Triple",
                description: "Three pieces, which should be more than enough.",
                price: 8.00
            }
        },
        "Combos": {
            3: {
                name: "Second Breakfast",
                description: "Two pieces of lembas with honey.",
                price: 7.50
            },
            4: {
                name: "There and Back Again",
                description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
                price: 25.99
            },
            5: {
                name: "Best Friends Forever",
                description: "Lembas and a heavy stout.",
                price: 6.60
            }
        }
    }
};

// Frodo Restaurant Data
let frodo = {
    name: "Frodo's Flapjacks",
    min_order: 35,
    delivery_charge: 6,
    menu: {
        "Breakfast": {
            0: {
                name: "Hobbit Hash",
                description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
                price: 9.00
            },
            1: {
                name: "The Full Flapjack Breakfast",
                description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
                price: 14.00
            },
            2: { 
                name: "Southfarthing Slammer",
                description: "15 flapjacks and 2 pints of syrup.",
                price: 12.00
            }

        },
        "Second Breakfast": {
            3: {
                name: "Beorning Breakfast",
                description: "6 flapjacks smothers in honey.",
                price: 7.50
            },
            4: {
                name: "Shire Strawberry Special",
                description: "6 flapjacks and a hearty serving of strawberry jam.",
                price: 8
            },
            5: {
                name: "Buckland Blackberry Breakfast",
                description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
                price: 14.99
            }
        },
        "Elevenses": {
            6: {
                name: "Lembas",
                description: "Three pieces of traditional Elvish Waybread",
                price: 7.70
            },
            7: {
                name: "Muffins of the Marish",
                description: "A variety of 8 different types of muffins, served with tea.",
                price: 9.00
            },
            8: {
                name: "Hasty Hobbit Hash",
                description: "Potatoes with onions and cheese. Served with coffee.",
                price: 5.00
            }
        },
        "Luncheon": {
            9: {
                name: "Shepherd's Pie",
                description: "A classic. Includes 3 pies.",
                price: 15.99
            },
            10: {
                name: "Roast Pork",
                description: "An entire pig slow-roasted over a fire.",
                price: 27.99
            },
            11: {
                name: "Fish and Chips",
                description: "Fish - fried. Chips - nice and crispy.",
                price: 5.99
            }
        },
        "Afternoon Tea": {
            12: {
                name: "Tea",
                description: "Served with sugar and cream.",
                price: 3
            },
            13: {
                name: "Coffee",
                description: "Served with sugar and cream.",
                price: 3.50
            },
            14: {
                name: "Cookies and Cream",
                description: "A dozen cookies served with a vat of cream.",
                price: 15.99
            },
            15: {
                name: "Mixed Berry Pie",
                description: "Fresh baked daily.",
                price: 7.00
            }
        },
        "Dinner": {
            16: {
                name: "Po-ta-to Platter",
                description: "Boiled. Mashed. Stuck in a stew.",
                price: 6
            },
            17: {
                name: "Bree and Apple",
                description: "One wheel of brie with slices of apple.",
                price: 7.99
            },
            18: {
                name: "Maggot's Mushroom Mashup",
                description: "It sounds disgusting, but its pretty good",
                price: 6.50
            },
            19: {
                name: "Fresh Baked Bread",
                description: "A whole loaf of the finest bread the Shire has to offer.",
                price: 6
            },
            20: {
                name: "Pint of Ale",
                description: "Yes, it comes in pints.",
                price: 5
            }
        },
        "Supper": {
            21: {
                name: "Sausage Sandwich",
                description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
                price: 15.99
            },
            22: {
                name: "Shire Supper",
                description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
                price: 37.99
            }
        }
    }
};

let restaurants = [aragorn, legolas, frodo];

// Stores all of the items that the object purchased
let items;

/* The init() function is responsible for loading the dropdown menu (load restaurant function), 
determining the inital restaurant (restaurant change function), displaying the items and costs table at the start 
(display table and costs function), and displaying the minimum order cost (at beginning)  */
function init() {
    console.log("Loaded");
    items = {};
    load_restaurants();
    restaurantChange();
    displayTable();
    displayCosts();
    checkOrderAmount();
}

/* This function is responsible for loading all of the restaurants in the 
dropdown menu. */
function load_restaurants() {
    let restaurants_list = document.getElementById('restaurants');

    // Goes through every restaurant, obtains their name, and puts it into the dropdown menu
    for (let i = 0; i < restaurants.length; i++) {
        let optionVal = document.createElement('option');
        optionVal.value = restaurants[i].name;
        text = document.createTextNode(restaurants[i].name);
        optionVal.appendChild(text);
        restaurants_list.appendChild(optionVal);
    } 
}

/* This function is responsible when changing the restaurant in the dropdown menu.
If the user wants to go to another restaurant while an order is there, it prompts
the user, delete all of the items, and calls the function to load the page for the 
next restaurant.  */
function restaurantChange() {

    /* If the user wants to go to another restaurant while an order is there,
	it prompts the user for an answer. */
    if (Object.keys(items).length != 0) {
        let change = window.confirm("Do you want to clear the order. Select 'OK' for yes");

        /* If the user clicks yes, then it deletes all of the food items in the items object.
		Then, it calls the clearByID function to clear the menu from the old restaurant. */
        if (change) {
            Object.keys(items).forEach((key) => delete items[key]);
            clearByID('categories');

            /* Goes through all of the restaurants and calls the load_restaurant_page function
			to load the menu for the next restaurant the user clicked */
            let selectedRestaurant = document.getElementById('restaurants').value;
            for (let i = 0; i < restaurants.length; i++) {
                if (selectedRestaurant == restaurants[i].name) {
                    load_restaurant_page(restaurants[i]);
                }
            }

            // Updates the table, costs, and the message displayed for placing an order
            displayTable();
            displayCosts();
            checkOrderAmount();
        } else {

            /* If the user clicks cancel, then nothing happens to the page.
			It goes to the dropdown and ensures it stays on the previous dropdown value */
            let prevValue = document.getElementById('restaurantTitle').innerHTML;
            document.getElementById('restaurants').value = prevValue;
        }
    } else {

        /* When the page is loaded (no food items inside the items object), it clears 
		any menus. */
        clearByID('categories');
        let selectedRestaurant = document.getElementById('restaurants').value;

        /* Goes through all of the restaurants and calls the load_restaurant_page function
		to load the menu for the first restaurant */
        for (let i = 0; i < restaurants.length; i++) {
            if (selectedRestaurant == restaurants[i].name) {
                load_restaurant_page(restaurants[i]);
            }
        }
        displayTable();
        displayCosts();
        checkOrderAmount();
    }

}

/* This function takes in an restaurant object (e.g. Aragorn) and loads the page
with their details such as the header, categories, and menu */
function load_restaurant_page(objectRestaurant) {

    // Sets the restaurant title, minimum order, and delivery fee in the header
    let title = document.getElementById('restaurantTitle');
    title.innerHTML = objectRestaurant.name;

    let minOrder = document.getElementById('minimumOrder');
    minOrder.innerHTML = "Minimum Order: $" + objectRestaurant.min_order.toFixed(2);

    let deliFee = document.getElementById('deliveryFee');
    deliFee.innerHTML = "Delivery Fee: $" + objectRestaurant.delivery_charge.toFixed(2);

    /* Creates a button for every category and assigns an event listener 
	for each button. If a button (that holds category name) is clicked, then it loads
	the food items for that category */
    let categories = document.getElementById('categories');
    for (menuCategory in objectRestaurant.menu) {
        let category = document.createElement('button');
        category.className = "button";
        text = document.createTextNode(menuCategory);
        category.appendChild(text);
        category.addEventListener('click', function() {
            load_menus(objectRestaurant, category.innerHTML)
        });

        // Adds to the categories div (all of the category buttons)
        categories.appendChild(category);

        linebreak = document.createElement('br');
        categories.appendChild(linebreak);

    }

    load_menus(objectRestaurant, Object.keys(objectRestaurant.menu)[0]);

}

// This functions clears the elements given an id. 
function clearByID(id) {
    let categories = document.getElementById(id);
    categories.innerHTML = "";
}

/* This function, given an restaurantObject (e.g. Aragorn) and category name,
loads the restaurant's food items for that category on the page. */
function load_menus(restaurantObject, categoryName) {
    // Clears the category header for menu
    clearByID('food-category-header');

    /* Obtain the food category header (Stores all of the content) and puts the h2 header 
	(along with a categoryHeader background) which provides the dark background */
    let categoryHeader = document.getElementById('food-category-header');
    let initalCategory = document.createElement('h2');
    initalCategory.innerHTML = Object.keys(restaurantObject.menu).find(category => category == categoryName);
    categoryHeader.appendChild(initalCategory);

    let categoryHeaderBackgroundDiv = document.createElement('div');
    categoryHeaderBackgroundDiv.id = "backgroundHead";

    categoryHeaderBackgroundDiv.appendChild(initalCategory);
    categoryHeader.appendChild(categoryHeaderBackgroundDiv);

    // Goes through every food item for a restaurantObject's category 
    for (item in restaurantObject.menu[categoryName]) {

        // Creates all of the elements and displays the item name, description, and price
        let divItems = document.createElement('div');
        let itemName = document.createElement('h3');
        let productName = restaurantObject.menu[categoryName][item].name;
        let productPrice = restaurantObject.menu[categoryName][item].price;
        itemName.innerHTML = restaurantObject.menu[categoryName][item].name + " ($" + restaurantObject.menu[categoryName][item].price.toFixed(2) + ")";
        divItems.appendChild(itemName);

        // Loads the add button and sets an even listener to add to the cart if clicked
        let img = document.createElement("IMG");
        img.setAttribute("src", "add.png");
        img.setAttribute("width", "20");
        img.setAttribute("height", "20");
        img.addEventListener('click', function() {
            addToCart(productName, productPrice.toFixed(2));
        })

        // This piece of code appends to the menu and adds the description and image
        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = restaurantObject.menu[categoryName][item].description;
        divItems.appendChild(itemDescription);
        divItems.appendChild(img);
        categoryHeader.appendChild(divItems);
    }
}

/* This function adds food items to the items object, which stores all of the products and their price.
This function requires the product name and their unit price to be passed in. */
function addToCart(productName, unitPrice) {

    /* If the product is already in the items object, then it increases the quantity 
	otherwise, it adds the product to the items object, and sets the unit cost and quantity. */
    if (productName in items) {
        items[productName].Quantity += 1;
    } else {
        items[productName] = {
            "Quantity": 1,
            "UnitCost": unitPrice
        };
    }

    // Updates the items tables and costs table, and the order amount left to place an order
    displayTable();
    displayCosts();
    checkOrderAmount();
}

/* This function will display/update the costs table.
Updates the quantity, item total price, and allows user to remove an item */
function displayTable() {

    /* Clears the table and if the number of elements in the items object is 
	not 0, then creates the table and displays their values */
    clearTable();
    if (Object.keys(items).length != 0) {

        /* Goes through every product in the items object, and displays the 
	name, quantity, unit cost, total price of item, and remove button */
        for (prodName in items) {

            // Creation of table elements
            let trElement = document.createElement('tr');
            let tdProduct = document.createElement('td');
            let tdQuantity = document.createElement('td');
            let tdUnitCost = document.createElement('td');
            let tdItemTotalPrice = document.createElement('td');
            let tdAction = document.createElement('td');

            // Sets the values in the table elements
            tdProduct.innerHTML = prodName;
            tdQuantity.innerHTML = items[prodName]["Quantity"];
            tdUnitCost.innerHTML = items[prodName]["UnitCost"];
            tdItemTotalPrice.innerHTML = (items[prodName]["UnitCost"] * items[prodName]["Quantity"]).toFixed(2);

            // Adds the remove image and adds an event listener if clicked to remove quantity of product by one
            let img = document.createElement("IMG");
            img.setAttribute("src", "remove.png");
            img.setAttribute("width", "15");
            img.setAttribute("height", "15");
            img.addEventListener('click', function() {
                removeItem(tdProduct.innerHTML);
            })

            // Appends the elements (table data) to the table row and sets the table style display to block
            tdAction.appendChild(img);
            trElement.appendChild(tdProduct);
            trElement.appendChild(tdQuantity);
            trElement.appendChild(tdUnitCost);
            trElement.appendChild(tdItemTotalPrice);
            trElement.appendChild(tdAction);

            let getItemsTable = document.getElementById('itemsTable');
            getItemsTable.style.display = "block";
            getItemsTable.appendChild(trElement);

        }
    } else {
        // If there is nothing inside the items object, then the table is not shown.
        let getItemsTable = document.getElementById('itemsTable');
        getItemsTable.style.display = "none";
    }
}

/* This function clears the items table */
function clearTable() {
    // Sets the items table to have nothing
    let getItemsTable = document.getElementById('itemsTable');
    getItemsTable.innerHTML = "";

    // Creates the table row elements
    let trElement = document.createElement('tr');
    let thProduct = document.createElement('th');
    let thQuantity = document.createElement('th');
    let thUnitCost = document.createElement('th');
    let thItemTotalPrice = document.createElement('th');
    let thAction = document.createElement('th');

    // Sets their text
    thProduct.innerHTML = "Product";
    thQuantity.innerHTML = "Quantity";
    thUnitCost.innerHTML = "Unit Cost ($) ";
    thItemTotalPrice.innerHTML = "Item Total Price ($)"
    thAction.innerHTML = "Action";

    // Appends the table row
    trElement.appendChild(thProduct);
    trElement.appendChild(thQuantity);
    trElement.appendChild(thUnitCost);
    trElement.appendChild(thItemTotalPrice);
    trElement.appendChild(thAction);

    // Appends the table
    getItemsTable.appendChild(trElement);
}

/* This function removes the item from the items object (which stores all of the items user wants to order).
It says in a product name and goes through the items object. If the quantity is 1, then it deletes the food product
from the items object, otherwise, it reduces the quantity by 1 */
function removeItem(productName) {
    for (prodName in items) {
        if (prodName == productName) {
            // If quantity is 1, then it deletes the food product
            if (items[prodName]["Quantity"] - 1 < 1) {
                delete items[prodName];
            } else {
                // If quantity is greater than 1, then it reduces the quantity by 1
                items[prodName]["Quantity"] -= 1;
            }
        }
    }

    // Updates the display items table and costs table, and updates the order message for placing an order
    displayTable();
    displayCosts();
    checkOrderAmount();
}

/* This function updates/displays the costs table, which displays the 
subtotal, total, taxes, and delivery fee */ 
function displayCosts() {
    // The subtotal, taxes, delivery initally set to 0.
    let subtotal = 0;
    let taxes = 0;
    let selectedRestaurant = document.getElementById('restaurants').value;
    let delivery = 0;

    // Sets the delivery charge for the selected restaurant
    for (let i = 0; i < restaurants.length; i++) {
        if (selectedRestaurant == restaurants[i].name) {
            delivery = restaurants[i].delivery_charge;
        }
    }

    // Gets all of the table fields
    let total = 0;
    let subtotalField = document.getElementById('subtotal');
    let taxesField = document.getElementById('taxes');
    let deliveryField = document.getElementById('delivery');
    let totalField = document.getElementById('total');

    // If nothing is stored in the items object, then it sets the values to 0 (Except delivery)
    if (Object.keys(items).length == 0) {
        subtotalField.innerHTML = 0;
        taxesField.innerHTML = 0;
        deliveryField.innerHTML = delivery.toFixed(2);
        totalField.innerHTML = 0;
    } else {
        // Goes through every item and adds quantity and unit cost of each item to the subtotal
        for (prodName in items) {
            subtotal += items[prodName]["Quantity"] * items[prodName]["UnitCost"];
        }

        // Displays the taxes and total (converted from string to number)
        taxes = subtotal * 0.1;
        total = Number(subtotal) + Number(delivery) + Number(taxes);

        // Sets the values to the table fields
        subtotalField.innerHTML = subtotal.toFixed(2);
        taxesField.innerHTML = taxes.toFixed(2);
        deliveryField.innerHTML = delivery.toFixed(2);
        totalField.innerHTML = total.toFixed(2);

    }

}

/* This function is when a successful order has been submitted. It alerts the user,
sets the items object to new, and displays a new items table, costs table, and updates
the order message */
function submitOrder() {
    alert("Your order has been submitted!");
    items = {};    
    displayTable();
    displayCosts();
    checkOrderAmount();

}

/* This function checks the order message and keeps track for when the submit button 
should appear, and when the message should appear. */

function checkOrderAmount() {
    // Gets the subtotal, message, submit button, and selected restaurant information
    let subtotalValue = document.getElementById('subtotal').innerHTML;
    let selectRestaurant = document.getElementById('restaurants').value;
    let submitButton = document.getElementById('submitOrder');
    let amountMoreMessage = document.getElementById('amountNeededMore');

    for (let i = 0; i < restaurants.length; i++) {
        if (selectRestaurant == restaurants[i].name) {
            /* If the subtotal is greater than the selected restaurant's minimum order, 
			then no message is displayed and submit button is shown */
            if (subtotalValue >= restaurants[i].min_order) {
                amountMoreMessage.innerHTML = "";
                submitButton.style.display = "block";
            } else {

                // If the subtotal value is greater than 0, then submit button is not shown and tells how many more dollars of food to place the order
                if (subtotalValue > 0) {
                    let x = restaurants[i].min_order - subtotalValue;
                    submitButton.style.display = "none";
                    amountMoreMessage.innerHTML = "You need to add " + x.toFixed(2) + " dollars more to place the order!";
                } else if (subtotalValue == 0) {
                    // If the subtotal value is 0, then it tells the user the minimum amount of dollars worth of food to place the order
                    submitButton.style.display = "none";
                    amountMoreMessage.innerHTML = "You need to add " + restaurants[i].min_order + " dollars more to place the order!";
                }
            }


        }
    }

}

