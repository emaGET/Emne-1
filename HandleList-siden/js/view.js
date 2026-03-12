function updateView() {
    let html = `
        <form onsubmit="addTocList(); return false;" style="border: dashed black 1px; width: 200px; padding: 20px;">
            <p>
                What do you need?
                <input
                    type="text"
                    required
                    placeholder="item name.."
                    value="${model.viewState.itemName}"
                    oninput="model.viewState.itemName = this.value"
                >
            </p>
            <p>
                How many?
                <input
                    type="number"
                    placeholder="number of items.."
                    value="${model.viewState.itemNumber}"
                    oninput="model.viewState.itemNumber = this.value"
                >
            </p>
            <button type="submit">Add item</button>
        </form>

        <div>
            <p>Shopping list:</p>
            <ul>
                ${createShoppingListHtml()}
            </ul>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}

function createShoppingListHtml() {
    let html = '';

    for (let i = 0; i < model.data.shoppingList.length; i++) {
        let item = model.data.shoppingList[i];
        let isSelected = model.viewState.selectedItemId === item.id;

        html += `
            <li>
                <span
                    onclick="selectItem(${item.id})"
                    style="${isSelected ? 'font-weight: bold;' : ''}"
                >
                    ${item.text}, ${item.number}
                </span>
                <button onclick="revomefromlist(${item.id})">Remove</button>
            </li>
        `;
    }

    return html;
}
