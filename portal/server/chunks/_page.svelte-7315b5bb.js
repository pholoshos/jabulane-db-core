import { c as create_ssr_component, v as validate_component, h as add_attribute, e as escape, i as each } from './ssr-3e0ce6b7.js';
import './index2-5c28cfd6.js';
import { F as Flex$1, a as Image$1 } from './Image-a4811974.js';
import { N as NativeSelect$1 } from './NativeSelect-4f1952ac.js';
import { B as Button$1 } from './Button-40a57e7a.js';
import 'apisauce';
import './index-62c943ac.js';

const getData = (type) => {
  if (typeof window !== "undefined") {
    const data = window.localStorage?.getItem(type);
    return JSON.parse(!!data ? data : "{}");
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let author = "";
  let title = "";
  getData("user");
  let isLoading = false;
  let steps = [
    {
      title: "",
      description: "",
      content: [
        {
          type: "",
          title: "",
          description: "",
          body: ""
        }
      ]
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="bg-gray-100 p-6 rounded border my-8 mx-96">${validate_component(Flex$1, "Flex").$$render($$result, { class: "space-x-2" }, {}, {
      default: () => {
        return `${validate_component(Image$1, "Image").$$render(
          $$result,
          {
            radius: "md",
            src: "/logo.jpeg",
            class: "w-10 rounded-md"
          },
          {},
          {}
        )} <h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-tf577j">Create Course</h2>`;
      }
    })} <form><div class="mb-4"><label class="block text-sm font-medium mb-1" for="author" data-svelte-h="svelte-fcfbo">Author:</label> <input type="text" id="author" class="w-full p-2 border rounded"${add_attribute("value", author, 0)}></div> <div class="mb-4"><label class="block text-sm font-medium mb-1" for="title" data-svelte-h="svelte-xmwu0s">Title:</label> <input type="text" id="title" class="w-full p-2 border rounded"${add_attribute("value", title, 0)}></div> <div class="mb-4"><label class="block text-sm font-medium mb-1" for="description" data-svelte-h="svelte-139z7ou">Description:</label> <textarea id="description" class="w-full p-2 border rounded">${escape("")}</textarea></div> ${each(steps, (step, stepIndex) => {
      return `<div class="bg-white p-4 rounded border mb-4"><h3 class="text-lg font-semibold mb-2">Step ${escape(stepIndex + 1)}</h3> <div class="mb-2"><label class="block text-sm font-medium mb-1" for="step-title" data-svelte-h="svelte-1pag6gh">Step Title:</label> <input type="text" id="step-title" class="w-full p-2 border rounded"${add_attribute("value", step.title, 0)}></div> <div class="mb-4"><label class="block text-sm font-medium mb-1" for="step-description" data-svelte-h="svelte-bt5qyd">Step Description:</label> <textarea id="step-description" class="w-full p-2 border rounded">${escape(step.description || "")}</textarea></div> <div class="bg-gray-100 p-2 rounded border">${each(step.content, (content, contentIndex) => {
        return `<h4 class="text-md font-semibold mb-2">Content ${escape(contentIndex + 1)}</h4> <div class="mb-2"><label class="block text-sm font-medium mb-1" for="content-type" data-svelte-h="svelte-1dcq6up">Content Type:</label> ${validate_component(NativeSelect$1, "NativeSelect").$$render(
          $$result,
          {
            data: ["text", "image", "video", "website", "key", "other"],
            placeholder: "Select content type",
            value: content.type
          },
          {
            value: ($$value) => {
              content.type = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="mb-2"><label class="block text-sm font-medium mb-1" for="content-title" data-svelte-h="svelte-bq0gvz">Content Title:</label> <input type="text" id="content-title" class="w-full p-2 border rounded"${add_attribute("value", content.title, 0)}></div> <div class="mb-2"><label class="block text-sm font-medium mb-1" for="content-description" data-svelte-h="svelte-17c02df">Content Description:</label> <textarea id="content-description" class="w-full p-2 border rounded">${escape(content.description || "")}</textarea></div> <div class="mb-4"><label class="block text-sm font-medium mb-1" for="content-body" data-svelte-h="svelte-1ddx57p">Content Body:</label> <textarea id="content-body" class="w-full p-2 border rounded">${escape(content.body || "")}</textarea> </div>`;
      })} <button type="button" class="bg-green-500 text-white px-2 py-1 rounded" data-svelte-h="svelte-1kkbqoq">Add Content</button></div> </div>`;
    })} ${validate_component(Flex$1, "Flex").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Button$1, "Button").$$render(
          $$result,
          {
            color: "gray",
            type: "button",
            class: "bg-green-500 text-white px-4 py-2 rounded mr-2"
          },
          {},
          {
            default: () => {
              return `Add Step`;
            }
          }
        )} ${validate_component(Button$1, "Button").$$render(
          $$result,
          {
            loading: isLoading,
            type: "submit",
            color: "green",
            class: "bg-gray-500 text-white px-4 py-2 rounded"
          },
          {},
          {
            default: () => {
              return `Create Project`;
            }
          }
        )}`;
      }
    })}</form></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7315b5bb.js.map
