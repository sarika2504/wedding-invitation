const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

const target=new Date('2026-11-13T08:00:00+05:30').getTime();

function tick(){
  const x=Math.max(0,target-Date.now());

  document.getElementById('d').textContent=
    String(Math.floor(x/86400000)).padStart(2,'0');

  document.getElementById('h').textContent=
    String(Math.floor(x/3600000)%24).padStart(2,'0');

  document.getElementById('m').textContent=
    String(Math.floor(x/60000)%60).padStart(2,'0');

  document.getElementById('s').textContent=
    String(Math.floor(x/1000)%60).padStart(2,'0');
}

tick();
setInterval(tick,1000);


const T={
 en:{
  navStory:'Story',
  navCouple:'Couple',
  navEvents:'Events',
  navGallery:'Gallery',
  navVenue:'Venue',
  navWishes:'Wishes',
  navRsvp:'RSVP',

  musicSoft:'Music',
  musicOn:'Music',

  heroEyebrow:'THE BEGINNING OF FOREVER',
  heroScript:'Two hearts · one beautiful beginning',
  heroButton:'Explore the Celebration ↓',

  countEyebrow:'COUNTING DOWN TO FOREVER',
  countTitle:'Our wedding day is almost here',
  days:'Days',
  hours:'Hours',
  minutes:'Minutes',
  seconds:'Seconds',
  countDate:'13 November · Muhurtham at 8:00 AM',

  storyLabel:'01 · OUR STORY',
  storyEyebrow:'FROM A MOMENT TO A LIFETIME',
  storyTitle1:'And suddenly,',
  storyTitle2:'forever made sense.',
  storyP1:'Some stories begin quietly, some unexpectedly — and then two people discover that every little moment has been leading them here.',
  storyP2:'From shared smiles and little adventures to the promise of walking through every chapter together, Bhumika and Rakesh are beginning their forever surrounded by the people they love.',
  signature:'The Beginning of Forever ♥',

  brideLabel:'THE BRIDE',
  groomLabel:'THE GROOM',
  brother:'Brother',
  daughterOf:'Daughter of',
  sonOf:'Son of',

  eventsLabel:'02 · THE CELEBRATION',
  eventsEyebrow:'CLICK AN EVENT TO EXPLORE',
  eventsTitle:'Wedding Events',
  eventsSub:'Every celebration has its own little magic.',

  haldiName:'HALDI',
  haldiTitle:'Haldi Ceremony',
  engagementName:'ENGAGEMENT',
  engagementTitle:'Ring Ceremony',
  muhurthamName:'MUHURTHAM',
  muhurthamTitle:'Wedding Ceremony',
  receptionName:'RECEPTION',
  receptionTitle:'Reception',
  viewDetails:'View details ↗',

  galleryLabel:'03 · OUR MOMENTS',
  galleryEyebrow:'A LITTLE GLIMPSE OF US',
  galleryTitle:'One favourite frame',
  gallerySub:'One photograph, kept simple — because the story is already beautiful.',
  galleryCaption:'Where every moment feels like home. ♥',

  venueLabel:'04 · FIND US',
  venueEyebrow:'THE WEDDING VENUE',
  mapsButton:'Open in Google Maps ↗',

  wishesLabel:'05 · LEAVE A LITTLE LOVE',
  wishesEyebrow:'YOUR WORDS BECOME PART OF OUR STORY',
  wishesTitle:'Share your wishes',
  wishesSub:'Leave a message, tell us your favourite memory, or share a photograph from our celebration. ♡',
  yourName:'Your name',
  howKnow:'How do you know us?',
  yourWishes:'Your wishes / experience',
  addPhoto:'📷 Add a wedding photo',
  shareWishes:'Share my wishes ♥',
  shareWhatsApp:'Share the wedding link on WhatsApp ↗',
  loveNotes:'Love notes',
  emptyWall:'Be the first to leave a little love here.',

  rsvpEyebrow:'WITH LOVE, PALAKSHI GOWDA & FAMILY',
  rsvpTitle:'Will you join us?',
  rsvpSub:'Please bless Bhumika and Rakesh with your presence as they begin their forever.',
  rsvpButton:'RSVP · +91 9448895527',
  shareInvitation:'Share this invitation ↗',
  neelavathi:'Neelavathi · Number to be updated',
  footerTag:'The Beginning of Forever',

  modalDress:'Dress code',
  modalMap:'Open location ↗',
  guest:'Guest',
  sharedMemory:'Shared wedding memory',
  added:'Your little note has been added to the wall. ♡',
  photoLimit:'Please choose a photo under 2.5 MB.'
 },

 kn:{
  navStory:'ನಮ್ಮ ಕಥೆ',
  navCouple:'ಜೋಡಿ',
  navEvents:'ಕಾರ್ಯಕ್ರಮಗಳು',
  navGallery:'ಚಿತ್ರಗಳು',
  navVenue:'ಸ್ಥಳ',
  navWishes:'ಹಾರೈಕೆಗಳು',
  navRsvp:'ಆರ್‌ಎಸ್‌ವಿಪಿ',

  musicSoft:'ಸಂಗೀತ',
  musicOn:'ಸಂಗೀತ',

  heroEyebrow:'ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ',
  heroScript:'ಎರಡು ಹೃದಯಗಳು · ಒಂದು ಸುಂದರ ಆರಂಭ',
  heroButton:'ಸಂಭ್ರಮವನ್ನು ನೋಡಿ ↓',

  countEyebrow:'ಶಾಶ್ವತತೆಯತ್ತ ಕ್ಷಣಗಣನೆ',
  countTitle:'ನಮ್ಮ ಮದುವೆಯ ದಿನ ಸಮೀಪಿಸುತ್ತಿದೆ',
  days:'ದಿನಗಳು',
  hours:'ಗಂಟೆಗಳು',
  minutes:'ನಿಮಿಷಗಳು',
  seconds:'ಸೆಕೆಂಡುಗಳು',
  countDate:'ನವೆಂಬರ್ 13 · ಮುಹೂರ್ತ ಬೆಳಿಗ್ಗೆ 8:00',

  storyLabel:'01 · ನಮ್ಮ ಕಥೆ',
  storyEyebrow:'ಒಂದು ಕ್ಷಣದಿಂದ ಜೀವನಪೂರ್ತಿ',
  storyTitle1:'ಹಠಾತ್ತನೆ,',
  storyTitle2:'ಶಾಶ್ವತತೆ ಅರ್ಥವಾಯಿತು.',
  storyP1:'ಕೆಲವು ಕಥೆಗಳು ಮೌನವಾಗಿ ಆರಂಭವಾಗುತ್ತವೆ, ಕೆಲವು ಅನಿರೀಕ್ಷಿತವಾಗಿ — ನಂತರ ಪ್ರತಿಯೊಂದು ಸಣ್ಣ ಕ್ಷಣವೂ ನಮ್ಮನ್ನು ಇಲ್ಲಿಗೆ ಕರೆತಂದಿದೆ ಎಂದು ಇಬ್ಬರು ಅರಿಯುತ್ತಾರೆ.',
  storyP2:'ಹಂಚಿಕೊಂಡ ನಗು, ಸಣ್ಣ ಸಾಹಸಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದು ಅಧ್ಯಾಯದಲ್ಲೂ ಜೊತೆಯಾಗಿರುವ ವಾಗ್ದಾನದೊಂದಿಗೆ, ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ತಮ್ಮ ಪ್ರೀತಿಯವರ ಆಶೀರ್ವಾದದಲ್ಲಿ ಹೊಸ ಜೀವನ ಆರಂಭಿಸುತ್ತಿದ್ದಾರೆ.',
  signature:'ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥',

  brideLabel:'ವಧು',
  groomLabel:'ವರ',
  brother:'ಸಹೋದರ',
  daughterOf:'ಮಗಳು',
  sonOf:'ಮಗ',

  eventsLabel:'02 · ಸಂಭ್ರಮ',
  eventsEyebrow:'ಕಾರ್ಯಕ್ರಮದ ವಿವರಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ',
  eventsTitle:'ಮದುವೆಯ ಕಾರ್ಯಕ್ರಮಗಳು',
  eventsSub:'ಪ್ರತಿ ಸಂಭ್ರಮಕ್ಕೂ ತನ್ನದೇ ಆದ ಸುಂದರ ಮಾಯೆ ಇದೆ.',

  haldiName:'ಹಲ್ದಿ',
  haldiTitle:'ಹಲ್ದಿ ಸಮಾರಂಭ',
  engagementName:'ನಿಶ್ಚಿತಾರ್ಥ',
  engagementTitle:'ಉಂಗುರ ಸಮಾರಂಭ',
  muhurthamName:'ಮುಹೂರ್ತ',
  muhurthamTitle:'ಮದುವೆ ಸಮಾರಂಭ',
  receptionName:'ಆತಿಥ್ಯ ಸಮಾರಂಭ',
  receptionTitle:'ರಿಸೆಪ್ಷನ್',
  viewDetails:'ವಿವರಗಳನ್ನು ನೋಡಿ ↗',

  galleryLabel:'03 · ನಮ್ಮ ಕ್ಷಣಗಳು',
  galleryEyebrow:'ನಮ್ಮ ಪ್ರೀತಿಯ ಒಂದು ನೋಟ',
  galleryTitle:'ಒಂದು ನೆಚ್ಚಿನ ಚಿತ್ರ',
  gallerySub:'ಸರಳವಾಗಿ ಉಳಿಸಿಕೊಂಡ ಒಂದು ಚಿತ್ರ — ಏಕೆಂದರೆ ನಮ್ಮ ಕಥೆ ಈಗಾಗಲೇ ಸುಂದರವಾಗಿದೆ.',
  galleryCaption:'ಪ್ರತಿಯೊಂದು ಕ್ಷಣವೂ ಮನೆಯಂತಿದೆ. ♥',

  venueLabel:'04 · ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ',
  venueEyebrow:'ಮದುವೆಯ ಸ್ಥಳ',
  mapsButton:'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ ↗',

  wishesLabel:'05 · ಪ್ರೀತಿಯ ಹಾರೈಕೆ',
  wishesEyebrow:'ನಿಮ್ಮ ಮಾತುಗಳು ನಮ್ಮ ಕಥೆಯ ಭಾಗವಾಗುತ್ತವೆ',
  wishesTitle:'ನಿಮ್ಮ ಹಾರೈಕೆ ಹಂಚಿಕೊಳ್ಳಿ',
  wishesSub:'ಒಂದು ಸಂದೇಶ ಬರೆಯಿರಿ, ನೆಚ್ಚಿನ ನೆನಪನ್ನು ಹೇಳಿ ಅಥವಾ ಸಂಭ್ರಮದ ಒಂದು ಚಿತ್ರವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ♡',
  yourName:'ನಿಮ್ಮ ಹೆಸರು',
  howKnow:'ನಮ್ಮನ್ನು ಹೇಗೆ ಪರಿಚಯ?',
  yourWishes:'ನಿಮ್ಮ ಹಾರೈಕೆ / ಅನುಭವ',
  addPhoto:'📷 ಮದುವೆಯ ಚಿತ್ರ ಸೇರಿಸಿ',
  shareWishes:'ನನ್ನ ಹಾರೈಕೆ ಹಂಚಿಕೊಳ್ಳಿ ♥',
  shareWhatsApp:'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮದುವೆಯ ಲಿಂಕ್ ಹಂಚಿಕೊಳ್ಳಿ ↗',
  loveNotes:'ಪ್ರೀತಿಯ ಸಂದೇಶಗಳು',
  emptyWall:'ಇಲ್ಲಿ ಮೊದಲ ಹಾರೈಕೆ ಬರೆಯಿರಿ.',

  rsvpEyebrow:'ಪ್ರೀತಿಯಿಂದ, ಪಾಲಾಕ್ಷಿ ಗೌಡ ಮತ್ತು ಕುಟುಂಬ',
  rsvpTitle:'ನೀವು ನಮ್ಮೊಂದಿಗೆ ಸೇರುತ್ತೀರಾ?',
  rsvpSub:'ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ತಮ್ಮ ಹೊಸ ಜೀವನ ಆರಂಭಿಸುವಾಗ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯಿಂದ ಆಶೀರ್ವದಿಸಿ.',
  rsvpButton:'ಆರ್‌ಎಸ್‌ವಿಪಿ · +91 9448895527',
  shareInvitation:'ಈ ಆಹ್ವಾನ ಹಂಚಿಕೊಳ್ಳಿ ↗',
  neelavathi:'ನೀಲಾವತಿ · ಸಂಖ್ಯೆ ನಂತರ',
  footerTag:'ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ',

  modalDress:'ಉಡುಗೆ ನಿಯಮ',
  modalMap:'ಸ್ಥಳ ತೆರೆಯಿರಿ ↗',
  guest:'ಅತಿಥಿ',
  sharedMemory:'ಹಂಚಿಕೊಂಡ ಮದುವೆಯ ನೆನಪು',
  added:'ನಿಮ್ಮ ಪ್ರೀತಿಯ ಸಂದೇಶವನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ♡',
  photoLimit:'ದಯವಿಟ್ಟು 2.5 MB ಒಳಗಿನ ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ.'
 },

 te:{
  navStory:'మా కథ',
  navCouple:'జంట',
  navEvents:'వేడుకలు',
  navGallery:'చిత్రాలు',
  navVenue:'వేదిక',
  navWishes:'శుభాకాంక్షలు',
  navRsvp:'ఆర్‌ఎస్‌వీపీ',

  musicSoft:'సంగీతం',
  musicOn:'సంగీతం',

  heroEyebrow:'శాశ్వత ప్రేమకు శ్రీకారం',
  heroScript:'రెండు హృదయాలు · ఒక అందమైన ఆరంభం',
  heroButton:'వేడుకను చూడండి ↓',

  countEyebrow:'శాశ్వతం వైపు కౌంట్‌డౌన్',
  countTitle:'మా పెళ్లి రోజు దగ్గరపడుతోంది',
  days:'రోజులు',
  hours:'గంటలు',
  minutes:'నిమిషాలు',
  seconds:'సెకన్లు',
  countDate:'నవంబర్ 13 · ముహూర్తం ఉదయం 8:00',

  storyLabel:'01 · మా కథ',
  storyEyebrow:'ఒక క్షణం నుంచి జీవితాంతం వరకు',
  storyTitle1:'అకస్మాత్తుగా,',
  storyTitle2:'శాశ్వతం అర్థమైంది.',
  storyP1:'కొన్ని కథలు నిశ్శబ్దంగా మొదలవుతాయి, కొన్ని అనుకోకుండా — ఆ తర్వాత ప్రతి చిన్న క్షణం తమను ఇక్కడికి తీసుకువచ్చిందని ఇద్దరూ తెలుసుకుంటారు.',
  storyP2:'పంచుకున్న చిరునవ్వులు, చిన్న సాహసాలు, ప్రతి అధ్యాయంలో కలిసి నడిచే వాగ్దానంతో భూమిక మరియు రాకేష్ తమ ప్రియమైన వారి ఆశీర్వాదాలతో కొత్త జీవితాన్ని ప్రారంభిస్తున్నారు.',
  signature:'శాశ్వత ప్రేమకు శ్రీకారం ♥',

  brideLabel:'వధువు',
  groomLabel:'వరుడు',
  brother:'సోదరుడు',
  daughterOf:'కుమార్తె',
  sonOf:'కుమారుడు',

  eventsLabel:'02 · వేడుక',
  eventsEyebrow:'వివరాల కోసం ఒక వేడుకను ఎంచుకోండి',
  eventsTitle:'పెళ్లి వేడుకలు',
  eventsSub:'ప్రతి వేడుకకు తనదైన అందమైన మాయ ఉంటుంది.',

  haldiName:'హల్దీ',
  haldiTitle:'హల్దీ వేడుక',
  engagementName:'నిశ్చితార్థం',
  engagementTitle:'ఉంగరాల వేడుక',
  muhurthamName:'ముహూర్తం',
  muhurthamTitle:'వివాహ వేడుక',
  receptionName:'రిసెప్షన్',
  receptionTitle:'రిసెప్షన్',
  viewDetails:'వివరాలు చూడండి ↗',

  galleryLabel:'03 · మా జ్ఞాపకాలు',
  galleryEyebrow:'మా ప్రేమకు ఒక చిన్న చూపు',
  galleryTitle:'ఒక ఇష్టమైన చిత్రం',
  gallerySub:'సరళంగా ఉంచిన ఒక ఫోటో — ఎందుకంటే మా కథ ఇప్పటికే అందంగా ఉంది.',
  galleryCaption:'ప్రతి క్షణం ఇంటిలా అనిపిస్తుంది. ♥',

  venueLabel:'04 · మమ్మల్ని కలవండి',
  venueEyebrow:'వివాహ వేదిక',
  mapsButton:'గూగుల్ మ్యాప్స్‌లో తెరవండి ↗',

  wishesLabel:'05 · కొంచెం ప్రేమను వదిలివెళ్లండి',
  wishesEyebrow:'మీ మాటలు మా కథలో భాగమవుతాయి',
  wishesTitle:'మీ శుభాకాంక్షలు పంచుకోండి',
  wishesSub:'ఒక సందేశం రాయండి, మీ ఇష్టమైన జ్ఞాపకాన్ని చెప్పండి లేదా వేడుకలోని ఒక ఫోటోను పంచుకోండి. ♡',
  yourName:'మీ పేరు',
  howKnow:'మమ్మల్ని ఎలా తెలుసు?',
  yourWishes:'మీ శుభాకాంక్షలు / అనుభవం',
  addPhoto:'📷 పెళ్లి ఫోటో జోడించండి',
  shareWishes:'నా శుభాకాంక్షలు పంచుకోండి ♥',
  shareWhatsApp:'వాట్సాప్‌లో పెళ్లి లింక్ పంచుకోండి ↗',
  loveNotes:'ప్రేమ సందేశాలు',
  emptyWall:'ఇక్కడ మొదటి శుభాకాంక్షను రాయండి.',

  rsvpEyebrow:'ప్రేమతో, పాలాక్షి గౌడ & కుటుంబం',
  rsvpTitle:'మీరు మాతో చేరుతారా?',
  rsvpSub:'భూమిక మరియు రాకేష్ తమ కొత్త జీవితాన్ని ప్రారంభిస్తున్న వేళ మీ సాన్నిధ్యంతో ఆశీర్వదించండి.',
  rsvpButton:'ఆర్‌ఎస్‌వీపీ · +91 9448895527',
  shareInvitation:'ఈ ఆహ్వానాన్ని పంచుకోండి ↗',
  neelavathi:'నీలావతి · నంబర్ త్వరలో',
  footerTag:'శాశ్వత ప్రేమకు శ్రీకారం',

  modalDress:'డ్రెస్ కోడ్',
  modalMap:'స్థలాన్ని తెరవండి ↗',
  guest:'అతిథి',
  sharedMemory:'పంచుకున్న వివాహ జ్ఞాపకం',
  added:'మీ ప్రేమ సందేశం జోడించబడింది. ♡',
  photoLimit:'దయచేసి 2.5 MB లోపు ఫోటోను ఎంచుకోండి.'
 }
};


