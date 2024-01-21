import { c as create_ssr_component, b as compute_rest_props, j as get_current_component, k as spread, e as escape, o as escape_object, h as add_attribute, v as validate_component, m as missing_component, l as escape_attribute_value } from './ssr-3e0ce6b7.js';
import { k as keyframes, a as createEventForwarder, b as useSvelteUIThemeContext, e as useSvelteUITheme, h as css$2, u as useActions, E as Error$2, c as createStyles } from './Button-40a57e7a.js';

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const SYSTEM_PROPS = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight"
};
const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function isValidSizeValue(margin) {
  return typeof margin === "string" || typeof margin === "number";
}
function getSizeValue(margin, theme) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme.fn.size({ size: margin.replace("-", ""), sizes: theme.space }) * -1;
  }
  return theme.fn.size({ size: margin, sizes: theme.space });
}
function getSystemStyles(systemStyles, theme) {
  const styles = {};
  if (isValidSizeValue(systemStyles.p)) {
    const value = getSizeValue(systemStyles.p, theme);
    styles.padding = value;
  }
  if (isValidSizeValue(systemStyles.m)) {
    const value = getSizeValue(systemStyles.m, theme);
    styles.margin = value;
  }
  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }
  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }
  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme);
    styles.marginTop = value;
    styles.marginBottom = value;
  }
  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme);
    styles.marginLeft = value;
    styles.marginRight = value;
  }
  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles[SYSTEM_PROPS[property]] = theme.fn.size({
        size: getSizeValue(systemStyles[property], theme),
        sizes: theme.space
      });
    }
  });
  return styles;
}
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let BoxStyles;
  let systemStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "css",
    "root",
    "m",
    "my",
    "mx",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "py",
    "px",
    "pt",
    "pb",
    "pl",
    "pr"
  ]);
  let { use = [], element = void 0, class: className = "", css: css$1 = {}, root = void 0, m = void 0, my = void 0, mx = void 0, mt = void 0, mb = void 0, ml = void 0, mr = void 0, p = void 0, py = void 0, px = void 0, pt = void 0, pb = void 0, pl = void 0, pr = void 0 } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const castRoot = () => root;
  const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  const getCSSStyles = typeof css$1 === "function" ? css$1 : () => css$1;
  let isHTMLElement;
  let isComponent;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.css === void 0 && $$bindings.css && css$1 !== void 0)
    $$bindings.css(css$1);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.my === void 0 && $$bindings.my && my !== void 0)
    $$bindings.my(my);
  if ($$props.mx === void 0 && $$bindings.mx && mx !== void 0)
    $$bindings.mx(mx);
  if ($$props.mt === void 0 && $$bindings.mt && mt !== void 0)
    $$bindings.mt(mt);
  if ($$props.mb === void 0 && $$bindings.mb && mb !== void 0)
    $$bindings.mb(mb);
  if ($$props.ml === void 0 && $$bindings.ml && ml !== void 0)
    $$bindings.ml(ml);
  if ($$props.mr === void 0 && $$bindings.mr && mr !== void 0)
    $$bindings.mr(mr);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.py === void 0 && $$bindings.py && py !== void 0)
    $$bindings.py(py);
  if ($$props.px === void 0 && $$bindings.px && px !== void 0)
    $$bindings.px(px);
  if ($$props.pt === void 0 && $$bindings.pt && pt !== void 0)
    $$bindings.pt(pt);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0)
    $$bindings.pb(pb);
  if ($$props.pl === void 0 && $$bindings.pl && pl !== void 0)
    $$bindings.pl(pl);
  if ($$props.pr === void 0 && $$bindings.pr && pr !== void 0)
    $$bindings.pr(pr);
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
    BoxStyles = css$2({});
    systemStyles = getSystemStyles(
      {
        m,
        my,
        mx,
        mt,
        mb,
        ml,
        mr,
        p,
        py,
        px,
        pt,
        pb,
        pl,
        pr
      },
      theme
    );
    $$rendered = ` ${isHTMLElement ? ` ${((tag) => {
      return tag ? `<${castRoot()}${spread(
        [
          {
            class: escape(className, true) + " " + escape(
              BoxStyles({
                css: { ...getCSSStyles(theme), ...systemStyles }
              }),
              true
            )
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          class: className + " " + BoxStyles({
            css: { ...getCSSStyles(theme), ...systemStyles }
          })
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `<div${spread(
      [
        {
          class: escape(className, true) + " " + escape(
            BoxStyles({
              css: { ...getCSSStyles(theme), ...systemStyles }
            }),
            true
          )
        },
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Box$1 = Box;
const useStyles$4 = createStyles((theme, { iconSize }) => {
  return {
    root: {
      focusRing: "auto",
      position: "relative",
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      height: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      minHeight: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      width: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      minWidth: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none"
    },
    icon: {
      height: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      minHeight: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
      position: "static",
      margin: 0,
      ml: 0,
      mr: 0,
      mt: 0,
      mb: 0
    }
  };
});
const IconRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let getStyles;
  let classes;
  let { className = "", override = {}, icon = void 0, iconSize = 16, iconProps = {} } = $$props;
  const requiresShim = typeof HTMLElement === "undefined" && typeof SVGElement === "undefined";
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  ({ cx, getStyles, classes } = useStyles$4({ iconSize }, { name: "IconRenderer" }));
  {
    if (!requiresShim && (icon instanceof HTMLElement || icon instanceof SVGElement)) {
      icon.classList.add(...classes.icon.split(" "));
    }
  }
  return `${typeof icon === "function" ? `${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cx(className, classes.root, getStyles({ css: override }))
      },
      iconProps
    ),
    {},
    {}
  )}` : `${!requiresShim ? `${icon instanceof HTMLElement || icon instanceof SVGElement ? `<span${add_attribute("class", cx(className, classes.root, getStyles({ css: override })), 0)}> <!-- HTML_TAG_START -->${icon.outerHTML}<!-- HTML_TAG_END --></span>` : ``}` : ``}`}`;
});
const IconRenderer$1 = IconRenderer;
function getTextColor(theme, color, variant, gradient, dark = false) {
  if (color === "dimmed")
    return dark ? theme.fn.themeColor("dark", 2) : theme.fn.themeColor("gray", 6);
  if (variant === "gradient" || gradient)
    return theme.fn.themeColor(color, 6);
  if (variant === "link")
    return dark ? theme.fn.themeColor("blue", 4) : theme.fn.themeColor("blue", 7);
  if (variant === "text")
    return dark ? theme.fn.themeColor(color, 5) : theme.fn.themeColor(color, 7);
}
const useStyles$3 = createStyles((theme, { align, color, inherit, inline, lineClamp, size, tracking, transform, underline, weight, gradient, variant }) => {
  return {
    root: {
      focusRing: "auto",
      [`${theme.dark} &`]: {
        color: color === "dark" ? "$dark50" : getTextColor(theme, color, variant, gradient, true)
      },
      fontFamily: inherit ? "inherit" : "$standard",
      fontSize: inherit ? "inherit" : typeof size === "string" ? `$${size}` : `${size}px`,
      fontWeight: inherit ? "inherit" : `$${weight}`,
      letterSpacing: theme.letterSpacings[tracking]?.value,
      lineHeight: inherit ? "inherit" : inline ? 1 : typeof size === "string" ? `$${size}` : `${size}px`,
      textTransform: transform,
      textDecoration: underline ? "underline" : "none",
      textAlign: align,
      cursor: variant === "link" ? "pointer" : "inherit",
      color: color === "green" ? "Black" : getTextColor(theme, color, variant, gradient),
      backgroundImage: variant === "gradient" ? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)` : null,
      WebkitBackgroundClip: variant === "gradient" ? "text" : null,
      WebkitTextFillColor: variant === "gradient" ? "transparent" : null,
      ...lineClamp !== void 0 ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical"
      } : {},
      "&:hover": variant === "link" && underline === true ? {
        textDecoration: "underline"
      } : void 0
    }
  };
});
const TextErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
    solution: `
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `
  },
  {
    error: true,
    message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
    solution: `
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `
  }
]);
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "align",
    "color",
    "root",
    "transform",
    "variant",
    "size",
    "weight",
    "gradient",
    "inline",
    "lineClamp",
    "underline",
    "inherit",
    "href",
    "tracking"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, align = "left", color = "dark", root = void 0, transform = "none", variant = "text", size = "md", weight = "normal", gradient = { from: "indigo", to: "cyan", deg: 45 }, inline = true, lineClamp = void 0, underline = false, inherit = false, href = "", tracking = "normal" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (gradient.from === "indigo" && gradient.to === "cyan0" && gradient.deg === 45 && variant !== "gradient") {
    observable = true;
    err = TextErrors[0];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.lineClamp === void 0 && $$bindings.lineClamp && lineClamp !== void 0)
    $$bindings.lineClamp(lineClamp);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.inherit === void 0 && $$bindings.inherit && inherit !== void 0)
    $$bindings.inherit(inherit);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tracking === void 0 && $$bindings.tracking && tracking !== void 0)
    $$bindings.tracking(tracking);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$3(
      {
        lineClamp,
        underline,
        inline,
        inherit,
        gradient,
        variant,
        align,
        color,
        transform,
        size,
        weight,
        tracking
      },
      { name: "Text" }
    ));
    $$rendered = `${validate_component(Error$2, "Error").$$render($$result, { observable, component: "Text", code: err }, {}, {})}  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { root },
        { use: [forwardEvents, [useActions, use]] },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { href: href ?? void 0 },
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
const Text$1 = Text;
const useStyles$2 = createStyles((theme, { gap, rowGap, columnGap, align, justify, wrap, direction }) => {
  return {
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: direction,
      alignItems: align,
      flexWrap: wrap,
      justifyContent: justify,
      gap: gap ? theme.fn.size({ size: gap, sizes: theme.space }) : void 0,
      rowGap: rowGap ? theme.fn.size({ size: rowGap, sizes: theme.space }) : void 0,
      columnGap: columnGap ? theme.fn.size({ size: columnGap, sizes: theme.space }) : void 0
    }
  };
});
const Flex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "gap",
    "rowGap",
    "columnGap",
    "align",
    "justify",
    "wrap",
    "direction"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, gap = void 0, rowGap = void 0, columnGap = void 0, align = void 0, justify = void 0, wrap = void 0, direction = void 0 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.rowGap === void 0 && $$bindings.rowGap && rowGap !== void 0)
    $$bindings.rowGap(rowGap);
  if ($$props.columnGap === void 0 && $$bindings.columnGap && columnGap !== void 0)
    $$bindings.columnGap(columnGap);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.wrap === void 0 && $$bindings.wrap && wrap !== void 0)
    $$bindings.wrap(wrap);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$2(
      {
        gap,
        rowGap,
        columnGap,
        align,
        justify,
        wrap,
        direction
      },
      { name: "Flex" }
    ));
    $$rendered = ` ${validate_component(Box$1, "Box").$$render(
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
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Flex$1 = Flex;
const fade = keyframes({
  "from, to": { opacity: 0.4 },
  "50%": { opacity: 1 }
});
const useStyles$1 = createStyles((theme, { animate, circle, height, radius, width }) => {
  return {
    root: {
      [`${theme.dark} &`]: {
        "&.visible": {
          "&::before": {
            background: theme.fn.themeColor("dark", 7)
          },
          "&::after": {
            background: theme.fn.themeColor("dark", 4)
          }
        }
      },
      height,
      width: circle ? height : `${width}%`,
      borderRadius: circle ? height : `$${radius}`,
      position: "relative",
      overflow: "hidden",
      "&.visible": {
        "&::before": {
          content: '""',
          position: "absolute",
          background: "white",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10
        },
        "&::after": {
          content: '""',
          position: "absolute",
          background: theme.fn.themeColor("gray", 3),
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          animation: animate ? `${fade} 1500ms linear infinite` : "none",
          zIndex: 11
        }
      }
    }
  };
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "visible",
    "height",
    "width",
    "circle",
    "radius",
    "animate"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, visible = true, height = "auto", width = 100, circle = null, radius = null, animate = true } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
    $$bindings.circle(circle);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$1({ animate, circle, height, radius, width }, { name: "Skeleton" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, { visible }, getStyles({ css: override }))
        },
        { use },
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
const Skeleton$1 = Skeleton;
const useStyles = createStyles((theme, { radius, height, width, fit }) => {
  return {
    root: {},
    imageWrapper: {
      position: "relative"
    },
    figure: {
      margin: 0
    },
    image: {
      width,
      height,
      fontFamily: "$standard",
      display: "block",
      border: 0,
      borderRadius: theme.fn.radius(radius),
      objectFit: fit
    },
    caption: {
      [`${theme.dark} &`]: {
        color: theme.fn.themeColor("dark", 2)
      },
      color: theme.fn.themeColor("gray", 7),
      marginTop: theme.space.xsPX.value
    },
    placeholder: {
      [`${theme.dark} &`]: {
        color: theme.fn.themeColor("dark", 2),
        backgroundColor: theme.fn.themeColor("dark", 8)
      },
      width,
      height,
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.fn.themeColor("gray", 6),
      backgroundColor: theme.fn.themeColor("gray", 0),
      borderRadius: theme.fn.radius(radius)
    }
  };
});
const ImageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = {} } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="${"width: " + escape(style.width, true) + "; height: " + escape(style.height, true) + ";"}"><path d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
});
const ImageIcon$1 = ImageIcon;
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "override",
    "radius",
    "class",
    "src",
    "alt",
    "fit",
    "width",
    "height",
    "caption",
    "usePlaceholder",
    "loader"
  ]);
  let { use = [], element = void 0, override = {}, radius = 0, class: className = "", src = void 0, alt = "", fit = "cover", width = "100%", height = "auto", caption = void 0, usePlaceholder = false, loader = false } = $$props;
  createEventForwarder(get_current_component());
  let loaded = false;
  let showPlaceholder = false;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fit === void 0 && $$bindings.fit && fit !== void 0)
    $$bindings.fit(fit);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.usePlaceholder === void 0 && $$bindings.usePlaceholder && usePlaceholder !== void 0)
    $$bindings.usePlaceholder(usePlaceholder);
  if ($$props.loader === void 0 && $$bindings.loader && loader !== void 0)
    $$bindings.loader(loader);
  showPlaceholder = usePlaceholder && !loaded;
  ({ cx, classes, getStyles } = useStyles({ radius, fit, height, width }, { name: "Image" }));
  return ` ${validate_component(Box$1, "Box").$$render(
    $$result,
    {
      class: cx(className, classes.root, getStyles({ css: override }))
    },
    {},
    {
      default: () => {
        return `<figure${add_attribute("class", classes.figure, 0)}><div${add_attribute("class", classes.imageWrapper, 0)}>${validate_component(Skeleton$1, "Skeleton").$$render($$result, { visible: loader ? loaded : false }, {}, {
          default: () => {
            return `<img${spread(
              [
                {
                  class: escape_attribute_value(classes.image)
                },
                { src: escape_attribute_value(src) },
                { alt: escape_attribute_value(alt) },
                escape_object($$restProps)
              ],
              {}
            )}${add_attribute("this", element, 0)}>`;
          }
        })} ${showPlaceholder ? `<div${add_attribute("class", classes.placeholder, 0)}${add_attribute("title", alt, 0)}>${slots.placeholder ? slots.placeholder({}) : ` ${validate_component(ImageIcon$1, "ImageIcon").$$render($$result, { style: { width: 40, height: 40 } }, {}, {})} `}</div>` : ``}</div> ${caption ? `${validate_component(Text$1, "Text").$$render(
          $$result,
          {
            class: classes.caption,
            root: "figcaption",
            size: "sm",
            align: "center"
          },
          {},
          {
            default: () => {
              return `${escape(caption)}`;
            }
          }
        )}` : ``}</figure>`;
      }
    }
  )}`;
});
const Image$1 = Image;

export { Box$1 as B, Flex$1 as F, IconRenderer$1 as I, Skeleton$1 as S, Text$1 as T, Image$1 as a, is_void as i };
//# sourceMappingURL=Image-a4811974.js.map
