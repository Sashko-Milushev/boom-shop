// Import necessary functions
import { page, render } from "./lib.js";
import { showHoodies } from "./hoodies.js";
import { showShoes } from "./shoes.js";
import { showTShirts } from "./t-shirts.js";
import { showTrousers } from "./trousers.js";

// Get the main element from the DOM
const main = document.querySelector('main');

// Set up the routing using the "page" library
page(decorateContext);

// Define the routes and the corresponding functions to display pages
page('/', showHoodies)
page('/t-shirts', showTShirts)
page('/shoes', showShoes)
page('/trousers', showTrousers)

// Start the routing
page.start()

// Middleware function to decorate the context with a rendering function
function decorateContext(ctx, next) {
    ctx.render = renderMain;

    // Call the next middleware
    next()
}

// Rendering function to display content in the main element
function renderMain(templateResult) {
    // Render the template in the "main" element
    render(templateResult, main);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}
