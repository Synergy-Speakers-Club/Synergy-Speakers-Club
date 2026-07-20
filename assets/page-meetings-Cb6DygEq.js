import { j as jsxRuntimeExports } from "./vendor-react-Cy-bInuY.js";
import { F as FadeIn, S as StaggerContainer, a as StaggerItem } from "./page-home-CD24yRrU.js";
import { aa as Calendar, ab as Clock, ac as MapPin, ad as MicVocal, ae as Timer, af as FilePenLine, ag as Brain, a4 as Users, a3 as CircleCheck } from "./vendor-ui-WQAzzLgx.js";
function Meetings() {
  const agendaItems = [
    { time: "1:30 PM", title: "Welcome & Opening", desc: "The Sergeant at Arms calls the meeting to order, followed by the President's welcome." },
    { time: "1:45 PM", title: "Gavelier Introduction", desc: "The Gavelier of the Day takes control, introducing the meeting's theme and the JIG(Joke Master, Idiom Master, Greeter) team." },
    { time: "1:55 PM", title: "Evaluation Team Introduction", desc: "GOTD hands control to General Evaluator, General Evaluator introduces TAG(Timer, Ah Counter, Grammarian) team and to give back control again to the Gavelier of the Day" },
    { time: "2:00 PM", title: "Prepared Speeches", desc: "Gavelier of the Day invites Members to deliver their prepared speeches from their specific manuals" },
    { time: "2:35 AM", title: "Table Topics", desc: "Members and guests practice impromptu speaking by answering unscripted questions." },
    { time: "11:20 AM", title: "Evaluations", desc: "Constructive feedback is provided to the prepared speakers to help them improve." },
    { time: "11:45 AM", title: "General Evaluation", desc: "Reports from the Timer, Grammarian, and Ah-Counter, followed by an overall meeting assessment." },
    { time: "11:55 AM", title: "Awards & Closing", desc: "Voting results announced, ribbons awarded, and final announcements before adjournment." }
  ];
  const roles = [
    { icon: MicVocal, name: "Toastmaster of the Day", desc: "Acts as the meeting's host and director. Develops organization, time management, and public speaking skills." },
    { icon: Timer, name: "Timer", desc: "Monitors the time of all meeting segments. Teaches the importance of concise communication." },
    { icon: FilePenLine, name: "Grammarian & Ah-Counter", desc: "Introduces the Word of the Day, notes excellent use of language, and tracks filler words (ums, ahs)." },
    { icon: Brain, name: "Table Topics Master", desc: "Prepares and issues impromptu speaking prompts. Develops preparation and facilitation skills." },
    { icon: Users, name: "Speaker", desc: "Prepares and delivers a speech based on a specific manual project objective." },
    { icon: CircleCheck, name: "Evaluator", desc: "Provides verbal and written feedback to a speaker. Develops critical listening and constructive feedback skills." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-white py-16 md:py-24 border-b-4 border-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6", children: "Our Meetings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-secondary/90", children: "Structured for success. Every meeting is a laboratory for developing communication and leadership skills in a supportive, positive environment." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary mb-8 relative z-10", children: "When & Where" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-1", children: "Every Saturday" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Join us consistently to build momentum in your speaking journey." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-1", children: "10:00 AM – 12:00 PM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Please arrive 10 minutes early to sign in and get seated." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-1", children: "Main Hall, Community Center" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-2", children: "Synergy Academy Campus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 bg-destructive/10 text-destructive text-sm font-semibold rounded-full", children: "In-Person Only" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.2, className: "relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Students in a meeting",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/20 mix-blend-multiply" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary mb-6", children: "Typical Meeting Agenda" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 bg-destructive mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Our meetings run on a tight schedule, ensuring everyone has an opportunity to speak, learn, and grow within two focused hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l-4 border-primary/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12", children: agendaItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: index * 0.1, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-sm border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive font-bold tracking-wider text-sm mb-2 block", children: item.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-2", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: item.desc })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary mb-6", children: "Leadership in Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 bg-accent mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "A Gavel Club is run entirely by its members. Taking on meeting roles is how we build the practical leadership skills outlined in the Competent Leadership manual." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerContainer, { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: roles.map((role, index) => {
        const Icon = role.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-secondary/50 p-6 rounded-2xl border border-border hover:bg-white hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary text-white p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-primary", children: role.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: role.desc })
        ] }, index);
      }) })
    ] }) })
  ] });
}
export {
  Meetings as M
};