const eventData={

 haldi:{
  i:'🌼',
  v:'PKGB, Koluru, Ballary',

  en:{
   t:'HALDI',
   h:'Haldi Ceremony',
   d:'12 November · 10:00 AM',
   w:'A joyful celebration filled with haldi, flowers, music, laughter and playful moments as the bride and groom get covered in love and blessings. 💛🌼',
   dress:'💛 Yellow & White — classic and elegant',
   special:'Come dressed in sunshine and ready for a splash of haldi! 💛'
  },

  kn:{
   t:'ಹಲ್ದಿ',
   h:'ಹಲ್ದಿ ಸಮಾರಂಭ',
   d:'ನವೆಂಬರ್ 12 · ಬೆಳಿಗ್ಗೆ 10:00',
   w:'ಅರಿಶಿನ, ಹೂವುಗಳು, ಸಂಗೀತ, ನಗು ಮತ್ತು ಸಂತೋಷದಿಂದ ತುಂಬಿದ ಸುಂದರ ಸಂಭ್ರಮ; ವಧು-ವರರು ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳಲ್ಲಿ ನೆನೆಯುವ ಕ್ಷಣ. 💛🌼',
   dress:'💛 ಹಳದಿ ಮತ್ತು ಬಿಳಿ — ಸರಳ ಮತ್ತು ಸೊಗಸಾದ',
   special:'ಸೂರ್ಯನ ಕಿರಣದಂತೆ ಉಡುಗಿ ಬಂದು ಹಲ್ದಿಯ ಸಂಭ್ರಮಕ್ಕೆ ಸಿದ್ಧರಾಗಿ! 💛'
  },

  te:{
   t:'హల్దీ',
   h:'హల్దీ వేడుక',
   d:'నవంబర్ 12 · ఉదయం 10:00',
   w:'పసుపు, పూలు, సంగీతం, నవ్వులు మరియు ఆనందంతో నిండిన వేడుక; వధూవరులు ప్రేమ, ఆశీర్వాదాలతో తడిసే అందమైన క్షణం. 💛🌼',
   dress:'💛 పసుపు & తెలుపు — క్లాసిక్ మరియు అందమైన',
   special:'సూర్యకాంతిలా మెరిసే దుస్తులతో వచ్చి హల్దీ సందడికి సిద్ధంగా ఉండండి! 💛'
  }
 },

 engagement:{
  i:'💍',
  v:'Sri Bharathi Theertha Sabhabhavana, Sangankallu Road',

  en:{
   t:'ENGAGEMENT',
   h:'Ring Ceremony',
   d:'12 November · 8:00 PM',
   w:'An intimate celebration of their love as they exchange rings and officially begin the journey towards forever. 💍✨',
   dress:'Pastel & Elegant',
   special:'A beautiful beginning deserves beautiful celebrations.'
  },

  kn:{
   t:'ನಿಶ್ಚಿತಾರ್ಥ',
   h:'ಉಂಗುರ ಸಮಾರಂಭ',
   d:'ನವೆಂಬರ್ 12 · ರಾತ್ರಿ 8:00',
   w:'ಉಂಗುರಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಂಡು ಶಾಶ್ವತ ಜೀವನದ ಪಯಣಕ್ಕೆ ಅಧಿಕೃತವಾಗಿ ಹೆಜ್ಜೆ ಇಡುವ ಅವರ ಪ್ರೀತಿಯ ಆತ್ಮೀಯ ಸಂಭ್ರಮ. 💍✨',
   dress:'ಪಾಸ್ಟೆಲ್ ಮತ್ತು ಸೊಗಸಾದ',
   special:'ಸುಂದರ ಆರಂಭಕ್ಕೆ ಸುಂದರ ಸಂಭ್ರಮವೇ ಸೂಕ್ತ.'
  },

  te:{
   t:'నిశ్చితార్థం',
   h:'ఉంగరాల వేడుక',
   d:'నవంబర్ 12 · రాత్రి 8:00',
   w:'ఉంగరాలు మార్చుకుని శాశ్వత జీవిత ప్రయాణాన్ని అధికారికంగా ప్రారంభించే వారి ప్రేమకు అంకితమైన ఆత్మీయ వేడుక. 💍✨',
   dress:'పాస్టెల్ & ఎలిగెంట్',
   special:'అందమైన ఆరంభానికి అందమైన వేడుక అవసరం.'
  }
 },

 muhurtham:{
  i:'🪔',
  v:'Sri Bharathi Theertha Sabhabhavana, Sangankallu Road',

  en:{
   t:'MUHURTHAM',
   h:'Wedding Ceremony',
   d:'13 November · 8:00 AM',
   w:'The sacred wedding ceremony where the couple takes their vows and begins their journey together, surrounded by the blessings of their families and loved ones. 🪔❤️',
   dress:'🌺 Traditional Indian Wear',
   special:'Bless us with your presence as we begin our forever. 🪷'
  },

  kn:{
   t:'ಮುಹೂರ್ತ',
   h:'ಮದುವೆ ಸಮಾರಂಭ',
   d:'ನವೆಂಬರ್ 13 · ಬೆಳಿಗ್ಗೆ 8:00',
   w:'ಕುಟುಂಬ ಮತ್ತು ಪ್ರಿಯರ ಆಶೀರ್ವಾದಗಳ ನಡುವೆ ದಂಪತಿಗಳು ತಮ್ಮ ಪ್ರತಿಜ್ಞೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ ಒಟ್ಟಾಗಿ ಜೀವನ ಆರಂಭಿಸುವ ಪವಿತ್ರ ಮದುವೆ ಸಮಾರಂಭ. 🪔❤️',
   dress:'🌺 ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಉಡುಪು',
   special:'ನಮ್ಮ ಶಾಶ್ವತ ಜೀವನದ ಆರಂಭಕ್ಕೆ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯಿಂದ ಆಶೀರ್ವದಿಸಿ. 🪷'
  },

  te:{
   t:'ముహూర్తం',
   h:'వివాహ వేడుక',
   d:'నవంబర్ 13 · ఉదయం 8:00',
   w:'కుటుంబ సభ్యులు మరియు ప్రియమైన వారి ఆశీర్వాదాల మధ్య వధూవరులు ప్రమాణాలు చేసి కలిసి జీవిత ప్రయాణాన్ని ప్రారంభించే పవిత్ర వివాహ వేడుక. 🪔❤️',
   dress:'🌺 సంప్రదాయ భారతీయ దుస్తులు',
   special:'మా శాశ్వత జీవిత ఆరంభంలో మీ సాన్నిధ్యంతో ఆశీర్వదించండి. 🪷'
  }
 },

 reception:{
  i:'✨',
  v:'Sri Bharathi Theertha Sabhabhavana, Sangankallu Road',

  en:{
   t:'RECEPTION',
   h:'Reception',
   d:'13 November · 12:00 Noon',
   w:'An elegant afternoon celebrating the newlyweds with family and friends, followed by delicious food, music, photographs and lots of beautiful memories. ✨🥂',
   dress:'Soft luxury dress code',
   special:'Dress to dazzle as we celebrate the beginning of forever. ✨'
  },

  kn:{
   t:'ರಿಸೆಪ್ಷನ್',
   h:'ಆತಿಥ್ಯ ಸಮಾರಂಭ',
   d:'ನವೆಂಬರ್ 13 · ಮಧ್ಯಾಹ್ನ 12:00',
   w:'ಕುಟುಂಬ ಮತ್ತು ಸ್ನೇಹಿತರೊಂದಿಗೆ ನವದಂಪತಿಗಳನ್ನು ಸಂಭ್ರಮಿಸುವ ಸೊಗಸಾದ ಮಧ್ಯಾಹ್ನ; ರುಚಿಕರ ಊಟ, ಸಂಗೀತ, ಛಾಯಾಚಿತ್ರಗಳು ಮತ್ತು ಸುಂದರ ನೆನಪುಗಳೊಂದಿಗೆ. ✨🥂',
   dress:'ಸೊಗಸಾದ ಲಕ್ಸುರಿ ಉಡುಗೆ',
   special:'ಶಾಶ್ವತ ಜೀವನದ ಆರಂಭವನ್ನು ಸಂಭ್ರಮಿಸಲು ಮಿಂಚುವಂತೆ ಉಡುಗಿ ಬನ್ನಿ. ✨'
  },

  te:{
   t:'రిసెప్షన్',
   h:'రిసెప్షన్',
   d:'నవంబర్ 13 · మధ్యాహ్నం 12:00',
   w:'కుటుంబం మరియు స్నేహితులతో నూతన దంపతులను ఆహ్వానించే అందమైన మధ్యాహ్నం; రుచికరమైన భోజనం, సంగీతం, ఫోటోలు మరియు ఎన్నో మధుర జ్ఞాపకాలతో. ✨🥂',
   dress:'సాఫ్ట్ లగ్జరీ డ్రెస్ కోడ్',
   special:'శాశ్వత జీవిత ఆరంభాన్ని జరుపుకునేలా అందంగా మెరిసే దుస్తులతో రండి. ✨'
  }
 }

};


