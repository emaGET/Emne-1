// legg til
// fjern
// valgt item
// velg id
// 
// skrive i input/update

function selectItem(id) {
    model.viewState.selectedItemId = id;
    updateView();
}

function addTocList() {
    if (model.viewState.itemName.trim() === "") return;

    let itemNumber = Number(model.viewState.itemNumber);
    if (isNaN(itemNumber) || itemNumber <= 0) return;

    let newItem = {
        id: model.viewState.nextItemId,
        text: model.viewState.itemName.trim(),
        number: itemNumber,
    };

    model.data.shoppingList.push(newItem);
    model.viewState.nextItemId++;
    model.viewState.itemName = "";
    model.viewState.itemNumber = "";
    updateView();
}

function revomefromlist(id) {
    let index = -1;

    for (let i = 0; i < model.data.shoppingList.length; i++) {
        if (model.data.shoppingList[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) return;

    model.data.shoppingList.splice(index, 1);
    model.viewState.selectedItemId = null;
    updateView();
}

// function selectItem(id) {
//     selectedId = id;
//     updateView();
// }

// function addTocList() {
//     let newItem = {
//         id: nextId,
//         text: inputValue,
//     };

//     toDoList.push(newItem);
//     nextId++;
//     inputValue = '';
//     updateView();
// }
