import { a as reactExports, j as jsxRuntimeExports } from "./vendor-react-Cy-bInuY.js";
import { c as clientExports } from "./vendor-react-dom-CetqEmOS.js";
import { ao as Viewport, ap as Root2, aq as Action, ar as Close, as as X, at as Title, au as Description, av as cva, aw as Provider, ax as Portal, ay as Content2, az as Provider$1, aA as useLocation, a0 as Link, aB as Menu, aC as Facebook, aD as Instagram, aE as ChevronRight, aF as QueryClient, aG as QueryClientProvider, aH as Router$1, aI as Switch, aJ as Route } from "./vendor-ui-BzIXMLkk.js";
import { c as cn, N as NotFound } from "./page-not-found-DK_RBSru.js";
import { H as Home } from "./page-home-CRBh6Q59.js";
import { M as Meetings } from "./page-meetings-BLRhxn6l.js";
import { R as Resources } from "./page-resources-Y6vcdw9G.js";
import { C as Contact } from "./page-contact-CioCg-z_.js";
import "./vendor-motion-BojLSjwd.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const ToastProvider = Provider;
const ToastViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = reactExports.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = Root2.displayName;
const ToastAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = Action.displayName;
const ToastClose = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = Close.displayName;
const ToastTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = Title.displayName;
const ToastDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = Description.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = reactExports.useState(memoryState);
  reactExports.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, {})
  ] });
}
const TooltipProvider = Provider$1;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];
function Layout({ children }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[100dvh] flex flex-col font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary shadow-md py-3" : "bg-primary py-5"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full overflow-hidden transition-transform group-hover:scale-105 w-9 h-9 md:w-11 md:h-11 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `${"/Synergy-Speakers-Club/"}logo.png`, alt: "Synergy Speakers Logo", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-bold text-lg md:text-xl tracking-tight leading-tight m-0", children: "Synergy Speakers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-[10px] md:text-xs font-semibold uppercase tracking-wider hidden sm:block", children: "A Gavel Club" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
            links.map((link) => {
              const isActive = location === link.href;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  href: link.href,
                  className: `font-semibold text-sm transition-colors relative py-1 ${isActive ? "text-accent" : "text-white hover:text-accent"}`,
                  children: [
                    link.label,
                    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" })
                  ]
                },
                link.href
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                href: "/meetings",
                className: "bg-accent text-primary hover:bg-white transition-colors px-5 py-2 rounded-full font-bold text-sm shadow-sm",
                children: "Visit Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden text-white p-2",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              "aria-label": "Toggle Menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
            }
          )
        ] }) })
      }
    ),
    mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm pt-24 px-6 md:hidden flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-6 text-center", children: [
      links.map((link) => {
        const isActive = location === link.href;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            href: link.href,
            className: `text-2xl font-bold ${isActive ? "text-accent" : "text-white"}`,
            children: link.label
          },
          link.href
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          href: "/meetings",
          className: "inline-block bg-accent text-primary px-8 py-3 rounded-full font-bold text-lg w-full max-w-xs",
          children: "Attend a Meeting"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-[72px] md:pt-[88px] flex flex-col", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-primary text-white pt-16 pb-8 border-t-[6px] border-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 lg:col-span-4 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full overflow-hidden w-10 h-10 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `${"/Synergy-Speakers-Club/"}logo.png`, alt: "Logo", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white m-0", children: "Synergy Speakers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary/80 text-sm leading-relaxed max-w-sm", children: "Empowering Young Voices — One Speech at a Time. A Gavel Club affiliated with Toastmasters International, dedicated to developing public speaking and leadership skills in youth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white/10 hover:bg-accent hover:text-primary transition-colors p-2.5 rounded-full text-white", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white/10 hover:bg-accent hover:text-primary transition-colors p-2.5 rounded-full text-white", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 lg:col-span-2 lg:col-start-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-accent font-bold text-lg mb-4", children: "Quick Links" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: link.href, className: "text-secondary/80 hover:text-white transition-colors text-sm flex items-center gap-1 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-accent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" }),
            link.label
          ] }) }, link.href)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-accent font-bold text-lg mb-4", children: "Visit Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-secondary/80 text-sm space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Every Saturday" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "10:00 AM – 12:00 PM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-2", children: [
              "Main Hall, Community Center",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Synergy Academy"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:synergyspeakersclub@email.com", className: "hover:text-accent transition-colors", children: "synergyspeakersclub@email.com" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-white/10 mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-center items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-secondary/60 text-xs max-w-4xl mx-auto leading-relaxed uppercase tracking-wider font-semibold", children: "The information on this website is for the sole use of Toastmasters' members for Toastmasters business only. It is not to be used for solicitation and distribution of non-Toastmasters material or information." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-secondary/50 text-xs", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Synergy Speakers Club. Affiliated with Toastmasters International."
        ] })
      ] })
    ] }) })
  ] });
}
function useHashLocation() {
  const getHash = () => window.location.hash.replace(/^#/, "") || "/";
  const [loc, setLoc] = reactExports.useState(getHash);
  reactExports.useEffect(() => {
    const handler = () => setLoc(getHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = (to, opts) => {
    if (opts?.replace) {
      window.location.replace("#" + to);
    } else {
      window.location.hash = to;
    }
  };
  return [loc, navigate];
}
const queryClient = new QueryClient();
function Router() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Switch, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", component: Home }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/meetings", component: Meetings }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/resources", component: Resources }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", component: Contact }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { component: NotFound })
  ] }) });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Router$1, { hook: useHashLocation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Router, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
clientExports.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
