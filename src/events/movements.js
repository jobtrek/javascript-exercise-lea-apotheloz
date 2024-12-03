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

    const input = document.getElementById('focus-me')
    const label = input.previousElementSibling
    const originalLabelText = label.textContent
    const originalColor = getComputedStyle(input).borderColor
    const usedColors = [originalColor]

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

    input.addEventListener('mouseenter', () => {
        label.textContent = 'Yes, you hover me !'
    })

    input.addEventListener('mouseleave', () => {
        label.textContent = originalLabelText
    })

    input.addEventListener('focus', function () {
        this.style.borderColor = getUniqueColor()
    })

    input.addEventListener('blur', function () {
        this.style.borderColor = originalColor
    })
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
}