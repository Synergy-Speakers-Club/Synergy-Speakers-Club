import { a as reactExports, j as jsxRuntimeExports } from "./vendor-react-Cy-bInuY.js";
import { F as FadeIn, S as StaggerContainer, a as StaggerItem } from "./page-home-CD24yRrU.js";
import { a9 as X, a7 as Trophy, a5 as BookOpen, ah as Laugh, ai as MessageSquare, a6 as Mic, a8 as Star } from "./vendor-ui-WQAzzLgx.js";
const contests = [
  {
    id: 1,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-7 h-7" }),
    title: "International Speech Contest",
    tagline: "Craft a speech that moves the world.",
    color: "bg-primary",
    duration: "5–7 minutes",
    level: "Club",
    date: " Will be announced soon ",
    description: "The flagship contest of the Toastmasters year. Members prepare and deliver an original speech on any topic they are passionate about. This contest is your chance to share a message that truly matters to you.",
    whatToDo: [
      "Prepare an original speech (5–7 minutes) on any topic",
      "No props, notes, or visual aids allowed",
      "Speech must not have been used to win a previous contest"
  },
  {
    id: 2,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7" }),
    title: "Evaluation Contest",
    tagline: "Show how well you listen and lead.",
    color: "bg-destructive",
    duration: "2–3 minutes",
    level: "Club",
    date: " Will be announced soon ",
    description: "Contestants evaluate the same test speaker and are judged on the quality, balance, and delivery of their feedback. A great evaluator can change a speaker's life — this contest celebrates that skill.",
    whatToDo: [
      "Listen to a 5–7 minute test speech (same for all contestants)",
      "Deliver a 2–3 minute evaluation covering strengths and improvements",
      "Judged on content, organisation, and delivery"
    ]
  },
  {
    id: 3,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-7 h-7" }),
    title: "Table Topics Contest",
    tagline: "Think fast. Speak well. Win big.",
    color: "bg-destructive",
    duration: "1–2 minutes",
    level: "Club",
    date: " Will be announced soon ",
    description: "The ultimate test of impromptu speaking. Each contestant is given a random topic moments before speaking and must deliver a structured, compelling response on the spot. No preparation allowed.",
    whatToDo: [
      "You receive your topic at the lectern — no advance notice",
      "Speak for 1 minute minimum, 2 minutes maximum",
      "Judged on organisation, delivery, and how well you address the topic"
    ],
  }
];
function Contests() {
  const [selected, setSelected] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-primary text-white py-20 md:py-28 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "dots", width: "30", height: "30", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "2", cy: "2", r: "2", fill: "white" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#dots)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block py-1 px-4 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6 border border-accent/30", children: "Competitions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Contests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed", children: "From impromptu speaking to prepared speeches, our contests challenge every skill level and celebrate the joy of communication." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerContainer, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: contests.map((contest) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setSelected(contest),
        className: "w-full text-left bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${contest.color} px-6 pt-6 pb-8 text-white`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4", children: contest.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold leading-snug mb-1", children: contest.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: contest.tagline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full", children: [
                "⏱ ",
                contest.duration
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full", children: [
                "🏆 ",
                contest.level.split("→")[0].trim()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm line-clamp-2 leading-relaxed", children: contest.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-sm mt-4 group-hover:underline", children: "Learn more →" })
          ] })
        ]
      }
    ) }, contest.id)) }) }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: () => setSelected(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${selected.color} text-white px-8 pt-8 pb-10 rounded-t-3xl relative`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelected(null),
                    className: "absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4", children: selected.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-1", children: selected.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80", children: selected.tagline })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold bg-primary/10 text-primary px-4 py-1.5 rounded-full", children: [
                    "⏱ ",
                    selected.duration
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold bg-destructive/10 text-destructive px-4 py-1.5 rounded-full", children: [
                    "🏆 ",
                    selected.level
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: selected.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-primary text-lg mb-3", children: "What you need to do" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: selected.whatToDo.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0", children: i + 1 }),
                    item
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-destructive text-lg mb-3", children: "Winning tips" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: selected.tips.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-lg flex-shrink-0", children: "★" }),
                    tip
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelected(null),
                    className: "w-full bg-primary text-white font-bold py-3 rounded-2xl hover:bg-primary/90 transition-colors",
                    children: "Got it!"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
export {
  Contests as C
};
