import { a as reactExports, j as jsxRuntimeExports } from "./vendor-react-Cy-bInuY.js";
import { F as FadeIn } from "./page-home-CRBh6Q59.js";
import { al as Mail, a9 as MapPin, C as CircleAlert, am as MessageSquare, a3 as CircleCheck, an as Send } from "./vendor-ui-BzIXMLkk.js";
function Contact() {
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary py-16 md:py-24 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground", children: "Have questions about membership, want to visit a meeting, or looking for more info? We'd love to hear from you." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 md:py-24 bg-white relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] -z-0 hidden lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 pr-0 lg:pr-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary mb-6", children: "Contact Information" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-primary text-lg", children: "Email Us" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:synergyspeakersclub@email.com", className: "text-muted-foreground hover:text-accent transition-colors block mt-1", children: "synergyspeakersclub@email.com" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "We aim to respond within 48 hours." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-primary text-lg", children: "Meeting Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
                    "Main Hall, Community Center",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Synergy Academy",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "(Every Saturday, 10:00 AM)"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-destructive text-lg flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
              " Important Note"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Synergy Speakers Club is an in-person Gavel Club. We do not offer virtual or hybrid meeting options. Members are required to attend physical meetings to fulfill the requirements of the program." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden shadow-lg border border-border h-64 relative hidden md:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Confidence in speaking",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/20 mix-blend-multiply" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-border relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -right-6 bg-accent p-4 rounded-2xl shadow-lg rotate-12 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-primary mb-8", children: "Send an Inquiry" }),
          isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center animate-in fade-in zoom-in duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-primary mb-2", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Thank you for reaching out. A club officer will get back to you shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsSuccess(false),
                className: "text-primary font-bold hover:underline",
                children: "Send another message"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "text-sm font-bold text-primary", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  required: true,
                  className: "w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                  placeholder: "John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "text-sm font-bold text-primary", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  required: true,
                  className: "w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
                  placeholder: "john@example.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "subject", className: "text-sm font-bold text-primary", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "subject",
                  required: true,
                  className: "w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, selected: true, children: "Select a topic..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "visit", children: "Meeting Visit / Guest RSVP" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "membership", children: "Membership Inquiry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Question" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-sm font-bold text-primary", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  required: true,
                  rows: 5,
                  className: "w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none",
                  placeholder: "How can we help you?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-primary text-white hover:bg-[#016094] transition-colors py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                children: isSubmitting ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Send Message ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" })
                ] })
              }
            )
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
}
export {
  Contact as C
};
