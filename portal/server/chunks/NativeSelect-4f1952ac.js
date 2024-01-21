import { c as create_ssr_component, b as compute_rest_props, j as get_current_component, v as validate_component, h as add_attribute, k as spread, l as escape_attribute_value, o as escape_object, m as missing_component, e as escape, i as each, p as compute_slots } from './ssr-3e0ce6b7.js';
import { B as Box$1, I as IconRenderer$1, i as is_void, T as Text$1 } from './Image-a4811974.js';
import { a as createEventForwarder, u as useActions, c as createStyles } from './Button-40a57e7a.js';

function randomID(prefix = "svelteui") {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
const useStyles$1 = createStyles((theme, { size }) => {
  return {
    root: {
      lineHeight: theme.lineHeights.md.value
    },
    label: {
      [`${theme.dark} &`]: {
        color: theme.fn.themeColor("dark", 0)
      },
      display: "inline-block",
      marginBottom: 4,
      fontSize: theme.fontSizes[size].value,
      fontWeight: 500,
      color: theme.fn.themeColor("gray", 9),
      wordBreak: "break-word",
      cursor: "default",
      WebkitTapHighlightColor: "transparent"
    },
    error: {
      [`${theme.dark} &`]: {
        color: theme.fn.themeColor("red", 6)
      },
      marginTop: 5,
      wordBreak: "break-word",
      color: theme.fn.themeColor("red", 7)
    },
    description: {
      [`${theme.dark} &`]: {
        color: `${theme.fn.themeColor("dark", 2)} !important`
      },
      marginTop: -3,
      marginBottom: 7,
      wordBreak: "break-word",
      color: `${theme.fn.themeColor("gray", 6)} !important`,
      fontSize: theme.fontSizes[size].value,
      lineHeight: 1.2
    },
    required: {
      [`${theme.dark} &`]: {
        color: "$red500"
      },
      color: theme.fn.themeColor("red", 7)
    }
  };
});
const LabelElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "label" } = $$props;
  let { label = "label" } = $$props;
  let { labelElement = "label" } = $$props;
  let { required = false } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(Box$1, "Box").$$render(
    $$result,
    {
      for: id,
      root: labelElement,
      class: className
    },
    {},
    {
      default: () => {
        return `${escape(label)} ${required ? `<span class="required" aria-hidden>${escape(" *")}</span>` : ``}`;
      }
    }
  )}`;
});
const LabelElement$1 = LabelElement;
const InputWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "label",
    "description",
    "error",
    "required",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "id",
    "labelElement",
    "size"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, label = "label", description = null, error = null, required = false, labelProps = {}, descriptionProps = {}, errorProps = {}, id = "input-id", labelElement = "label", size = "sm" } = $$props;
  let _labelProps;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelProps === void 0 && $$bindings.labelProps && labelProps !== void 0)
    $$bindings.labelProps(labelProps);
  if ($$props.descriptionProps === void 0 && $$bindings.descriptionProps && descriptionProps !== void 0)
    $$bindings.descriptionProps(descriptionProps);
  if ($$props.errorProps === void 0 && $$bindings.errorProps && errorProps !== void 0)
    $$bindings.errorProps(errorProps);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        _labelProps = labelElement === "label" ? { htmlFor: id, ...labelProps } : { ...labelProps };
      }
    }
    ({ cx, classes, getStyles } = useStyles$1({ size }, { name: "InputWrapper" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${label ? `${validate_component(LabelElement$1, "LabelElement").$$render($$result, Object.assign({}, { class: classes.label }, _labelProps, { label }, { id }, { labelElement }, { required }), {}, {})}` : ``} ${description ? `${validate_component(Text$1, "Text").$$render($$result, Object.assign({}, descriptionProps, { color: "gray" }, { class: classes.description }), {}, {
            default: () => {
              return `${escape(description)}`;
            }
          })}` : ``} ${slots.default ? slots.default({}) : ``} ${typeof error !== "boolean" && error ? `${validate_component(Text$1, "Text").$$render($$result, Object.assign({}, errorProps, { size }, { class: classes.error }), {}, {
            default: () => {
              return `${escape(error)}`;
            }
          })}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const InputWrapper$1 = InputWrapper;
