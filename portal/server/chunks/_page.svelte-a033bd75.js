import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute } from './ssr-3e0ce6b7.js';
import './index2-5c28cfd6.js';
import { p as page } from './stores-79adf4fe.js';
import 'apisauce';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { port, key } = $page.params;
  $$unsubscribe_page();
  return `<div class="mx-auto w-96 my-40 align-middle items-center"><h1 class="text-lg font-bold" data-svelte-h="svelte-ptnanx">Portal</h1> <p>Your data matters on : http://localhost:${escape(port)}</p> <input${add_attribute("value", key, 0)} class="border rounded-lg w-full p-2 mb-4 mt-8" placeholder="enter your access token here"> <input${add_attribute("value", port, 0)} class="border rounded-lg w-full p-2 mb-4 mt-2" placeholder="enter your port here"> <button class="p-2 rounded-lg bg-green-400 text-white mx-auto" data-svelte-h="svelte-1n88ajx">Authentificate</button></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a033bd75.js.map
