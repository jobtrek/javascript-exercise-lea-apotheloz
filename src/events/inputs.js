/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    // Write your code here
    const input = document.getElementById("write-some-text");
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            alert(' keydown enter')

        }
    });
}


/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    // Write your code here
    const input = document.querySelector("#list-input");
    const list = document.querySelector("#list");

    function addToList() {
        const text = input.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            list.appendChild(li);
            input.value = '';
        }
    }
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addToList();
        }
    });
    input.addEventListener('blur', addToList);
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    // Write your code here
}