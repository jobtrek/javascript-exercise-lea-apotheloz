/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  // Write your code here
        const button = document.getElementById('click-to-fetch');
        const displayArea = document.getElementById('display-here');

        button.addEventListener('click', async () => {
            try {
                const response = await fetch('https://api.github.com/octocat');
                if (!response.ok) {
                    throw new Error(`error! status: ${response.status}`);
                }
                const data = await response.text();
                displayArea.textContent = data;
            } catch (error) {
                console.error('Fetch error:', error);
                displayArea.textContent = 'Error fetching data';
            }
        });
}