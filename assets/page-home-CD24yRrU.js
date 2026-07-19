import { j as jsxRuntimeExports, a as reactExports } from "./vendor-react-Cy-bInuY.js";
import { a0 as Link, a1 as ArrowRight, a2 as Award, a3 as CircleCheck, a4 as Users, a5 as BookOpen, a6 as Mic, a7 as Trophy, a8 as Star, a9 as X } from "./vendor-ui-WQAzzLgx.js";
import { m as motion } from "./vendor-motion-jxuqwld2.js";
function FadeIn({ children, delay = 0, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
      className,
      children
    }
  );
}
function StaggerContainer({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-50px" },
      variants: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      },
      className,
      children
    }
  );
}
function StaggerItem({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      },
      className,
      children
    }
  );
}
const excomTeam = [
  {
    name: "Aarav",
    role: "President",
    photo: "",
    initials: "A",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Aarav here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Vikesh",
    role: "President",
    photo: "",
    initials: "V",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Vikesh here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Siddharth",
    role: "VP Education",
    photo: "",
    initials: "S",
    color: "bg-destructive",
    bio: [
      "Add a short introduction about Siddharth here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Letheesh",
    role: "VP Education",
    photo: "",
    initials: "L",
    color: "bg-destructive",
    bio: [
      "Add a short introduction about Letheesh here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Snehithram",
    role: "VP Membership",
    photo: "",
    initials: "Sn",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Snehithram here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Saindhavi",
    role: "VP Membership",
    photo: "",
    initials: "Sa",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Saindhavi here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Anirudh",
    role: "VP Public Relations",
    photo: "",
    initials: "An",
    color: "bg-destructive",
    bio: [
      "Add a short introduction about Anirudh here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Zayn",
    role: "VP Public Relations",
    photo: "",
    initials: "Z",
    color: "bg-destructive",
    bio: [
      "Add a short introduction about Zayn here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Thiya",
    role: "Secretary",
    photo: "",
    initials: "T",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Thiya here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Gurucharan",
    role: "Secretary",
    photo: "",
    initials: "G",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Gurucharan here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Aswant",
    role: "Treasurer",
    photo: "",
    initials: "As",
    color: "bg-destructive",
    bio: [
      "Add a short introduction about Aswant here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Siddharth M.T",
    role: "Sergeant at Arms",
    photo: "",
    initials: "SM",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Siddharth M.T here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Ikhlas",
    role: "Sergeant at Arms",
    photo: "",
    initials: "I",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Ikhlas here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  },
  {
    name: "Taran Kishore",
    role: "Sergeant at Arms",
    photo: "",
    initials: "TK",
    color: "bg-primary",
    bio: [
      "Add a short introduction about Taran Kishore here.",
      "You can write a second paragraph about their achievements or role in the club."
    ]
  }
];
function Home() {
  const [selectedMember, setSelectedMember] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "Term 2026 July to December Excom Group Photo.jpeg",
            alt: "Students presenting",
            className: "w-full h-full object-cover opacity-30 mix-blend-overlay"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6 border border-accent/30", children: "A Gavel Club" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white", children: [
          "Empowering Young Voices — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "One Speech at a Time." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-secondary/90 mb-10 max-w-2xl leading-relaxed", children: "Synergy Speakers Club is a premier youth public speaking and leadership program designed to build confidence, articulation, and community in students under 18." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.3, className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              href: "/meetings",
              className: "bg-accent text-primary hover:bg-white transition-all px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2",
              children: [
                "Attend a Meeting ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              href: "/resources",
              className: "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2",
              children: "Learn More"
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-accent/20 rounded-3xl transform -rotate-3 -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Young student speaking confidently",
            className: "rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg border-b-4 border-accent hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-10 h-10 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl", children: "Excellence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-secondary/80", children: "in Communication" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary mb-6", children: "About Our Club" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 bg-destructive mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: "Synergy Speakers Club represents an academic standard of excellence intersecting with deep personal growth. We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-8", children: "As an officially affiliated Gavel Club under Toastmasters International, we operate with the same professional rigor as standard clubs but are specifically tailored for youth under the age of 18." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: [
          "Overcome the fear of public speaking",
          "Learn to structure powerful presentations",
          "Receive constructive, encouraging evaluations",
          "Develop impromptu speaking skills"
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: item })
        ] }, i)) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-secondary border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary mb-6", children: "What is a Gavel Club?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 bg-accent mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "While standard Toastmasters clubs are restricted to members 18 and older, Gavel Clubs bring the proven Toastmasters curriculum to younger students." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerContainer, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-white p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7 text-primary group-hover:text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-3", children: "Youth-Focused" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Designed exclusively for students under 18, providing a safe, peer-driven environment to practice without intimidation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-white p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-7 h-7 text-primary group-hover:text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-3", children: "Classic Manuals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We use the legendary Competent Communication and Competent Leadership manuals to build foundational skills systematically." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "bg-white p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-shadow group sm:col-span-2 lg:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-7 h-7 text-primary group-hover:text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mb-3", children: "In-Person Meetings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Real skills are built in real rooms. Our mandatory in-person meetings teach essential stage presence and audience connection." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4 border border-primary/20", children: "Who We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-primary mb-4", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed", children: "Synergy Speakers Club is a Gavel Club affiliated with Toastmasters International, dedicated to building confident communicators and future leaders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-primary text-center mb-10", children: "Types of Meetings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-6 h-6" }),
            title: "Regular Meeting",
            desc: "Our weekly sessions where members deliver prepared speeches, take on meeting roles, and practise impromptu speaking through Table Topics. This is the heart of the club.",
            tag: "Weekly"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6" }),
            title: "Contest Meeting",
            desc: "Special sessions held during contest season where members compete in categories like International Speech, Evaluation, Humorous Speech, and Table Topics.",
            tag: "Seasonal"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6" }),
            title: "Special Meeting",
            desc: "Themed or milestone sessions — including induction ceremonies, year-end galas, workshops, and guest speaker events that bring the community together.",
            tag: "Occasional"
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-accent/20 text-primary px-3 py-1 rounded-full border border-accent/30", children: item.tag })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-primary mb-3", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: item.desc })
            ]
          },
          item.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold text-primary mb-3", children: "Meet the ExCom Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-xl mx-auto", children: "Our Executive Committee — the people who work behind the scenes to keep every meeting running smoothly, professionally, and on time." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerContainer, { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5", children: excomTeam.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSelectedMember(member),
            className: "w-full bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer",
            children: [
              member.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: `${"/Synergy-Speakers-Club/"}${member.photo}`,
                  alt: member.name,
                  className: "w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100 group-hover:border-accent transition-colors"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${member.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform`, children: member.initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-primary text-base", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1 leading-snug", children: member.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity", children: "View profile →" })
            ]
          }
        ) }, member.name + member.role)) })
      ] })
    ] }) }),
    selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: () => setSelectedMember(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${selectedMember.color} px-8 pt-8 pb-10 text-white relative`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedMember(null),
                    className: "absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                ),
                selectedMember.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: `${"/Synergy-Speakers-Club/"}${selectedMember.photo}`,
                    alt: selectedMember.name,
                    className: "w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white/30"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold mx-auto mb-4", children: selectedMember.initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center", children: selectedMember.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-center text-sm mt-1", children: selectedMember.role })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7 space-y-4", children: [
                selectedMember.bio.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: para }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedMember(null),
                    className: "w-full bg-primary text-white font-bold py-3 rounded-2xl hover:bg-primary/90 transition-colors mt-2",
                    children: "Close"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 bg-destructive relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "white", strokeWidth: "1" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6", children: "Ready to Find Your Voice?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-white/90 mb-10 max-w-2xl mx-auto", children: "Join us this Saturday as a guest. Experience the supportive environment of Synergy Speakers Club firsthand." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            href: "/contact",
            className: "inline-flex items-center gap-2 bg-accent text-primary hover:bg-white transition-all px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:-translate-y-1",
            children: [
              "Contact Us to Visit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  FadeIn as F,
  Home as H,
  StaggerContainer as S,
  StaggerItem as a
};