const safeStorage={
 get(k,f=''){
  try{
   return localStorage.getItem(k) ?? f
  }catch(e){
   return f
  }
 },

 set(k,v){
  try{
   localStorage.setItem(k,v)
  }catch(e){}
 }
};


let lang=safeStorage.get('weddingLang','en');

const langSelect=document.getElementById('languageSelect');

if(langSelect) langSelect.value=lang;


function applyLanguage(next){

 lang=next;

 safeStorage.set('weddingLang',lang);

 document.documentElement.lang=lang;

 document.body.classList.remove(
  'lang-en',
  'lang-kn',
  'lang-te'
 );

 document.body.classList.add('lang-'+lang);

 const dict=T[lang];

 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const k=el.dataset.i18n;

  if(dict[k]!=null){
   el.textContent=dict[k];
  }
 });

 document.querySelector('.upload small').textContent=
  lang==='en'
   ? 'Photos are stored only on this device in this demo.'
   : lang==='kn'
    ? 'ಈ ಡೆಮೊದಲ್ಲಿ ಚಿತ್ರಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಯುತ್ತವೆ.'
    : 'ఈ డెమోలో ఫోటోలు ఈ పరికరంలో మాత్రమే నిల్వ ఉంటాయి.';

 document.getElementById('guestName').placeholder=
  lang==='en'
   ? 'e.g. Ananya'
   : lang==='kn'
    ? 'ಉದಾ. ಅನನ್ಯ'
    : 'ఉదా. అనన్య';

 document.getElementById('guestRelation').placeholder=
  lang==='en'
   ? 'Friend / Family / College'
   : lang==='kn'
    ? 'ಸ್ನೇಹಿತ / ಕುಟುಂಬ / ಕಾಲೇಜು'
    : 'స్నేహితుడు / కుటుంబం / కాలేజ్';

 document.getElementById('guestMessage').placeholder=
  lang==='en'
   ? 'Write something we\'ll treasure forever...'
   : lang==='kn'
    ? 'ನಾವು ಸದಾ ನೆನಪಿನಲ್ಲಿಡುವಂತೆ ಏನಾದರೂ ಬರೆಯಿರಿ...'
    : 'మేము ఎప్పటికీ గుర్తుంచుకునేలా ఏదైనా రాయండి...';

 refreshShareLinks();

 document.title=
  lang==='en'
   ? 'Bhumika & Rakesh | The Beginning of Forever'
   : lang==='kn'
    ? 'ಭೂಮಿಕಾ & ರಾಕೇಶ್ | ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ'
    : 'భూమిక & రాకేష్ | శాశ్వత ప్రేమకు శ్రీకారం';

 if(typeof musicOn==='undefined' || !musicOn){
  const mt=document.getElementById('musicText');

  if(mt){
   mt.textContent=dict.musicSoft;
  }
 }
}


