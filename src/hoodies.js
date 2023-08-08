import { html } from './lib.js';

export function showHoodies() {
    const content = html`
    <section>
      <!-- Your hoodies content goes here -->
    </section>
  `;
  
  ctx.render(content);
}