/**
 * This JavaScript file contains functions for displaying random inspirational
 * quotes. Each function call generates a new quote, showcasing an array of
 * motivational phrases to the user.
 *
 * @author Chuck Harrington
 */

function displayRandomQuote() {
    const quotes = [
        "I can do all things through Christ which strengtheneth me. - Philippians 4:13",
        "CPT275: Where our code doesn't always work, but 'our CTRL-Z' skills are impeccable. - Chuck H.",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "The journey of a thousand miles begins with one step. - Lao Tzu",
        "That which does not kill us makes us stronger. - Friedrich Nietzsche",
        "Life is what happens when you are busy making other plans. - John Lennon",
        "When the going gets tough, the tough get going. - John Kennedy"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById("quoteDisplay").innerText = randomQuote;
}