langSelect?.addEventListener(
 'change',
 e=>applyLanguage(e.target.value)
);

applyLanguage(lang);


const modal=document.getElementById('modal');


document.querySelectorAll('.card').forEach(c=>
 c.onclick=(evt)=>{

  evt.preventDefault();

  const e=eventData[c.dataset.event][lang];
  const base=eventData[c.dataset.event];

  document.getElementById('mi').textContent=base.i;
  document.getElementById('mt').textContent=e.t;
  document.getElementById('mh').textContent=e.h;
  document.getElementById('md').textContent=e.d;
  document.getElementById('mv').textContent=base.v;
  document.getElementById('mw').textContent=e.w;
  document.getElementById('mdd').textContent=e.dress;
  document.getElementById('ms').textContent=e.special;
  document.getElementById('map').textContent=T[lang].modalMap;

  document.getElementById('map').href=
   'https://www.google.com/maps/search/?api=1&query='+
   encodeURIComponent(base.v+' Ballary');

  document.querySelector('.dress span').textContent=
   T[lang].modalDress;

  modal.classList.add('open');

  document.body.style.overflow='hidden';
 }
);


function close(){
 modal.classList.remove('open');
 document.body.style.overflow=''
}

document.getElementById('close').onclick=close;

document.querySelector('.backdrop').onclick=close;

