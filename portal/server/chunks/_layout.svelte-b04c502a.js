import { c as create_ssr_component } from './ssr-3e0ce6b7.js';
import { inject } from '@vercel/analytics';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b04c502a.js.map
