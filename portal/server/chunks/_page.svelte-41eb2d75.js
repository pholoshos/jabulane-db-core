import { c as create_ssr_component, a as subscribe, h as add_attribute, v as validate_component } from './ssr-3e0ce6b7.js';
import { p as page } from './stores-79adf4fe.js';
import { B as Button$1 } from './Button-40a57e7a.js';
import './index-62c943ac.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { company: companyCode } = $page.params;
  let username = "";
  let firstName = "";
  let lastName = "";
  let email = "";
  let phone = "";
  let password = "";
  let company = companyCode || "none";
  let confirmPassword = "";
  let isLoading = false;
  $$unsubscribe_page();
  return `<main class="flex justify-center items-center min-h-screen bg-gray-100"><div class="bg-white p-6 rounded-lg shadow-md w-96 my-8"><h1 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-8ywtn5">Create your splearn account</h1> ${``} <form><label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-13q0aus">Username</span> <input type="text" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your username"${add_attribute("value", username, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-1327hwv">Company Code(optional)</span> <input type="text" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your company code"${add_attribute("value", company, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-chqbr9">First Name</span> <input type="text" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your first name"${add_attribute("value", firstName, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-y3ez3p">Last Name</span> <input type="text" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your last name"${add_attribute("value", lastName, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-8pkcl4">Email</span> <input type="email" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your email"${add_attribute("value", email, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-1wec1m4">Phone</span> <input type="text" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your phone number"${add_attribute("value", phone, 0)}></label> <label class="block mb-4"><span class="text-gray-700" data-svelte-h="svelte-1p6f3ip">Password</span> <input type="password" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Your password"${add_attribute("value", password, 0)}></label> <label class="block mb-6"><span class="text-gray-700" data-svelte-h="svelte-gnaexx">Confirm Password</span> <input type="password" class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500" placeholder="Confirm password"${add_attribute("value", confirmPassword, 0)}></label> ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      size: "md",
      color: "green",
      loading: isLoading,
      type: "submit",
      class: "w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
    },
    {},
    {
      default: () => {
        return `Create Account`;
      }
    }
  )}</form> <p class="mt-4 text-gray-600" data-svelte-h="svelte-1c4f8f4">Already have an account? <a href="/sign-in" class="text-green-500">Log in</a></p></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-41eb2d75.js.map