document.addEventListener(
 'keydown',
 e=>e.key==='Escape'&&close()
);


const wishKey='rakeshBhumikaWishesV1';

const wishForm=document.getElementById('wishForm');
const wishWall=document.getElementById('wishWall');
const emptyWall=document.getElementById('emptyWall');

const photoInput=document.getElementById('guestPhoto');
const preview=document.getElementById('photoPreview');
const statusEl=document.getElementById('formStatus');


function getWishes(){

 try{
  return JSON.parse(
   safeStorage.get(wishKey,'[]')||'[]'
  )
 }catch{
  return[]
 }
}


function renderWishes(){

 const items=getWishes();

 wishWall.innerHTML='';

 emptyWall.style.display=
  items.length?'none':'block';

 items.slice().reverse().forEach(x=>{

  const el=document.createElement('article');
  el.className='note';

  const h=document.createElement('h4');
  h.textContent=x.name;

  const rel=document.createElement('div');
  rel.className='relation';
  rel.textContent=x.relation||T[lang].guest;

  const p=document.createElement('p');
  p.textContent=x.message;

  el.append(h,rel,p);

  if(x.photo){

   const im=document.createElement('img');

   im.src=x.photo;
   im.alt=T[lang].sharedMemory;

   el.append(im);
  }

  wishWall.append(el);
 })
}