const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60
};
const useStyles = createStyles((theme, { icon, iconWidth, invalid, multiline, radius, rightSectionWidth, size, resize, variant, showRightSection }) => {
  return {
    root: {
      darkMode: {
        "&:disabled": {
          backgroundColor: theme.fn.themeColor("dark", 6)
        },
        "&::placeholder": {
          color: theme.fn.themeColor("dark", 3)
        }
      },
      position: "relative"
    },
    input: variant !== "headless" ? {
      height: multiline ? "auto" : typeof size === "number" ? `${size}px` : sizes[size] ?? sizes.md,
      WebkitTapHighlightColor: "transparent",
      lineHeight: multiline ? "$md" : `${sizes[size] - 2}px`,
      appearance: "none",
      resize,
      boxSizing: "border-box",
      fontSize: typeof size === "number" ? `${size}px` : `${size}`,
      width: "100%",
      color: "Black",
      display: "block",
      textAlign: "left",
      minHeight: variant === "default" || variant === "filled" ? sizes[size] ?? sizes.md : null,
      paddingLeft: variant === "default" && icon || variant === "filled" && icon ? sizes[size] ?? sizes.md / 3 : 12,
      paddingRight: variant === "default" || variant === "filled" ? showRightSection ? rightSectionWidth : null : null,
      borderRadius: variant === "default" || variant === "filled" ? `$${radius}` : null,
      "&:disabled": {
        backgroundColor: theme.fn.themeColor("gray", 1),
        color: theme.fn.themeColor("dark", 2),
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: theme.fn.themeColor("dark", 2)
        }
      },
      "&::placeholder": {
        opacity: 1,
        userSelect: "none",
        color: theme.fn.themeColor("gray", 5)
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      },
      darkMode: {
        color: theme.fn.themeColor("dark", 0)
      }
    } : {},
    defaultVariant: {
      border: `1px solid ${theme.fn.themeColor("gray", 4)}`,
      backgroundColor: "White",
      transition: "border-color 100ms ease",
      minHeight: sizes[size] ?? sizes.md,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: theme.fn.themeColor("blue", 5)
      },
      darkMode: {
        border: `1px solid ${theme.fn.themeColor("dark", 5)}`,
        backgroundColor: theme.fn.themeColor("dark", 8),
        "&:focus, &:focus-within": {
          borderColor: theme.fn.themeColor("blue", 8)
        }
      }
    },
    filledVariant: {
      border: "1px solid transparent",
      backgroundColor: theme.fn.themeColor("gray", 1),
      minHeight: sizes[size] ?? sizes.md,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: `${theme.fn.themeColor("blue", 5)} !important`
      },
      darkMode: {
        backgroundColor: theme.fn.themeColor("dark", 5),
        "&:focus, &:focus-within": {
          borderColor: `${theme.fn.themeColor("blue", 8)} !important`
        }
      }
    },
    unstyledVariant: {
      height: multiline ? void 0 : "auto",
      borderWidth: 0,
      color: "Black",
      backgroundColor: "transparent",
      minHeight: 28,
      outline: 0,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent"
      },
      "&:disabled": {
        backgroundColor: "transparent",
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: "transparent"
        }
      }
    },
    withIcon: {
      paddingLeft: typeof iconWidth === "number" ? `${iconWidth}px` : sizes[size] ?? sizes.md
    },
    disabled: {
      backgroundColor: theme.fn.themeColor("gray", 1),
      color: theme.fn.themeColor("dark", 2),
      opacity: 0.6,
      cursor: "not-allowed",
      "&::placeholder": {
        color: theme.fn.themeColor("dark", 2)
      },
      darkMode: {
        backgroundColor: theme.fn.themeColor("dark", 6),
        borderColor: theme.fn.themeColor("dark", 4)
      }
    },
    invalid: {
      color: theme.fn.themeColor("red", 7),
      borderColor: theme.fn.themeColor("red", 7),
      "&::placeholder": {
        opacity: 1,
        color: theme.fn.themeColor("red", 7)
      },
      darkMode: {
        color: theme.fn.themeColor("red", 6),
        borderColor: theme.fn.themeColor("red", 6),
        "&::placeholder": {
          color: theme.fn.themeColor("red", 6)
        }
      }
    },
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: iconWidth ? `${iconWidth}px` : sizes[size] ?? sizes.md,
      color: invalid ? theme.fn.themeColor("red", 7) : theme.fn.themeColor("gray", 5),
      darkMode: {
        color: invalid ? theme.fn.themeColor("red", 6) : theme.fn.themeColor("dark", 2)
      }
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: rightSectionWidth
    }
  };
});
function isInput(root) {
  return ["input", "select", "textarea", "datalist"].includes(root);
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "root",
    "icon",
    "iconWidth",
    "iconProps",
    "showRightSection",
    "rightSectionWidth",
    "rightSectionProps",
    "wrapperProps",
    "id",
    "required",
    "radius",
    "variant",
    "disabled",
    "size",
    "value",
    "invalid",
    "multiline",
    "autocomplete",
    "type",
    "placeholder",
    "autofocus",
    "resize"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, root = "input", icon = null, iconWidth = 36, iconProps = { size: 20, color: "currentColor" }, showRightSection = $$slots.rightSection, rightSectionWidth = 36, rightSectionProps = {}, wrapperProps = {}, id = "input-id", required = false, radius = "sm", variant = "default", disabled = false, size = "sm", value = "", invalid = false, multiline = false, autocomplete = "on", type = "text", placeholder = void 0, autofocus = void 0, resize = "none" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  function castRoot() {
    return root;
  }
  let isHTMLElement = true;
  let isComponent = false;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0)
    $$bindings.iconWidth(iconWidth);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showRightSection === void 0 && $$bindings.showRightSection && showRightSection !== void 0)
    $$bindings.showRightSection(showRightSection);
  if ($$props.rightSectionWidth === void 0 && $$bindings.rightSectionWidth && rightSectionWidth !== void 0)
    $$bindings.rightSectionWidth(rightSectionWidth);
  if ($$props.rightSectionProps === void 0 && $$bindings.rightSectionProps && rightSectionProps !== void 0)
    $$bindings.rightSectionProps(rightSectionProps);
  if ($$props.wrapperProps === void 0 && $$bindings.wrapperProps && wrapperProps !== void 0)
    $$bindings.wrapperProps(wrapperProps);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.multiline === void 0 && $$bindings.multiline && multiline !== void 0)
    $$bindings.multiline(multiline);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.resize === void 0 && $$bindings.resize && resize !== void 0)
    $$bindings.resize(resize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        isHTMLElement = root && typeof root === "string";
        isComponent = root && typeof root === "function";
      }
    }
    ({ cx, classes, getStyles } = useStyles(
      {
        icon,
        iconWidth,
        invalid,
        multiline,
        radius,
        rightSectionWidth,
        showRightSection,
        size,
        resize,
        variant
      },
      { name: "Input" }
    ));
    $$rendered = `  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        wrapperProps,
        {
          class: cx(classes.root, getStyles({ css: override }))
        },
        $$restProps
      ),
      {},
      {
        default: () => {
          return `${icon ? `<div${add_attribute("class", classes.icon, 0)}>${validate_component(IconRenderer$1, "IconRenderer").$$render($$result, { icon, iconProps, iconSize: 16 }, {}, {})}</div>` : ``} ${isHTMLElement && root === "input" ? `<input${spread(
            [
              { value: escape_attribute_value(value) },
              { type: escape_attribute_value(type) },
              { required: required || null },
              { disabled: disabled || null },
              { id: escape_attribute_value(id) },
              {
                placeholder: escape_attribute_value(placeholder)
              },
              {
                autocomplete: escape_attribute_value(autocomplete)
              },
              { autofocus: autofocus || null },
              {
                "aria-invalid": escape_attribute_value(invalid)
              },
              {
                class: escape_attribute_value(cx(
                  className,
                  classes.input,
                  {
                    [classes.disabled]: disabled,
                    [classes.invalid]: invalid
                  },
                  classes[`${variant}Variant`] ?? {}
                ))
              },
              escape_object($$restProps)
            ],
            { classes: icon ? "withIcon" : "" }
          )}${add_attribute("this", element, 0)}>` : `${isHTMLElement && isInput(String(root)) ? `  ${((tag) => {
            return tag ? `<${castRoot()}${spread(
              [
                { value: escape_attribute_value(value) },
                { required: required || null },
                { disabled: disabled || null },
                { id: escape_attribute_value(id) },
                {
                  placeholder: escape_attribute_value(placeholder)
                },
                {
                  autocomplete: escape_attribute_value(autocomplete)
                },
                { type: escape_attribute_value(type) },
                { autofocus: autofocus || null },
                {
                  "aria-invalid": escape_attribute_value(invalid)
                },
                {
                  class: escape_attribute_value(cx(
                    className,
                    classes.input,
                    {
                      [classes.disabled]: disabled,
                      [classes.invalid]: invalid
                    },
                    classes[`${variant}Variant`] ?? {}
                  ))
                },
                escape_object($$restProps)
              ],
              {
                classes: (disabled ? "disabled" : "") + " " + (invalid ? "invalid" : "") + " " + (icon ? "withIcon" : "")
              }
            )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
            $$result,
            Object.assign(
              {},
              { use: [forwardEvents, [useActions, use]] },
              { "aria-invalid": invalid },
              {
                class: cx(
                  className,
                  {
                    [classes.disabled]: disabled,
                    [classes.invalid]: invalid,
                    [classes.withIcon]: icon
                  },
                  classes[`${variant}Variant`] ?? {}
                )
              },
              { disabled },
              { required },
              { id },
              { type },
              { autofocus },
              $$restProps,
              { element },
              { value }
            ),
            {
              element: ($$value) => {
                element = $$value;
                $$settled = false;
              },
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots.default ? slots.default({}) : ``}`;
              }
            }
          )}` : ``}`}`} ${showRightSection ? `<div${spread(
            [
              escape_object(rightSectionProps),
              {
                class: escape_attribute_value(classes.rightSection)
              }
            ],
            {}
          )}>${slots.rightSection ? slots.rightSection({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Input$1 = Input;
const ChevronUpDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="color:#868e96" data-chevron="true"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"${add_attribute("fill", color, 0)} fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
});
const ChevronUpDown$1 = ChevronUpDown;
const NativeSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "id",
    "placeholder",
    "data",
    "inputStyle",
    "wrapperProps",
    "size",
    "icon",
    "iconWidth",
    "iconProps",
    "rightSectionWidth",
    "rightSectionProps",
    "required",
    "radius",
    "variant",
    "disabled",
    "value",
    "label",
    "description",
    "error",
    "labelProps",
    "descriptionProps",
    "errorProps"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, id = "NativeSelect", placeholder = "", data = [], inputStyle = {}, wrapperProps = {}, size = "sm", icon = null, iconWidth = 36, iconProps = { size: 20, color: "currentColor" }, rightSectionWidth = 36, rightSectionProps = {}, required = false, radius = "sm", variant = "default", disabled = false, value = "", label = "", description = "", error = "", labelProps = {}, descriptionProps = {}, errorProps = {} } = $$props;
  const uuid = randomID(id);
  let formattedData = [];
  const forwardEvents = createEventForwarder(get_current_component());
  const base = { "& .input": { paddingLeft: 12 } };
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.inputStyle === void 0 && $$bindings.inputStyle && inputStyle !== void 0)
    $$bindings.inputStyle(inputStyle);
  if ($$props.wrapperProps === void 0 && $$bindings.wrapperProps && wrapperProps !== void 0)
    $$bindings.wrapperProps(wrapperProps);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0)
    $$bindings.iconWidth(iconWidth);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.rightSectionWidth === void 0 && $$bindings.rightSectionWidth && rightSectionWidth !== void 0)
    $$bindings.rightSectionWidth(rightSectionWidth);
  if ($$props.rightSectionProps === void 0 && $$bindings.rightSectionProps && rightSectionProps !== void 0)
    $$bindings.rightSectionProps(rightSectionProps);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.labelProps === void 0 && $$bindings.labelProps && labelProps !== void 0)
    $$bindings.labelProps(labelProps);
  if ($$props.descriptionProps === void 0 && $$bindings.descriptionProps && descriptionProps !== void 0)
    $$bindings.descriptionProps(descriptionProps);
  if ($$props.errorProps === void 0 && $$bindings.errorProps && errorProps !== void 0)
    $$bindings.errorProps(errorProps);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    data && (formattedData = data.map((item) => typeof item === "string" ? { label: item, value: item } : item));
    $$rendered = ` ${validate_component(InputWrapper$1, "InputWrapper").$$render(
      $$result,
      Object.assign(
        {},
        { id: uuid },
        {
          class: className + " svelteui-NativeSelect-root"
        },
        { size },
        { label },
        { error },
        { override },
        { required },
        { labelProps },
        { errorProps },
        { description },
        { descriptionProps },
        wrapperProps
      ),
      {},
      {
        default: () => {
          return `${validate_component(Input$1, "Input").$$render(
            $$result,
            Object.assign({}, { use: [forwardEvents, [useActions, use]] }, { root: "select" }, { id: uuid }, { autocomplete: "off" }, { invalid: Boolean(error) }, { override: { ...base, ...inputStyle } }, { size }, { icon }, { radius }, { variant }, { required }, { disabled }, { iconWidth }, { iconProps }, { placeholder }, { rightSectionWidth }, { rightSectionProps }, $$restProps, { element }, { value }),
            {
              element: ($$value) => {
                element = $$value;
                $$settled = false;
              },
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              rightSection: () => {
                return `${slots.rightSection ? slots.rightSection({
                  size: iconProps.size,
                  color: iconProps.color
                }) : ` ${validate_component(ChevronUpDown$1 || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    size: iconProps.size,
                    color: iconProps.color
                  },
                  {},
                  {}
                )} `} `;
              },
              default: () => {
                return `${placeholder ? `<option value="" disabled hidden ${!value ? "selected" : ""}>${escape(placeholder)}</option>` : ``} ${formattedData.length ? each(formattedData, (item) => {
                  return `<option${add_attribute("value", item.value, 0)} ${item.disabled ? "disabled" : ""} ${item.value === value ? "selected" : ""}>${escape(item.label ?? item.value)} </option>`;
                }) : `<option value="" disabled hidden data-svelte-h="svelte-1worzvr">Add Some Options</option>`}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const NativeSelect$1 = NativeSelect;

export { Input$1 as I, NativeSelect$1 as N, randomID as r };
//# sourceMappingURL=NativeSelect-4f1952ac.js.map
