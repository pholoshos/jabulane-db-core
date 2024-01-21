import { c as create_ssr_component, u as get_store_value, s as setContext, v as validate_component, g as getContext, a as subscribe, h as add_attribute, e as escape, i as each, b as compute_rest_props, d as createEventDispatcher, k as spread, l as escape_attribute_value, o as escape_object, p as compute_slots, j as get_current_component } from './ssr-3e0ce6b7.js';
import { w as writable } from './index-62c943ac.js';
import 'moment';
import './index2-5c28cfd6.js';
import { u as user, A as AppShell$1, H as Header$1, N as Navbar$1, T as Title$1 } from './user-6d780582.js';
import { c as createStyles, B as Button$1, a as createEventForwarder, u as useActions, E as Error$2, L as Loader$1, v as vFunc, d as dark, f as fns } from './Button-40a57e7a.js';
import { B as Box$1, F as Flex$1, a as Image$1, T as Text$1, I as IconRenderer$1 } from './Image-a4811974.js';
import 'apisauce';

const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
function getVariantStyles(color) {
  const { themeColor } = fns;
  const variants = vFunc(color);
  return {
    ...variants,
    hover: {
      [`${dark.selector} &`]: {
        color: themeColor(color, 8),
        "&:hover": { backgroundColor: themeColor("dark", 8) }
      },
      border: "1px solid transparent",
      backgroundColor: "transparent",
      color: themeColor(color, 7),
      "&:hover": { backgroundColor: themeColor(color) }
    },
    transparent: {
      [`${dark.selector} &`]: {
        color: themeColor(color, 8),
        "&:hover": { backgroundColor: null }
      },
      border: "1px solid transparent",
      backgroundColor: "transparent",
      color: themeColor(color, 7),
      "&:hover": { backgroundColor: null }
    }
  };
}
const useStyles$3 = createStyles((theme, { color, radius, size }) => {
  return {
    root: {
      focusRing: "auto",
      position: "relative",
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      height: typeof size === "string" ? sizes[size] : `${size}px`,
      minHeight: typeof size === "string" ? sizes[size] : `${size}px`,
      width: typeof size === "string" ? sizes[size] : `${size}px`,
      minWidth: typeof size === "string" ? sizes[size] : `${size}px`,
      borderRadius: `$${radius}`,
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none",
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        pointerEvents: "none",
        borderColor: "transparent",
        background: theme.fn.themeColor("gray", 2),
        backgroundColor: theme.fn.themeColor("gray", 2),
        color: theme.fn.themeColor("gray", 5),
        cursor: "not-allowed",
        darkMode: {
          borderColor: "transparent",
          backgroundColor: theme.fn.themeColor("dark", 4),
          color: theme.fn.themeColor("dark", 6)
        }
      }
    },
    loading: {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: `$${radius}`,
        cursor: "not-allowed"
      }
    },
    variants: {
      variation: getVariantStyles(color)
    }
  };
});
const ActionIconErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'href' prop, set 'root' prop to an anchor ('a') tag",
    solution: `
                If your component looks like this:

                &lt;ActionIcon href='https://example.com'&gt;
                          ^^^ - Try adding prop root='a'
                       &lt;Icon /&gt;
                &lt;/ActionIcon&gt;
                `
  }
]);
const ActionIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "root",
    "color",
    "variant",
    "size",
    "radius",
    "loaderProps",
    "loading",
    "disabled",
    "href",
    "external"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, root = "button", color = "gray", variant = "hover", size = "md", radius = "sm", loaderProps = {
    size: "xs",
    color: "gray",
    variant: "circle"
  }, loading = false, disabled = false, href = "", external = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (root !== "a" && $$props.href) {
    observable = true;
    err = ActionIconErrors[0];
  }
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
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (observable)
        override = { display: "none" };
    }
    ({ cx, classes, getStyles } = useStyles$3({ color, radius, size }, { name: "ActionIcon" }));
    $$rendered = `${validate_component(Error$2, "Error").$$render(
      $$result,
      {
        observable,
        component: "ActionIcon",
        code: err
      },
      {},
      {}
    )}  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        { tabindex: 0 },
        { disabled: disabled || loading },
        {
          class: cx(className, classes.root, { [classes.loading]: loading }, getStyles({ css: override, variation: variant }))
        },
        { target: external ? "_blank" : null },
        {
          rel: external ? "noreferrer noopener" : null
        },
        { root },
        { href },
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
          return `${loading ? `${validate_component(Loader$1, "Loader").$$render(
            $$result,
            {
              size: loaderProps.size,
              color: loaderProps.color,
              variant: loaderProps.variant
            },
            {},
            {}
          )}` : `${slots.default ? slots.default({}) : `+`}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ActionIcon$1 = ActionIcon;
const CloseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
});
const CloseIcon$1 = CloseIcon;
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "iconSize",
    "root",
    "color",
    "variant",
    "size",
    "radius",
    "loaderProps",
    "loading",
    "disabled",
    "href",
    "external"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, iconSize = "md", root = "button", color = "gray", variant = "hover", size = "md", radius = "sm", loaderProps = {
    size: "xs",
    color: "gray",
    variant: "circle"
  }, loading = false, disabled = false, href = "", external = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const iconSizes = { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 };
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${validate_component(ActionIcon$1, "ActionIcon").$$render(
      $$result,
      Object.assign({}, { class: className }, { use: [forwardEvents, [useActions, use]] }, { override }, { root }, { color }, { variant }, { size }, { radius }, { loaderProps }, { loading }, { disabled }, { href }, { external }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CloseIcon$1, "CloseIcon").$$render(
            $$result,
            {
              width: iconSizes[iconSize],
              height: iconSizes[iconSize]
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const CloseButton$1 = CloseButton;
const useStyles$2 = createStyles((theme, { color, radius, variant }, getRef) => {
  return {
    root: {
      position: "relative",
      overflow: "hidden",
      padding: `${theme.space.sm.value}px ${theme.space.md.value}px`,
      borderRadius: theme.fn.radius(radius),
      border: "1px solid transparent",
      "&.light": {
        darkMode: {
          backgroundColor: theme.fn.variant({ variant: "light", color }).background[0],
          color: theme.fn.variant({ variant: "light", color }).color[0]
        },
        backgroundColor: theme.fn.variant({ variant: "light", color }).background[1],
        color: theme.fn.variant({ variant: "light", color }).color[1]
      },
      "&.filled": {
        darkMode: {
          backgroundColor: theme.fn.variant({ variant: "filled", color }).background[0]
        },
        backgroundColor: theme.fn.variant({ variant: "filled", color }).background[1],
        color: theme.colors.white.value,
        [`& .${getRef("closeButton")}`]: {
          color: theme.colors.white.value
        }
      },
      "&.outline": {
        darkMode: {
          color: theme.fn.variant({ variant: "outline", color }).color[0],
          borderColor: theme.fn.variant({ variant: "outline", color }).border[0]
        },
        color: theme.fn.variant({ variant: "outline", color }).color[1],
        borderColor: theme.fn.variant({ variant: "outline", color }).border[1]
      }
    },
    wrapper: {
      display: "flex"
    },
    content: {
      flex: 1
    },
    title: {
      boxSizing: "border-box",
      margin: 0,
      marginBottom: 7,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      lineHeight: theme.lineHeights.sm.value,
      fontSize: theme.fontSizes.sm.value,
      fontWeight: "$bold"
    },
    label: {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    icon: {
      lineHeight: 1,
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginRight: theme.space.mdPX.value,
      marginTop: 1
    },
    message: {
      darkMode: {
        color: variant === "filled" ? theme.colors.white.value : variant === "light" ? theme.colors.white.value : theme.fn.themeColor("dark", 0)
      },
      lineHeight: theme.lineHeights.sm.value,
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontSize: theme.fontSizes.sm.value,
      color: variant === "filled" ? theme.colors.white.value : theme.colors.black.value
    },
    closeButton: {
      ref: getRef("closeButton"),
      marginTop: 2
    }
  };
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "title",
    "color",
    "radius",
    "variant",
    "icon",
    "iconSize",
    "iconProps",
    "withCloseButton",
    "closeButtonLabel"
  ]);
  let { use = [], element = void 0, class: className = "blue", override = {}, title = void 0, color = "red", radius = "sm", variant = "light", icon = void 0, iconSize = 16, iconProps = {}, withCloseButton = false, closeButtonLabel = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.withCloseButton === void 0 && $$bindings.withCloseButton && withCloseButton !== void 0)
    $$bindings.withCloseButton(withCloseButton);
  if ($$props.closeButtonLabel === void 0 && $$bindings.closeButtonLabel && closeButtonLabel !== void 0)
    $$bindings.closeButtonLabel(closeButtonLabel);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes } = useStyles$2({ color, radius, variant }, { name: "Alert", override }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        { role: "alert" },
        {
          class: cx(className, variant, classes.root)
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
          return `<div${add_attribute("class", classes.wrapper, 0)}>${icon ? `${validate_component(IconRenderer$1, "IconRenderer").$$render(
            $$result,
            {
              icon,
              className: classes.icon,
              iconSize,
              iconProps
            },
            {},
            {}
          )}` : ``} <div${add_attribute("class", classes.content, 0)}>${title ? `<div${add_attribute("class", classes.title, 0)}><span${add_attribute("class", classes.label, 0)}>${escape(title)}</span> ${withCloseButton ? `${validate_component(CloseButton$1, "CloseButton").$$render(
            $$result,
            {
              class: classes.closeButton,
              "aria-label": closeButtonLabel,
              variant: "transparent",
              size: iconSize,
              iconSize
            },
            {},
            {}
          )}` : ``}</div>` : ``} <div${add_attribute("class", classes.message, 0)}>${slots.default ? slots.default({}) : ``}</div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Alert$1 = Alert;
const useStyles$1 = createStyles(() => ({
  root: {
    position: "relative",
    display: "flex"
  }
}));
const ctx = "Breadcrumbs";
const Breadcrumbs$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let { use = [], element = void 0, class: className = "", override = {}, color = "blue", size = "md", separator = "/" } = $$props;
  const contextStore = writable({ separator, size, color });
  setContext(ctx, contextStore);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$1(null, { name: "Breadcrumbs" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      {
        use,
        class: cx(className, classes.root, getStyles({ css: override })),
        element
      },
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const _Breadcrumb = Breadcrumbs$1;
const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20
};
const useStyles = createStyles((theme, { color, size }) => ({
  root: {
    position: "relative"
  },
  wrapper: {
    display: "flex",
    gap: size,
    alignItems: "center",
    overflow: "hidden",
    fontSize: fontSizes[size],
    "& a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: theme.fn.themeColor(color, 6)
    }
  },
  innerText: {
    marginLeft: "4px"
  },
  icon: {
    fontSize: fontSizes[size]
  },
  separator: {
    margin: "0 8px"
  }
}));
const BreadcrumbsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $state, $$unsubscribe_state;
  let { use = [], element = void 0, class: className = "", override = {}, href = void 0, active = false } = $$props;
  const state = getContext(ctx);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let separator = $state.separator;
  let size = $state.size;
  let color = $state.color;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles({ color, size }, { name: "BreadcrumbsItem" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      {
        use,
        class: cx(className, classes.root, getStyles({ css: override })),
        element
      },
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${href ? `<div${add_attribute("class", cx(classes.wrapper, { active }), 0)}><a${add_attribute("href", href, 0)}>${slots.icon ? slots.icon({ class: cx(classes.icon) }) : ``} <span${add_attribute("class", cx(classes.innerText), 0)}>${slots.default ? slots.default({}) : ``}</span></a> ${!active ? `<span${add_attribute("class", cx(classes.separator), 0)}>${escape(separator)}</span>` : ``}</div>` : `<div${add_attribute("class", cx(classes.wrapper, { active }), 0)}>${slots.icon ? slots.icon({ class: cx(classes.icon) }) : ``} <span${add_attribute("class", cx(classes.innerText), 0)}>${slots.default ? slots.default({}) : ``}</span> ${!active ? `<span${add_attribute("class", cx(classes.separator), 0)}>${escape(separator)}</span>` : ``}</div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_state();
  return $$rendered;
});
const Item = BreadcrumbsItem;
_Breadcrumb.Item = Item;
const Breadcrumbs = _Breadcrumb;
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Download$1 = Download;
const Link1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.62471 4.00001L4.56402 4.00001C4.04134 3.99993 3.70687 3.99988 3.4182 4.055C2.2379 4.28039 1.29846 5.17053 1.05815 6.33035C0.999538 6.61321 0.999604 6.93998 0.999703 7.43689L0.999711 7.50001L0.999703 7.56313C0.999604 8.06004 0.999538 8.38681 1.05815 8.66967C1.29846 9.8295 2.2379 10.7196 3.4182 10.945C3.70688 11.0001 4.04135 11.0001 4.56403 11L4.62471 11H5.49971C5.77585 11 5.99971 10.7762 5.99971 10.5C5.99971 10.2239 5.77585 10 5.49971 10H4.62471C4.02084 10 3.78907 9.99777 3.60577 9.96277C2.80262 9.8094 2.19157 9.21108 2.03735 8.46678C2.00233 8.29778 1.99971 8.08251 1.99971 7.50001C1.99971 6.91752 2.00233 6.70225 2.03735 6.53324C2.19157 5.78895 2.80262 5.19062 3.60577 5.03725C3.78907 5.00225 4.02084 5.00001 4.62471 5.00001H5.49971C5.77585 5.00001 5.99971 4.77615 5.99971 4.50001C5.99971 4.22387 5.77585 4.00001 5.49971 4.00001H4.62471ZM10.3747 5.00001C10.9786 5.00001 11.2104 5.00225 11.3937 5.03725C12.1968 5.19062 12.8079 5.78895 12.9621 6.53324C12.9971 6.70225 12.9997 6.91752 12.9997 7.50001C12.9997 8.08251 12.9971 8.29778 12.9621 8.46678C12.8079 9.21108 12.1968 9.8094 11.3937 9.96277C11.2104 9.99777 10.9786 10 10.3747 10H9.49971C9.22357 10 8.99971 10.2239 8.99971 10.5C8.99971 10.7762 9.22357 11 9.49971 11H10.3747L10.4354 11C10.9581 11.0001 11.2925 11.0001 11.5812 10.945C12.7615 10.7196 13.701 9.8295 13.9413 8.66967C13.9999 8.38681 13.9998 8.06005 13.9997 7.56314L13.9997 7.50001L13.9997 7.43688C13.9998 6.93998 13.9999 6.61321 13.9413 6.33035C13.701 5.17053 12.7615 4.28039 11.5812 4.055C11.2925 3.99988 10.9581 3.99993 10.4354 4.00001L10.3747 4.00001H9.49971C9.22357 4.00001 8.99971 4.22387 8.99971 4.50001C8.99971 4.77615 9.22357 5.00001 9.49971 5.00001H10.3747ZM5.00038 7C4.72424 7 4.50038 7.22386 4.50038 7.5C4.50038 7.77614 4.72424 8 5.00038 8H10.0004C10.2765 8 10.5004 7.77614 10.5004 7.5C10.5004 7.22386 10.2765 7 10.0004 7H5.00038Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Link1$1 = Link1;
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
const cBase$1 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  setContext("regionLead", regionLead);
  setContext("regionDefault", regionDefault);
  setContext("regionTrail", regionTrail);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$1} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "cursor-pointer -outline-offset-[3px]";
const cLabel = "flex items-center space-x-4";
const cRegionLead = "";
const cRegionDefault = "flex-1";
const cRegionTrail = "";
function areDeeplyEqual(param1, param2) {
  if (param1 === param2)
    return true;
  if (!(param1 instanceof Object) || !(param2 instanceof Object))
    return false;
  const keys1 = Object.keys(param1);
  const keys2 = Object.keys(param2);
  if (keys1.length !== keys2.length)
    return false;
  for (const key of keys1) {
    const value1 = param1[key];
    const value2 = param2[key];
    if (!areDeeplyEqual(value1, value2))
      return false;
  }
  return true;
}
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { regionLead = getContext("regionLead") } = $$props;
  let { regionDefault = getContext("regionDefault") } = $$props;
  let { regionTrail = getContext("regionTrail") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0)
    $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0)
    $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0)
    $$bindings.regionTrail(regionTrail);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.some((groupVal) => areDeeplyEqual(value, groupVal)) : areDeeplyEqual(group, value);
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return `<label> <div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0"> <div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>  <div class="${"listbox-label " + escape(classesLabel, true)}"> ${$$slots.lead ? `<div class="${"listbox-label-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"listbox-label-content " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"listbox-label-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let grades = [];
  let isLoading = false;
  let _user;
  user.subscribe((value) => {
    _user = value;
  });
  return `  ${validate_component(AppShell$1, "AppShell").$$render($$result, { class: "bg-white p-8" }, {}, {
    header: () => {
      return `${validate_component(Header$1, "Header").$$render($$result, { class: "rounded-lg", slot: "header" }, {}, {
        default: () => {
          return `<div class="p-3 rounded-lg">${validate_component(Flex$1, "Flex").$$render($$result, { class: "align-middle" }, {}, {
            default: () => {
              return `${validate_component(Flex$1, "Flex").$$render($$result, {}, {}, {
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
                  )} <h1${add_attribute("class", "ml-2 mt-2 ", 0)} data-svelte-h="svelte-ato5t6">Splearn</h1>`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    },
    navbar: () => {
      return `${validate_component(Navbar$1, "Navbar").$$render(
        $$result,
        {
          class: "rounded-lg",
          height: "100vh",
          width: {
            // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300px
            sm: 100,
            // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400px
            lg: 250,
            // When other breakpoints do not match base width is used, defaults to 100%
            base: 100
          },
          slot: "navbar",
          hidden: true
        },
        {},
        {
          default: () => {
            return `<div class="m-2 p-2 h-screen overflow-y-scroll"><div class="mb-4"> ${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
              $$result,
              {
                color: "green",
                class: "mb-4",
                size: "md",
                separator: "→"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Breadcrumbs.Item, "Breadcrumbs.Item").$$render($$result, { href: "/" }, {}, {
                    default: () => {
                      return `Home`;
                    }
                  })} ${validate_component(Breadcrumbs.Item, "Breadcrumbs.Item").$$render($$result, { class: "mt-2", active: true }, {}, {
                    default: () => {
                      return `Grades`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(Title$1, "Title").$$render($$result, { order: 3 }, {}, {
              default: () => {
                return `Grades for ${escape(_user.lastName)} ${escape(_user.firstName)}`;
              }
            })} <p data-svelte-h="svelte-71h71s">Your splearn grades</p></div></div>`;
          }
        }
      )}`;
    },
    default: () => {
      return `<main class="overflow-y-scroll -my-4 -mx-3 p-4 h-screen bg-white rounded-md">${validate_component(Alert$1, "Alert").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Text$1, "Text").$$render($$result, { class: "mb-4" }, {}, {
            default: () => {
              return `You need a minimum of 50% to get certificate on tests written`;
            }
          })}`;
        }
      })}  ${validate_component(Image$1, "Image").$$render(
        $$result,
        {
          width: "100%",
          height: 150,
          class: "mb-4",
          src: "/bc1.jpg"
        },
        {},
        {}
      )} ${validate_component(ListBox, "ListBox").$$render($$result, {}, {}, {
        default: () => {
          return `${each(grades, (grade) => {
            return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
              $$result,
              {
                class: " rounded-md hover:bg-green-300 selection:bg-gray-500 active:bg-gray-200",
                name: "medium",
                value: grade._id
              },
              {},
              {
                default: () => {
                  return `${validate_component(Flex$1, "Flex").$$render($$result, { class: "justify-between" }, {}, {
                    default: () => {
                      return `${validate_component(Title$1, "Title").$$render($$result, { order: 4 }, {}, {
                        default: () => {
                          return `${escape(grade.title)}`;
                        }
                      })} ${validate_component(Flex$1, "Flex").$$render($$result, { class: "" }, {}, {
                        default: () => {
                          return `${validate_component(Text$1, "Text").$$render($$result, { class: "mt-2  mr-4" }, {}, {
                            default: () => {
                              return `${escape(grade.grade)} `;
                            }
                          })} ${grade.grade > 49 ? `${validate_component(Button$1, "Button").$$render(
                            $$result,
                            {
                              loaderProps: { color: "green", size: "sm" },
                              color: "green",
                              loading: isLoading,
                              variant: "subtle"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Download$1, "Download").$$render($$result, {}, {}, {})}Certificate`;
                              }
                            }
                          )}` : ``} ${validate_component(Button$1, "Button").$$render(
                            $$result,
                            {
                              loaderProps: { color: "green", size: "sm" },
                              color: "gray",
                              loading: isLoading,
                              variant: "subtle"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Link1$1, "Link1").$$render($$result, {}, {}, {})} Goto Course`;
                              }
                            }
                          )} `;
                        }
                      })} `;
                    }
                  })} `;
                }
              }
            )}`;
          })}`;
        }
      })}</main>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9b4c77a2.js.map