renderWishes();


photoInput?.addEventListener(
 'change',
 ()=>{

  preview.innerHTML='';

  const f=photoInput.files?.[0];

  if(!f)return;

  if(f.size>2.5*1024*1024){

   photoInput.value='';

   statusEl.textContent=T[lang].photoLimit;

   return;
  }

  const im=document.createElement('img');

  im.src=URL.createObjectURL(f);

  preview.append(im);
 }
);


wishForm?.addEventListener(
 'submit',
 e=>{

  e.preventDefault();

  const name=document.getElementById('guestName').value.trim();
  const relation=document.getElementById('guestRelation').value.trim();
  const message=document.getElementById('guestMessage').value.trim();
  const f=photoInput.files?.[0];

  const save=photo=>{

   const arr=getWishes();

   arr.push({
    name,
    relation,
    message,
    photo:photo||'',
    at:Date.now()
   });

   safeStorage.set(
    wishKey,
    JSON.stringify(arr)
   );

   renderWishes();

   wishForm.reset();

   preview.innerHTML='';

   statusEl.textContent=T[lang].added;
  };

  if(f){

   const r=new FileReader();

   r.onload=()=>save(r.result);

   r.readAsDataURL(f);

  }else{

   save('');

  }
 }
);


function invitationMessage(){

 return lang==='kn'
  ? 'ಭೂಮಿಕಾ ಮತ್ತು ರಾಕೇಶ್ ಅವರ ಮದುವೆಯ ಸಂಭ್ರಮಕ್ಕೆ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ — ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥'
  : lang==='te'
   ? 'భూమిక & రాకేష్ పెళ్లి వేడుకలో మాతో కలిసి జరుపుకోండి — శాశ్వత ప్రేమకు శ్రీకారం ♥'
   : 'Join us in celebrating Bhumika & Rakesh — The Beginning of Forever ♥'
}


function invitationUrl(){

 const u=
  location.protocol==='http:'||
  location.protocol==='https:'
   ? location.href
   : '';

 return 'https://wa.me/?text='+
  encodeURIComponent(
   invitationMessage()+
   (u?'\n'+u:'')
  );
}


const shareWhatsapp=
 document.getElementById('shareWhatsapp');


function refreshShareLinks(){

 if(shareWhatsapp){
  shareWhatsapp.href=invitationUrl();
 }
}


refreshShareLinks();


/* =========================================================
   LOCAL WEDDING MUSIC
   ========================================================= */

const musicBtn=
 document.getElementById('musicToggle');

const musicText=
 document.getElementById('musicText');

const weddingMusic=
 document.getElementById('weddingMusic');

let musicOn=false;


async function playWeddingMusic(){

 if(!weddingMusic)return;

 try{

  await weddingMusic.play();

  musicOn=true;

  if(musicText){
   musicText.textContent=T[lang].musicOn;
  }

  musicBtn?.classList.add('playing');

 }catch(error){

  console.log(
   'Music playback was blocked:',
   error
  );

 }
}


