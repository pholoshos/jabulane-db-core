import { c as create_ssr_component, b as compute_rest_props, d as createEventDispatcher, g as getContext, s as setContext, f as set_store_value, v as validate_component, h as add_attribute, a as subscribe, e as escape, i as each, n as noop, j as get_current_component, m as missing_component, k as spread, l as escape_attribute_value, o as escape_object, p as compute_slots, q as onDestroy, r as split_css_unit, t as identity } from './ssr-3e0ce6b7.js';
import moment from 'moment';
import './index2-5c28cfd6.js';
import { u as user, A as AppShell$1, H as Header$1, N as Navbar$1, T as Title$1 } from './user-6d780582.js';
import { w as writable } from './index-62c943ac.js';
import { B as Box$1, I as IconRenderer$1, T as Text$1, F as Flex$1, a as Image$1, S as Skeleton$1 } from './Image-a4811974.js';
import { c as createStyles, B as Button$1, a as createEventForwarder, u as useActions, E as Error$2, v as vFunc } from './Button-40a57e7a.js';
import { r as randomID, N as NativeSelect$1, I as Input$1 } from './NativeSelect-4f1952ac.js';
import 'apisauce';

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min$1 = Math.min;
const max$1 = Math.max;
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max$1(start, min$1(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min$1(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min$1(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1$1 ? center - min$1$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

let uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
    return uaString;
  }
  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try to use feature detection here instead.
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;

  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (backdropFilter ? backdropFilter !== 'none' : false) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective'].some(value => css.willChange.includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => {
    // Add type check for old browsers.
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}

/**
 * Determines whether or not `.getBoundingClientRect()` is affected by visual
 * viewport offsets. In Safari, the `x`/`y` offsets are values relative to the
 * visual viewport, while in other engines, they are values relative to the
 * layout viewport.
 */
function isClientRectVisualViewportBased() {
  // TODO: Try to use feature detection here instead. Feature detection for
  // this can fail in various ways, making the userAgent check the most
  // reliable:
  // • Always-visible scrollbar or not
  // • Width of <html>

  // Is Safari.
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === 'fixed', offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    // ignores Window, checks for [object VisualViewport]
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes('V');
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener('scroll', update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function blur(node, { delay = 0, duration = 400, easing = cubicInOut, amount = 5, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === "none" ? "" : style.filter;
  const od = target_opacity * (1 - opacity);
  const [value, unit] = split_css_unit(amount);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * value}${unit});`
  };
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
function draw(node, { delay = 0, speed, duration, easing = cubicInOut } = {}) {
  let len = node.getTotalLength();
  const style = getComputedStyle(node);
  if (style.strokeLinecap !== "butt") {
    len += parseInt(style.strokeWidth);
  }
  if (duration === void 0) {
    if (speed === void 0) {
      duration = 800;
    } else {
      duration = len / speed;
    }
  } else if (typeof duration === "function") {
    duration = duration(len);
  }
  return {
    delay,
    duration,
    easing,
    css: (_, u) => `
			stroke-dasharray: ${len};
			stroke-dashoffset: ${u * len};
		`
  };
}
function getTransition(name) {
  let transition;
  if (typeof name === "function")
    return name;
  switch (name) {
    case "fade":
      transition = fade;
      break;
    case "blur":
      transition = blur;
      break;
    case "fly":
      transition = fly;
      break;
    case "slide":
      transition = slide;
      break;
    case "scale":
      transition = scale;
      break;
    case "draw":
      transition = draw;
      break;
    default:
      throw new Error("You must enter a valid transition name");
  }
  return transition;
}
const sizes$1 = {
  xs: {
    fontSize: 9,
    height: 16
  },
  sm: {
    fontSize: 10,
    height: 18
  },
  md: {
    fontSize: 11,
    height: 20
  },
  lg: {
    fontSize: 13,
    height: 26
  },
  xl: {
    fontSize: 16,
    height: 32
  }
};
const dotSizes = {
  xs: 4,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10
};
const useStyles$8 = createStyles((theme, { fullWidth, radius, size, color, gradientDeg, gradientFrom, gradientTo }) => {
  const dotSize = theme.fn.size({ size, sizes: dotSizes });
  const lightColors = theme.fn.variant({ color, variant: "light" });
  const filledColors = theme.fn.variant({ color, variant: "filled" });
  const outlineColors = theme.fn.variant({ color, variant: "outline" });
  const gradientColors = theme.fn.variant({
    variant: "gradient",
    gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
  });
  const { fontSize, height } = size in sizes$1 ? sizes$1[size] : sizes$1.md;
  return {
    root: {
      focusRing: "auto",
      fontSize,
      height,
      WebkitTapHighlightColor: "transparent",
      lineHeight: `${height - 2}px`,
      textDecoration: "none",
      padding: `0 ${theme.fn.size({ size, sizes: theme.space }) / 1.5}px`,
      boxSizing: "border-box",
      display: fullWidth ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : "auto",
      textTransform: "uppercase",
      borderRadius: theme.fn.radius(radius),
      fontWeight: 700,
      letterSpacing: 0.25,
      cursor: "default",
      textOverflow: "ellipsis",
      overflow: "hidden",
      // As of now the createStyles function has a limitation that doesn't allow you to have multiple properties per component.
      // For an example, I can not make a `root` key, and then a `wrapper` key, and expect it to work. So for now they will be done manually.
      "&.light": {
        [`${theme.dark} &`]: {
          backgroundColor: lightColors.background[0],
          color: lightColors.color[0]
        },
        backgroundColor: lightColors.background[1],
        color: lightColors.color[1],
        border: "1px solid transparent"
      },
      "&.filled": {
        [`${theme.dark} &`]: {
          backgroundColor: filledColors.background[0]
        },
        backgroundColor: filledColors.background[1],
        color: filledColors.color,
        border: "1px solid transparent"
      },
      "&.outline": {
        [`${theme.dark} &`]: {
          color: outlineColors.color[0],
          border: `1px solid ${outlineColors.border[0]}`
        },
        backgroundColor: outlineColors.background,
        color: outlineColors.color[1],
        border: `1px solid ${outlineColors.border[1]}`
      },
      "&.gradient": {
        backgroundImage: gradientColors.background,
        color: gradientColors.color,
        border: 0
      },
      "&.dot": {
        darkMode: {
          color: theme.fn.themeColor("dark", 0),
          border: `1px solid ${theme.fn.themeColor("dark", 3)}`,
          "&::before": {
            backgroundColor: theme.fn.themeColor(color, 4)
          }
        },
        backgroundColor: "transparent",
        color: theme.fn.themeColor("gray", 7),
        border: `1px solid ${theme.fn.themeColor("gray", 3)}`,
        paddingLeft: theme.fn.size({ size, sizes: theme.space }) / 1.5 - dotSize / 2,
        "&::before": {
          content: '""',
          display: "block",
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize,
          backgroundColor: theme.fn.themeColor(color, 6),
          marginRight: dotSize
        }
      }
    },
    leftSection: {
      marginRight: parseInt(theme.space.xs.value) / 2
    },
    rightSection: {
      marginLeft: parseInt(theme.space.xs.value) / 2
    },
    inner: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  };
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "color",
    "variant",
    "gradient",
    "size",
    "radius",
    "fullWidth"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, color = "blue", variant = "light", gradient = { from: "blue", to: "cyan", deg: 45 }, size = "md", radius = "xl", fullWidth = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
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
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes } = useStyles$8(
      {
        color,
        fullWidth,
        size,
        radius,
        gradientDeg: gradient.deg,
        gradientFrom: gradient.from,
        gradientTo: gradient.to
      },
      { override, name: "Badge" }
    ));
    $$rendered = ` ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
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
          return `${$$slots.leftSection ? `<span${add_attribute("class", classes.leftSection, 0)}>${slots.leftSection ? slots.leftSection({}) : ``}</span>` : ``} <span${add_attribute("class", classes.inner, 0)}>${slots.default ? slots.default({}) : ``}</span> ${$$slots.rightSection ? `<span${add_attribute("class", classes.rightSection, 0)}>${slots.rightSection ? slots.rightSection({}) : ``}</span>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Badge$1 = Badge;
const POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
const useStyles$7 = createStyles((theme, { align, direction, grow, noWrap, position, spacing, children }) => {
  return {
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: direction,
      alignItems: align || (direction === "row" ? "center" : grow ? "stretch" : position === "apart" ? "flex-start" : POSITIONS[position]),
      flexWrap: noWrap ? "nowrap" : "wrap",
      justifyContent: direction === "row" ? POSITIONS[position] : void 0,
      gap: theme.fn.size({ size: spacing, sizes: theme.space }),
      "& > *": {
        boxSizing: "border-box",
        maxWidth: grow && direction === "row" ? `calc(${100 / children}% - ${theme.fn.size({ size: spacing, sizes: theme.space }) - theme.fn.size({ size: spacing, sizes: theme.space }) / children}px)` : void 0,
        flexGrow: grow ? 1 : 0
      }
    }
  };
});
const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "position",
    "noWrap",
    "grow",
    "spacing",
    "direction",
    "align"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, position = "left", noWrap = false, grow = false, spacing = "md", direction = "row", align = "center" } = $$props;
  let children;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.grow === void 0 && $$bindings.grow && grow !== void 0)
    $$bindings.grow(grow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles$7(
      {
        align,
        children,
        direction,
        grow,
        noWrap,
        position,
        spacing
      },
      { name: "Group" }
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
const Group$1 = Group;
const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};
const useStyles$6 = createStyles((theme, { color, size, variant }) => {
  const { size: sizeFn, themeColor } = theme.fn;
  return {
    root: {},
    horizontal: {
      border: 0,
      borderTopWidth: typeof size === "number" ? `${size}px` : sizeFn({ size, sizes }),
      borderTopColor: themeColor(color, 4),
      borderTopStyle: variant,
      margin: "12px 0px 12px 0px"
    },
    vertical: {
      border: 0,
      alignSelf: "stretch",
      height: "100%",
      borderLeftWidth: typeof size === "number" ? `${size}px` : sizeFn({ size, sizes }),
      borderLeftColor: themeColor(color, 4),
      borderLeftStyle: variant
    },
    showsLabel: {
      borderTop: "0 !important"
    },
    label: {
      display: "flex",
      alignItems: "center",
      color: color === "dark" ? themeColor("dark", 1) : themeColor(color, 6),
      [`${theme.dark} &`]: {
        color: color === "dark" ? themeColor("dark", 1) : themeColor(color, 5)
      },
      "&.left": {
        "&::before": {
          display: "none"
        }
      },
      "&.right": {
        "&::after": {
          display: "none"
        }
      },
      "&::before": {
        content: '""',
        flex: 1,
        height: 1,
        borderTopWidth: typeof size === "number" ? `${size}px` : sizeFn({ size, sizes }),
        borderTopStyle: `${variant}`,
        borderTopColor: themeColor(color, 4),
        marginRight: "10px",
        [`${theme.dark} &`]: {
          borderTopColor: themeColor(color, 3)
        }
      },
      "&::after": {
        content: '""',
        flex: 1,
        borderTopWidth: typeof size === "number" ? `${size}px` : sizeFn({ size, sizes }),
        borderTopStyle: `${variant}`,
        borderTopColor: themeColor(color, 3),
        marginLeft: "10px"
      }
    }
  };
});
const DividerErrors = Object.freeze([
  {
    error: true,
    message: "If using label or label slot, it cannot use orientation 'vertical'",
    solution: `
                If your component looks like this:
                
                &lt;Divider orientation='vertical' label='text...'&lt;/Divider&gt;
                                        ^^^^^^^^^ - Try changing orientation to 'horizontal'
                `
  }
]);
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showsLabel;
  let isVertical;
  let isHorizontal;
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "color",
    "orientation",
    "size",
    "label",
    "labelPosition",
    "labelProps",
    "variant"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, color = "gray", orientation = "horizontal", size = "xs", label = null, labelPosition = "left", labelProps = null, variant = "solid" } = $$props;
  let observable = false;
  let err;
  if (isVertical && (label || $$slots.label)) {
    observable = true;
    err = DividerErrors[0];
  }
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
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelProps === void 0 && $$bindings.labelProps && labelProps !== void 0)
    $$bindings.labelProps(labelProps);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showsLabel = (label || $$slots.label) && orientation === "horizontal";
    isVertical = orientation === "vertical";
    isHorizontal = orientation === "horizontal";
    {
      if (observable)
        override = { display: "none" };
    }
    ({ cx, classes, getStyles } = useStyles$6({ color, size, variant }, { name: "Divider" }));
    $$rendered = `${validate_component(Error$2, "Error").$$render(
      $$result,
      {
        observable,
        component: "Divider",
        code: err
      },
      {},
      {}
    )}  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx(className, classes.root, isHorizontal ? classes.horizontal : {}, isVertical ? classes.vertical : {}, showsLabel ? classes.showsLabel : {}, getStyles({ css: override }))
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
          return `${showsLabel ? `${validate_component(Text$1, "Text").$$render($$result, Object.assign({}, { class: cx(classes.label, labelPosition) }, labelProps, { size: labelProps?.size || size }), {}, {
            default: () => {
              return `${slots.label ? slots.label({}) : ` ${escape(label)} `}`;
            }
          })}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Divider$1 = Divider;
function calculateArrowPlacement(arrowSize, arrowDistance, position, placement) {
  switch (position) {
    case "top":
      return {
        top: "unset",
        bottom: `${-1 * arrowSize}px`,
        left: placement === "start" ? `${arrowSize * arrowDistance}px` : "unset",
        right: placement === "start" ? "unset" : `${arrowSize * arrowDistance}px`
      };
    case "bottom":
      return {
        top: `${-1 * arrowSize}px`,
        bottom: "unset",
        left: placement === "start" ? `${arrowSize * arrowDistance}px` : "unset",
        right: placement === "start" ? "unset" : `${arrowSize * arrowDistance}px`
      };
    case "left":
      return {
        right: `${-1 * arrowSize}px`,
        left: "unset",
        top: placement === "start" ? `${arrowSize * arrowDistance}px` : "unset",
        bottom: placement === "start" ? "unset" : `${arrowSize * arrowDistance}px`
      };
    case "right":
      return {
        right: "unset",
        left: `${-1 * arrowSize}px`,
        top: placement === "start" ? `${arrowSize * arrowDistance}px` : "unset",
        bottom: placement === "start" ? "unset" : `${arrowSize * arrowDistance}px`
      };
  }
}
const useStyles$5 = createStyles((_, { arrowSize, zIndex }) => {
  return {
    root: {
      position: "absolute",
      zIndex
    },
    arrowStyles: {
      width: arrowSize * 2,
      height: arrowSize * 2,
      position: "absolute",
      transform: "rotate(45deg)",
      border: "1px solid transparent",
      zIndex
    }
  };
});
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _mounted;
  let cx;
  let classes;
  let getStyles;
  let { use = [], element = void 0, class: className = "", override = {}, position = "top", placement = "center", gutter = 5, arrowSize = 3, arrowDistance = 3, arrowClassName = "arrow", withArrow = false, zIndex = 1, transition = "fade", transitionOptions = { duration: 100 }, exitTransition = transition, exitTransitionOptions = transitionOptions, mounted = false, reference = null } = $$props;
  let cleanup = () => {
  };
  let arrowElement;
  createEventForwarder(get_current_component());
  onDestroy(() => {
    cleanup();
  });
  function updatePopper(_) {
    if (!element || !reference)
      return;
    const _placement = placement;
    const placementString = placement !== "center" ? `${position}-${placement}` : position;
    const middleware = [offset(gutter), flip(), shift({ padding: 10 })];
    if (withArrow)
      middleware.push(arrow({
        element: arrowElement,
        padding: arrowDistance
      }));
    computePosition(reference, element, { placement: placementString, middleware }).then(({ x, y, placement: placement2, middlewareData }) => {
      if (!element)
        return;
      Object.assign(element.style, { left: `${x}px`, top: `${y}px` });
      if (!withArrow)
        return;
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const _position = placement2.split("-")[0];
      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[_position];
      Object.assign(arrowElement.style, {
        left: arrowX != null ? `${arrowX}px` : "unset",
        top: arrowY != null ? `${arrowY}px` : "unset",
        [staticSide]: `${-1 * arrowSize}px`,
        ..._placement !== "center" ? calculateArrowPlacement(arrowSize, arrowDistance, _position, _placement) : {}
      });
    });
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.arrowDistance === void 0 && $$bindings.arrowDistance && arrowDistance !== void 0)
    $$bindings.arrowDistance(arrowDistance);
  if ($$props.arrowClassName === void 0 && $$bindings.arrowClassName && arrowClassName !== void 0)
    $$bindings.arrowClassName(arrowClassName);
  if ($$props.withArrow === void 0 && $$bindings.withArrow && withArrow !== void 0)
    $$bindings.withArrow(withArrow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionOptions === void 0 && $$bindings.transitionOptions && transitionOptions !== void 0)
    $$bindings.transitionOptions(transitionOptions);
  if ($$props.exitTransition === void 0 && $$bindings.exitTransition && exitTransition !== void 0)
    $$bindings.exitTransition(exitTransition);
  if ($$props.exitTransitionOptions === void 0 && $$bindings.exitTransitionOptions && exitTransitionOptions !== void 0)
    $$bindings.exitTransitionOptions(exitTransitionOptions);
  if ($$props.mounted === void 0 && $$bindings.mounted && mounted !== void 0)
    $$bindings.mounted(mounted);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  {
    {
      if (element && reference) {
        cleanup = autoUpdate(reference, element, () => {
          updatePopper({ ...$$props });
        });
      }
    }
  }
  _mounted = mounted;
  getTransition(transition);
  getTransition(exitTransition);
  {
    updatePopper({ ...$$props });
  }
  ({ cx, classes, getStyles } = useStyles$5({ arrowSize, zIndex }, { name: "Popper" }));
  return ` ${_mounted ? `<div${add_attribute("class", cx(className, classes.root, getStyles({ css: override })), 0)}${add_attribute("this", element, 0)}>${withArrow ? `<div${add_attribute("class", cx(arrowClassName, { arrowClassName: true }, classes.arrowStyles), 0)}${add_attribute("this", arrowElement, 0)}></div>` : ``} ${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const Popper$1 = Popper;
const getVariantStyles$1 = (orientation, theme, getRef) => {
  return {
    default: {
      [orientation === "horizontal" ? "borderBottom" : "borderRight"]: `2px solid ${theme.fn.themeColor("gray", 2)}`,
      darkMode: {
        [orientation === "horizontal" ? "borderBottom" : "borderRight"]: `2px solid ${theme.fn.themeColor("dark", 4)}`
      },
      [`& .${getRef("tabs")}`]: {
        [orientation === "horizontal" ? "marginBottom" : "marginRight"]: -2
      }
    },
    outline: {
      [orientation === "horizontal" ? "borderBottom" : "borderRight"]: `1px solid ${theme.fn.themeColor("gray", 2)}`,
      darkMode: {
        [orientation === "horizontal" ? "borderBottom" : "borderRight"]: `1px solid ${theme.fn.themeColor("dark", 4)}`
      },
      [`& .${getRef("tabs")}`]: {
        [orientation === "horizontal" ? "marginBottom" : "marginRight"]: -1
      }
    },
    pills: {
      marginRight: orientation === "vertical" ? "20" : "0"
    }
  };
};
const useStyles$4 = createStyles((theme, { orientation, tabPadding }, getRef) => {
  return {
    root: {
      display: orientation === "vertical" ? "flex" : "block"
    },
    wrapper: {},
    tabs: {
      ref: getRef("tabs")
    },
    content: {
      [orientation === "horizontal" ? "paddingTop" : "paddingLeft"]: theme.fn.size({
        size: tabPadding,
        sizes: theme.space
      }),
      flex: orientation === "vertical" ? 1 : "none",
      display: "block"
    },
    ...getVariantStyles$1(orientation, theme, getRef)
  };
});
const ctx$1 = "Tabs";
const Tabs$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _active;
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "color",
    "grow",
    "initialTab",
    "orientation",
    "position",
    "tabPadding",
    "variant"
  ]);
  let $contextStore, $$unsubscribe_contextStore = noop, $$subscribe_contextStore = () => ($$unsubscribe_contextStore(), $$unsubscribe_contextStore = subscribe(contextStore, ($$value) => $contextStore = $$value), contextStore);
  let { use = [], element = void 0, class: className = "", override = {}, active = -1, color = "blue", grow = false, initialTab = 0, orientation = "horizontal", position = "left", tabPadding = "xs", variant = "default" } = $$props;
  const tabsId = randomID();
  let tabNodes;
  createEventDispatcher();
  let contextStore = getContext(ctx$1);
  $$subscribe_contextStore();
  if (!contextStore) {
    $$subscribe_contextStore(contextStore = writable({
      [tabsId]: {
        active: active === -1 ? initialTab : active,
        color,
        variant,
        orientation
      }
    }));
    setContext(ctx$1, contextStore);
  }
  function calculateActive() {
    if (!element)
      return;
    const content = element.querySelector(":scope > .tabs-content");
    if (!content)
      return;
    const activeTab = Array.from(tabNodes)[_active];
    if (!activeTab)
      return;
    if (content.children.length > 0) {
      content.replaceChild(activeTab, content.children[0]);
    } else {
      content.appendChild(activeTab);
    }
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.grow === void 0 && $$bindings.grow && grow !== void 0)
    $$bindings.grow(grow);
  if ($$props.initialTab === void 0 && $$bindings.initialTab && initialTab !== void 0)
    $$bindings.initialTab(initialTab);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.tabPadding === void 0 && $$bindings.tabPadding && tabPadding !== void 0)
    $$bindings.tabPadding(tabPadding);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    _active = active === -1 ? initialTab : active;
    set_store_value(
      contextStore,
      $contextStore[tabsId] = {
        active: _active,
        color,
        variant,
        orientation
      },
      $contextStore
    );
    {
      calculateActive();
    }
    ({ cx, classes } = useStyles$4({ orientation, tabPadding }, { override, name: "Tabs" }));
    $$rendered = ` ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign({}, { use }, { class: cx(className, classes.root) }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", cx(classes.wrapper, classes[variant]), 0)}>${validate_component(Group$1, "Group").$$render(
            $$result,
            {
              class: classes.tabs,
              role: "tablist",
              "data-tabsid": tabsId,
              direction: orientation === "horizontal" ? "row" : "column",
              "aria-orientation": orientation,
              spacing: variant === "pills" ? 5 : 0,
              position,
              grow
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({}) : ``}`;
              }
            }
          )}</div> <div role="tabpanel"${add_attribute("class", cx("tabs-content", classes.content), 0)}></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_contextStore();
  return $$rendered;
});
const _Tabs = Tabs$1;
const getVariantStyles = (color, orientation, theme) => {
  return {
    "&.default": {
      transition: "border-color 150ms ease, color 150ms ease",
      color: theme.colors.black.value,
      [orientation === "horizontal" ? "borderBottom" : "borderRight"]: "2px solid transparent",
      "&.active": {
        color: theme.fn.themeColor(color, 7),
        [orientation === "horizontal" ? "borderBottomColor" : "borderRightColor"]: theme.fn.themeColor(color, 7),
        darkMode: {
          color: theme.fn.themeColor(color, 4),
          [orientation === "horizontal" ? "borderBottomColor" : "borderRightColor"]: theme.fn.themeColor(color, 4)
        }
      }
    },
    "&.outline": {
      borderBottomLeftRadius: orientation === "vertical" ? theme.radii.sm.value : "0",
      borderTopRightRadius: orientation === "horizontal" ? theme.radii.sm.value : "0",
      borderTopLeftRadius: theme.radii.sm.value,
      border: "1px solid transparent",
      borderBottom: orientation === "horizontal" ? "0" : "1px solid transparent",
      borderRight: orientation === "vertical" ? "0" : "1px solid transparent",
      color: theme.fn.themeColor("gray", 7),
      "&.active": {
        color: theme.colors.black.value,
        borderColor: theme.fn.themeColor("gray", 2),
        background: theme.colors.white.value,
        darkMode: {
          color: theme.fn.themeColor("dark", 0),
          borderColor: theme.fn.themeColor("dark", 4),
          background: theme.fn.themeColor("dark", 7)
        }
      }
    },
    "&.pills": {
      borderRadius: theme.radii.sm.value,
      backgroundColor: "transparent",
      color: theme.fn.themeColor("gray", 7),
      fontSize: theme.fontSizes.sm.value,
      height: "auto",
      padding: `${theme.space.xsPX} ${theme.space.lgPX}`,
      fontWeight: "500",
      "&:hover": {
        background: theme.fn.themeColor("gray", 0),
        darkMode: {
          background: theme.fn.themeColor("dark", 6)
        }
      },
      "&.active": {
        color: theme.colors.white.value,
        background: theme.fn.variant({ variant: "filled", color }).background[1],
        darkMode: {
          color: theme.colors.white.value,
          background: theme.fn.variant({ variant: "filled", color })
        },
        "&:hover": {
          background: theme.fn.variant({ variant: "filled", color }).background[1]
        }
      }
    }
  };
};
const useStyles$3 = createStyles((theme, { color, orientation }) => {
  return {
    root: {
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      display: "block",
      height: 40,
      backgroundColor: "transparent",
      border: 0,
      padding: `0 ${theme.space.mdPX}`,
      fontSize: theme.fontSizes.sm,
      cursor: "pointer",
      width: orientation === "vertical" ? "100%" : "auto",
      darkMode: {
        color: theme.colors.white.value
      },
      ...getVariantStyles(color, orientation, theme),
      "&:disabled": {
        cursor: "not-allowed",
        color: theme.fn.themeColor("gray", 5),
        darkMode: {
          color: theme.fn.themeColor("dark", 3)
        }
      }
    },
    inner: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: orientation === "horizontal" ? "center" : "flex-start",
      lineHeight: 1,
      height: "100%"
    },
    icon: {
      "&:not(:only-child)": {
        marginRight: `${theme.space.xs.value}px`
      },
      "& *": {
        display: "block"
      }
    },
    label: {},
    tabContent: {
      display: "none",
      "&.active": {
        display: "block"
      }
    }
  };
});
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _active;
  let _color;
  let _orientation;
  let _variant;
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "icon",
    "iconProps",
    "label",
    "color",
    "variant",
    "orientation",
    "tabKey",
    "disabled",
    "title"
  ]);
  let $state, $$unsubscribe_state;
  let { use = [], element = void 0, class: className = "", override = {}, active = void 0, icon = void 0, iconProps = void 0, label = void 0, color = void 0, variant = void 0, orientation = void 0, tabKey = void 0, disabled = false, title = void 0 } = $$props;
  const state = getContext(ctx$1);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  function calculateActive() {
    if (!element)
      return;
    const children = element.parentNode.children;
    const tabsId = element.parentElement.getAttribute("data-tabsid");
    const index = Array.prototype.indexOf.call(children, element);
    _active = active !== void 0 ? active : $state[tabsId].active === index;
    _color = color !== void 0 ? color : $state[tabsId].color;
    _orientation = orientation !== void 0 ? orientation : $state[tabsId].orientation;
    _variant = variant !== void 0 ? variant : $state[tabsId].variant;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.tabKey === void 0 && $$bindings.tabKey && tabKey !== void 0)
    $$bindings.tabKey(tabKey);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    _active = active;
    _color = color !== void 0 ? color : _color;
    _orientation = orientation !== void 0 ? orientation : _orientation;
    _variant = variant !== void 0 ? variant : _variant;
    {
      calculateActive();
    }
    ({ cx, classes } = useStyles$3({ color: _color, orientation: _orientation }, { override, name: "Tab" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx("svelteui-Tab", className, classes.root, { active: _active, [_variant]: true })
        },
        { root: "button" },
        { role: "tab" },
        { "aria-selected": _active },
        { "data-key": tabKey },
        { disabled },
        { title },
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
          return `<div${add_attribute("class", classes.inner, 0)}>${slots.icon ? slots.icon({ color, ...iconProps }) : ` ${icon ? `${validate_component(IconRenderer$1, "IconRenderer").$$render($$result, { icon, iconProps, className: classes.icon }, {}, {})}` : ``} `} ${slots.label ? slots.label({}) : ` ${label ? `<div${add_attribute("class", classes.label, 0)}>${escape(label)}</div>` : ``} `} <div${add_attribute("class", cx("svelteui-Tab-content", classes.tabContent, { active: _active }), 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_state();
  return $$rendered;
});
const Tab$1 = Tab;
_Tabs.Tab = Tab$1;
const Tabs = _Tabs;
const useStyles$2 = createStyles((_, { align, bulletSize, lineWidth }) => {
  return {
    root: {
      paddingLeft: align === "left" ? bulletSize / 2 + lineWidth / 2 : 0,
      paddingRight: align === "left" ? 0 : bulletSize / 2 + lineWidth / 2
    }
  };
});
const ctx = "Timeline";
const Timeline$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "align",
    "bulletSize",
    "radius",
    "color",
    "lineWidth",
    "reverseActive"
  ]);
  let $contextStore, $$unsubscribe_contextStore;
  let { use = [], element = void 0, class: className = "", override = {}, active = -1, align = "left", bulletSize = 20, radius = "xl", color = "blue", lineWidth = 4, reverseActive = false } = $$props;
  const contextStore = writable({
    active,
    reverseActive,
    align,
    bulletSize,
    radius,
    color,
    lineWidth
  });
  $$unsubscribe_contextStore = subscribe(contextStore, (value) => $contextStore = value);
  setContext(ctx, contextStore);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.bulletSize === void 0 && $$bindings.bulletSize && bulletSize !== void 0)
    $$bindings.bulletSize(bulletSize);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.reverseActive === void 0 && $$bindings.reverseActive && reverseActive !== void 0)
    $$bindings.reverseActive(reverseActive);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(
      contextStore,
      $contextStore = {
        active,
        reverseActive,
        align,
        bulletSize,
        radius,
        color,
        lineWidth
      },
      $contextStore
    );
    ({ cx, classes } = useStyles$2({ align, bulletSize, lineWidth }, { override, name: "Timeline" }));
    $$rendered = ` ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign({}, { use }, { class: cx(className, classes.root) }, $$restProps, { element }),
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
  $$unsubscribe_contextStore();
  return $$rendered;
});
const _Timeline = Timeline$1;
const useStyles$1 = createStyles((theme, { align, bulletSize, radius, color, lineVariant, lineWidth }, getRef) => {
  const colors = vFunc(color).filled;
  return {
    root: {
      position: "relative",
      boxSizing: "border-box",
      color: theme.colors.black.value,
      paddingLeft: align === "left" ? theme.space.xlPX.value : 0,
      paddingRight: align === "right" ? theme.space.xlPX.value : 0,
      textAlign: align,
      darkMode: {
        color: theme.fn.themeColor("dark", 0)
      },
      "&:not(:last-of-type)::before": {
        display: "block"
      },
      "&:not(:first-of-type)": {
        marginTop: theme.space.xlPX.value
      },
      "&::before": {
        boxSizing: "border-box",
        position: "absolute",
        top: 0,
        bottom: `${-theme.space.xl.value}px`,
        left: align === "left" ? -lineWidth : "auto",
        right: align === "right" ? -lineWidth : "auto",
        borderLeft: `${lineWidth}px ${lineVariant} ${theme.fn.themeColor("gray", 3)}`,
        content: '""',
        display: "none",
        darkMode: {
          borderLeft: `${lineWidth}px ${lineVariant} ${theme.fn.themeColor("dark", 4)}`
        }
      },
      "&.lineActive": {
        "&::before": {
          borderLeftColor: colors.backgroundColor
        }
      },
      [`&.active .${getRef("bulletContainer")}`]: {
        borderColor: colors.backgroundColor,
        backgroundColor: theme.colors.white.value
      },
      [`&.active .${getRef("bulletContainerWithChild")}`]: {
        backgroundColor: colors.backgroundColor,
        color: theme.colors.white.value
      }
    },
    bulletContainer: {
      ref: getRef("bulletContainer"),
      boxSizing: "border-box",
      width: bulletSize,
      height: bulletSize,
      borderRadius: theme.fn.radius(radius),
      border: `${lineWidth}px solid ${theme.fn.themeColor("gray", 3)}`,
      backgroundColor: theme.colors.white.value,
      position: "absolute",
      top: 0,
      left: align === "left" ? -bulletSize / 2 - lineWidth / 2 : "auto",
      right: align === "right" ? -bulletSize / 2 - lineWidth / 2 : "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.white.value,
      darkMode: {
        border: `${lineWidth}px solid ${theme.fn.themeColor("dark", 4)}`,
        backgroundColor: theme.fn.themeColor("dark", 7)
      }
    },
    bulletContainerWithChild: {
      ref: getRef("bulletContainerWithChild"),
      borderWidth: 1,
      backgroundColor: theme.fn.themeColor("gray", 3),
      color: theme.colors.black.value,
      darkMode: {
        backgroundColor: theme.fn.themeColor("dark", 4),
        color: theme.fn.themeColor("dark", 0)
      }
    },
    bullet: {},
    container: {},
    title: {
      fontWeight: 500,
      lineHeight: 1,
      marginBottom: `${+theme.space.xs.value / 2}px`,
      textAlign: align
    },
    content: {
      textAlign: align
    }
  };
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _active;
  let _lineActive;
  let _align;
  let _color;
  let _radius;
  let _bulletSize;
  let _lineWidth;
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "active",
    "align",
    "bullet",
    "bulletSize",
    "radius",
    "color",
    "lineActive",
    "lineVariant",
    "lineWidth",
    "title"
  ]);
  let $state, $$unsubscribe_state;
  let { use = [], element = void 0, class: className = "", override = {}, active = void 0, align = void 0, bullet = void 0, bulletSize = void 0, radius = void 0, color = void 0, lineActive = void 0, lineVariant = "solid", lineWidth = void 0, title = void 0 } = $$props;
  const state = getContext(ctx);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  function calculateActive() {
    if (!element)
      return;
    const children = element.parentNode.children;
    const index = Array.prototype.indexOf.call(children, element);
    _active = active !== void 0 ? active : $state.reverseActive ? $state.active >= children.length - index - 1 : $state.active >= index;
    _lineActive = lineActive !== void 0 ? lineActive : $state.reverseActive ? $state.active >= children.length - index - 1 : $state.active - 1 >= index;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.bullet === void 0 && $$bindings.bullet && bullet !== void 0)
    $$bindings.bullet(bullet);
  if ($$props.bulletSize === void 0 && $$bindings.bulletSize && bulletSize !== void 0)
    $$bindings.bulletSize(bulletSize);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.lineActive === void 0 && $$bindings.lineActive && lineActive !== void 0)
    $$bindings.lineActive(lineActive);
  if ($$props.lineVariant === void 0 && $$bindings.lineVariant && lineVariant !== void 0)
    $$bindings.lineVariant(lineVariant);
  if ($$props.lineWidth === void 0 && $$bindings.lineWidth && lineWidth !== void 0)
    $$bindings.lineWidth(lineWidth);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    _active = active;
    _lineActive = lineActive;
    _align = align !== void 0 ? align : $state.align;
    _color = color !== void 0 ? color : $state.color;
    _radius = radius !== void 0 ? radius : $state.radius;
    _bulletSize = bulletSize !== void 0 ? bulletSize : $state.bulletSize;
    _lineWidth = lineWidth !== void 0 ? lineWidth : $state.lineWidth;
    {
      calculateActive();
    }
    ({ cx, classes } = useStyles$1(
      {
        align: _align,
        bulletSize: _bulletSize,
        radius: _radius,
        color: _color,
        lineVariant,
        lineWidth: _lineWidth
      },
      { override, name: "TimelineItem" }
    ));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx(className, classes.root, { lineActive: _lineActive, active: _active })
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
          return `<div${add_attribute("class", cx(classes.bulletContainer, bullet && classes.bulletContainerWithChild), 0)}>${slots.bullet ? slots.bullet({}) : ` ${bullet ? `${validate_component(IconRenderer$1, "IconRenderer").$$render(
            $$result,
            {
              icon: bullet,
              className: classes.bullet,
              iconSize: bulletSize,
              color
            },
            {},
            {}
          )}` : ``} `}</div> <div${add_attribute("class", classes.container, 0)}>${title ? `${validate_component(Text$1, "Text").$$render($$result, { class: classes.title }, {}, {
            default: () => {
              return `${escape(title)}`;
            }
          })}` : ``} <div${add_attribute("class", classes.content, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_state();
  return $$rendered;
});
const TimelineItem$1 = TimelineItem;
_Timeline.Item = TimelineItem$1;
const Timeline = _Timeline;
const useStyles = createStyles((theme, { color, radius }) => {
  return {
    root: {
      display: "inline-block"
    },
    body: {
      darkMode: {
        backgroundColor: theme.fn.themeColor(color, 3),
        color: theme.fn.themeColor("dark", 9)
      },
      backgroundColor: theme.fn.themeColor(color, 9),
      lineHeight: theme.lineHeights.md,
      fontSize: theme.fontSizes.sm,
      borderRadius: theme.radii[radius].value,
      padding: `${+theme.space.xs.value / 2}px ${theme.space.xs.value}px`,
      color: "white",
      position: "relative",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    arrow: {
      darkMode: {
        backgroundColor: theme.fn.themeColor(color, 3)
      },
      background: theme.fn.themeColor(color, 9),
      zIndex: 0
    }
  };
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "label",
    "opened",
    "openDelay",
    "closeDelay",
    "color",
    "radius",
    "disabled",
    "arrowSize",
    "width",
    "wrapLines",
    "allowPointerEvents",
    "tooltipRef",
    "tooltipId",
    "zIndex",
    "position",
    "placement",
    "gutter",
    "withArrow",
    "transitionOptions"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, label = null, opened: opened2 = null, openDelay = 0, closeDelay = 0, color = "gray", radius = "sm", disabled = false, arrowSize = 2, width = "auto", wrapLines = false, allowPointerEvents = false, tooltipRef = null, tooltipId = null, zIndex = 300, position = "top", placement = "center", gutter = 5, withArrow = false, transitionOptions = { duration: 100 } } = $$props;
  createEventDispatcher();
  let _opened = false;
  let tooltipRefElement = null;
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
  if ($$props.opened === void 0 && $$bindings.opened && opened2 !== void 0)
    $$bindings.opened(opened2);
  if ($$props.openDelay === void 0 && $$bindings.openDelay && openDelay !== void 0)
    $$bindings.openDelay(openDelay);
  if ($$props.closeDelay === void 0 && $$bindings.closeDelay && closeDelay !== void 0)
    $$bindings.closeDelay(closeDelay);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.wrapLines === void 0 && $$bindings.wrapLines && wrapLines !== void 0)
    $$bindings.wrapLines(wrapLines);
  if ($$props.allowPointerEvents === void 0 && $$bindings.allowPointerEvents && allowPointerEvents !== void 0)
    $$bindings.allowPointerEvents(allowPointerEvents);
  if ($$props.tooltipRef === void 0 && $$bindings.tooltipRef && tooltipRef !== void 0)
    $$bindings.tooltipRef(tooltipRef);
  if ($$props.tooltipId === void 0 && $$bindings.tooltipId && tooltipId !== void 0)
    $$bindings.tooltipId(tooltipId);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.withArrow === void 0 && $$bindings.withArrow && withArrow !== void 0)
    $$bindings.withArrow(withArrow);
  if ($$props.transitionOptions === void 0 && $$bindings.transitionOptions && transitionOptions !== void 0)
    $$bindings.transitionOptions(transitionOptions);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    visible = (typeof opened2 === "boolean" ? opened2 : _opened) && !disabled;
    ({ cx, classes, getStyles } = useStyles({ color, radius }, { name: "Tooltip" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { use },
        { id: tooltipId },
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
          return `${validate_component(Popper$1, "Popper").$$render(
            $$result,
            {
              transitionOptions,
              position,
              placement,
              gutter,
              withArrow,
              arrowSize,
              zIndex,
              arrowClassName: classes.arrow,
              reference: tooltipRefElement,
              mounted: visible,
              arrowDistance: 3
            },
            {},
            {
              default: () => {
                return `${validate_component(Box$1, "Box").$$render(
                  $$result,
                  {
                    class: classes.body,
                    css: {
                      pointerEvents: allowPointerEvents ? "all" : "none",
                      whiteSpace: wrapLines ? "normal" : "nowrap",
                      width
                    },
                    this: tooltipRef
                  },
                  {
                    this: ($$value) => {
                      tooltipRef = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${typeof label === "function" ? `${validate_component(label || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${typeof label === "string" ? `${escape(label)}` : `${typeof label === "number" ? `${escape(label)}` : `${$$slots.label ? `${slots.label ? slots.label({}) : ``}` : `${escape(label)}`}`}`}`}`;
                    }
                  }
                )}`;
              }
            }
          )} <span${add_attribute("this", tooltipRefElement, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Tooltip$1 = Tooltip;
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Bell$1 = Bell;
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Check$1 = Check;
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Clock$1 = Clock;
const DrawingPinFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z"${add_attribute("fill", color, 0)}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z" fill="currentColor"></path></svg>`;
});
const DrawingPinFilled$1 = DrawingPinFilled;
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Home$1 = Home;
const initialArray = [];
const allProjects = writable(initialArray);
const languages = [
  "English",
  "Mandarin Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Urdu",
  "Indonesian",
  "German",
  "Japanese",
  "Swahili",
  "Turkish",
  "Korean",
  "Italian",
  "Vietnamese",
  "Tamil",
  "Cantonese",
  "Punjabi",
  "Marathi",
  "Telugu",
  "Wu Chinese",
  "Min Nan Chinese",
  "Javanese",
  "Hausa",
  "Burmese",
  "Tagalog",
  "Ukrainian",
  "Afrikaans",
  "Zulu",
  "Xhosa",
  "Sesotho",
  "Setswana",
  "Sepedi",
  "Venda",
  "Tswana",
  "Southern Ndebele",
  "Swazi",
  "Tsonga",
  "Amharic",
  "Oromo",
  "Somali",
  "Yoruba",
  "Igbo",
  "Fula",
  "Malay",
  "Sundanese",
  "Uzbek",
  "Nepali",
  "Gujarati",
  "Quechua",
  "Tibetan",
  "Kurdish",
  "Tatar",
  "Maithili",
  "Balochi",
  "Assamese",
  "Bavarian",
  "Bhojpuri",
  "Burmese",
  "Chhattisgarhi",
  "Chittagonian",
  "Czech",
  "Deccan",
  "Dutch",
  "Esperanto",
  "Estonian",
  "Finnish",
  "Frisian",
  "Georgian",
  "Hakka",
  "Haitian Creole",
  "Haryanvi",
  "Hausa",
  "Hejazi Arabic",
  "Hiligaynon",
  "Hungarian",
  "Ilokano",
  "Irish",
  "Javanese",
  "Kannada",
  "Kazakh",
  "Kinyarwanda",
  "Kirundi",
  "Komi",
  "Kumaoni",
  "Kyrgyz",
  "Lao",
  "Latvian",
  "Lithuanian",
  "Low German",
  "Luxembourgish",
  "Madurese",
  "Magahi",
  "Malayalam",
  "Mandarin Chinese",
  "Maori",
  "Marathi",
  "Min Bei Chinese",
  "Min Dong Chinese",
  "Min Nan Chinese",
  "Mongolian",
  "Nahuatl",
  "Navajo",
  "Newar",
  "Northern Uzbek",
  "Occitan",
  "Odia",
  "Oromo",
  "Pashto",
  "Persian",
  "Piedmontese",
  "Pipil",
  "Polish",
  "Punjabi",
  "Quechua",
  "Romani",
  "Romanian",
  "Russian",
  "Rusyn",
  "Samoan",
  "Sardinian",
  "Scots",
  "Scottish Gaelic",
  "Serbian",
  "Sinhalese",
  "Slovak",
  "Slovene",
  "Somali",
  "Southern Quechua",
  "Spanish",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tagalog",
  "Tamil",
  "Tatar",
  "Telugu",
  "Tetum",
  "Thai",
  "Tok Pisin",
  "Tongan",
  "Tsonga",
  "Tswana",
  "Turkish",
  "Turkmen",
  "Tuvan",
  "Ukrainian",
  "Urdu",
  "Uzbek",
  "Venda",
  "Vietnamese",
  "Waray",
  "Welsh",
  "Wolof",
  "Wu Chinese",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Yucatec Maya",
  "Zhuang",
  "Zulu"
  // Add more languages as needed
];
const techStacksAndLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "Swift",
  "Kotlin",
  "Go",
  "Rust",
  "PHP",
  "TypeScript",
  "Perl",
  "Haskell",
  "Scala",
  "R",
  "Lua",
  "Dart",
  "Matlab",
  "Groovy",
  "F#",
  "Objective-C",
  "VB.NET",
  "COBOL",
  "Fortran",
  "PL/SQL",
  "Ada",
  "Prolog",
  "Scheme",
  "Racket",
  "React",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Svelte",
  "jQuery",
  "Backbone.js",
  "Preact",
  "Next.js",
  "Nuxt.js",
  "Express.js",
  "Django",
  "Ruby on Rails",
  "Spring Boot",
  "Flask",
  "Laravel",
  "ASP.NET",
  "Play Framework",
  "NestJS",
  "FastAPI",
  "React Native",
  "Flutter",
  "Xamarin",
  "Ionic",
  "PhoneGap",
  "NativeScript",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "NLTK",
  "Spacy",
  "OpenCV",
  "Node.js",
  "Electron",
  "Redux",
  "Vuex",
  "Apollo Client",
  "GraphQL",
  "ASP.NET Core",
  "RubyMotion",
  "D3.js",
  "Three.js",
  "SFML",
  "Unity",
  "Cocos2d",
  "Jest",
  "Mocha",
  "Enzyme",
  "RSpec",
  "Cucumber",
  "Jasmine",
  "Selenium",
  "Cypress",
  "Webpack",
  "Babel",
  "Gulp",
  "Grunt",
  "Ansible",
  "Docker",
  "Kubernetes",
  "Jupyter",
  "Puppet",
  "Chef",
  "Serverless Framework"
  // Add more languages, frameworks, libraries, and tools as needed
];
let opened = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [];
  let timeline = [];
  let topic = "";
  let language = "";
  let search = "";
  let isLoading = false;
  let openNotifications = false;
  let notifications = [];
  user.subscribe((value) => {
  });
  allProjects.subscribe((value) => {
    projects = value;
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AppShell$1, "AppShell").$$render($$result, { class: "bg-white p-8" }, {}, {
      header: () => {
        return `${validate_component(Header$1, "Header").$$render($$result, { class: "rounded-lg", slot: "header" }, {}, {
          default: () => {
            return `<div class="p-2 rounded-lg justify-between flex flex-row">${validate_component(Flex$1, "Flex").$$render($$result, {}, {}, {
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
            })} ${validate_component(Flex$1, "Flex").$$render($$result, { class: "space-x-4 p-1  mr-8" }, {}, {
              default: () => {
                return `${validate_component(Tooltip$1, "Tooltip").$$render(
                  $$result,
                  {
                    color: "white",
                    opened: openNotifications,
                    allowPointerEvents: true,
                    withArrow: true,
                    wrapLines: true,
                    transition: "rotate-left",
                    transitionDuration: 250,
                    gutter: 5
                  },
                  {},
                  {
                    label: () => {
                      return `<div class="bg-gray-400 p-4 rounded-lg w-72 h-96 overflow-x-scroll" slot="label">${each(notifications, (notification) => {
                        return `${validate_component(Text$1, "Text").$$render(
                          $$result,
                          {
                            color: "white",
                            weight: "bold",
                            size: "sm"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(notification.message)} `;
                            }
                          }
                        )} ${validate_component(Text$1, "Text").$$render($$result, { class: "mt-2", size: "xs" }, {}, {
                          default: () => {
                            return `${escape(notification.timestamp)}`;
                          }
                        })} ${validate_component(Divider$1, "Divider").$$render($$result, { color: "white" }, {}, {})}`;
                      })}</div>`;
                    },
                    default: () => {
                      return `${validate_component(Button$1, "Button").$$render(
                        $$result,
                        {
                          color: "gray",
                          variant: "subtle",
                          class: "mt-2",
                          size: 18
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Bell$1, "Bell").$$render($$result, { size: 18 }, {}, {})}${validate_component(Text$1, "Text").$$render($$result, { size: "xs" }, {}, {
                              default: () => {
                                return `${escape(notifications.find((noti) => noti.isRead === false) ? "+1" : "")}`;
                              }
                            })}`;
                          }
                        }
                      )}`;
                    }
                  }
                )} <a href="/">${validate_component(Home$1, "Home").$$render($$result, { color: "gray", size: 18 }, {}, {})}</a> <a href="/grades">${validate_component(Check$1, "Check").$$render($$result, { color: "gray", size: 18 }, {}, {})}</a>`;
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
            height: "90vh",
            width: {
              // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300px
              sm: 100,
              // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400px
              lg: 250,
              // When other breakpoints do not match base width is used, defaults to 100%
              base: 150
            },
            slot: "navbar",
            hidden: !opened
          },
          {},
          {
            default: () => {
              return `<div class="m-2 p-2 overflow-y-scroll h-screen">${validate_component(Timeline, "Timeline").$$render(
                $$result,
                {
                  override: { height: "100%" },
                  color: "green",
                  active: timeline.at(1),
                  bulletSize: 24,
                  lineWidth: 2
                },
                {},
                {
                  default: () => {
                    return `${each(timeline, (progress) => {
                      return `${validate_component(Timeline.Item, "Timeline.Item").$$render(
                        $$result,
                        {
                          active: true,
                          color: "green",
                          title: progress?.title
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Text$1, "Text").$$render($$result, { color: "", size: "sm" }, {}, {
                              default: () => {
                                return `${escape(progress?.description)} `;
                              }
                            })} ${validate_component(Flex$1, "Flex").$$render($$result, { class: "mt-2" }, {}, {
                              default: () => {
                                return `${validate_component(Clock$1, "Clock").$$render($$result, { class: "mr-1" }, {}, {})} ${validate_component(Text$1, "Text").$$render($$result, { size: "xs" }, {}, {
                                  default: () => {
                                    return `${escape(moment(progress?.date).format("DD/MM/yyyy hh:mm"))}`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        }
                      )}`;
                    })}`;
                  }
                }
              )}</div>`;
            }
          }
        )}`;
      },
      default: () => {
        return `${slots.default ? slots.default({}) : ` <div class="h-screen -mx-3 -my-4 p-3 rounded-lg bg-white overflow-y-scroll">${validate_component(Title$1, "Title").$$render($$result, { order: 1 }, {}, {
          default: () => {
            return `Welcome to Splearn`;
          }
        })} <p class="mb-6" data-svelte-h="svelte-1isdrrt">For learning and building projects</p> <div class="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><div>${validate_component(NativeSelect$1, "NativeSelect").$$render(
          $$result,
          {
            data: techStacksAndLanguages,
            placeholder: "Select topic here",
            value: topic
          },
          {
            value: ($$value) => {
              topic = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div>${validate_component(NativeSelect$1, "NativeSelect").$$render(
          $$result,
          {
            data: languages,
            placeholder: "Select language",
            value: language
          },
          {
            value: ($$value) => {
              language = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> ${validate_component(Input$1, "Input").$$render(
          $$result,
          {
            placeholder: "enter something to search here",
            value: search
          },
          {
            value: ($$value) => {
              search = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Flex$1, "Flex").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button$1, "Button").$$render($$result, { color: "gray", class: "mr-2" }, {}, {
              default: () => {
                return `Search`;
              }
            })} ${``}`;
          }
        })}</div> ${validate_component(Tabs, "Tabs").$$render($$result, { color: "teal" }, {}, {
          default: () => {
            return `${validate_component(Tabs.Tab, "Tabs.Tab").$$render($$result, { tabKey: "all", label: "Everything" }, {}, {
              default: () => {
                return `${validate_component(Image$1, "Image").$$render(
                  $$result,
                  {
                    width: "100%",
                    height: 150,
                    class: "mb-4",
                    src: "/bc1.jpg"
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(Tabs.Tab, "Tabs.Tab").$$render($$result, { tabKey: "you", label: "My Work" }, {}, {
              default: () => {
                return `${validate_component(Image$1, "Image").$$render(
                  $$result,
                  {
                    width: "100%",
                    height: 150,
                    class: "mb-4",
                    src: "/b4.jpg"
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(Tabs.Tab, "Tabs.Tab").$$render($$result, { tabKey: "org", label: "My Organisation" }, {}, {
              default: () => {
                return `${validate_component(Image$1, "Image").$$render(
                  $$result,
                  {
                    width: "100%",
                    height: 150,
                    class: "mb-4",
                    src: "/bc3.jpg"
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        })} ${validate_component(Skeleton$1, "Skeleton").$$render(
          $$result,
          {
            override: { marginTop: "8px" },
            visible: isLoading,
            height: "100%"
          },
          {},
          {
            default: () => {
              return `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll h-full">${each(projects, (project) => {
                return `<div class="bg-gray-100 rounded-lg w-full p-4">${validate_component(Flex$1, "Flex").$$render($$result, {}, {}, {
                  default: () => {
                    return `${timeline.find((t) => t.projectId === project._id) ? `${validate_component(DrawingPinFilled$1, "DrawingPinFilled").$$render($$result, { size: 20, class: "mt-2", color: "green" }, {}, {})}` : ``} ${validate_component(Title$1, "Title").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(project.title)}`;
                      }
                    })} `;
                  }
                })} ${validate_component(Badge$1, "Badge").$$render(
                  $$result,
                  {
                    color: "gray",
                    class: "mb-4",
                    variant: "filled"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(project.author)}`;
                    }
                  }
                )} <p class="mb-6">${escape(project.description)}</p> ${validate_component(Button$1, "Button").$$render($$result, { color: "green" }, {}, {
                  default: () => {
                    return `${escape(timeline.find((t) => t.projectId === project._id) ? "Continue" : "Get Started")}`;
                  }
                })} </div>`;
              })}</div>`;
            }
          }
        )} ${validate_component(Skeleton$1, "Skeleton").$$render(
          $$result,
          {
            override: { marginTop: "8px" },
            height: 40,
            visible: isLoading
          },
          {},
          {}
        )} ${validate_component(Skeleton$1, "Skeleton").$$render(
          $$result,
          {
            override: { marginTop: "8px" },
            height: 10,
            visible: isLoading
          },
          {},
          {}
        )} ${validate_component(Skeleton$1, "Skeleton").$$render(
          $$result,
          {
            override: { marginTop: "8px" },
            height: 50,
            visible: isLoading
          },
          {},
          {}
        )}</div> `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-16e37ea7.js.map
