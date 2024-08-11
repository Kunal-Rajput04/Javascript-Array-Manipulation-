let inventory = [
    { id: 1, name: 'Item A', quantity: 10, price: 5.99 },
    { id: 2, name: 'Item B', quantity: 20, price: 15.49 }
];

function addItem(inventory, item) {
    const existingItem = inventory.find(i => i.id === item.id);
    if (existingItem) {
        console.log(`Item with ID ${item.id} already exists.`);
        return;
    }
    inventory.push(item);
    console.log(`Item ${item.name} added to inventory.`);
}


function updateItem(inventory, id, newDetails) {
    const item = inventory.find(i => i.id === id);
    if (item) {
        Object.assign(item, newDetails); 
        console.log(`Item with ID ${id} updated.`);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        inventory.splice(index, 1); 
        console.log(`Item with ID ${id} deleted.`);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

function getItem(inventory, id) {
    return inventory.find(i => i.id === id) || `Item with ID ${id} not found.`;
}

function printInventory(inventory) {
    console.log('Inventory Details:');
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}`);
    });
}
printInventory(inventory);
addItem(inventory, { id: 3, name: 'Item C', quantity: 15, price: 25.00 });
printInventory(inventory);
updateItem(inventory, 2, { price: 14.99 });
printInventory(inventory);
console.log(getItem(inventory, 1));
deleteItem(inventory, 1);
printInventory(inventory);
