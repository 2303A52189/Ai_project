import { Language, LessonContent, Scheme } from './types';

export const LANGUAGES = [
  { code: Language.EN, name: 'English' },
  { code: Language.HI, name: 'हिन्दी' },
  { code: Language.TE, name: 'తెలుగు' },
  { code: Language.ML, name: 'മലയാളം' },
];

export const LESSONS: LessonContent[] = [
  {
    id: 'soil-health',
    title: 'Soil Health Management',
    description: 'Explain soil fertility, nutrient cycles, and sustainable farming practices.',
    videoUrl: 'https://www.youtube.com/watch?v=W6HyGx-pqkI',
    relatedLinks: ['https://www.youtube.com/watch?v=Vx6H7Yl5r2Q'],
    narration: {
      [Language.EN]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        transcript: [
          { text: 'Healthy soil gives higher yields and better crop quality.', time: 0 },
          { text: 'It is important to maintain the organic matter in the soil.', time: 2 },
          { text: 'Proper irrigation techniques can prevent soil erosion.', time: 4 },
        ],
      },
      [Language.HI]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        transcript: [
          { text: 'स्वस्थ मिट्टी से अधिक उपज और बेहतर फसल गुणवत्ता मिलती है।', time: 0 },
          { text: 'मिट्टी में कार्बनिक पदार्थ बनाए रखना महत्वपूर्ण है।', time: 2 },
          { text: 'उचित सिंचाई तकनीकें मिट्टी के कटाव को रोक सकती हैं।', time: 4 },
        ],
      },
      [Language.TE]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        transcript: [
          { text: 'మంచి నేల ఆరోగ్యం వలన పంటలకు ఎక్కువ దిగుబడి వస్తుంది.', time: 0 },
          { text: 'మట్టిలో సేంద్రీయ పదార్థాన్ని నిర్వహించడం ముఖ్యం.', time: 2 },
          { text: 'సరైన నీటిపారుదల పద్ధతులు నేల కోతను నివారించగలవు.', time: 4 },
        ],
      },
      [Language.ML]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        transcript: [
          { text: 'ആരോഗ്യമുള്ള മണ്ണ് ഉയർന്ന വിളവും മികച്ച വിളയുടെ ഗുണനിലവാരവും നൽകുന്നു.', time: 0 },
          { text: 'മണ്ണിൽ ജൈവവസ്തുക്കൾ നിലനിർത്തേണ്ടത് പ്രധാനമാണ്.', time: 2 },
          { text: 'ശരിയായ ജലസേചന രീതികൾ മണ്ണൊലിപ്പ് തടയാൻ സഹായിക്കും.', time: 4 },
        ],
      },
    },
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation & Drip Irrigation',
    description: 'Explain efficient water usage and the benefits of drip irrigation systems.',
    videoUrl: 'https://www.youtube.com/watch?v=melP6QGp3lk',
    relatedLinks: ['https://www.youtube.com/watch?v=Qn1nCz3S9yA'],
    narration: {
      [Language.EN]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        transcript: [
          { text: 'Drip irrigation delivers water directly to the root zone.', time: 0 },
          { text: 'This method saves up to 50% of water compared to traditional methods.', time: 2 },
          { text: 'It also reduces weed growth and improves fertilizer efficiency.', time: 4 },
        ],
      },
      [Language.HI]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        transcript: [
          { text: 'ड्रिप सिंचाई सीधे जड़ क्षेत्र में पानी पहुँचाती है।', time: 0 },
          { text: 'यह विधि पारंपरिक तरीकों की तुलना में 50% तक पानी बचाती है।', time: 2 },
          { text: 'यह खरपतवार की वृद्धि को भी कम करती है और उर्वरक दक्षता में सुधार करती है।', time: 4 },
        ],
      },
      [Language.TE]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        transcript: [
          { text: 'బిందు సేద్యం నేరుగా వేరు మండలానికి నీటిని అందిస్తుంది.', time: 0 },
          { text: 'సాంప్రదాయ పద్ధతులతో పోలిస్తే ఈ పద్ధతి 50% వరకు నీటిని ఆదా చేస్తుంది.', time: 2 },
          { text: 'ఇది కలుపు మొక్కల పెరుగుదలను కూడా తగ్గిస్తుంది మరియు ఎరువుల సామర్థ్యాన్ని మెరుగుపరుస్తుంది.', time: 4 },
        ],
      },
      [Language.ML]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        transcript: [
          { text: 'ഡ്രിപ്പ് ഇറിഗേഷൻ വേരുകളിലേക്ക് നേരിട്ട് വെള്ളം എത്തിക്കുന്നു.', time: 0 },
          { text: 'പരമ്പരാഗത രീതികളെ അപേക്ഷിച്ച് ഈ രീതി 50% വരെ വെള്ളം ലാഭിക്കുന്നു.', time: 2 },
          { text: 'ഇത് കളകളുടെ വളർച്ച കുറയ്ക്കുകയും വളത്തിന്റെ കാര്യക്ഷമത വർദ്ധിപ്പിക്കുകയും ചെയ്യുന്നു.', time: 4 },
        ],
      },
    },
  },
  {
    id: 'organic-pest-control',
    title: 'Organic Pest Control Techniques',
    description: 'Describe eco-friendly pest control methods using natural pesticides and biological control.',
    videoUrl: 'https://www.youtube.com/watch?v=yHQWs6uqnNE',
    relatedLinks: ['https://www.youtube.com/watch?v=5k3t0pZk9wE'],
    narration: {
      [Language.EN]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        transcript: [
          { text: 'Neem oil is a natural pesticide that keeps many insects away.', time: 0 },
          { text: 'Using beneficial insects like ladybugs can control aphids.', time: 2 },
          { text: 'Crop rotation is another effective way to manage pests naturally.', time: 4 },
        ],
      },
      [Language.HI]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        transcript: [
          { text: 'नीम का तेल एक प्राकृतिक कीटनाशक है जो कई कीटों को दूर रखता है।', time: 0 },
          { text: 'लेडीबग्स जैसे लाभकारी कीटों का उपयोग एफिड्स को नियंत्रित कर सकता है।', time: 2 },
          { text: 'फसल चक्र कीटों को प्राकृतिक रूप से प्रबंधित करने का एक और प्रभावी तरीका है।', time: 4 },
        ],
      },
      [Language.TE]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
        transcript: [
          { text: 'వేప నూనె అనేక కీటకాలను దూరంగా ఉంచే సహజ పురుగుమందు.', time: 0 },
          { text: 'లేడీబగ్స్ వంటి ప్రయోజనకరమైన కీటకాలను ఉపయోగించడం వల్ల పేనుబంకను నియంత్రించవచ్చు.', time: 2 },
          { text: 'పంట మార్పిడి అనేది సహజంగా తెగుళ్లను నిర్వహించడానికి మరొక ప్రభావవంతమైన మార్గం.', time: 4 },
        ],
      },
      [Language.ML]: {
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
        transcript: [
          { text: 'വേപ്പെണ്ണ പല പ്രാണികളെയും അകറ്റി നിർത്തുന്ന ഒരു പ്രകൃതിദത്ത കീടനാശിനിയാണ്.', time: 0 },
          { text: 'ലേഡിബഗ്ഗുകളെപ്പോലെയുള്ള പ്രയോജനകരമായ പ്രാണികളെ ഉപയോഗിക്കുന്നത് കീടങ്ങളെ നിയന്ത്രിക്കാൻ സഹായിക്കും.', time: 2 },
          { text: 'വിള പരിക്രമണം കീടങ്ങളെ സ്വാഭാവികമായി നിയന്ത്രിക്കാനുള്ള മറ്റൊരു ഫലപ്രദമായ മാർഗമാണ്.', time: 4 },
        ],
      },
    },
  },
];

