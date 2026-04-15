export type Lang = "en" | "is";

const en = {
  nav: {
    home: "Home",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
  },
  home: {
    heroEyebrow: "Westfjords of Iceland",
    heroHeading: "Restoring the Forests of Þorskafjörður",
    heroSub:
      "A community-led reforestation initiative rooted in stewardship, collaboration, and a long view of the future.",
    heroBtn: "Learn More",
    videoEyebrow: "Featured",
    videoHeading: "Skógar in Motion",
    quoteText:
      "\u201cAs trustees, or stewards, of the planet\u2019s vast resources and biological diversity, humanity must learn to make use of the earth\u2019s natural resources, both renewable and non-renewable, in a manner that ensures sustainability and equity into the distant reaches of time.\u201d",
    quoteAttrib: "Baha\u2019i International Community",
    whoEyebrow: "Who We Are",
    whoHeading: "Growing a Forest,\u00a0Building a Community",
    whoPara1:
      "Sk\u00f3gar is a reforestation project in \u00dEorskafjör\u00f0ur, situated in the Westfjords of Iceland. The aim of the project is to promote well-being and justice through collaboration and by working closely with local land owners, organizations and with the Icelandic Forest Service to achieve soil preservation and reforestation.",
    whoPara2:
      "Every year a dedicated group of people dedicate hundreds of hours to cultivating the forest in Sk\u00f3gar, with over 130,000 trees planted since 2006. The continuity of the reforestation work over many decades has offered the community tremendous opportunities to collaborate with individuals, NGOs, government agencies and international organizations.",
    whoLink: "Our Story",
    statTrees: "Trees Planted",
    statYear: "Since 2006",
    statSince: "Active Reforestation",
    statLocation: "\u00dEorskafjör\u00f0ur, Iceland",
    ctaEyebrow: "Get Involved",
    ctaHeading: "Join the Work",
    ctaPara:
      "Whether you\u2019re an individual, an organization, or a government agency, there are meaningful ways to contribute to the reforestation of Iceland\u2019s Westfjords.",
    ctaBtn: "Reach Out",
  },
  about: {
    eyebrow: "Our Story",
    heading: "A Vision Planted Decades Ago",
    openingQuote:
      "\u201cThe story of Sk\u00f3gar is a story of collective effort by a small community learning about the science of reforestation, and the many qualities and skills needed to sustain a project over many decades.\u201d",
    openingP1:
      "It started with one man, Jochum Eggertsson, who was ahead of his time and had a vision of the true \u201cneeds of the age\u201d in which we live.",
    openingP2:
      "Jochum Eggertsson was one of the first people in Iceland to become a Bah\u00e1\u02bc\u00ed. He was the nephew of Matth\u00edas Jochumsson, one of the country\u2019s best loved poets and the author of the national anthem of Iceland.",
    historyEyebrow: "History",
    historyHeading: "Reclaiming an Ancestral Landscape",
    historyP1:
      "During the early 1950s Jochum decided to buy back the farmland Sk\u00f3gar in \u00dEorskafjör\u00f0ur where his father and ten siblings, including Matth\u00edas Jochumsson, had been born, and where the family had lived for generations before losing the farm. Sk\u00f3gar, which is situated in the Westfjords in the north of Iceland, means \u2018woods\u2019, and Jochum was convinced that it was his mission to revive the woods which had covered the Fjord centuries earlier. During the early 1950s he started to plant trees in one corner of the land.",
    historyP2:
      "Although it was not well understood during the early 1950s, deforestation and soil erosion are, in fact, some of the most pressing and devastating anthropogenic environmental problems in Iceland. Since the early 1980s the Bah\u00e1\u02bc\u00ed community of Iceland has worked closely with local landowners and organizations in the fields of soil preservation and reforestation, as well as with the Icelandic Forest Service, an agency of the Ministry of the Environment.",
    historyP3:
      "Some 130,000 trees have been planted in Sk\u00f3gar since 2006. The continuity of the reforestation work over many decades has given the Bah\u00e1\u02bc\u00ed community a tremendous opportunity to collaborate with individuals, NGOs, government agencies and international organizations.",
    historyP4:
      "In September 2020 the Icelandic Forestry Association, a local NGO, selected a tree planted by Jochum as the Icelandic \u201cTree of the Year.\u201d Representatives from various organizations attended a formal ceremony in Sk\u00f3gar and this was an opportunity to highlight the benefits of collaboration, shared learning and mutual support between countless like-minded individuals and organizations labouring in this area of work.",
    milestonesEyebrow: "Key Milestones",
    milestones: [
      {
        year: "1950s",
        text: "Jochum Eggertsson purchases the ancestral farmland of Sk\u00f3gar and begins planting trees.",
      },
      {
        year: "1980s",
        text: "The Bah\u00e1\u02bc\u00ed community of Iceland begins formal collaboration with local landowners and the Icelandic Forest Service.",
      },
      {
        year: "2006",
        text: "Systematic large-scale tree planting begins. Over 130,000 trees planted from this point forward.",
      },
      {
        year: "2020",
        text: "The Icelandic Forestry Association names a tree planted by Jochum as the Icelandic \u201cTree of the Year.\u201d",
      },
    ],
  },
  gallery: {
    eyebrow: "The Forest in Pictures",
    heading: "Gallery",
    photoCount: (n: number) => `${n} ${n === 1 ? "photo" : "photos"}`,
    empty: "Gallery coming soon",
    emptyNote:
      "Add images to /public/images/gallery/ and they will appear here automatically.",
    howToTitle: "How to add photos",
    howTo: [
      "Place your images in /public/images/gallery/",
      "Supported formats: JPG, PNG, WebP, AVIF",
      "Images are sorted alphabetically \u2014 prefix with numbers to control order (e.g. 01-trees.jpg)",
      "Alt text is generated from the filename automatically",
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    heading: "Contact",
    subheading: "Reach Out",
    para: "Feel free to reach out to us about opportunities to get involved with Sk\u00f3gar\u2019s reforestation initiative \u2014 whether as an individual, an organization, or a government agency. We welcome collaboration from all who share our vision.",
    emailLabel: "Email",
    addressLabel: "Address",
    address: ["Skógar in Þorskafirði", "Iceland"],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder:
        "How can we help, or how would you like to get involved?",
      submit: "Send Message",
      submitting: "Sending\u2026",
      successHeading: "Message Sent",
      successPara:
        "Thank you for reaching out. We\u2019ll be in touch with you soon.",
      errorMsg:
        "Something went wrong. Please try emailing us directly at",
    },
  },
  footer: {
    tagline:
      "A reforestation initiative in the Westfjords of Iceland, rooted in collaboration, stewardship, and hope.",
    navigate: "Navigate",
    contact: "Contact",
    copyright: (year: number) =>
      `\u00a9 ${year} Sk\u00f3gar Foundation. All rights reserved. `,
    madeBy: "Made by",
  },
};

