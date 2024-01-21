import { c as create_ssr_component, v as validate_component } from './ssr-3e0ce6b7.js';
import { B as Button$1 } from './Button-40a57e7a.js';
import './index-62c943ac.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="bg-gray-100 min-h-screen flex items-center justify-center"><div class="bg-white p-8 rounded shadow-md w-full sm:max-w-md"><h2 class="text-2xl font-semibold mb-4 text-gray-800" data-svelte-h="svelte-17isytg">Getting Started with splearn</h2> <p class="text-gray-600 mb-4" data-svelte-h="svelte-1kc9i29">Welcome to splearn! Follow these steps to get started:</p> <ol class="list-decimal pl-6 text-gray-600 mb-6"><li class="mb-2">Create a user account. ${validate_component(Button$1, "Button").$$render($$result, { class: "mb-4", color: "green" }, {}, {
    default: () => {
      return `User account`;
    }
  })}</li> <li class="mb-2">Create a company account by providing company details. ${validate_component(Button$1, "Button").$$render($$result, { color: "green", class: "mb-4" }, {}, {
    default: () => {
      return `Add Company`;
    }
  })}</li> <li class="mb-2">After creating a company, set up a creator account for managing content. ${validate_component(Button$1, "Button").$$render($$result, { color: "green", class: "mb-4" }, {}, {
    default: () => {
      return `Add Creator`;
    }
  })}</li> <li class="mb-2" data-svelte-h="svelte-1u4fxqv">Once your creator account is ready, start adding projects and courses.</li></ol> <p class="text-gray-600" data-svelte-h="svelte-m3j4od">Start your coding journey with splearn today!</p></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ced7a741.js.map
