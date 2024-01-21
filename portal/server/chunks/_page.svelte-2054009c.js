import { c as create_ssr_component, h as add_attribute, v as validate_component } from './ssr-3e0ce6b7.js';
import './index2-5c28cfd6.js';
import { B as Button$1 } from './Button-40a57e7a.js';
import 'apisauce';
import './index-62c943ac.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let isLoading = false;
  return `  <div class="flex justify-center items-center h-screen bg-gray-100"><div class="bg-white p-8 rounded-lg shadow-md w-96"><img class="mx-auto rounded-lg" width="80" src="/splearn.jpeg" alt="splearn"> <h1 class="text-2xl text-center font-semibold mb-4 text-gray-800" data-svelte-h="svelte-1ckw4il">Sign in to Splearn</h1> ${``} <form><input class="mb-4 p-2 border rounded w-full text-gray-700" type="text" placeholder="Username or email"${add_attribute("value", email, 0)}> <p class="mt-4 text-gray-500" data-svelte-h="svelte-111hxia"><a href="/reset-password" class="text-green-500 hover:underline">Forgot password?</a></p> <input class="mb-6 p-2 border rounded w-full text-gray-700" type="password" placeholder="Password"${add_attribute("value", password, 0)}> ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      loading: isLoading,
      color: "green",
      size: "md",
      type: "submit"
    },
    {},
    {
      default: () => {
        return `Sign In`;
      }
    }
  )}</form> <p class="mt-4 text-center text-gray-500" data-svelte-h="svelte-74096v">New to Splearn? <a href="/sign-up" class="text-green-500 hover:underline">Create an account</a>.</p></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2054009c.js.map