function stopWeddingMusic(){

 if(!weddingMusic)return;

 weddingMusic.pause();

 musicOn=false;

 if(musicText){
  musicText.textContent=T[lang].musicSoft;
 }

 musicBtn?.classList.remove('playing');
}


function toggleMusic(){

 if(musicOn){
  stopWeddingMusic();
 }else{
  playWeddingMusic();
 }

}


musicBtn?.addEventListener(
 'click',
 toggleMusic
);


/* Allows other parts of the website to start the music
   after a real user interaction if needed. */

window.__startWeddingMusic=
 playWeddingMusic;


/* =========================================================
   SHARE INVITATION
   ========================================================= */

const shareWedding=
 document.getElementById('shareWedding');

shareWedding?.addEventListener(
 'click',
 async()=>{

  const text=
   lang==='kn'
    ? 'ಭೂಮಿಕಾ ♥ ರಾಕೇಶ್ ಅವರ ಮದುವೆಗೆ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ — ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ ♥'
    : lang==='te'
     ? 'భూమిక ♥ రాకేష్ పెళ్లికి మాతో కలిసి రండి — శాశ్వత ప్రేమకు శ్రీకారం ♥'
     : 'Join us for Bhumika & Rakesh\'s wedding — The Beginning of Forever ♥';

  const shareData={
   title:'Bhumika ♥ Rakesh | The Beginning of Forever',
   text,
   url:location.href
  };

  try{

   if(navigator.share){

    await navigator.share(shareData);

    return;
   }

  }catch(e){}

  window.open(
   'https://wa.me/?text='+
   encodeURIComponent(
    text+'\n'+location.href
   ),
   '_blank'
  );
});


/* ===== V9: robust cinematic opening + multilingual controls ===== */

const EXTRA={

 en:{
  weds:'Weds',
  heroDate:'13 NOVEMBER · 8:00 AM',
  heroPlace:'Sri Bharathi Theertha Sabhabhavana · Sangankallu Road · Ballary',
  entryKicker:'WELCOME',
  entryHint:'Welcome to our celebration',
  entryRevealText:'A beautiful story is waiting inside…',
  entryEnter:'Enter the celebration ♥',
  unveilLabel:'A LITTLE SURPRISE',
  unveilEyebrow:'SCRATCH • REVEAL • CELEBRATE',
  unveilTitle:'Reveal our special dates',
  unveilSub:'Scratch each little paper to uncover the moments we are waiting for.',
  scratchDateLabel:'THE DATE',
  scratchDate:'13 NOVEMBER',
  scratchDateSub:'Our forever begins',
  scratchHaldiLabel:'FIRST CELEBRATION',
  scratchHaldi:'HALDI · 12 NOV',
  scratchHaldiSub:'Sunshine, flowers & laughter',
  scratchWeddingLabel:'THE SACRED MOMENT',
  scratchWedding:'MUHURTHAM · 13 NOV',
  scratchWeddingSub:'8:00 AM · Forever starts',
  scratchHint:'Scratch here ✦',

  dates:{
   haldi:'12 November · 10:00 AM',
   engagement:'12 November · 8:00 PM',
   muhurtham:'13 November · 8:00 AM',
   reception:'13 November · 12:00 Noon'
  }
 },

 kn:{
  weds:'ಮದುವೆ',
  heroDate:'ನವೆಂಬರ್ 13 · ಬೆಳಿಗ್ಗೆ 8:00',
  heroPlace:'ಶ್ರೀ ಭಾರತೀ ತೀರ್ಥ ಸಭಾಭವನ · ಸಂಗನಕಲ್ಲು ರಸ್ತೆ · ಬಳ್ಳಾರಿ',
  entryKicker:'ಸ್ವಾಗತ',
  entryHint:'ನಮ್ಮ ಸಂಭ್ರಮಕ್ಕೆ ಸ್ವಾಗತ',
  entryRevealText:'ಒಂದು ಸುಂದರ ಪ್ರೇಮಕಥೆ ನಿಮ್ಮನ್ನು ಕಾಯುತ್ತಿದೆ…',
  entryEnter:'ಸಂಭ್ರಮಕ್ಕೆ ಪ್ರವೇಶಿಸಿ ♥',
  unveilLabel:'ಒಂದು ಸಣ್ಣ ಅಚ್ಚರಿ',
  unveilEyebrow:'ಸ್ಕ್ರಾಚ್ ಮಾಡಿ • ತೆರೆದು ನೋಡಿ • ಸಂಭ್ರಮಿಸಿ',
  unveilTitle:'ನಮ್ಮ ವಿಶೇಷ ದಿನಗಳನ್ನು ನೋಡಿ',
  unveilSub:'ಪ್ರತಿ ಚಿಕ್ಕ ಕಾಗದವನ್ನು ಸ್ಕ್ರಾಚ್ ಮಾಡಿ, ನಮ್ಮ ಸಂಭ್ರಮದ ಕ್ಷಣಗಳನ್ನು ಅನಾವರಣಗೊಳಿಸಿ.',
  scratchDateLabel:'ಆ ವಿಶೇಷ ದಿನ',
  scratchDate:'ನವೆಂಬರ್ 13',
  scratchDateSub:'ನಮ್ಮ ಶಾಶ್ವತ ಜೀವನದ ಆರಂಭ',
  scratchHaldiLabel:'ಮೊದಲ ಸಂಭ್ರಮ',
  scratchHaldi:'ಹಲ್ದಿ · ನವೆಂಬರ್ 12',
  scratchHaldiSub:'ಸೂರ್ಯಕಿರಣ, ಹೂವುಗಳು ಮತ್ತು ನಗು',
  scratchWeddingLabel:'ಪವಿತ್ರ ಕ್ಷಣ',
  scratchWedding:'ಮುಹೂರ್ತ · ನವೆಂಬರ್ 13',
  scratchWeddingSub:'ಬೆಳಿಗ್ಗೆ 8:00 · ಶಾಶ್ವತ ಆರಂಭ',
  scratchHint:'ಇಲ್ಲಿ ಸ್ಕ್ರಾಚ್ ಮಾಡಿ ✦',

  dates:{
   haldi:'ನವೆಂಬರ್ 12 · ಬೆಳಿಗ್ಗೆ 10:00',
   engagement:'ನವೆಂಬರ್ 12 · ರಾತ್ರಿ 8:00',
   muhurtham:'ನವೆಂಬರ್ 13 · ಬೆಳಿಗ್ಗೆ 8:00',
   reception:'ನವೆಂಬರ್ 13 · ಮಧ್ಯಾಹ್ನ 12:00'
  }
 },

 te:{
  weds:'వివాహం',
  heroDate:'నవంబర్ 13 · ఉదయం 8:00',
  heroPlace:'శ్రీ భారతి తీర్థ సభాభవనం · సంగనకల్లు రోడ్ · బళ్లారి',
  entryKicker:'స్వాగతం',
  entryHint:'మా వేడుకకు స్వాగతం',
  entryRevealText:'ఒక అందమైన ప్రేమకథ మీ కోసం ఎదురుచూస్తోంది…',
  entryEnter:'వేడుకలోకి ప్రవేశించండి ♥',
  unveilLabel:'ఒక చిన్న సర్ప్రైజ్',
  unveilEyebrow:'స్క్రాచ్ చేయండి • రివీల్ చేయండి • సెలబ్రేట్ చేయండి',
  unveilTitle:'మా ప్రత్యేక రోజులను చూడండి',
  unveilSub:'ప్రతి చిన్న పేపర్‌ను స్క్రాచ్ చేసి మా వేడుకల మధుర క్షణాలను తెలుసుకోండి.',
  scratchDateLabel:'ఆ ప్రత్యేక రోజు',
  scratchDate:'నవంబర్ 13',
  scratchDateSub:'మా శాశ్వత ప్రయాణానికి శ్రీకారం',
  scratchHaldiLabel:'మొదటి వేడుక',
  scratchHaldi:'హల్దీ · నవంబర్ 12',
  scratchHaldiSub:'సూర్యకాంతి, పూలు & నవ్వులు',
  scratchWeddingLabel:'పవిత్ర క్షణం',
  scratchWedding:'ముహూర్తం · నవంబర్ 13',
  scratchWeddingSub:'ఉదయం 8:00 · శాశ్వత ఆరంభం',
  scratchHint:'ఇక్కడ స్క్రాచ్ చేయండి ✦',

  dates:{
   haldi:'నవంబర్ 12 · ఉదయం 10:00',
   engagement:'నవంబర్ 12 · రాత్రి 8:00',
   muhurtham:'నవంబర్ 13 · ఉదయం 8:00',
   reception:'నవంబర్ 13 · మధ్యాహ్నం 12:00'
  }
 }

};


