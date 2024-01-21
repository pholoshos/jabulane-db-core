import { c as create_ssr_component, a as subscribe, h as add_attribute, v as validate_component } from './ssr-3e0ce6b7.js';
import { p as page } from './stores-79adf4fe.js';
import './index2-5c28cfd6.js';
import { B as Button$1 } from './Button-40a57e7a.js';
import 'apisauce';
import './index-62c943ac.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let email = "";
  $page.url.searchParams.get("token");
  let isLoading = false;
  $$unsubscribe_page();
  return `<main class="min-h-screen flex items-center justify-center bg-gray-100"><div class="bg-white p-8 rounded shadow-md w-96 sm:w-96"><h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-8e6f5w">Reset Password</h2> ${``} ${``} <form><div class="mb-6"><label for="email" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1x1vi3e">Email Address</label> <input type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-200 focus:border-green-300"${add_attribute("value", email, 0)}></div> ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      loading: isLoading,
      color: "green",
      type: "submit",
      class: "w-full py-2 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
    },
    {},
    {
      default: () => {
        return `Submit`;
      }
    }
  )}</form> </div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b2387d8a.js.map
