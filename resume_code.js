// ============================================================
// YUVARAJ S - RESUME GENERATOR
// Run: node resume_code.js
// Requires: npm install docx
// Output: YuvarajS_Resume.docx
// ============================================================

const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, LevelFormat, ExternalHyperlink,
  UnderlineType, TabStopType
} = require('docx');
const fs = require('fs');

// ── COLORS ──────────────────────────────────────────────────
const BLUE = "1E4D92";
const DARK = "1A1A1A";
const GRAY = "555555";

// ── HELPER FUNCTIONS ─────────────────────────────────────────

function sectionHeader(title) {
  return new Paragraph({
    children: [
      new TextRun({ text: title, bold: true, size: 24, color: BLUE, font: "Arial" })
    ],
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 8, color: BLUE }
    },
    spacing: { before: 260, after: 80 }
  });
}

function entry(left, right, bold = false) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: 9200 }],
    children: [
      new TextRun({ text: left, bold, size: 20, font: "Arial", color: DARK }),
      new TextRun({ text: "\t" + right, size: 20, font: "Arial", color: GRAY, italics: true })
    ],
    spacing: { before: 40, after: 20 }
  });
}

function bullet(text, label = "") {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [
      label ? new TextRun({ text: label + ": ", bold: true, size: 20, font: "Arial", color: DARK }) : new TextRun(""),
      new TextRun({ text, size: 20, font: "Arial", color: DARK })
    ],
    spacing: { before: 30, after: 30 }
  });
}

function subheading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 22, font: "Arial", color: DARK })],
    spacing: { before: 120, after: 60 }
  });
}

function plain(text, italic = false) {
  return new Paragraph({
    children: [new TextRun({ text, size: 20, font: "Arial", color: DARK, italics: italic })],
    spacing: { before: 30, after: 30 }
  });
}