const is: typeof en = {
  nav: {
    home: "Forsíða",
    about: "Um okkur",
    gallery: "Myndasafn",
    contact: "Hafðu samband",
  },
  home: {
    heroEyebrow: "Vestfirðir Íslands",
    heroHeading: "Endurskógræðsla í Þorskafirði",
    heroSub:
      "Samfélagsdrifið skógræktarverkefni byggt á umhyggju, samvinnu og langtímasýn.",
    heroBtn: "Lesa meira",
    videoEyebrow: "Kynning",
    videoHeading: "Skógar í hreyfingu",
    quoteText:
      "\u201eSem umsjónarmenn auðlinda jarðarinnar og líffræðilegs fjölbreytileika hennar verður mannkyn að læra að nýta náttúrulegar auðlindir jarðar, bæði endurnýjanlegar og ekki endurnýjanlegar, á þann hátt sem tryggir sjálfbærni og réttlæti fram í ókomna tíð.\u201c",
    quoteAttrib: "Alþjóðasamfélag Bahá\u02bc\u00ed",
    whoEyebrow: "Hverjir erum við",
    whoHeading: "Að rækta skóg,\u00a0að byggja samfélag",
    whoPara1:
      "Skógar er skógræktarverkefni í Þorskafirði á Vestfjörðum Íslands. Markmið verkefnisins er að efla vellíðan og réttlæti í gegnum samvinnu og náið samstarf við heimamenn, stofnanir og Skógrækt ríkisins til að ná fram jarðvegsvernd og skógrækt.",
    whoPara2:
      "Á hverju ári verja heilagðir einstaklingar hundruðum klukkustunda til að rækta skóginn í Skógum, og hafa yfir 130.000 tré verið gróðursett frá árinu 2006. Samfellan í skógræktarstarfinu í gegnum áratugi hefur gefið samfélaginu ótrúleg tækifæri til samstarfs við einstaklinga, frjálsar félagasamtök, ríkisstofnanir og alþjóðlegar stofnanir.",
    whoLink: "Saga okkar",
    statTrees: "Tré gróðursett",
    statYear: "Síðan 2006",
    statSince: "Virk skógrækt",
    statLocation: "Þorskafjörður, Ísland",
    ctaEyebrow: "Taktu þátt",
    ctaHeading: "Gakktu til liðs við okkur",
    ctaPara:
      "Hvort sem þú ert einstaklingur, stofnun eða ríkisstofnun, eru til margar leiðir til að stuðla að endurskógræðslu á Vestfjörðum Íslands.",
    ctaBtn: "Hafðu samband",
  },
  about: {
    eyebrow: "Saga okkar",
    heading: "Sýn sem gróin var fyrir áratugum",
    openingQuote:
      "\u201eSaga Skóga er saga sameiginlegrar viðleitni lítils samfélags sem lærði um vísindin á bak við skógrækt, og margar þær hæfileikar og færni sem þarf til að halda verkefni gangandi í áratugi.\u201c",
    openingP1:
      "Það byrjaði með einum manni, Jochum Eggertssoni, sem var á undan sinni tíð og hafði sýn um raunveruleg \u201eþarfir tímans\u201c sem við lifum í.",
    openingP2:
      "Jochum Eggertsson var einn af fyrstu Bahá\u02bcíum á Íslandi. Hann var bróðursonur Matthíasar Jochumsson, eins af elskuðustu skáldum landsins og höfundar þjóðsöngsins.",
    historyEyebrow: "Saga",
    historyHeading: "Að endurheimta forfeðraland",
    historyP1:
      "Snemma á fimmta áratugnum keypti Jochum aftur til baka býlið Skógar í Þorskafirði, þar sem faðir hans og tíu systkini, þar á meðal Matthías Jochumsson, höfðu fæðst og þar sem fjölskyldan hafði búið í kynslóðir áður en hún missti bæinn. Skógar, sem er á Vestfjörðum í norðurhluta Íslands, þýðir \u2018skógar\u2019, og Jochum var sannfærður um að hlutverk hans væri að endurreisa skógana sem höfðu þakið firðinn fyrir öldum. Snemma á fimmta áratugnum byrjaði hann að gróðursetja tré í einum hluta landsins.",
    historyP2:
      "Þótt það hafi ekki verið vel þekkt snemma á fimmta áratugnum, eru skógareyðing og jarðvegsrof í raun meðal brýnustu og eyðileggjandi umhverfisvandamála af mannavöldum á Íslandi. Frá því snemma á níunda áratugnum hefur Bahá\u02bcí-samfélag Íslands unnið náið með heimamönnum og stofnunum á sviði jarðvegsverndar og skógræktar, sem og með Skógrækt ríkisins, stofnun sem heyrir undir umhverfisráðuneytið.",
    historyP3:
      "Um 130.000 tré hafa verið gróðursett í Skógum frá árinu 2006. Samfellan í skógræktarstarfinu í gegnum áratugi hefur gefið Bahá\u02bcí-samfélaginu ótrúlegt tækifæri til samstarfs við einstaklinga, frjálsar félagasamtök, ríkisstofnanir og alþjóðlegar stofnanir.",
    historyP4:
      "Í september 2020 valdi Skógræktarfélag Íslands tré sem Jochum gróðursetti sem \u201eTré ársins\u201c á Íslandi. Fulltrúar frá ýmsum stofnunum sóttu formlega athöfn í Skógum og var það tækifæri til að undirstrika kosti samvinnu, sameiginlegs náms og gagnkvæms stuðnings milli ótalinna einstaklinga og samtaka sem vinna á þessu sviði.",
    milestonesEyebrow: "Helstu tímamót",
    milestones: [
      {
        year: "1950",
        text: "Jochum Eggertsson kaupir forfeðralandið Skógar og byrjar að gróðursetja tré.",
      },
      {
        year: "1980",
        text: "Bahá\u02bcí-samfélag Íslands hefur formlegt samstarf við heimamenn og Skógrækt ríkisins.",
      },
      {
        year: "2006",
        text: "Kerfisbundin stórskala gróðursetning hefst. Yfir 130.000 tré gróðursett frá þessum tíma.",
      },
      {
        year: "2020",
        text: "Skógræktarfélag Íslands velur tré sem Jochum gróðursetti sem \u201eTré ársins\u201c á Íslandi.",
      },
    ],
  },
  gallery: {
    eyebrow: "Skógurinn í myndum",
    heading: "Myndasafn",
    photoCount: (n: number) => `${n} ${n === 1 ? "mynd" : "myndir"}`,
    empty: "Myndasafn kemur fljótlega",
    emptyNote:
      "Bættu myndum við /public/images/gallery/ og þær munu birtast hér sjálfkrafa.",
    howToTitle: "Hvernig á að bæta við myndum",
    howTo: [
      "Settu myndir þínar í /public/images/gallery/",
      "Studd snið: JPG, PNG, WebP, AVIF",
      "Myndir eru raðaðar í stafrófsröð \u2014 notaðu tölur til að stjórna röðun (t.d. 01-tré.jpg)",
      "Lýsingatexti myndanna er búinn til sjálfkrafa úr skráarnafninu",
    ],
  },
  contact: {
    eyebrow: "Hafðu samband",
    heading: "Hafðu samband",
    subheading: "Skrifaðu okkur",
    para: "Hafðu endilega samband við okkur varðandi tækifæri til að taka þátt í skógræktarverkefni Skóga \u2014 hvort sem þú ert einstaklingur, stofnun eða ríkisstofnun. Við fögnum samstarfi allra sem deila sýn okkar.",
    emailLabel: "Tölvupóstur",
    addressLabel: "Heimilisfang",
    address: ["Skógar í Þorskafirði", "Ísland"],
    form: {
      nameLabel: "Nafn",
      namePlaceholder: "Nafn þitt",
      emailLabel: "Tölvupóstur",
      emailPlaceholder: "your@email.com",
      messageLabel: "Skilaboð",
      messagePlaceholder:
        "Hvernig getum við aðstoðað, eða hvernig gætirðu tekið þátt?",
      submit: "Senda skilaboð",
      submitting: "Sendi\u2026",
      successHeading: "Skilaboð send",
      successPara:
        "Þakka þér kærlega fyrir að hafa samband. Við munum hafa samband við þig fljótlega.",
      errorMsg:
        "Eitthvað fór úrskeiðis. Vinsamlegast sendu okkur tölvupóst beint á",
    },
  },
  footer: {
    tagline:
      "Skógræktarverkefni á Vestfjörðum Íslands, byggt á samvinnu, umhyggju og von.",
    navigate: "Valmynd",
    contact: "Hafðu samband",
    copyright: (year: number) =>
      `\u00a9 ${year} Stofnun Skógar. Allur réttur áskilinn. `,
    madeBy: "Smíðað af",
  },
};

export const translations: Record<Lang, typeof en> = { en, is };
export type Translations = typeof en;
