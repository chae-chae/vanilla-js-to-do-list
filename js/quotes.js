const quotes = [
    { quote: "I like it when you sleep...", author: "The 1975" },
    { quote: "It's been a hard day's night.", author: "The Beatles" },
    { quote: "After all, you're my wonderwall.", author: "Oasis" },
    {
        quote: "Take me away from this big bad world, and agree to marry me.",
        author: "Blur",
    },
    {
        quote: "Every siren is a symphony, and every tears are waterfall.",
        author: "Coldplay",
    },
    {
        quote: "When I was a young boy, my father took me into the city, to see a marching band.",
        author: "My Chemical Romance",
    },
    { quote: "Show me mercy.", author: "Muse" },
    { quote: "There is a light that never goes out.", author: "The Smiths" },
    {
        quote: "All I am is a man, I want the world in my hand.",
        author: "The neighbourhood",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

function randomQuotes() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    // console.log(quotes[randomNumber]);
    quote.innerText = quotes[randomNumber].quote;
    author.innerText = quotes[randomNumber].author;
}

randomQuotes();
