import { addBasePath } from "next/dist/client/add-base-path";

function getURL (href, URL) {
  return new URL(addBasePath(href), location.href);
}

// https://github.com/vercel/next.js/blob/400ccf7b1c802c94127d8d8e0d5e9bdf9aab270c/packages/next/src/client/link.tsx#L169
function isModifiedEvent(event) {
  const eventTarget = event.currentTarget | SVGAElement;
  const target = eventTarget.getAttribute("target");
  return (
    (target && target !== "_self") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.button === 1)
  );
}

export function shouldTriggerStartEvent(href, clickEvent) {
  const current = window.location;
  const target = getURL(href);

  if (clickEvent && isModifiedEvent(clickEvent)) return false; // modified events: fallback to browser behaviour
  if (current.origin !== target.origin) return false; // external URL
  if (current.pathname === target.pathname && current.search === target.search) return false; // same URL

  return true;
}