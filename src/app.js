import { page, render } from "./lib.js";
import { showHoodies } from "./hoodies.js";
import { showShoes } from "./shoes.js";
import { showTShirts } from "./t-shirts.js";
import { showTrousers } from "./trousers.js";

const main = document.querySelector('main');
page(decorateContext);

page('/', showHoodies)
page('/t-shirts', showTShirts)
page('/shoes', showShoes)
page('/trousers', showTrousers)

page.start()
page.redirect('/')

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next()
}

function renderMain(templateResult) {
    render(templateResult, main)
}