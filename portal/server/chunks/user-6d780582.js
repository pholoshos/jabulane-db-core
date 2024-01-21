import { c as create_ssr_component, b as compute_rest_props, v as validate_component, h as add_attribute, p as compute_slots } from './ssr-3e0ce6b7.js';
import { c as createStyles, g as globalCss, f as fns } from './Button-40a57e7a.js';
import { B as Box$1, T as Text$1 } from './Image-a4811974.js';
import { w as writable } from './index-62c943ac.js';

const theme = {
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400
  }
};
function getSortedBreakpoints(breakpoints, theme2) {
  if (!breakpoints) {
    return [];
  }
  const values = Object.keys(breakpoints).filter((breakpoint) => breakpoint !== "base").map((breakpoint) => [
    fns.size({ size: breakpoint, sizes: theme2.breakpoints }),
    breakpoints[breakpoint]
  ]);
  values.sort((a, b) => a[0] - b[0]);
  return values;
}
const useStyles$3 = createStyles((theme$1, { height, width, fixed, position, hiddenBreakpoint, zIndex, section, hidden }) => {
  const breakpoints = typeof width === "object" && width !== null ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${breakpoint + 1}px)`] = {
      width: breakpointSize,
      minWidth: breakpointSize
    };
    return acc;
  }, {}) : null;
  return {
    root: {
      darkMode: {
        backgroundColor: theme$1.fn.themeColor("dark", 7),
        [section === "navbar" ? "borderRight" : "borderLeft"]: `1px solid ${theme$1.fn.themeColor("dark", 5)}`
      },
      fontFamily: "$standard",
      ...position,
      top: position?.top || "var(--svelteui-header-height)",
      zIndex,
      height: height || "calc(100vh - var(--svelteui-header-height, 0px) - var(--svelteui-footer-height, 0px))",
      width: width?.base || "100%",
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      [section === "navbar" ? "borderRight" : "borderLeft"]: `1px solid ${theme$1.fn.themeColor("gray", 2)}`,
      ...breakpoints,
      [`@media (max-width: ${theme$1.fn.size({
        size: hiddenBreakpoint,
        sizes: theme.breakpoints
      })}px)`]: hidden ? {
        display: "none"
      } : {}
    }
  };
});
const HorizontalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "width",
    "height",
    "fixed",
    "position",
    "hiddenBreakpoint",
    "hidden",
    "zIndex",
    "section"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, width = void 0, height = void 0, fixed = false, position = {}, hiddenBreakpoint = "md", hidden = false, zIndex = 100, section } = $$props;
  const breakpoints = getSortedBreakpoints(width, theme).reduce(
    (acc, [breakpoint, breakpointSize]) => {
      acc[`@media (min-width: ${breakpoint + 1}px)`] = {
        [`--svelteui-${section}-width`]: `${breakpointSize}px`
      };
      return acc;
    },
    {}
  );
  const injectRoot = globalCss({
    ":root": {
      [`--svelteui-${section}-width`]: width?.base ? `${width.base}px` : "0px",
      ...breakpoints
    }
  });
  injectRoot();
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.hiddenBreakpoint === void 0 && $$bindings.hiddenBreakpoint && hiddenBreakpoint !== void 0)
    $$bindings.hiddenBreakpoint(hiddenBreakpoint);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$3(
      {
        fixed,
        height,
        hiddenBreakpoint,
        position,
        width,
        zIndex,
        section,
        hidden
      },
      { name: "HorizontalSection" }
    ));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          root: section === "navbar" ? "nav" : "aside"
        },
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
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const HorizontalSection$1 = HorizontalSection;
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "width",
    "height",
    "fixed",
    "position",
    "hiddenBreakpoint",
    "hidden",
    "zIndex"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, width = void 0, height = void 0, fixed = false, position = { top: 0, left: 0 }, hiddenBreakpoint = "md", hidden = false, zIndex = 100 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.hiddenBreakpoint === void 0 && $$bindings.hiddenBreakpoint && hiddenBreakpoint !== void 0)
    $$bindings.hiddenBreakpoint(hiddenBreakpoint);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(HorizontalSection$1, "HorizontalSection").$$render(
      $$result,
      Object.assign({}, { section: "navbar" }, { class: className }, { use }, { override }, { width }, { height }, { fixed }, { position }, { hiddenBreakpoint }, { hidden }, { zIndex }, $$restProps, { element }),
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
const Navbar$1 = Navbar;
const useStyles$2 = createStyles((theme2, { height, borderPosition, fixed, position, zIndex }) => {
  return {
    root: {
      [`${theme2.dark} &`]: {
        backgroundColor: theme2.fn.themeColor("dark", 7),
        borderBottom: borderPosition === "bottom" ? `1px solid ${theme2.fn.themeColor("dark", 5)}` : void 0,
        borderTop: borderPosition === "top" ? `1px solid ${theme2.fn.themeColor("dark", 5)}` : void 0
      },
      ...position,
      zIndex,
      height,
      fontFamily: "$standard",
      maxHeight: height,
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      backgroundColor: "white",
      borderBottom: borderPosition === "bottom" ? `1px solid ${theme2.fn.themeColor("gray", 2)}` : void 0,
      borderTop: borderPosition === "top" ? `1px solid ${theme2.fn.themeColor("gray", 2)}` : void 0
    }
  };
});
const VerticalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "height",
    "fixed",
    "position",
    "zIndex",
    "section"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, height = void 0, fixed = false, position = {}, zIndex = 100, section } = $$props;
  const injectStyles = globalCss({
    ":root": {
      [`--svelteui-${section}-height`]: `${height}px`
    }
  });
  injectStyles();
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$2(
      {
        borderPosition: section === "header" ? "bottom" : "top",
        fixed,
        height,
        position,
        zIndex
      },
      { name: "VerticalSection" }
    ));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          root: section === "header" ? "nav" : "footer"
        },
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
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const VerticalSection$1 = VerticalSection;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "height", "fixed", "position", "zIndex"]);
  let { use = [], element = void 0, class: className = "", override = {}, height = void 0, fixed = false, position = { top: 0, left: 0, right: 0 }, zIndex = 100 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(VerticalSection$1, "VerticalSection").$$render(
      $$result,
      Object.assign({}, { section: "header" }, { class: className }, { use }, { override }, { height }, { fixed }, { position }, { zIndex }, $$restProps, { element }),
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
const Header$1 = Header;
function getPositionStyles(props, theme2) {
  const padding = fns.size({ size: props.padding, sizes: theme2.spacing });
  const navbarOffset = props.navbarOffsetBreakpoint ? fns.size({ size: props.navbarOffsetBreakpoint, sizes: theme2.breakpoints }) : null;
  const asideOffset = props.asideOffsetBreakpoint ? fns.size({ size: props.asideOffsetBreakpoint, sizes: theme2.breakpoints }) : null;
  if (!props.fixed) {
    return { padding };
  }
  return {
    minHeight: "100vh",
    paddingTop: `calc(var(--svelteui-header-height, 0px) + ${padding}px)`,
    paddingBottom: `calc(var(--svelteui-footer-height, 0px) + ${padding}px)`,
    paddingLeft: `calc(var(--svelteui-navbar-width, 0px) + ${padding}px)`,
    paddingRight: `calc(var(--svelteui-aside-width, 0px) + ${padding}px)`,
    [`@media (max-width: ${navbarOffset}px)`]: {
      paddingLeft: padding
    },
    [`@media (max-width: ${asideOffset}px)`]: {
      paddingRight: padding
    }
  };
}
const useStyles$1 = createStyles((_, props) => {
  return {
    root: {
      boxSizing: "border-box"
    },
    body: {
      display: "flex",
      boxSizing: "border-box"
    },
    main: {
      flex: 1,
      width: "100vw",
      boxSizing: "border-box",
      ...getPositionStyles(props, theme)
    }
  };
});
const AppShellProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "value"]);
  let { use = [], element = void 0, class: className = "", override = {}, value } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign({}, { class: className }, { css: { ...override } }, { use }, $$restProps, { element }),
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
const AppShellProvider$1 = AppShellProvider;
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, zIndex = 100, fixed = false, padding = "md", navbarOffsetBreakpoint = void 0, asideOffsetBreakpoint = void 0 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.navbarOffsetBreakpoint === void 0 && $$bindings.navbarOffsetBreakpoint && navbarOffsetBreakpoint !== void 0)
    $$bindings.navbarOffsetBreakpoint(navbarOffsetBreakpoint);
  if ($$props.asideOffsetBreakpoint === void 0 && $$bindings.asideOffsetBreakpoint && asideOffsetBreakpoint !== void 0)
    $$bindings.asideOffsetBreakpoint(asideOffsetBreakpoint);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes } = useStyles$1(
      {
        padding,
        fixed,
        navbarOffsetBreakpoint,
        asideOffsetBreakpoint
      },
      { override, name: "AppShell" }
    ));
    $$rendered = `${validate_component(AppShellProvider$1, "AppShellProvider").$$render(
      $$result,
      {
        use,
        value: { fixed, zIndex },
        class: cx(className, classes.root),
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
          return `${validate_component(Box$1, "Box").$$render($$result, {}, {}, {
            default: () => {
              return `${$$slots.header ? `${slots.header ? slots.header({}) : ``}` : ``} <div${add_attribute("class", classes.body, 0)}>${$$slots.navbar ? `${slots.navbar ? slots.navbar({}) : ``}` : ``} <main${add_attribute("class", classes.main, 0)}>${slots.default ? slots.default({}) : ``}</main> ${$$slots.aside ? `${slots.aside ? slots.aside({}) : ``}` : ``}</div> ${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AppShell$1 = AppShell;
const titleSizes = {
  1: {
    fontSize: 34,
    lineHeight: 1.3
  },
  2: {
    fontSize: 26,
    lineHeight: 1.35
  },
  3: {
    fontSize: 22,
    lineHeight: 1.4
  },
  4: {
    fontSize: 18,
    lineHeight: 1.45
  },
  5: {
    fontSize: 16,
    lineHeight: 1.5
  },
  6: {
    fontSize: 14,
    lineHeight: 1.5
  }
};
const useStyles = createStyles(() => {
  return {
    root: {
      margin: 0
    }
  };
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, ["element", "class", "override", "order"]);
  let { element = void 0, class: className = "", override = {}, order = 1 } = $$props;
  let node;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    node = `h${order}`;
    ({ cx, classes } = useStyles(null, { override, name: "Title" }));
    $$rendered = ` ${validate_component(Text$1, "Text").$$render(
      $$result,
      Object.assign({}, { class: cx(className, classes.root) }, { root: node }, { size: titleSizes[order].fontSize }, $$restProps, { element }),
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
const Title$1 = Title;
const initial = {};
const user = writable(initial);

export { AppShell$1 as A, Header$1 as H, Navbar$1 as N, Title$1 as T, user as u };
//# sourceMappingURL=user-6d780582.js.map
