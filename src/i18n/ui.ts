// User-facing text of the Jump Bit website in English and German (Swiss spelling: "ss", «»).
// The German dictionary is typed against the English one, so a missing text fails the type check.
// Text in [square brackets] is a placeholder that must be replaced before going live.

type Section = { heading: string; paragraphs: string[] };

const en = {
  meta: {
    description:
      "Jump Bit helps with every kind of IT question, for private individuals, non-profit organisations and companies.",
    ogImageAlt: "Jump Bit logo with the tagline Empower your IT",
  },
  nav: {
    label: "Main navigation",
    skip: "Skip to content",
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    language: "Language",
    switchTo: "Diese Seite auf Deutsch",
  },
  footer: {
    label: "Footer navigation",
    legal: "Legal notice",
    privacy: "Privacy policy",
  },
  home: {
    heading: "From IT question to clear answer",
    lead: "Jump Bit helps with every kind of IT question and bridges the gap between people who just want their technology to work and the experts who know how. For private individuals, non-profit organisations and companies.",
    ctaPrimary: "Ask your question",
    ctaSecondary: "How Jump Bit works",
    audience: {
      heading: "For everyone with an IT question",
      items: [
        {
          title: "Private individuals",
          text: "A new computer, the home network, backups, a suspicious e-mail or a question you have never dared to ask. Explained without jargon, at your pace.",
        },
        {
          title: "Non-profit organisations",
          text: "Associations, foundations and volunteer teams get simple, sustainable solutions for e-mail, shared files, websites and member data that fit a small budget.",
        },
        {
          title: "Companies",
          text: "From IT strategy and cloud services to software development and automation: consulting and implementation with current technologies, sized for small and medium-sized businesses.",
        },
      ],
    },
    services: {
      heading: "What Jump Bit does",
      items: [
        {
          title: "Advice and second opinion",
          text: "Clear answers to IT questions, an independent view before you buy or decide, and options explained with their pros and cons.",
        },
        {
          title: "Setup and support",
          text: "Computers, networks, cloud services and e-mail set up properly and kept running, so you can focus on your work.",
        },
        {
          title: "Software development",
          text: "Websites, tools and automations built with current technologies, from a small script to a complete application.",
        },
        {
          title: "Security and data protection",
          text: "Backups, passwords, updates and the basics of data protection, so that your data stays safe and you know why.",
        },
      ],
    },
    team: {
      heading: "One person, a team of virtual employees",
      text: "Jump Bit is a one-person company supported by AI-based virtual employees. They help with research, documentation, coding and testing. You get the speed and breadth of a team, and one person who is responsible for the result.",
      link: "More about Jump Bit",
    },
    steps: {
      heading: "How it works",
      items: [
        {
          title: "Ask your question",
          text: "Describe your question or problem in your own words. No technical terms needed.",
        },
        {
          title: "Get a clear answer",
          text: "You receive an answer you can understand, or a proposal for how to solve the problem.",
        },
        {
          title: "Solve it together",
          text: "If you wish, Jump Bit implements the solution with you or for you.",
        },
      ],
    },
    recentPosts: "Latest posts",
  },
  about: {
    title: "About",
    heading: "About Jump Bit",
    lead: "IT is everywhere, but not everyone wants to be an IT expert. Jump Bit is there for the moment you need one.",
    sections: [
      {
        heading: "Why Jump Bit exists",
        paragraphs: [
          "Many people use computers, phones and online services every day without thinking about the technology behind them. That works until something goes wrong or a decision is due. Then the gap between “I just want it to work” and the language of experts can feel large.",
          "Jump Bit closes this gap: every question is welcome, at every level, and the answers come in plain language.",
        ],
      },
      {
        heading: "For everyone",
        paragraphs: [
          "Private individuals, non-profit organisations and companies get the same care. The size of the question does not matter. What matters is that you leave with an answer you understand.",
        ],
      },
      {
        heading: "A one-person company with virtual employees",
        paragraphs: [
          "Jump Bit is run by one person. A team of AI-supported virtual employees takes on research, drafting, coding and testing, so that work gets done quickly and thoroughly.",
          "AI does the legwork; a person makes the decisions. Every result is reviewed before it reaches you, and you always deal with the same contact.",
        ],
      },
      {
        heading: "Current technology, explained",
        paragraphs: [
          "Jump Bit works with current, well-supported technologies and explains why a solution fits, so that you can decide with confidence.",
        ],
      },
    ] satisfies Section[],
  },
  contact: {
    title: "Contact",
    heading: "Ask your question",
    lead: "The easiest way to reach Jump Bit is by e-mail. Describe your question in your own words, in English or German.",
    emailLabel: "E-mail",
    tipsHeading: "What helps with a quick answer",
    tips: [
      "What you want to achieve, or what is not working",
      "The device, software or service involved",
      "What you have already tried, plus any error messages or screenshots",
    ],
    warningLabel: "Important:",
    warning: "Never send passwords, PINs or other access data by e-mail.",
  },
  legal: {
    title: "Legal notice",
    heading: "Legal notice",
    companyHeading: "Company",
    country: "Switzerland",
    emailLabel: "E-mail",
    uidLabel: "Company ID (UID)",
    sections: [
      {
        heading: "Disclaimer",
        paragraphs: [
          "The content of this website is prepared with care. However, no guarantee is given for its accuracy, completeness or timeliness.",
          "Links to external websites are outside the responsibility of Jump Bit. The operators of those websites are responsible for their content.",
        ],
      },
    ] satisfies Section[],
  },
  privacy: {
    title: "Privacy policy",
    heading: "Privacy policy",
    lead: "This privacy policy explains how Jump Bit handles personal data under the Swiss Federal Act on Data Protection (FADP).",
    lastUpdated: "Last updated:",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "Jump Bit is responsible for processing your personal data. The contact details are listed in the legal notice and at the end of this page.",
        ],
      },
      {
        heading: "Visiting this website",
        paragraphs: [
          "This website uses no cookies, no tracking and no analytics tools, and it loads no content from third parties. Fonts are served from this website.",
          "The website is hosted by [hosting provider, country]. When you visit it, the hosting provider records technical data such as IP address, date and time, the page requested and the browser used in server log files. This is needed to deliver the website securely. The log files are deleted after [retention period].",
        ],
      },
      {
        heading: "Contact by e-mail",
        paragraphs: [
          "If you write to Jump Bit, the information you send is used to answer your question and to carry out any resulting assignment. It is kept only as long as this requires or as the law demands.",
        ],
      },
      {
        heading: "AI-supported processing",
        paragraphs: [
          "Jump Bit uses AI-supported tools to work on questions. The content of your request can be processed with these tools; personal data is removed or reduced to what is needed wherever possible.",
          "The providers used are: [providers and the countries where they process data]. Data is processed abroad only in countries with adequate data protection or with suitable safeguards.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask what personal data Jump Bit holds about you and have it corrected or deleted. Send your request to the e-mail address below. You can also contact the Federal Data Protection and Information Commissioner (FDPIC).",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "This privacy policy can be updated. The current version is always published on this page.",
        ],
      },
    ] satisfies Section[],
  },
  blog: {
    title: "Blog",
    lead: "News and practical IT tips",
    tags: "Tags",
    tagsTitle: "All tags",
    taggedWith: "Posts tagged with",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    link: "Back to the home page",
  },
};