// ── DOCUMENT ─────────────────────────────────────────────────

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 400, hanging: 260 } } }
        }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 900, right: 1100, bottom: 900, left: 1100 }
      }
    },
    children: [

      // ── NAME & TITLE ──────────────────────────────────────
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "YUVARAJ S", bold: true, size: 52, font: "Arial", color: BLUE })],
        spacing: { after: 60 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
          text: "Full-Stack Developer  |  AI Enthusiast  |  Open Source Contributor",
          size: 20, font: "Arial", color: GRAY
        })],
        spacing: { after: 60 }
      }),

      // ── CONTACT ──────────────────────────────────────────
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
          text: "📧 yuvarajpro213@gmail.com  |  📞 +91 7358271217",
          size: 18, font: "Arial", color: GRAY
        })],
        spacing: { after: 30 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "DOB: 21/03/2006  |  Age: 20", size: 18, font: "Arial", color: GRAY })],
        spacing: { after: 30 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ExternalHyperlink({ link: "https://github.com/yuva213", children: [new TextRun({ text: "GitHub: yuva213", size: 18, font: "Arial", color: "0563C1", underline: { type: UnderlineType.SINGLE } })] }),
          new TextRun({ text: "  |  ", size: 18, font: "Arial", color: GRAY }),
          new ExternalHyperlink({ link: "https://www.linkedin.com/in/yuva213", children: [new TextRun({ text: "LinkedIn: yuva213", size: 18, font: "Arial", color: "0563C1", underline: { type: UnderlineType.SINGLE } })] }),
          new TextRun({ text: "  |  ", size: 18, font: "Arial", color: GRAY }),
          new ExternalHyperlink({ link: "https://x.com/yuvarajpro213", children: [new TextRun({ text: "X: @yuvarajpro213", size: 18, font: "Arial", color: "0563C1", underline: { type: UnderlineType.SINGLE } })] }),
          new TextRun({ text: "  |  ", size: 18, font: "Arial", color: GRAY }),
          new ExternalHyperlink({ link: "https://my-portfoloi-seven.vercel.app/", children: [new TextRun({ text: "Portfolio:https://my-portfoloi-seven.vercel.app", size: 18, font: "Arial", color: "0563C1", underline: { type: UnderlineType.SINGLE } })] })
        ],
        spacing: { after: 80 }
      }),

      // ── EDUCATION ────────────────────────────────────────
      sectionHeader("EDUCATION"),
      entry("B.E. Computer Science — Jaya Engineering College", "2022 – Present", true),
      plain("CGPA: 8.36  |  Highest SGPA: 8.96"),
      entry("Higher Secondary — ORGN Govt. Boys Hr. Sec. School, Redhills", "2022", true),
      plain("CS: 96/100  |  Overall: 79%  |  Cutoff: 166"),
      entry("High School — Don Bosco Matriculation Hr. Sec. School, Wisdom Town", "2020", true),
      plain("Grade Point: 10.0 / 10.0"),

      // ── INTERNSHIP ───────────────────────────────────────
      sectionHeader("INTERNSHIP EXPERIENCE"),
      entry("Java Full-Stack Developer Intern — TechPurm (Software Solutions)", "3 Months", true),
      bullet("Worked on a CRM project using Java full-stack technologies."),
      bullet("Built and managed backend services using Gradle build system."),
      bullet("Integrated PostgreSQL for database management and data handling."),
      bullet("Gained hands-on experience in enterprise-level software development workflows."),

      // ── PROJECTS ─────────────────────────────────────────
      sectionHeader("PROJECTS"),

      subheading("PLANKARO AI  |  Full-Stack PWA + AI"),
      bullet("Progressive Web Application to help users plan and organize trips with AI-powered action planning and smart trip suggestions."),
      bullet("Integrated AI assistant for itinerary recommendations, location suggestions, and activity planning."),

      subheading("CRM Event Organizer  |  MERN Stack (Hackathon – Coimbatore)"),
      bullet("Full-stack CRM platform for managing college and company events with real-time updates and analytics."),

      subheading("Thala Credit Tracker  |  React"),
      bullet("React app for managing customer credits with history, filters, local storage, and PDF export features."),

      subheading("College Attendance Management System  |  Full-Stack Web"),
      bullet("Multi-role portal (Admin, Staff, HOD, Students) with attendance marking and analytics dashboards."),

      subheading("Manoj Windows E-commerce Website  |  Web Development"),
      bullet("Scalable shopping website with product management features (ongoing)."),

      subheading("ChatBot 2.0  |  AI + Education"),
      bullet("Ongoing project — AI-based assistant for interactive educational support."),

      // ── TECHNICAL SKILLS ─────────────────────────────────
      sectionHeader("TECHNICAL SKILLS"),

      subheading("Languages"),
      plain("Python, JavaScript, TypeScript, C, C++, HTML, CSS"),

      subheading("Web & Mobile Technologies"),
      plain("Node.js, Express.js, React.js, React Native, MongoDB, Mongoose, PostgreSQL, Socket.io, Django, Flask, SQLite"),

      subheading("AI / ML Tools"),
      plain("OpenClaw, Exploring LLM integrations"),

      subheading("DevOps & Tools"),
      plain("Git, GitHub, Linux, Vercel, Gradle, WordPress, LaTeX"),

      // ── HONORS ───────────────────────────────────────────
      sectionHeader("HONORS & ACHIEVEMENTS"),

      subheading("Hackathons Won (Web2 & Web3)"),
      bullet("TIC Pinnacle — Coimbatore"),
      bullet("DeFy'26 — Chennai"),
      bullet("OpenHack'26 — Jaya Engineering College"),

      subheading("Hackathon Participation  |  30+ Events"),
      bullet("Notable events: BuildIndia, ETHMumbai, DSU Hackathon, DeFy'26, and more."),

      subheading("Other Achievements"),
      bullet("Won 2nd Special Prize — Inter-College Hackathon, Jaya Engineering College (2024)"),
      bullet("Completed HDCA Computer Software Course — Word, Excel, PowerPoint (2023)"),
      bullet("Passed Senior Typewriting Exam — First Class with Distinction (2022)"),

      // ── AREAS OF INTEREST ────────────────────────────────
      sectionHeader("AREAS OF INTEREST"),
      plain("Full-Stack Development, Web Design, Software Development, Data Mining, Open Source, Web3 / Blockchain"),

      // ── EXTRA-CURRICULAR ─────────────────────────────────
      sectionHeader("EXTRA-CURRICULAR ACTIVITIES"),
      bullet("In-charge, Jaya Coding Club (2025)"),
      bullet("Active contributor in college-level projects"),
      bullet("Executive Member, CSE Club (past)"),

      // ── PERSONAL SKILLS ──────────────────────────────────
      sectionHeader("PERSONAL SKILLS"),
      plain("Quick learner  |  Positive attitude  |  Full commitment  |  Decision making  |  Analytical skills  |  Problem-solving  |  Team collaboration"),

      // ── RECREATIONAL ─────────────────────────────────────
      sectionHeader("RECREATIONAL INTERESTS"),
      plain("Japanese Animations & Comics  |  Singing  |  Vibe Coding  |  Photography  |  Reading Historical Accounts  |  Exploring AI Tools"),

    ]
  }]
});

// ── EXPORT ───────────────────────────────────────────────────
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("YuvarajS_Resume.docx", buffer);
  console.log("✅ Resume generated: YuvarajS_Resume.docx");
});
