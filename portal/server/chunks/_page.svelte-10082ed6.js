import { c as create_ssr_component, a as subscribe, e as escape, i as each, h as add_attribute, v as validate_component, b as compute_rest_props, k as spread, l as escape_attribute_value, o as escape_object } from './ssr-3e0ce6b7.js';
import './index2-5c28cfd6.js';
import { p as page } from './stores-79adf4fe.js';
import 'apisauce';

const MagnifyingGlass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const MagnifyingGlass$1 = MagnifyingGlass;
const Pencil1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Pencil1$1 = Pencil1;
const PlusCircled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const PlusCircled$1 = PlusCircled;
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Trash$1 = Trash;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { port, key } = $page.params;
  let entities = [];
  let searchText = "";
  let collectionData = [];
  const findLatest = (
    /** @type {any[]} */
    (dataArray) => {
      let latestEntry = null;
      let latestTimestamp = 0;
      dataArray.forEach((entry) => {
        const timestamp = new Date(entry.time_stamp_create).getTime();
        if (timestamp > latestTimestamp) {
          latestTimestamp = timestamp;
          latestEntry = entry;
        }
      });
      return latestEntry;
    }
  );
  $$unsubscribe_page();
  return `<div class="my-8 mx-40 bg-white p-4">${``} <div class="flex space-x-2 mb-4" data-svelte-h="svelte-4uv1f4"><img src="/jabdb.png" width="60" class="rounded-lg" alt=""> <h1 class="text-lg font-bold mt-3">JabulaneDB</h1></div> <p>Your data matters on : http://localhost:${escape(port)}</p> ${``} ${`<div class="overflow-y-scroll h-screen"><div class="flex flex-wrap space-x-2 mb-2"><select class="select border-gray-500 w-full max-w-xs">${each(entities, (entity) => {
    return `<option${add_attribute("value", entity, 0)} class="">${escape(entity)}</option>`;
  })}</select> <input class="input border-gray-500 input-bordered w-full max-w-xs"${add_attribute("value", searchText, 0)}> <button class="btn bt-sm">${validate_component(MagnifyingGlass$1, "MagnifyingGlass").$$render($$result, {}, {}, {})} Search</button> <button class="btn">${validate_component(PlusCircled$1, "PlusCircled").$$render($$result, {}, {}, {})} Add Data</button></div> ${!collectionData ? `<span class="loading loading-ring loading-lg"></span>` : ``} ${collectionData ? `${collectionData.length === 0 ? `<div class="mockup-code mt-4" data-svelte-h="svelte-ztoudx"><pre prefix=""><code>[]</code></pre></div>` : ``} ${collectionData.length != 0 ? `<div role="alert" class="alert"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Latest creation :${escape(JSON.stringify(findLatest(collectionData)))}</span></div> ${each(collectionData, (collection) => {
    return `<div class="mockup-code mt-2"><div class="flex space-x-4 mx-2 mb-4"><button class="btn btn-sm">${validate_component(Trash$1, "Trash").$$render($$result, {}, {}, {})}delete</button> <button class="btn btn-sm">${validate_component(Pencil1$1, "Pencil1").$$render($$result, {}, {}, {})}update</button></div> <pre prefix=""><code contenteditable="true">${escape(JSON.stringify(collection, null, "	"))}</code></pre> </div>`;
  })}` : ``}` : ``}</div>`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-10082ed6.js.map
