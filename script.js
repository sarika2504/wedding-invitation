/* Bhumika & Rakesh Wedding Invitation
   Corrected all-in-one script
   - Event cards open reliably
   - Language switching works
   - Countdown works
   - Local MP3 music works
   - Guest wishes work
   - Doors auto-open
*/

(() => {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  /* ---------------- COUNTDOWN ---------------- */
  const target = new Date("2026-11-13T08:00:00+05:30").getTime();

  function tick() {
    const x = Math.max(0, target - Date.now());

    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(value).padStart(2, "0");
    };

    set("d", Math.floor(x / 86400000));
    set("h", Math.floor(x / 3600000) % 24);
    set("m", Math.floor(x / 60000) % 60);
    set("s", Math.floor(x / 1000) % 60);
  }

  tick();
  setInterval(tick, 1000);

  /* ---------------- MENU ---------------- */

  const menu = $(".menu");
  const nav = $(".nav");

  menu?.addEventListener("click", () => {
    nav?.classList.toggle("open");
  });

  /* ---------------- STORAGE ---------------- */

  const storage = {
    get(key, fallback = "") {
      try {
        return localStorage.getItem(key) ?? fallback;
      } catch {
        return fallback;
      }
    },

    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {}
    }
  };

  /* ---------------- TRANSLATIONS ---------------- */

  const T = {
    en: {
      navStory: "Story",
      navCouple: "Couple",
      navEvents: "Events",
      navGallery: "Gallery",
      navVenue: "Venue",
      navWishes: "Wishes",
      navRsvp: "RSVP",

      musicSoft: "Music",
      musicOn: "Music",

      heroEyebrow: "THE BEGINNING OF FOREVER",
      heroScript: "Two hearts · one beautiful beginning",
      heroButton: "Explore the Celebration ↓",

      countEyebrow: "COUNTING DOWN TO FOREVER",
      countTitle: "Our wedding day is almost here",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      countDate: "13 November · Muhurtham at 8:00 AM",

      storyLabel: "01 · OUR STORY",
      storyEyebrow: "FROM A MOMENT TO A LIFETIME",
      storyTitle1: "And suddenly,",
      storyTitle2: "forever made sense.",

      storyP1:
        "Some stories begin quietly, some unexpectedly — and then two people discover that every little moment has been leading them here.",

      storyP2:
        "From shared smiles and little adventures to the promise of walking through every chapter together, Bhumika and Rakesh are beginning their forever surrounded by the people they love.",

      signature: "The Beginning of Forever ♥",

      brideLabel: "THE BRIDE",
      groomLabel: "THE GROOM",
      brother: "Brother",
      daughterOf: "Daughter of",
      sonOf: "Son of",

      eventsLabel: "02 · THE CELEBRATION",
      eventsEyebrow: "CLICK AN EVENT TO EXPLORE",
      eventsTitle: "Wedding Events",
      eventsSub: "Every celebration has its own little magic.",

      haldiName: "HALDI",
      haldiTitle: "Haldi Ceremony",

      engagementName: "ENGAGEMENT",
      engagementTitle: "Ring Ceremony",

      muhurthamName: "MUHURTHAM",
      muhurthamTitle: "Wedding Ceremony",

      receptionName: "RECEPTION",
      receptionTitle: "Reception",

      viewDetails: "View details ↗",

      galleryLabel: "03 · OUR MOMENTS",
      galleryEyebrow: "A LITTLE GLIMPSE OF US",
      galleryTitle: "One favourite frame",
      gallerySub:
        "One photograph, kept simple — because the story is already beautiful.",
      galleryCaption: "Where every moment feels like home. ♥",

      venueLabel: "04 · FIND US",
      venueEyebrow: "THE WEDDING VENUE",
      mapsButton: "Open in Google Maps ↗",

      wishesLabel: "05 · LEAVE A LITTLE LOVE",
      wishesEyebrow: "YOUR WORDS BECOME PART OF OUR STORY",
      wishesTitle: "Share your wishes",
      wishesSub:
        "Leave a message, tell us your favourite memory, or share a photograph from our celebration. ♡",

      yourName: "Your name",
      howKnow: "How do you know us?",
      yourWishes: "Your wishes / experience",
      addPhoto: "📷 Add a wedding photo",

      shareWishes: "Share my wishes ♥",
      shareWhatsApp: "Share the wedding link on WhatsApp ↗",

      loveNotes: "Love notes",
      emptyWall: "Be the first to leave a little love here.",

      rsvpEyebrow: "WITH LOVE, PALAKSHI GOWDA & FAMILY",
      rsvpTitle: "Will you join us?",
      rsvpSub:
        "Please bless Bhumika and Rakesh with your presence as they begin their forever.",

      rsvpButton: "RSVP · +91 9448895527",
      shareInvitation: "Share this invitation ↗",

      neelavathi: "Neelavathi · Number to be updated",

      footerTag: "The Beginning of Forever",

      modalDress: "Dress code",
      modalMap: "Open location ↗",

      guest: "Guest",
      sharedMemory: "Shared wedding memory",

      added: "Your little note has been added to the wall. ♡",

      photoLimit: "Please choose a photo under 2.5 MB."
    },

    kn: {
      navStory: "ನಮ್ಮ ಕಥೆ",
      navCouple: "ಜೋಡಿ",
      navEvents: "ಕಾರ್ಯಕ್ರಮಗಳು",
      navGallery: "ಚಿತ್ರಗಳು",
      navVenue: "ಸ್ಥಳ",
      navWishes: "ಹಾರೈಕೆಗಳು",
      navRsvp: "ಆರ್‌ಎಸ್‌ವಿಪಿ",

      musicSoft: "ಸಂಗೀತ",
      musicOn: "ಸಂಗೀತ",

      heroEyebrow: "ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ",
      heroScript: "ಎರಡು ಹೃದಯಗಳು · ಒಂದು ಸುಂದರ ಆರಂಭ",
      heroButton: "ಸಂಭ್ರಮವನ್ನು ನೋಡಿ ↓",

      countEyebrow: "ಶಾಶ್ವತತೆಯತ್ತ ಕ್ಷಣಗಣನೆ",
      countTitle: "ನಮ್ಮ ಮದುವೆಯ ದಿನ ಸಮೀಪಿಸುತ್ತಿದೆ",

      days: "ದಿನಗಳು",
      hours: "ಗಂಟೆಗಳು",
      minutes: "ನಿಮಿಷಗಳು",
      seconds: "ಸೆಕೆಂಡುಗಳು",

      countDate: "ನವೆಂಬರ್ 13 · ಮುಹೂರ್ತ ಬೆಳಿಗ್ಗೆ 8:00",

      storyLabel: "01 · ನಮ್ಮ ಕಥೆ",
      storyEyebrow: "ಒಂದು ಕ್ಷಣದಿಂದ ಜೀವನಪೂರ್ತಿ",

      storyTitle1: "ಹಠಾತ್ತನೆ,",
      storyTitle2: "ಶಾಶ್ವತತೆ ಅರ್ಥವಾಯಿತು.",

      storyP1:
        "ಕೆಲವು ಕಥೆಗಳು ಮೌನವಾಗಿ ಆರಂಭವಾಗುತ್ತವೆ, ಕೆಲವು ಅನಿರೀಕ್ಷಿತವಾಗಿ — ನಂತರ ಪ್ರತಿಯೊಂದು ಸಣ್ಣ ಕ್ಷಣವೂ ನಮ್ಮನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಂದಿದೆ ಎಂದು ಇಬ್ಬರು ಅರಿಯುತ್ತಾರೆ.",

      storyP2:
        "ಹಂಚಿಕೊಂಡ ನಗು, ಸಣ್ಣ ಸಾಹಸಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದು ಅಧ್ಯಾಯದಲ್ಲೂ ಜೊತೆಯಾಗಿರುವ ವಾಗ್ದಾನದೊಂದಿಗೆ, ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ತಮ್ಮ ಪ್ರೀತಿಯವರ ಆಶೀರ್ವಾದದಲ್ಲಿ ಹೊಸ ಜೀವನ ಆರಂಭಿಸುತ್ತಿದ್ದಾರೆ.",

      signature: "ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥",

      brideLabel: "ವಧು",
      groomLabel: "ವರ",
      brother: "ಸಹೋದರ",
      daughterOf: "ಮಗಳು",
      sonOf: "ಮಗ",

      eventsLabel: "02 · ಸಂಭ್ರಮ",
      eventsEyebrow: "ಕಾರ್ಯಕ್ರಮದ ವಿವರಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ",
      eventsTitle: "ಮದುವೆಯ ಕಾರ್ಯಕ್ರಮಗಳು",
      eventsSub: "ಪ್ರತಿ ಸಂಭ್ರಮಕ್ಕೂ ತನ್ನದೇ ಆದ ಸುಂದರ ಮಾಯೆ ಇದೆ.",

      haldiName: "ಹಲ್ದಿ",
      haldiTitle: "ಹಲ್ದಿ ಸಮಾರಂಭ",

      engagementName: "ನಿಶ್ಚಿತಾರ್ಥ",
      engagementTitle: "ಉಂಗುರ ಸಮಾರಂಭ",

      muhurthamName: "ಮುಹೂರ್ತ",
      muhurthamTitle: "ಮದುವೆ ಸಮಾರಂಭ",

      receptionName: "ಆತಿಥ್ಯ ಸಮಾರಂಭ",
      receptionTitle: "ರಿಸೆಪ್ಷನ್",

      viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ ↗",

      galleryLabel: "03 · ನಮ್ಮ ಕ್ಷಣಗಳು",
      galleryEyebrow: "ನಮ್ಮ ಪ್ರೀತಿಯ ಒಂದು ನೋಟ",
      galleryTitle: "ಒಂದು ನೆಚ್ಚಿನ ಚಿತ್ರ",
      gallerySub:
        "ಸರಳವಾಗಿ ಉಳಿಸಿಕೊಂಡ ಒಂದು ಚಿತ್ರ — ಏಕೆಂದರೆ ನಮ್ಮ ಕಥೆ ಈಗಾಗಲೇ ಸುಂದರವಾಗಿದೆ.",
      galleryCaption: "ಪ್ರತಿಯೊಂದು ಕ್ಷಣವೂ ಮನೆಯಂತಿದೆ. ♥",

      venueLabel: "04 · ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
      venueEyebrow: "ಮದುವೆಯ ಸ್ಥಳ",
      mapsButton: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ ↗",

      wishesLabel: "05 · ಪ್ರೀತಿಯ ಹಾರೈಕೆ",
      wishesEyebrow: "ನಿಮ್ಮ ಮಾತುಗಳು ನಮ್ಮ ಕಥೆಯ ಭಾಗವಾಗುತ್ತವೆ",
      wishesTitle: "ನಿಮ್ಮ ಹಾರೈಕೆ ಹಂಚಿಕೊಳ್ಳಿ",

      wishesSub:
        "ಒಂದು ಸಂದೇಶ ಬರೆಯಿರಿ, ನೆಚ್ಚಿನ ನೆನಪನ್ನು ಹೇಳಿ ಅಥವಾ ಸಂಭ್ರಮದ ಒಂದು ಚಿತ್ರವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ♡",

      yourName: "ನಿಮ್ಮ ಹೆಸರು",
      howKnow: "ನಮ್ಮನ್ನು ಹೇಗೆ ಪರಿಚಯ?",
      yourWishes: "ನಿಮ್ಮ ಹಾರೈಕೆ / ಅನುಭವ",
      addPhoto: "📷 ಮದುವೆಯ ಚಿತ್ರ ಸೇರಿಸಿ",

      shareWishes: "ನನ್ನ ಹಾರೈಕೆ ಹಂಚಿಕೊಳ್ಳಿ ♥",
      shareWhatsApp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮದುವೆಯ ಲಿಂಕ್ ಹಂಚಿಕೊಳ್ಳಿ ↗",

      loveNotes: "ಪ್ರೀತಿಯ ಸಂದೇಶಗಳು",
      emptyWall: "ಇಲ್ಲಿ ಮೊದಲ ಹಾರೈಕೆ ಬರೆಯಿರಿ.",

      rsvpEyebrow: "ಪ್ರೀತಿಯಿಂದ, ಪಾಲಾಕ್ಷಿ ಗೌಡ ಮತ್ತು ಕುಟುಂಬ",
      rsvpTitle: "ನೀವು ನಮ್ಮೊಂದಿಗೆ ಸೇರುತ್ತೀರಾ?",

      rsvpSub:
        "ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ತಮ್ಮ ಹೊಸ ಜೀವನ ಆರಂಭಿಸುವಾಗ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯಿಂದ ಆಶೀರ್ವದಿಸಿ.",

      rsvpButton: "ಆರ್‌ಎಸ್‌ವಿಪಿ · +91 9448895527",
      shareInvitation: "ಈ ಆಹ್ವಾನ ಹಂಚಿಕೊಳ್ಳಿ ↗",

      neelavathi: "ನೀಲಾವತಿ · ಸಂಖ್ಯೆ ನಂತರ",

      footerTag: "ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ",

      modalDress: "ಉಡುಗೆ ನಿಯಮ",
      modalMap: "ಸ್ಥಳ ತೆರೆಯಿರಿ ↗",

      guest: "ಅತಿಥಿ",
      sharedMemory: "ಹಂಚಿಕೊಂಡ ಮದುವೆಯ ನೆನಪು",

      added: "ನಿಮ್ಮ ಪ್ರೀತಿಯ ಸಂದೇಶವನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ♡",

      photoLimit: "ದಯವಿಟ್ಟು 2.5 MB ಒಳಗಿನ ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ."
    },

    te: {
      navStory: "మా కథ",
      navCouple: "జంట",
      navEvents: "వేడుకలు",
      navGallery: "చిత్రాలు",
      navVenue: "వేదిక",
      navWishes: "శుభాకాంక్షలు",
      navRsvp: "ఆర్‌ఎస్‌వీపీ",

      musicSoft: "సంగీతం",
      musicOn: "సంగీతం",

      heroEyebrow: "శాశ్వత ప్రేమకు శ్రీకారం",
      heroScript: "రెండు హృదయాలు · ఒక అందమైన ఆరంభం",
      heroButton: "వేడుకను చూడండి ↓",

      countEyebrow: "శాశ్వతం వైపు కౌంట్‌డౌన్",
      countTitle: "మా పెళ్లి రోజు దగ్గరపడుతోంది",

      days: "రోజులు",
      hours: "గంటలు",
      minutes: "నిమిషాలు",
      seconds: "సెకన్లు",

      countDate: "నవంబర్ 13 · ముహూర్తం ఉదయం 8:00",

      storyLabel: "01 · మా కథ",
      storyEyebrow: "ఒక క్షణం నుంచి జీవితాంతం వరకు",

      storyTitle1: "అకస్మాత్తుగా,",
      storyTitle2: "శాశ్వతం అర్థమైంది.",

      storyP1:
        "కొన్ని కథలు నిశ్శబ్దంగా మొదలవుతాయి, కొన్ని అనుకోకుండా — ఆ తర్వాత ప్రతి చిన్న క్షణం తమను ఇక్కడికి తీసుకువచ్చిందని ఇద్దరూ తెలుసుకుంటారు.",

      storyP2:
        "పంచుకున్న చిరునవ్వులు, చిన్న సాహసాలు, ప్రతి అధ్యాయంలో కలిసి నడిచే వాగ్దానంతో భూమిక మరియు రాకేష్ తమ ప్రియమైన వారి ఆశీర్వాదాలతో కొత్త జీవితాన్ని ప్రారంభిస్తున్నారు.",

      signature: "శాశ్వత ప్రేమకు శ్రీకారం ♥",

      brideLabel: "వధువు",
      groomLabel: "వరుడు",
      brother: "సోదరుడు",
      daughterOf: "కుమార్తె",
      sonOf: "కుమారుడు",

      eventsLabel: "02 · వేడుక",
      eventsEyebrow: "వివరాల కోసం ఒక వేడుకను ఎంచుకోండి",
      eventsTitle: "పెళ్లి వేడుకలు",
      eventsSub: "ప్రతి వేడుకకు తనదైన అందమైన మాయ ఉంటుంది.",

      haldiName: "హల్దీ",
      haldiTitle: "హల్దీ వేడుక",

      engagementName: "నిశ్చితార్థం",
      engagementTitle: "ఉంగరాల వేడుక",

      muhurthamName: "ముహూర్తం",
      muhurthamTitle: "వివాహ వేడుక",

      receptionName: "రిసెప్షన్",
      receptionTitle: "రిసెప్షన్",

      viewDetails: "వివరాలు చూడండి ↗",

      galleryLabel: "03 · మా జ్ఞాపకాలు",
      galleryEyebrow: "మా ప్రేమకు ఒక చిన్న చూపు",
      galleryTitle: "ఒక ఇష్టమైన చిత్రం",
      gallerySub:
        "సరళంగా ఉంచిన ఒక ఫోటో — ఎందుకంటే మా కథ ఇప్పటికే అందంగా ఉంది.",
      galleryCaption: "ప్రతి క్షణం ఇంటిలా అనిపిస్తుంది. ♥",

      venueLabel: "04 · మమ్మల్ని కలవండి",
      venueEyebrow: "వివాహ వేదిక",
      mapsButton: "గూగుల్ మ్యాప్స్‌లో తెరవండి ↗",

      wishesLabel: "05 · కొంచెం ప్రేమను వదిలివెళ్లండి",
      wishesEyebrow: "మీ మాటలు మా కథలో భాగమవుతాయి",
      wishesTitle: "మీ శుభాకాంక్షలు పంచుకోండి",

      wishesSub:
        "ఒక సందేశం రాయండి, మీ ఇష్టమైన జ్ఞాపకాన్ని చెప్పండి లేదా వేడుకలోని ఒక ఫోటోను పంచుకోండి. ♡",

      yourName: "మీ పేరు",
      howKnow: "మమ్మల్ని ఎలా తెలుసు?",
      yourWishes: "మీ శుభాకాంక్షలు / అనుభవం",
      addPhoto: "📷 పెళ్లి ఫోటో జోడించండి",

      shareWishes: "నా శుభాకాంక్షలు పంచుకోండి ♥",
      shareWhatsApp: "వాట్సాప్‌లో పెళ్లి లింక్ పంచుకోండి ↗",

      loveNotes: "ప్రేమ సందేశాలు",
      emptyWall: "ఇక్కడ మొదటి శుభాకాంక్షను రాయండి.",

      rsvpEyebrow: "ప్రేమతో, పాలాక్షి గౌడ & కుటుంబం",
      rsvpTitle: "మీరు మాతో చేరుతారా?",

      rsvpSub:
        "భూమిక మరియు రాకేష్ తమ కొత్త జీవితాన్ని ప్రారంభించే వేళ మీ సాన్నిధ్యంతో ఆశీర్వదించండి.",

      rsvpButton: "ఆర్‌ఎస్‌వీపీ · +91 9448895527",
      shareInvitation: "ఈ ఆహ్వానాన్ని పంచుకోండి ↗",

      neelavathi: "నీలావతి · నంబర్ త్వరలో",

      footerTag: "శాశ్వత ప్రేమకు శ్రీకారం",

      modalDress: "డ్రెస్ కోడ్",
      modalMap: "స్థలాన్ని తెరవండి ↗",

      guest: "అతిథి",
      sharedMemory: "పంచుకున్న వివాహ జ్ఞాపకం",

      added: "మీ ప్రేమ సందేశం జోడించబడింది. ♡",

      photoLimit: "దయచేసి 2.5 MB లోపు ఫోటోను ఎంచుకోండి."
    }
  };

  let lang = storage.get("weddingLang", "en");

  if (!T[lang]) {
    lang = "en";
  }

  /* ---------------- EVENT DATA ---------------- */

  const eventData = {

    haldi: {
      icon: "🌼",
      venue: "PKGB, Koluru, Ballary",

      en: {
        title: "HALDI",
        heading: "Haldi Ceremony",
        date: "12 November · 10:00 AM",

        text:
          "A joyful celebration filled with haldi, flowers, music, laughter and playful moments as the bride and groom get covered in love and blessings. 💛🌼",

        dress: "💛 Yellow & White — classic and elegant",

        special:
          "Come dressed in sunshine and ready for a splash of haldi! 💛"
      },

      kn: {
        title: "ಹಲ್ದಿ",
        heading: "ಹಲ್ದಿ ಸಮಾರಂಭ",
        date: "ನವೆಂಬರ್ 12 · ಬೆಳಿಗ್ಗೆ 10:00",

        text:
          "ಅರಿಶಿನ, ಹೂವುಗಳು, ಸಂಗೀತ, ನಗು ಮತ್ತು ಸಂತೋಷದಿಂದ ತುಂಬಿದ ಸುಂದರ ಸಂಭ್ರಮ; ವಧು-ವರರು ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳಲ್ಲಿ ನೆನೆಯುವ ಕ್ಷಣ. 💛🌼",

        dress: "💛 ಹಳದಿ ಮತ್ತು ಬಿಳಿ — ಸರಳ ಮತ್ತು ಸೊಗಸಾದ",

        special:
          "ಸೂರ್ಯನ ಕಿರಣದಂತೆ ಉಡುಗಿ ಬಂದು ಹಲ್ದಿಯ ಸಂಭ್ರಮಕ್ಕೆ ಸಿದ್ಧರಾಗಿ! 💛"
      },

      te: {
        title: "హల్దీ",
        heading: "హల్దీ వేడుక",
        date: "నవంబర్ 12 · ఉదయం 10:00",

        text:
          "పసుపు, పూలు, సంగీతం, నవ్వులు మరియు ఆనందంతో నిండిన వేడుక; వధూవరులు ప్రేమ, ఆశీర్వాదాలతో తడిసే అందమైన క్షణం. 💛🌼",

        dress: "💛 పసుపు & తెలుపు — క్లాసిక్ మరియు అందమైన",

        special:
          "సూర్యకాంతిలా మెరిసే దుస్తులతో వచ్చి హల్దీ సందడికి సిద్ధంగా ఉండండి! 💛"
      }
    },

    engagement: {

      icon: "💍",

      venue:
        "Sri Bharathi Theertha Sabhabhavana, Sangankallu Road",

      en: {
        title: "ENGAGEMENT",
        heading: "Ring Ceremony",
        date: "12 November · 8:00 PM",

        text:
          "An intimate celebration of their love as they exchange rings and officially begin the journey towards forever. 💍✨",

        dress: "Pastel & Elegant",

        special:
          "A beautiful beginning deserves beautiful celebrations."
      },

      kn: {
        title: "ನಿಶ್ಚಿತಾರ್ಥ",
        heading: "ಉಂಗುರ ಸಮಾರಂಭ",
        date: "ನವೆಂಬರ್ 12 · ರಾತ್ರಿ 8:00",

        text:
          "ಉಂಗುರಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಂಡು ಶಾಶ್ವತ ಜೀವನದ ಪಯಣಕ್ಕೆ ಅಧಿಕೃತವಾಗಿ ಹೆಜ್ಜೆ ಇಡುವ ಅವರ ಪ್ರೀತಿಯ ಆತ್ಮೀಯ ಸಂಭ್ರಮ. 💍✨",

        dress: "ಪಾಸ್ಟೆಲ್ ಮತ್ತು ಸೊಗಸಾದ",

        special:
          "ಸುಂದರ ಆರಂಭಕ್ಕೆ ಸುಂದರ ಸಂಭ್ರಮವೇ ಸೂಕ್ತ."
      },

      te: {
        title: "నిశ్చితార్థం",
        heading: "ఉంగరాల వేడుక",
        date: "నవంబర్ 12 · రాత్రి 8:00",

        text:
          "ఉంగరాలు మార్చుకుని శాశ్వత జీవిత ప్రయాణాన్ని అధికారికంగా ప్రారంభించే వారి ప్రేమకు అంకితమైన ఆత్మీయ వేడుక. 💍✨",

        dress: "పాస్టెల్ & ఎలిగెంట్",

        special:
          "అందమైన ఆరంభానికి అందమైన వేడుక అవసరం."
      }
    },

    muhurtham: {

      icon: "🪔",

      venue:
        "Sri Bharathi Theertha Sabhabhavana, Sangankallu Road",

      en: {
        title: "MUHURTHAM",
        heading: "Wedding Ceremony",
        date: "13 November · 8:00 AM",

        text:
          "The sacred wedding ceremony where the couple takes their vows and begins their journey together, surrounded by the blessings of their families and loved ones. 🪔❤️",

        dress: "🌺 Traditional Indian Wear",

        special:
          "Bless us with your presence as we begin our forever. 🪷"
      },

      kn: {
        title: "ಮುಹೂರ್ತ",
        heading: "ಮದುವೆ ಸಮಾರಂಭ",
        date: "ನವೆಂಬರ್ 13 · ಬೆಳಿಗ್ಗೆ 8:00",

        text:
          "ಕುಟುಂಬ ಮತ್ತು ಪ್ರಿಯರ ಆಶೀರ್ವಾದಗಳ ನಡುವೆ ದಂಪತಿಗಳು ತಮ್ಮ ಪ್ರತಿಜ್ಞೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ ಒಟ್ಟಾಗಿ ಜೀವನ ಆರಂಭಿಸುವ ಪವಿತ್ರ ಮದುವೆ ಸಮಾರಂಭ. 🪔❤️",

        dress: "🌺 ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಉಡುಪು",

        special:
          "ನಮ್ಮ ಶಾಶ್ವತ ಜೀವನದ ಆರಂಭಕ್ಕೆ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯಿಂದ ಆಶೀರ್ವದಿಸಿ. 🪷"
      },

      te: {
        title: "ముహూర్తం",
        heading: "వివాహ వేడుక",
        date: "నవంబర్ 13 · ఉదయం 8:00",

        text:
          "కుటుంబ సభ్యులు మరియు ప్రియమైన వారి ఆశీర్వాదాల మధ్య వధూవరులు ప్రమాణాలు చేసి కలిసి జీవిత ప్రయాణాన్ని ప్రారంభించే పవిత్ర వివాహ వేడుక. 🪔❤️",

        dress: "🌺 సంప్రదాయ భారతీయ దుస్తులు",

        special:
          "మా శాశ్వత జీవిత ఆరంభంలో మీ సాన్నిధ్యంతో ఆశీర్వదించండి. 🪷"
      }
    },

    reception: {

      icon: "✨",

      venue:
        "Sri Bharathi Theertha Sabhabhavana, Sangankallu Road",

      en: {
        title: "RECEPTION",
        heading: "Reception",
        date: "13 November · 12:00 Noon",

        text:
          "An elegant afternoon celebrating the newlyweds with family and friends, followed by delicious food, music, photographs and lots of beautiful memories. ✨🥂",

        dress: "Soft luxury dress code",

        special:
          "Dress to dazzle as we celebrate the beginning of forever. ✨"
      },

      kn: {
        title: "ರಿಸೆಪ್ಷನ್",
        heading: "ಆತಿಥ್ಯ ಸಮಾರಂಭ",
        date: "ನವೆಂಬರ್ 13 · ಮಧ್ಯಾಹ್ನ 12:00",

        text:
          "ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರೊಂದಿಗೆ ನವದಂಪತಿಗಳನ್ನು ಸಂಭ್ರಮಿಸುವ ಸೊಗಸಾದ ಮಧ್ಯಾಹ್ನ; ರುಚಿಕರ ಊಟ, ಸಂಗೀತ, ಛಾಯಾಚಿತ್ರಗಳು ಮತ್ತು ಸುಂದರ ನೆನಪುಗಳೊಂದಿಗೆ. ✨🥂",

        dress: "ಸೊಗಸಾದ ಲಕ್ಸುರಿ ಉಡುಗೆ",

        special:
          "ಶಾಶ್ವತ ಜೀವನದ ಆರಂಭವನ್ನು ಸಂಭ್ರಮಿಸಲು ಮಿಂಚುವಂತೆ ಉಡುಗಿ ಬನ್ನಿ. ✨"
      },

      te: {
        title: "రిసెప్షన్",
        heading: "రిసెప్షన్",
        date: "నవంబర్ 13 · మధ్యాహ్నం 12:00",

        text:
          "కుటుంబం మరియు స్నేహితులతో నూతన దంపతులను ఆహ్వానించే అందమైన మధ్యాహ్నం; రుచికరమైన భోజనం, సంగీతం, ఫోటోలు మరియు ఎన్నో మధుర జ్ఞాపకాలతో. ✨🥂",

        dress: "సాఫ్ట్ లగ్జరీ డ్రెస్ కోడ్",

        special:
          "శాశ్వత జీవిత ఆరంభాన్ని జరుపుకునేలా అందంగా మెరిసే దుస్తులతో రండి. ✨"
      }
    }
  };

  /* ---------------- SHARING ---------------- */

  function invitationMessage() {

    if (lang === "kn") {
      return "ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ಅವರ ಮದುವೆಯ ಸಂಭ್ರಮಕ್ಕೆ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ — ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥";
    }

    if (lang === "te") {
      return "భూమిక & రాకేష్ పెళ్లి వేడుకలో మాతో కలిసి జరుపుకోండి — శాశ్వత ప్రేమకు శ్రీకారం ♥";
    }

    return "Join us in celebrating Bhumika & Rakesh — The Beginning of Forever ♥";
  }

  function invitationUrl() {

    return (
      "https://wa.me/?text=" +
      encodeURIComponent(
        invitationMessage() + "\n" + location.href
      )
    );
  }

  function refreshShareLinks() {

    const el = $("#shareWhatsapp");

    if (el) {
      el.href = invitationUrl();
    }
  }

  /* ---------------- LANGUAGE ---------------- */

  function applyLanguage(next) {

    if (!T[next]) {
      next = "en";
    }

    lang = next;

    storage.set("weddingLang", lang);

    document.documentElement.lang = lang;

    document.body?.classList.remove(
      "lang-en",
      "lang-kn",
      "lang-te"
    );

    document.body?.classList.add(
      "lang-" + lang
    );

    const dict = T[lang];

    $$("[data-i18n]").forEach(el => {

      const key = el.dataset.i18n;

      if (dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    const guestName = $("#guestName");
    const guestRelation = $("#guestRelation");
    const guestMessage = $("#guestMessage");

    if (guestName) {

      guestName.placeholder =
        lang === "kn"
          ? "ಉದಾ. ಅನನ್ಯ"
          : lang === "te"
            ? "ఉదా. అనన్య"
            : "e.g. Ananya";
    }

    if (guestRelation) {

      guestRelation.placeholder =
        lang === "kn"
          ? "ಸ್ನೇಹಿತ / ಕುಟುಂಬ / ಕಾಲೇಜು"
          : lang === "te"
            ? "స్నేహితుడు / కుటుంబం / కాలేజ్"
            : "Friend / Family / College";
    }

    if (guestMessage) {

      guestMessage.placeholder =
        lang === "kn"
          ? "ನಾವು ಸದಾ ನೆನಪಿನಲ್ಲಿಡುವಂತೆ ಏನಾದರೂ ಬರೆಯಿರಿ..."
          : lang === "te"
            ? "మేము ఎప్పటికీ గుర్తుంచుకునేలా ఏదైనా రాయండి..."
            : "Write something we'll treasure forever...";
    }

    $$("#languageSelect,#entryLanguageSelect")
      .forEach(s => {
        s.value = lang;
      });

    document.title =
      lang === "kn"
        ? "ಭೂಮಿಕಾ & ರಾಕೇಶ್ | ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ"
        : lang === "te"
          ? "భూమిక & రాకేష్ | శాశ్వత ప్రేమకు శ్రీకారం"
          : "Bhumika & Rakesh | The Beginning of Forever";

    const musicText = $("#musicText");

    if (musicText && !musicOn) {
      musicText.textContent = dict.musicSoft;
    }

    refreshShareLinks();
  }

  /* ---------------- EVENT MODAL ---------------- */

  function openEvent(key) {

    const base = eventData[key];

    if (!base) {
      console.error("Unknown event:", key);
      return;
    }

    const e = base[lang] || base.en;

    const modal = $("#modal");

    if (!modal) {
      console.error("Wedding modal #modal was not found.");
      return;
    }

    const put = (id, value) => {

      const el = document.getElementById(id);

      if (el) {
        el.textContent = value;
      }
    };

    put("mi", base.icon);
    put("mt", e.title);
    put("mh", e.heading);
    put("md", e.date);
    put("mv", base.venue);
    put("mw", e.text);
    put("mdd", e.dress);
    put("ms", e.special);

    const map = $("#map");

    if (map) {

      map.textContent = T[lang].modalMap;

      map.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
          base.venue + " Ballary"
        );
    }

    const dressSpan = $(".dress span");

    if (dressSpan) {
      dressSpan.textContent = T[lang].modalDress;
    }

    modal.classList.add("open");

    document.body.style.overflow = "hidden";
  }

  function closeModal() {

    const modal = $("#modal");

    modal?.classList.remove("open");

    document.body.style.overflow = "";
  }

  /*
    EVENT CARD HANDLER

    This uses event delegation.
    Therefore it works even if the cards are created/modified
    elsewhere in the page.
  */

  document.addEventListener("click", event => {

    const card =
      event.target.closest?.(
        ".card[data-event]"
      );

    if (card) {

      event.preventDefault();
      event.stopPropagation();

      openEvent(
        card.dataset.event
      );

      return;
    }

    if (
      event.target.closest?.("#close") ||
      event.target.closest?.(".backdrop")
    ) {

      closeModal();
    }
  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeModal();
    }
  });

  /* ---------------- GUEST WISHES ---------------- */

  const wishKey = "rakeshBhumikaWishesV1";

  const wishForm = $("#wishForm");
  const wishWall = $("#wishWall");
  const emptyWall = $("#emptyWall");

  const photoInput = $("#guestPhoto");
  const preview = $("#photoPreview");
  const statusEl = $("#formStatus");

  function getWishes() {

    try {

      return JSON.parse(
        storage.get(
          wishKey,
          "[]"
        ) || "[]"
      );

    } catch {

      return [];
    }
  }

  function renderWishes() {

    if (!wishWall || !emptyWall) {
      return;
    }

    const items = getWishes();

    wishWall.innerHTML = "";

    emptyWall.style.display =
      items.length
        ? "none"
        : "block";

    items
      .slice()
      .reverse()
      .forEach(item => {

        const article =
          document.createElement("article");

        article.className = "note";

        const h =
          document.createElement("h4");

        h.textContent =
          item.name;

        const rel =
          document.createElement("div");

        rel.className = "relation";

        rel.textContent =
          item.relation ||
          T[lang].guest;

        const p =
          document.createElement("p");

        p.textContent =
          item.message;

        article.append(
          h,
          rel,
          p
        );

        if (item.photo) {

          const img =
            document.createElement("img");

          img.src =
            item.photo;

          img.alt =
            T[lang].sharedMemory;

          article.append(img);
        }

        wishWall.append(article);
      });
  }

  photoInput?.addEventListener(
    "change",
    () => {

      if (preview) {
        preview.innerHTML = "";
      }

      const file =
        photoInput.files?.[0];

      if (!file) {
        return;
      }

      if (
        file.size >
        2.5 * 1024 * 1024
      ) {

        photoInput.value = "";

        if (statusEl) {
          statusEl.textContent =
            T[lang].photoLimit;
        }

        return;
      }

      if (preview) {

        const img =
          document.createElement("img");

        img.src =
          URL.createObjectURL(file);

        preview.append(img);
      }
    }
  );

  wishForm?.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const name =
        $("#guestName")
          ?.value
          .trim() ||
        "Guest";

      const relation =
        $("#guestRelation")
          ?.value
          .trim() ||
        "";

      const message =
        $("#guestMessage")
          ?.value
          .trim() ||
        "";

      const file =
        photoInput?.files?.[0];

      const save = photo => {

        const arr =
          getWishes();

        arr.push({
          name,
          relation,
          message,
          photo:
            photo || "",
          at:
            Date.now()
        });

        storage.set(
          wishKey,
          JSON.stringify(arr)
        );

        renderWishes();

        wishForm.reset();

        if (preview) {
          preview.innerHTML = "";
        }

        if (statusEl) {
          statusEl.textContent =
            T[lang].added;
        }
      };

      if (file) {

        const reader =
          new FileReader();

        reader.onload =
          () => save(
            reader.result
          );

        reader.readAsDataURL(
          file
        );

      } else {

        save("");
      }
    }
  );

  /* ---------------- LOCAL MUSIC ---------------- */

  const musicBtn =
    $("#musicToggle");

  const musicText =
    $("#musicText");

  const weddingMusic =
    $("#weddingMusic");

  let musicOn = false;

  async function playWeddingMusic() {

    if (!weddingMusic) {

      console.warn(
        "Audio element #weddingMusic was not found."
      );

      return;
    }

    try {

      await weddingMusic.play();

      musicOn = true;

      if (musicText) {
        musicText.textContent =
          T[lang].musicOn;
      }

      musicBtn?.classList.add(
        "playing"
      );

    } catch (error) {

      console.warn(
        "Music playback was blocked:",
        error
      );
    }
  }

  function stopWeddingMusic() {

    if (!weddingMusic) {
      return;
    }

    weddingMusic.pause();

    musicOn = false;

    if (musicText) {

      musicText.textContent =
        T[lang].musicSoft;
    }

    musicBtn?.classList.remove(
      "playing"
    );
  }

  function toggleMusic() {

    if (musicOn) {

      stopWeddingMusic();

    } else {

      playWeddingMusic();
    }
  }

  musicBtn?.addEventListener(
    "click",
    toggleMusic
  );

  window.__startWeddingMusic =
    playWeddingMusic;

  /* ---------------- SHARE ---------------- */

  $("#shareWedding")?.addEventListener(
    "click",
    async () => {

      const text =
        lang === "kn"
          ? "ಭೂಮಿಕಾ ♥ ರಾಕೇಶ್ ಅವರ ಮದುವೆಗೆ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ — ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥"
          : lang === "te"
            ? "భూమిక ♥ రాకేష్ పెళ్లికి మాతో కలిసి రండి — శాశ్వత ప్రేమకు శ్రీకారం ♥"
            : "Join us for Bhumika & Rakesh's wedding — The Beginning of Forever ♥";

      const data = {

        title:
          "Bhumika ♥ Rakesh | The Beginning of Forever",

        text,

        url:
          location.href
      };

      try {

        if (navigator.share) {

          await navigator.share(
            data
          );

          return;
        }

      } catch {}

      window.open(
        "https://wa.me/?text=" +
        encodeURIComponent(
          text +
          "\n" +
          location.href
        ),
        "_blank"
      );
    }
  );

  /* ---------------- AUTO OPEN DOORS ---------------- */

  function autoOpenDoors() {

    const overlay =
      $("#entryOverlay");

    const door =
      $("#entryDoor");

    if (!overlay || !door) {
      return;
    }

    door.classList.add(
      "opened"
    );

    document.body.classList.add(
      "invitation-started"
    );

    setTimeout(
      () => {
        overlay.classList.add(
          "finished"
        );
      },
      1300
    );
  }

  /* ---------------- INITIALIZATION ---------------- */

  /*
    IMPORTANT:
    Everything is defined before initialization.
    This prevents the old JavaScript initialization
    error that stopped the event cards from working.
  */

  applyLanguage(lang);

  renderWishes();

  $$("#languageSelect,#entryLanguageSelect")
    .forEach(select => {

      select.addEventListener(
        "change",
        event => {

          applyLanguage(
            event.target.value
          );
        }
      );
    });

  window.addEventListener(
    "load",
    () => {

      setTimeout(
        autoOpenDoors,
        450
      );

    },
    { once: true }
  );

})();
