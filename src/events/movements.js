/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    // Write your code here
    const mouse = document.getElementById('mouse-coordinates');

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        mouse.textContent = `x: ${x}, y: ${y}`;
    });
}

const randomRGB = () => {
    const o = Math.round
    const r = Math.random
    const s = 255
    return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
    // Write your code here
    const input = document.querySelector('#focus-me')
    let alllabels = []

    input.addEventListener("mouseover", (event) => {
        const labelElement = event.target.labels
        for ( const element of labelElement ) {
            alllabels.push(element.textContent)
            element.textContent = " Yes, you hover me !";
        }

    })
    input.addEventListener("mouseout", (event) => {

        const labelElement = event.target.labels
        for ( const element of labelElement ) {
            element.textContent = alllabels.splice(0,1);
        }
    })
    
    const originalColor = getComputedStyle(input).borderColor
    const usedColors = [originalColor]


    input.addEventListener('focus', function () {
        this.style.borderColor = getUniqueColor()
    })

    input.addEventListener('blur', function () {
        this.style.borderColor = originalColor
    })

    function getRandomColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    function getUniqueColor() {
        let newColor
        do {
            newColor = getRandomColor()
        } while (usedColors.includes(newColor))
        usedColors.push(newColor)
        return newColor

    }
}
/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    // Write your code here
    const input = document.getElementById('focus-me');
    const labels = document.querySelectorAll('label[for="focus-me"]');
    let originalColor = getComputedStyle(input).borderColor;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    input.addEventListener('input', () => {
        const newColor = getRandomColor();
        originalColor = newColor;
        labels.forEach(label => {
            label.style.color = newColor;
        });
        if (document.activeElement !== input) {
            input.style.borderColor = newColor;
        }
    });
    const existingBlurListener = input.onblur;
    input.onblur = function (event) {
        if (existingBlurListener) {
            existingBlurListener.call(this, event);
        }
        this.style.borderColor = originalColor;
    };
}