export const SOIL_TYPES = ['Alluvial', 'Black', 'Red', 'Laterite', 'Desert'];
export const PH_LEVELS = [5.5, 6.0, 6.5, 7.0, 7.5, 8.0];
export const LOCATIONS = ['Coastal', 'Plains', 'Hilly', 'Arid'];

export const GOVT_SCHEMES: Scheme[] = [
    {
        id: 'pm-kisan',
        title: 'PM-KISAN Scheme',
        description: 'Financial support of ₹6,000 per year to small and marginal farmers.',
        eligibility: 'All small and marginal farmers.',
        link: 'https://pmkisan.gov.in/',
    },
    {
        id: 'soil-health-card',
        title: 'Soil Health Card Scheme',
        description: 'Provides farmers with soil health cards, which carry crop-wise recommendations of nutrients and fertilizers.',
        eligibility: 'All farmers.',
        link: 'https://www.soilhealth.dac.gov.in/',
    },
    {
        id: 'pm-fby',
        title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        description: 'Crop insurance scheme to provide financial support to farmers suffering from crop loss/damage.',
        eligibility: 'Farmers growing notified crops in notified areas.',
        link: 'https://pmfby.gov.in/',
    },
    {
        id: 'kcc',
        title: 'Kisan Credit Card (KCC)',
        description: 'Provides farmers with timely access to credit for their cultivation and other needs.',
        eligibility: 'All farmers, including tenant farmers and sharecroppers.',
        link: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1603523',
    },
    {
        id: 'paramparagat-krishi',
        title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
        description: 'Promotes organic farming through a cluster approach and PGS certification.',
        eligibility: 'Groups of farmers interested in organic farming.',
        link: 'https://pgsindia-ncof.gov.in/pkvy/index.aspx',
    }
];
