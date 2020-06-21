import Vegetables from "../static-data/assets/images/clubbed_veg.svg";
import Fruits from "../static-data/assets/images/clubbed_fruits.svg";
import Dairy from "../static-data/assets/images/milk.svg";
import Water from "../static-data/assets/images/water.svg";
import Breathing from "../static-data/assets/images/breathing.svg";
import Fever from "../static-data/assets/images/fever.svg";
import ChestPain from "../static-data/assets/images/chestPain.svg";
import Sneeze from "../static-data/assets/images/sneeze.svg";
import Throat from "../static-data/assets/images/throat.svg";
import Tiredness from "../static-data/assets/images/tiredness.svg";
import Handwashing from "../static-data/assets/images/handwashing.svg";
import HW_1 from "../static-data/assets/images/hw_1.svg";
import HW_2 from "../static-data/assets/images/hw_2.svg";
import HW_3 from "../static-data/assets/images/hw_3.svg";
import HW_4 from "../static-data/assets/images/hw_4.svg";
import HW_5 from "../static-data/assets/images/hw_5.svg";
import HW_6 from "../static-data/assets/images/hw_6.svg";
import HW_7 from "../static-data/assets/images/hw_7.svg";

const WOMEN_NUTRITION = {
  video_url: "https://youtu.be/StMCcxiRSL8",
  data: [
    {
      title: "सब्जियां",
      content: "जितनी ज्यादा सब्जियां और वैरायटी उतनी ही बेहतर।",
      image: Vegetables,
    },
    {
      title: "फल",
      image: Fruits,
      content:
        "पूरे फलों या कटे हुए फलों को चुनें (फलों के रस के बजाय) फलों के रस को प्रतिदिन एक छोटे गिलास तक सीमित करें।",
    },
    {
      title: "दुग्धालय",
      image: Dairy,
      content:
        "सादा दूध, सादा दही, कम मात्रा में पनीर और अन्य गैर मीठे डेयरी खाद्य पदार्थ चुनें।",
    },
    {
      title: "पानी",
      image: Water,
      content:
        "पानी हमारी प्यास बुझाने का सबसे अच्छा विकल्प है। यह चीनी मुक्त भी है, और निकटतम नल के रूप में आसानी से मिल जाता है।",
    },
  ],

  recommendations: [
    {
      URL: "https://www.youtube.com/watch?v=13cHnQ1Suj8",
      icon: Vegetables,
      title: "Recommended Video 1",
    },
    {
      URL: "https://youtu.be/sRFkbw44MxA",
      icon: Vegetables,
      title: "Recommended Video 2",
    },
    {
      URL: "https://www.youtube.com/watch?v=3qPgHJEtOHQ",
      icon: Vegetables,
      title: "Recommended Video 3",
    },
  ],
};

export const VIRUS_SYMPTOMS = {
  video_url: "https://youtu.be/8sAnmP_PaIA",
  data: [
    {
      title: "बुखार",
      content:
        "अगर आपको बुखार हो रहा है, तो यह कोरोनावायरस का संकेत हो सकता है",
      image: Fever,
    },
    {
      title: "सूखी खांसी",
      image: Sneeze,
      content:
        "अगर आपको सूखी खांसी हो रही है, तो यह कोरोनावायरस का संकेत हो सकता है",
    },
    {
      title: "थकान",
      image: Tiredness,
      content:
        "अगर आपको शरीर में थकान महसूस हो रही है, तो यह कोरोनावायरस का संकेत हो सकता है",
    },
    {
      title: "सांस लेने में समस्या",
      image: Breathing,
      content:
        "सांस लेने में समस्या, अगर आपकी सांस फूल रही है, तो यह एक लक्षण हो सकता है",
    },
    {
      title: "छाती में दर्द",
      image: ChestPain,
      content: "कोरोनावायरस फेफड़ों को प्रभावित करता है",
    },
    {
      title: "गले में समस्या",
      image: Throat,
      content:
        "आवाज और गले में समस्या होने पर तुरंत पास के सरकारी स्वास्थ्य सुविधा में खुद को चेक करवाएं",
    },
  ],

  recommendations: [
    {
      URL: "https://www.youtube.com/watch?v=StMCcxiRSL8",
      icon: Fever,
      title: "Recommended Video 1",
    },
    {
      URL: "https://www.youtube.com/watch?v=hMBKmQEPNzI",
      icon: Fever,
      title: "Recommended Video 2",
    },
    {
      URL: "https://www.youtube.com/watch?v=3qPgHJEtOHQ",
      icon: Fever,
      title: "Recommended Video 3",
    },
  ],
};

export const VIRUS_HANDWASHING = {
  video_url: "https://youtu.be/sRFkbw44MxA",
  data: [
    {
      title: "चरण १",
      content:
        "अपने हाथों को गीला करें और एक अच्छा झाग बनाने के लिए पर्याप्त साबुन लगाएं",
      image: HW_1,
    },
    {
      title: "चरण २",
      image: HW_2,
      content: "अपनी हथेलियों को घुमाते हुए रगड़ें",
    },
    {
      title: "चरण ३",
      image: HW_3,
      content:
        "पहले दाहिने हाथ की उंगलियों को बाएं हाथ के पीछे रगड़ें और फिर इसे उल्टा करें, अब दाएं हाथ के पीछे बाएं हाथ की उंगलियों को रगड़ें",
    },
    {
      title: "चरण ४",
      image: HW_4,
      content:
        "अपनी अंगुलियों को आपस में एक-दूसरे के सामने रखते हुए बीच-बीच में निकालें। फिर अपनी हथेलियों और उंगलियों को आपस में रगड़ें",
    },
    {
      title: "चरण ५",
      image: HW_5,
      content:
        "अपनी उंगलियों को एक साथ मिलाएं, अपने दाहिने हाथ के ऊपर और बाएं हाथ के नीचे। अपनी उंगलियों को गूंथने के साथ, अपनी हथेलियों के खिलाफ उनकी पीठ को रगड़ें जैसा कि इस चित्र में दिखाया गया है",
    },
    {
      title: "चरण ६",
      image: HW_6,
      content:
        "अपने दाहिने हाथ के अंगूठे को बाएं हाथ की हथेली में दबाएं और अंगूठे को घुमाते हुए रगड़ें फिर बाएं हाथ के अंगूठे के साथ भी ऐसा ही करें",
    },
    {
      title: "चरण ७",
      image: HW_7,
      content:
        "अपनी उंगलियों द्वारा बाईं हथेली के बीच में रगड़ें, फिर दाहिने हाथ से भी ऐसा ही करें",
    },
  ],

  recommendations: [
    {
      URL: "https://youtu.be/8sAnmP_PaIA",
      icon: Handwashing,
      title: "Recommended Video 1",
    },
    {
      URL: "https://youtu.be/8sAnmP_PaIA",
      icon: Handwashing,
      title: "Recommended Video 2",
    },
    {
      URL: "https://youtu.be/StMCcxiRSL8",
      icon: Handwashing,
      title: "Recommended Video 3",
    },
  ],
};

export default { WOMEN_NUTRITION, VIRUS_SYMPTOMS, VIRUS_HANDWASHING };