export type Dictionary = typeof en;

const de: Dictionary = {
  meta: {
    description:
      "Jump Bit hilft bei allen Fragen rund um IT, für Privatpersonen, Non-Profit-Organisationen und Unternehmen.",
    ogImageAlt: "Logo von Jump Bit mit dem Slogan Empower your IT",
  },
  nav: {
    label: "Hauptnavigation",
    skip: "Zum Inhalt springen",
    home: "Start",
    about: "Über Jump Bit",
    blog: "Blog",
    contact: "Kontakt",
    language: "Sprache",
    switchTo: "This page in English",
  },
  footer: {
    label: "Fussnavigation",
    legal: "Impressum",
    privacy: "Datenschutz",
  },
  home: {
    heading: "Von der IT-Frage zur klaren Antwort",
    lead: "Jump Bit hilft bei allen Fragen rund um IT und schlägt die Brücke zwischen Menschen, die einfach wollen, dass ihre Technik funktioniert, und den Fachleuten, die wissen, wie. Für Privatpersonen, Non-Profit-Organisationen und Unternehmen.",
    ctaPrimary: "Frage stellen",
    ctaSecondary: "So arbeitet Jump Bit",
    audience: {
      heading: "Für alle mit einer IT-Frage",
      items: [
        {
          title: "Privatpersonen",
          text: "Ein neuer Computer, das Heimnetz, die Datensicherung, eine verdächtige E-Mail oder eine Frage, die Sie bisher nicht zu stellen wagten. Erklärt ohne Fachchinesisch und in Ihrem Tempo.",
        },
        {
          title: "Non-Profit-Organisationen",
          text: "Vereine, Stiftungen und ehrenamtliche Teams erhalten einfache, nachhaltige Lösungen für E-Mail, gemeinsame Dateien, Website und Mitgliederdaten, passend zu einem kleinen Budget.",
        },
        {
          title: "Unternehmen",
          text: "Von IT-Strategie und Cloud-Diensten bis zu Softwareentwicklung und Automatisierung: Beratung und Umsetzung mit aktuellen Technologien, zugeschnitten auf KMU.",
        },
      ],
    },
    services: {
      heading: "Was Jump Bit macht",
      items: [
        {
          title: "Beratung und Zweitmeinung",
          text: "Klare Antworten auf IT-Fragen, eine unabhängige Sicht vor Kauf oder Entscheid und Varianten mit ihren Vor- und Nachteilen erklärt.",
        },
        {
          title: "Einrichtung und Betreuung",
          text: "Computer, Netzwerk, Cloud-Dienste und E-Mail sauber eingerichtet und betreut, damit Sie sich auf Ihre Arbeit konzentrieren können.",
        },
        {
          title: "Softwareentwicklung",
          text: "Websites, Werkzeuge und Automatisierungen mit aktuellen Technologien, vom kleinen Skript bis zur vollständigen Anwendung.",
        },
        {
          title: "Sicherheit und Datenschutz",
          text: "Datensicherung, Passwörter, Updates und die Grundlagen des Datenschutzes, damit Ihre Daten sicher bleiben und Sie wissen, warum.",
        },
      ],
    },
    team: {
      heading: "Eine Person, ein Team virtueller Mitarbeitender",
      text: "Jump Bit ist ein Einpersonenunternehmen, unterstützt von KI-gestützten virtuellen Mitarbeitenden. Sie helfen bei Recherche, Dokumentation, Programmierung und Tests. Sie erhalten Tempo und Breite eines Teams und eine Person, die für das Ergebnis geradesteht.",
      link: "Mehr über Jump Bit",
    },
    steps: {
      heading: "So funktioniert es",
      items: [
        {
          title: "Frage stellen",
          text: "Beschreiben Sie Ihre Frage oder Ihr Problem in eigenen Worten. Fachbegriffe sind nicht nötig.",
        },
        {
          title: "Klare Antwort erhalten",
          text: "Sie erhalten eine verständliche Antwort oder einen Vorschlag, wie sich das Problem lösen lässt.",
        },
        {
          title: "Gemeinsam lösen",
          text: "Auf Wunsch setzt Jump Bit die Lösung mit Ihnen oder für Sie um.",
        },
      ],
    },
    recentPosts: "Neueste Beiträge",
  },
  about: {
    title: "Über Jump Bit",
    heading: "Über Jump Bit",
    lead: "IT ist überall, aber nicht alle wollen IT-Fachleute sein. Jump Bit ist für den Moment da, in dem Sie jemanden brauchen.",
    sections: [
      {
        heading: "Warum es Jump Bit gibt",
        paragraphs: [
          "Viele Menschen nutzen Computer, Smartphones und Online-Dienste täglich, ohne über die Technik dahinter nachzudenken. Das geht gut, bis etwas nicht funktioniert oder ein Entscheid ansteht. Dann wirkt der Abstand zwischen «Es soll einfach laufen» und der Sprache der Fachleute oft gross.",
          "Jump Bit schliesst diese Lücke: Jede Frage ist willkommen, auf jedem Niveau, und die Antworten kommen in verständlicher Sprache.",
        ],
      },
      {
        heading: "Für alle",
        paragraphs: [
          "Privatpersonen, Non-Profit-Organisationen und Unternehmen erhalten dieselbe Sorgfalt. Die Grösse der Frage spielt keine Rolle. Wichtig ist, dass Sie mit einer Antwort gehen, die Sie verstehen.",
        ],
      },
      {
        heading: "Ein Einpersonenunternehmen mit virtuellen Mitarbeitenden",
        paragraphs: [
          "Hinter Jump Bit steht eine Person. Ein Team KI-gestützter virtueller Mitarbeitender übernimmt Recherche, Entwürfe, Programmierung und Tests, damit die Arbeit schnell und gründlich erledigt wird.",
          "Die KI erledigt die Fleissarbeit, die Entscheide trifft ein Mensch. Jedes Ergebnis wird geprüft, bevor es Sie erreicht, und Sie haben immer dieselbe Ansprechperson.",
        ],
      },
      {
        heading: "Aktuelle Technologie, verständlich erklärt",
        paragraphs: [
          "Jump Bit setzt auf aktuelle, gut unterstützte Technologien und erklärt, warum eine Lösung passt, damit Sie mit gutem Gefühl entscheiden können.",
        ],
      },
    ],
  },
  contact: {
    title: "Kontakt",
    heading: "Stellen Sie Ihre Frage",
    lead: "Am einfachsten erreichen Sie Jump Bit per E-Mail. Beschreiben Sie Ihre Frage in eigenen Worten, auf Deutsch oder Englisch.",
    emailLabel: "E-Mail",
    tipsHeading: "Was eine schnelle Antwort erleichtert",
    tips: [
      "Was Sie erreichen möchten oder was nicht funktioniert",
      "Welches Gerät, welche Software oder welcher Dienst betroffen ist",
      "Was Sie bereits versucht haben, dazu Fehlermeldungen oder Screenshots",
    ],
    warningLabel: "Wichtig:",
    warning:
      "Senden Sie nie Passwörter, PINs oder andere Zugangsdaten per E-Mail.",
  },
  legal: {
    title: "Impressum",
    heading: "Impressum",
    companyHeading: "Unternehmen",
    country: "Schweiz",
    emailLabel: "E-Mail",
    uidLabel: "Unternehmens-Identifikationsnummer (UID)",
    sections: [
      {
        heading: "Haftungsausschluss",
        paragraphs: [
          "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für ihre Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen.",
          "Links auf externe Websites liegen ausserhalb der Verantwortung von Jump Bit. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.",
        ],
      },
    ],
  },
  privacy: {
    title: "Datenschutzerklärung",
    heading: "Datenschutzerklärung",
    lead: "Diese Datenschutzerklärung beschreibt, wie Jump Bit Personendaten gemäss dem Bundesgesetz über den Datenschutz (DSG) bearbeitet.",
    lastUpdated: "Stand:",
    sections: [
      {
        heading: "Verantwortliche Stelle",
        paragraphs: [
          "Verantwortlich für die Bearbeitung Ihrer Personendaten ist Jump Bit. Die Kontaktangaben finden Sie im Impressum und am Ende dieser Seite.",
        ],
      },
      {
        heading: "Besuch dieser Website",
        paragraphs: [
          "Diese Website verwendet keine Cookies, kein Tracking und keine Analysewerkzeuge und lädt keine Inhalte von Dritten. Schriften werden von dieser Website ausgeliefert.",
          "Die Website wird von [Hosting-Anbieter, Land] betrieben. Beim Besuch erfasst der Hosting-Anbieter technische Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und verwendeten Browser in Server-Logdateien. Dies ist für eine sichere Auslieferung der Website nötig. Die Logdateien werden nach [Aufbewahrungsdauer] gelöscht.",
        ],
      },
      {
        heading: "Kontakt per E-Mail",
        paragraphs: [
          "Wenn Sie Jump Bit schreiben, werden Ihre Angaben verwendet, um Ihre Frage zu beantworten und einen allfälligen Auftrag auszuführen. Sie werden nur so lange aufbewahrt, wie es dafür nötig ist oder das Gesetz es verlangt.",
        ],
      },
      {
        heading: "KI-gestützte Bearbeitung",
        paragraphs: [
          "Jump Bit setzt KI-gestützte Werkzeuge ein, um Anfragen zu bearbeiten. Der Inhalt Ihrer Anfrage kann mit diesen Werkzeugen bearbeitet werden; Personendaten werden wo immer möglich entfernt oder auf das Nötige beschränkt.",
          "Eingesetzte Anbieter: [Anbieter und Länder, in denen sie Daten bearbeiten]. Eine Bearbeitung im Ausland erfolgt nur in Ländern mit angemessenem Datenschutz oder mit geeigneten Garantien.",
        ],
      },
      {
        heading: "Ihre Rechte",
        paragraphs: [
          "Sie können Auskunft darüber verlangen, welche Personendaten Jump Bit über Sie bearbeitet, und deren Berichtigung oder Löschung verlangen. Senden Sie Ihr Gesuch an die unten stehende E-Mail-Adresse. Zudem können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.",
        ],
      },
      {
        heading: "Änderungen",
        paragraphs: [
          "Diese Datenschutzerklärung kann angepasst werden. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.",
        ],
      },
    ],
  },
  blog: {
    title: "Blog",
    lead: "Neuigkeiten und praktische IT-Tipps",
    tags: "Schlagwörter",
    tagsTitle: "Alle Schlagwörter",
    taggedWith: "Beiträge mit dem Schlagwort",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    link: "Zurück zur Startseite",
  },
};

export const dictionaries = { en, de } as const;