/* V9 uses one reliable switch for both the opening
   screen and the full invitation. */

const _baseApplyLanguage=applyLanguage;

applyLanguage=function(next){

 if(!EXTRA[next])next='en';

 _baseApplyLanguage(next);

 lang=next;

 safeStorage.set(
  'weddingLang',
  lang
 );

 const x=EXTRA[lang];

 document.documentElement.lang=lang;

 document.body.classList.remove(
  'lang-en',
  'lang-kn',
  'lang-te'
 );

 document.body.classList.add(
  'lang-'+lang
 );

 document.querySelectorAll('[data-i18n]').forEach(el=>{

  const key=el.dataset.i18n;

  if(T[lang][key]!=null){
   el.textContent=T[lang][key];
  }

  if(x[key]!=null){
   el.textContent=x[key];
  }

 });

 document.querySelectorAll('[data-event-date]').forEach(el=>{

  const key=el.dataset.eventDate;

  if(x.dates[key]){
   el.textContent=x.dates[key];
  }

 });

 const selects=
  document.querySelectorAll(
   '#languageSelect,#entryLanguageSelect'
  );

 selects.forEach(s=>{
  s.value=lang;
 });

 const mt=
  document.getElementById('musicText');

 if(mt && !musicOn){
  mt.textContent=T[lang].musicSoft;
 }

 const hint=
  document.getElementById('entryHint');

 if(hint){
  hint.textContent=x.entryHint;
 }

 const title={
  en:'Bhumika & Rakesh | The Beginning of Forever',
  kn:'ಭೂಮಿಕಾ & ರಾಕೇಶ್ | ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಆರಂಭ',
  te:'భూమిక & రాకేష్ | శాశ్వత ప్రేమకు శ్రీకారం'
 }[lang];

 document.title=title;

};


const entryOverlay=
 document.getElementById('entryOverlay');

const entryDoor=
 document.getElementById('entryDoor');


/* The doors now open automatically.
   No tap or intro-photo step is required. */

function autoOpenDoors(){

 if(!entryOverlay || !entryDoor)return;

 entryDoor.classList.add('opened');

 document.body.classList.add(
  'invitation-started'
 );

 setTimeout(
  ()=>entryOverlay.classList.add('finished'),
  1300
 );

}


window.addEventListener(
 'load',
 ()=>setTimeout(autoOpenDoors,450),
 {once:true}
);


/* Language selectors are independent
   of the door animation. */

document.querySelectorAll(
 '#languageSelect,#entryLanguageSelect'
).forEach(select=>{

 select.addEventListener(
  'pointerdown',
  e=>e.stopPropagation()
 );

 select.addEventListener(
  'click',
  e=>e.stopPropagation()
 );

 select.addEventListener(
  'change',
  e=>applyLanguage(e.target.value)
 );

});


function createPaperShower(){

 const box=
  document.getElementById('paperShower');

 if(!box)return;

 const symbols=[
  '♥','✦','❀','♡','✧','❋'
 ];

 box.innerHTML='';

 for(let i=0;i<22;i++){

  const p=
   document.createElement('span');

  p.textContent=
   symbols[i%symbols.length];

  p.style.left=
   (Math.random()*100)+'%';

  p.style.animationDelay=
   (Math.random()*1.6)+'s';

  p.style.animationDuration=
   (3+Math.random()*3)+'s';

  box.appendChild(p);
 }

 setTimeout(
  ()=>box.innerHTML='',
  6500
 );

}


applyLanguage(
 safeStorage.get(
  'weddingLang',
  'en'
 )
);
