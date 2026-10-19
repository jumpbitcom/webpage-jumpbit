// User-facing text of the Jump Bit website in English and German (Swiss spelling: "ss", «»).
// Jump Bit is a private, non-commercial project that gives IT advice to non-profit organisations.
// The German dictionary is typed against the English one, so a missing text fails the type check.
// Text in [square brackets] is a placeholder that must be replaced before going live.

type Section = { heading: string; paragraphs: string[] };

const en = {
  meta: {
    description:
      "Jump Bit is a private, non-commercial project: IT advice for non-profit organisations.",
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
    note: "Private, non-commercial project",
    legal: "Legal notice",
    privacy: "Privacy policy",
  },
  home: {
    heading: "IT advice for non-profit organisations",
    lead: "Jump Bit is a private project. I help associations, foundations and volunteer groups with their IT questions and bridge the gap between people who just want their technology to work and the experts who know how.",
    ctaPrimary: "Ask your question",
    ctaSecondary: "About this project",
    audience: {
      heading: "Who I help",
      items: [
        {
          title: "Associations",
          text: "Sports clubs, cultural associations and other clubs that run on volunteer work and a small budget.",
        },
        {
          title: "Foundations and charities",
          text: "Small foundations and charitable organisations that want sound IT without an IT department of their own.",
        },
        {
          title: "Volunteer groups",
          text: "Initiatives and groups that want to organise themselves online, simply and securely.",
        },
      ],
    },
    services: {
      heading: "What I advise on",
      items: [
        {
          title: "Choosing the right tools",
          text: "E-mail, shared files, calendars and member management: which tools fit your organisation and budget, including free offers for non-profits.",
        },
        {
          title: "Website and online presence",
          text: "What a simple, low-maintenance website needs and how volunteers can keep it up to date.",
        },
        {
          title: "Security and data protection",
          text: "Backups, passwords, access rights and the basics of handling member data carefully.",
        },
        {
          title: "Second opinion",
          text: "An independent view before you buy something, sign a contract or change systems.",
        },
      ],
    },
    team: {
      heading: "One person, supported by AI",
      text: "Behind Jump Bit is one person, supported by AI-based virtual assistants for research, documentation and checking. You get thorough answers, and the person you talk to stands behind them.",
      link: "More about Jump Bit",
    },
    steps: {
      heading: "How it works",
      items: [
        {
          title: "Ask your question",
          text: "Describe your organisation and your question in your own words. No technical terms needed.",
        },
        {
          title: "Get a clear answer",
          text: "You receive an answer you can understand, with the options and their pros and cons.",
        },
        {
          title: "You decide",
          text: "You stay in control: I explain the options, your organisation decides and puts them into practice.",
        },
      ],
    },
    recentPosts: "Latest posts",
  },
  about: {
    title: "About",
    heading: "About Jump Bit",
    lead: "Jump Bit is a private, non-commercial project. It helps non-profit organisations with their IT questions.",
    sections: [
      {
        heading: "Why Jump Bit exists",
        paragraphs: [
          "Many non-profit organisations run on volunteers. Their IT has often grown over the years, looked after by whoever happens to know a little more. That works until something goes wrong or a decision is due. Then the gap between “it should just work” and the language of experts can feel large.",
          "Jump Bit closes this gap: every question is welcome, and the answers come in plain language.",
        ],
      },
      {
        heading: "Advice, not sales",
        paragraphs: [
          "Jump Bit is not a company and sells nothing. The advice is independent of vendors, and your organisation decides what to do with it.",
        ],
      },
      {
        heading: "One person, supported by AI",
        paragraphs: [
          "Jump Bit is run by one person. AI-based virtual assistants help with research, drafting and checking, so that questions get thorough answers.",
          "AI does the legwork; a person makes the decisions. Every answer is reviewed before it reaches you, and you always deal with the same contact.",
        ],
      },
      {
        heading: "Current technology, explained",
        paragraphs: [
          "I recommend current, well-supported technologies and explain why a solution fits, so that your organisation can decide with confidence.",
        ],
      },
    ] satisfies Section[],
  },
  contact: {
    title: "Contact",
    heading: "Ask your question",
    lead: "The easiest way to reach me is by e-mail. Describe your organisation and your question in your own words, in English or German.",
    emailLabel: "E-mail",
    tipsHeading: "What helps with a quick answer",
    tips: [
      "Your organisation and what it does",
      "What you want to achieve, or what is not working",
      "What you already use, plus any error messages or screenshots",
    ],
    warningLabel: "Important:",
    warning: "Never send passwords, PINs or other access data by e-mail.",
  },
  legal: {
    title: "Legal notice",
    heading: "Legal notice",
    operatorHeading: "Responsible for this website",
    country: "Switzerland",
    emailLabel: "E-mail",
    note: "This is a private, non-commercial website.",
    sections: [
      {
        heading: "Disclaimer",
        paragraphs: [
          "The content of this website is prepared with care. However, no guarantee is given for its accuracy, completeness or timeliness. Advice is given to the best of my knowledge, without any guarantee.",
          "Links to external websites are outside my responsibility. The operators of those websites are responsible for their content.",
        ],
      },
    ] satisfies Section[],
  },
  privacy: {
    title: "Privacy policy",
    heading: "Privacy policy",
    lead: "This privacy policy explains how personal data is handled on this website under the Swiss Federal Act on Data Protection (FADP).",
    lastUpdated: "Last updated:",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "The operator of this website named in the legal notice is responsible for processing your personal data. The contact e-mail is also listed at the end of this page.",
        ],
      },
      {
        heading: "Visiting this website",
        paragraphs: [
          "This website uses no cookies, no tracking and no analytics tools, no fingerprinting, and it loads no content from third parties. Fonts are served from this website.",
          "The website is hosted by [hosting provider, country]. When you visit it, the hosting provider records technical data such as IP address, date and time, the page requested and the browser used in server log files. This is needed to deliver the website securely. The log files are deleted after [retention period].",
        ],
      },
      {
        heading: "Contact by e-mail",
        paragraphs: [
          "If you write to me, the information you send is used only to answer your question. It is kept only as long as this requires or as the law demands.",
        ],
      },
      {
        heading: "AI-supported processing",
        paragraphs: [
          "I use AI-supported tools to work on questions. The content of your request can be processed with these tools; personal data is removed or reduced to what is needed wherever possible.",
          "The providers used are: [providers and the countries where they process data]. Data is processed abroad only in countries with adequate data protection or with suitable safeguards.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask what personal data I hold about you and have it corrected or deleted. Send your request to the e-mail address below. You can also contact the Federal Data Protection and Information Commissioner (FDPIC).",
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
    lead: "Practical IT tips for non-profit organisations",
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
      "Jump Bit ist ein privates, nicht kommerzielles Projekt: IT-Beratung für Non-Profit-Organisationen.",
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
    note: "Privates, nicht kommerzielles Projekt",
    legal: "Impressum",
    privacy: "Datenschutz",
  },
  home: {
    heading: "IT-Beratung für Non-Profit-Organisationen",
    lead: "Jump Bit ist ein privates Projekt. Ich helfe Vereinen, Stiftungen und Freiwilligengruppen bei ihren IT-Fragen und schlage die Brücke zwischen Menschen, die einfach wollen, dass ihre Technik funktioniert, und den Fachleuten, die wissen, wie.",
    ctaPrimary: "Frage stellen",
    ctaSecondary: "Über das Projekt",
    audience: {
      heading: "Wem ich helfe",
      items: [
        {
          title: "Vereine",
          text: "Sport-, Kultur- und andere Vereine, die von Freiwilligenarbeit und einem kleinen Budget leben.",
        },
        {
          title: "Stiftungen und gemeinnützige Organisationen",
          text: "Kleine Stiftungen und gemeinnützige Organisationen, die solide IT ohne eigene IT-Abteilung wollen.",
        },
        {
          title: "Freiwilligengruppen",
          text: "Initiativen und Gruppen, die sich online organisieren wollen, einfach und sicher.",
        },
      ],
    },
    services: {
      heading: "Wobei ich berate",
      items: [
        {
          title: "Die passenden Werkzeuge wählen",
          text: "E-Mail, gemeinsame Dateien, Kalender und Mitgliederverwaltung: welche Werkzeuge zu Ihrer Organisation und Ihrem Budget passen, auch Gratisangebote für Non-Profits.",
        },
        {
          title: "Website und Online-Auftritt",
          text: "Was eine einfache, pflegeleichte Website braucht und wie Freiwillige sie aktuell halten können.",
        },
        {
          title: "Sicherheit und Datenschutz",
          text: "Datensicherung, Passwörter, Zugriffsrechte und die Grundlagen eines sorgfältigen Umgangs mit Mitgliederdaten.",
        },
        {
          title: "Zweitmeinung",
          text: "Eine unabhängige Sicht, bevor Sie etwas kaufen, einen Vertrag unterschreiben oder ein System wechseln.",
        },
      ],
    },
    team: {
      heading: "Eine Person, unterstützt von KI",
      text: "Hinter Jump Bit steht eine Person, unterstützt von KI-gestützten virtuellen Assistenten für Recherche, Dokumentation und Prüfung. Sie erhalten gründliche Antworten, und Ihr Gegenüber steht dafür gerade.",
      link: "Mehr über Jump Bit",
    },
    steps: {
      heading: "So funktioniert es",
      items: [
        {
          title: "Frage stellen",
          text: "Beschreiben Sie Ihre Organisation und Ihre Frage in eigenen Worten. Fachbegriffe sind nicht nötig.",
        },
        {
          title: "Klare Antwort erhalten",
          text: "Sie erhalten eine verständliche Antwort mit den Möglichkeiten und ihren Vor- und Nachteilen.",
        },
        {
          title: "Sie entscheiden",
          text: "Sie behalten die Kontrolle: Ich erkläre die Möglichkeiten, Ihre Organisation entscheidet und setzt um.",
        },
      ],
    },
    recentPosts: "Neueste Beiträge",
  },
  about: {
    title: "Über Jump Bit",
    heading: "Über Jump Bit",
    lead: "Jump Bit ist ein privates, nicht kommerzielles Projekt. Es hilft Non-Profit-Organisationen bei ihren IT-Fragen.",
    sections: [
      {
        heading: "Warum es Jump Bit gibt",
        paragraphs: [
          "Viele Non-Profit-Organisationen leben von Freiwilligen. Ihre IT ist oft über Jahre gewachsen und wird von der Person betreut, die zufällig etwas mehr davon versteht. Das geht gut, bis etwas nicht funktioniert oder ein Entscheid ansteht. Dann wirkt der Abstand zwischen «Es soll einfach laufen» und der Sprache der Fachleute oft gross.",
          "Jump Bit schliesst diese Lücke: Jede Frage ist willkommen, und die Antworten kommen in verständlicher Sprache.",
        ],
      },
      {
        heading: "Beratung, kein Verkauf",
        paragraphs: [
          "Jump Bit ist kein Unternehmen und verkauft nichts. Die Beratung ist unabhängig von Anbietern, und Ihre Organisation entscheidet, was sie daraus macht.",
        ],
      },
      {
        heading: "Eine Person, unterstützt von KI",
        paragraphs: [
          "Hinter Jump Bit steht eine Person. KI-gestützte virtuelle Assistenten helfen bei Recherche, Entwürfen und Prüfung, damit Fragen gründlich beantwortet werden.",
          "Die KI erledigt die Fleissarbeit, die Entscheide trifft ein Mensch. Jede Antwort wird geprüft, bevor sie Sie erreicht, und Sie haben immer dieselbe Ansprechperson.",
        ],
      },
      {
        heading: "Aktuelle Technologie, verständlich erklärt",
        paragraphs: [
          "Ich empfehle aktuelle, gut unterstützte Technologien und erkläre, warum eine Lösung passt, damit Ihre Organisation mit gutem Gefühl entscheiden kann.",
        ],
      },
    ],
  },
  contact: {
    title: "Kontakt",
    heading: "Stellen Sie Ihre Frage",
    lead: "Am einfachsten erreichen Sie mich per E-Mail. Beschreiben Sie Ihre Organisation und Ihre Frage in eigenen Worten, auf Deutsch oder Englisch.",
    emailLabel: "E-Mail",
    tipsHeading: "Was eine schnelle Antwort erleichtert",
    tips: [
      "Ihre Organisation und was sie tut",
      "Was Sie erreichen möchten oder was nicht funktioniert",
      "Was Sie bereits einsetzen, dazu Fehlermeldungen oder Screenshots",
    ],
    warningLabel: "Wichtig:",
    warning:
      "Senden Sie nie Passwörter, PINs oder andere Zugangsdaten per E-Mail.",
  },
  legal: {
    title: "Impressum",
    heading: "Impressum",
    operatorHeading: "Verantwortlich für diese Website",
    country: "Schweiz",
    emailLabel: "E-Mail",
    note: "Dies ist eine private, nicht kommerzielle Website.",
    sections: [
      {
        heading: "Haftungsausschluss",
        paragraphs: [
          "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für ihre Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen. Ratschläge erfolgen nach bestem Wissen, jedoch ohne Gewähr.",
          "Links auf externe Websites liegen ausserhalb meiner Verantwortung. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.",
        ],
      },
    ],
  },
  privacy: {
    title: "Datenschutzerklärung",
    heading: "Datenschutzerklärung",
    lead: "Diese Datenschutzerklärung beschreibt, wie auf dieser Website Personendaten gemäss dem Bundesgesetz über den Datenschutz (DSG) bearbeitet werden.",
    lastUpdated: "Stand:",
    sections: [
      {
        heading: "Verantwortliche Stelle",
        paragraphs: [
          "Verantwortlich für die Bearbeitung Ihrer Personendaten ist die im Impressum genannte Betreiberin oder der Betreiber dieser Website. Die Kontakt-E-Mail finden Sie auch am Ende dieser Seite.",
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
          "Wenn Sie mir schreiben, werden Ihre Angaben nur verwendet, um Ihre Frage zu beantworten. Sie werden nur so lange aufbewahrt, wie es dafür nötig ist oder das Gesetz es verlangt.",
        ],
      },
      {
        heading: "KI-gestützte Bearbeitung",
        paragraphs: [
          "Ich setze KI-gestützte Werkzeuge ein, um Anfragen zu bearbeiten. Der Inhalt Ihrer Anfrage kann mit diesen Werkzeugen bearbeitet werden; Personendaten werden wo immer möglich entfernt oder auf das Nötige beschränkt.",
          "Eingesetzte Anbieter: [Anbieter und Länder, in denen sie Daten bearbeiten]. Eine Bearbeitung im Ausland erfolgt nur in Ländern mit angemessenem Datenschutz oder mit geeigneten Garantien.",
        ],
      },
      {
        heading: "Ihre Rechte",
        paragraphs: [
          "Sie können Auskunft darüber verlangen, welche Personendaten ich über Sie bearbeite, und deren Berichtigung oder Löschung verlangen. Senden Sie Ihr Gesuch an die unten stehende E-Mail-Adresse. Zudem können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.",
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
    lead: "Praktische IT-Tipps für Non-Profit-Organisationen",
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
