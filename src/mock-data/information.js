import Vegetables from '../static-data/assets/images/clubbed_veg.svg'
import Fruits from '../static-data/assets/images/clubbed_fruits.svg'
import Dairy from '../static-data/assets/images/milk.svg'
import Water from '../static-data/assets/images/water.svg'

import Breathing from '../static-data/assets/images/breathing.svg'
import Fever from '../static-data/assets/images/fever.svg'
import ChestPain from '../static-data/assets/images/chestPain.svg'
import Sneeze from '../static-data/assets/images/sneeze.svg'
import Throat from '../static-data/assets/images/throat.svg'
import Tiredness from '../static-data/assets/images/tiredness.svg'

import Handwashing from '../static-data/assets/images/handwashing.svg'
import HW_1 from '../static-data/assets/images/hw_1.svg'
import HW_2 from '../static-data/assets/images/hw_2.svg'
import HW_3 from '../static-data/assets/images/hw_3.svg'
import HW_4 from '../static-data/assets/images/hw_4.svg'
import HW_5 from '../static-data/assets/images/hw_5.svg'
import HW_6 from '../static-data/assets/images/hw_6.svg'
import HW_7 from '../static-data/assets/images/hw_7.svg'

// import AvoidCrowds from '../static-data/assets/images/avoid_crowds.png'

export const WOMEN_NUTRITION = {
	video_url: 'https://youtu.be/StMCcxiRSL8',
	data: [
		{
			title: 'सब्जियां',
			content: 'जितनी ज्यादा सब्जियां और वैरायटी उतनी ही बेहतर।',
			image: Vegetables
		},
		{
			title: 'फल',
			image: Fruits,
			content: 'पूरे फलों या कटे हुए फलों को चुनें (फलों के रस के बजाय) फलों के रस को प्रतिदिन एक छोटे गिलास तक सीमित करें।'
		},
		{
			title: 'दुग्धालय',
			image: Dairy,
			content: 'सादा दूध, सादा दही, कम मात्रा में पनीर और अन्य गैर मीठे डेयरी खाद्य पदार्थ चुनें।'
		},
		{
			title: 'पानी',
			image: Water,
			content: 'पानी हमारी प्यास बुझाने का सबसे अच्छा विकल्प है। यह चीनी मुक्त भी है, और निकटतम नल के रूप में आसानी से मिल जाता है।'
		}
	],

	recommendations: [
		{
			URL: 'https://www.youtube.com/watch?v=13cHnQ1Suj8',
			icon: Vegetables,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://youtu.be/sRFkbw44MxA',
			icon: Vegetables,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://www.youtube.com/watch?v=3qPgHJEtOHQ',
			icon: Vegetables,
			title: 'Recommended Video 3'
		}
	]
}

export const VIRUS_SYMPTOMS = {
	video_url: 'https://youtu.be/8sAnmP_PaIA',
	data: [
		{
			title: 'बुखार',
			content: 'अगर आपको बुखार हो रहा है, तो यह कोरोनावायरस का संकेत हो सकता है',
			image: Fever
		},
		{
			title: 'सूखी खांसी',
			image: Sneeze,
			content: 'अगर आपको सूखी खांसी हो रही है, तो यह कोरोनावायरस का संकेत हो सकता है'
		},
		{
			title: 'थकान',
			image: Tiredness,
			content: 'अगर आपको शरीर में थकान महसूस हो रही है, तो यह कोरोनावायरस का संकेत हो सकता है'
		},
		{
			title: 'सांस लेने में समस्या',
			image: Breathing,
			content: 'सांस लेने में समस्या, अगर आपकी सांस फूल रही है, तो यह एक लक्षण हो सकता है'
		},
		{
			title: 'छाती में दर्द',
			image: ChestPain,
			content: 'कोरोनावायरस फेफड़ों को प्रभावित करता है'
		},
		{
			title: 'गले में समस्या',
			image: Throat,
			content: 'आवाज और गले में समस्या होने पर तुरंत पास के सरकारी स्वास्थ्य सुविधा में खुद को चेक करवाएं'
		}
	],

	recommendations: [
		{
			URL: 'https://www.youtube.com/watch?v=StMCcxiRSL8',
			icon: Fever,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://www.youtube.com/watch?v=hMBKmQEPNzI',
			icon: Fever,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://www.youtube.com/watch?v=3qPgHJEtOHQ',
			icon: Fever,
			title: 'Recommended Video 3'
		}
	]
}

export const VIRUS_HANDWASHING = {
	video_url: 'https://youtu.be/sRFkbw44MxA',
	data: [
		{
			title: 'चरण १',
			content: 'अपने हाथों को गीला करें और एक अच्छा झाग बनाने के लिए पर्याप्त साबुन लगाएं',
			image: HW_1
		},
		{
			title: 'चरण २',
			image: HW_2,
			content: 'अपनी हथेलियों को घुमाते हुए रगड़ें'
		},
		{
			title: 'चरण ३',
			image: HW_3,
			content:
				'पहले दाहिने हाथ की उंगलियों को बाएं हाथ के पीछे रगड़ें और फिर इसे उल्टा करें, अब दाएं हाथ के पीछे बाएं हाथ की उंगलियों को रगड़ें'
		},
		{
			title: 'चरण ४',
			image: HW_4,
			content:
				'अपनी अंगुलियों को आपस में एक-दूसरे के सामने रखते हुए बीच-बीच में निकालें। फिर अपनी हथेलियों और उंगलियों को आपस में रगड़ें'
		},
		{
			title: 'चरण ५',
			image: HW_5,
			content:
				'अपनी उंगलियों को एक साथ मिलाएं, अपने दाहिने हाथ के ऊपर और बाएं हाथ के नीचे। अपनी उंगलियों को गूंथने के साथ, अपनी हथेलियों के खिलाफ उनकी पीठ को रगड़ें जैसा कि इस चित्र में दिखाया गया है'
		},
		{
			title: 'चरण ६',
			image: HW_6,
			content:
				'अपने दाहिने हाथ के अंगूठे को बाएं हाथ की हथेली में दबाएं और अंगूठे को घुमाते हुए रगड़ें फिर बाएं हाथ के अंगूठे के साथ भी ऐसा ही करें'
		},
		{
			title: 'चरण ७',
			image: HW_7,
			content: 'अपनी उंगलियों द्वारा बाईं हथेली के बीच में रगड़ें, फिर दाहिने हाथ से भी ऐसा ही करें'
		}
	],

	recommendations: [
		{
			URL: 'https://youtu.be/8sAnmP_PaIA',
			icon: Handwashing,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://youtu.be/8sAnmP_PaIA',
			icon: Handwashing,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://youtu.be/StMCcxiRSL8',
			icon: Handwashing,
			title: 'Recommended Video 3'
		}
	]
}

export const VIRUS_OUTDOOR = {
	video_url: 'https://youtu.be/YJ0ybyKSgrw',
	data: [
		{
			title: 'हाथ धोना',
			content:
				'अपने हाथों को साबुन और पानी से बार-बार धोएं और कम से कम २० सेकंड तक रगड़ें अपने हाथों को साफ करने के लिए साबुन से हाथ धोना सबसे अच्छा तरीका है, या आप अल्कोहल आधारित सैनिटाइज़र का उपयोग भी कर सकते हैं',
			image: HW_1
		},
		{
			title: 'अपना चेहरा न छुएं',
			image: HW_2,
			content:
				'यह आसान लगता है, लेकिन करने के लिए कठिन है और सचेत प्रयास की आवश्यकता है आपके मुंह, आंखें, या नाक को छूने से आपके शरीर में प्रवेश करने के लिए वायरस की सीधी पहुंच हो सकती है'
		},
		{
			title: 'खांसी और छींक को ढकें',
			image: HW_3,
			content:
				'खांसी और छींक को अपनी कोहनी या ऊपरी बांह के अंदर से ढकें छींक या खांसी को ढंकने के लिए आप रूमाल या दुपट्टा का उपयोग भी कर सकते हैं'
		},
		{
			title: 'घर पर रहें',
			image: HW_4,
			content:
				'घर पर रहें यदि आप बीमार महसूस कर रहे हैं या आप पहले से मौजूद चिकित्सा स्थितियों जैसे कि उच्च रक्तचाप, हृदय रोग, फेफड़े की बीमारी, कैंसर या मधुमेह से पीड़ित हैं क्योंकि इन लक्षणों वाले लोग दूसरों की तुलना में गंभीर बीमारी विकसित कर रहे हैं'
		},
		{
			title: 'सामाजिक दूरी बनाए',
			image: HW_5,
			content:
				'दूसरों से कम से कम ६ फीट की दूरी पर रहें\
        यह सलाह दी जाती है क्योंकि खांसी या छींक से सांस की बूंदें ६ फीट तक की दूरी तय कर सकती हैं\
        इसलिए दूर रहकर अपनी रक्षा करो'
		},
		{
			title: 'गले न लगाएं',
			image: HW_6,
			content: 'दूसरों को गले न लगाएं और दूसरे से हाथ न मिलाएं'
		},
		{
			title: 'मास्क से ढकें',
			image: HW_7,
			content:
				'अपने मुंह और नाक को मास्क या स्तरित कपड़े से उन जगहों पर ढकें, जहां सामाजिक दूरी को बनाए रखना मुश्किल हो\
      ऐसा इसलिए है क्योंकि अब हम जानते हैं कि लक्षण विकसित होने से पहले ७२ घंटों के दौरान वायरस से संक्रमित लोग सबसे अधिक संक्रामक होते हैं'
		},
		{
			title: 'भीड़ में न जाएं',
			image: HW_7,
			content:
				'भीड़ से बचने के लिए सचेत प्रयास करें\
        विशेष रूप से इस समय में, सार्वजनिक या निजी समारोहों में न जाएं\
        बस, ट्रेन या टैक्सी लेने के बजाय निजी वाहन से जाएं या पैदल जाने की कोशिश करें'
		},
		{
			title: 'नकद भुगतान से बचें',
			image: HW_7,
			content:
				'नकद भुगतान से बचने की कोशिश करें\
      क्योंकि कई लोगों द्वारा कागजी मुद्रा को स्पर्श किया जाता है और यह संक्रमित व्यक्ति से स्वस्थ व्यक्ति में वायरस को आसानी से स्थानांतरित कर सकता है\
      अगर आप नोटों को छूते हैं तो उसके बाद चेहरे को न छुएं और अपने हाथों को अच्छे से धोएं'
		}
	],

	recommendations: [
		{
			URL: 'https://youtu.be/sRFkbw44MxA',
			icon: Handwashing,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://youtu.be/8sAnmP_PaIA',
			icon: Handwashing,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://youtu.be/StMCcxiRSL8',
			icon: Handwashing,
			title: 'Recommended Video 3'
		}
	]
}

export const VIRUS_INDOOR = {
	video_url: 'https://youtu.be/g1b02X2xdgI',
	data: [
		{
			title: 'सतहों को साफ रखें',
			content:
				'सतहों को साफ करने के लिए, सैनिटाइज़र या ब्लीच का उपयोग किया जा सकता है\
				लेकिन पानी के साथ मिश्रित घरेलू ब्लीच का उपयोग करना बहुत ही किफायती है\
				उल्लेख उन सतहों की सूची है जिन्हें आपको घर में साफ करना नहीं भूलना चाहिए\
				फर्श, दरवाज़े के हैंडल, सीढ़ी की रेलिंग, फ्रिज और सोफे के लकड़ी के हिस्सों को ब्लीच और कपड़े से पोंछना चाहिए',
			image: HW_1
		},
		{
			title: 'अधिक छूई जाने वाली सतहें',
			image: HW_2,
			content:
				'सबसे महत्वपूर्ण बात यह याद रखें कि आपका मोबाइल सबसे अधिक स्पर्श वाली सतहों में से है\
				इसलिए नियमित समय अंतराल में मोबाइल कीटाणुरहित करें'
		}
	],

	recommendations: [
		{
			URL: 'https://youtu.be/sRFkbw44MxA',
			icon: Handwashing,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://youtu.be/8sAnmP_PaIA',
			icon: Handwashing,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://youtu.be/StMCcxiRSL8',
			icon: Handwashing,
			title: 'Recommended Video 3'
		}
	]
}

export const VIRUS_OUTDOOR_TO_INDOOR = {
	video_url: 'https://youtu.be/fTfjSBaBtM8',
	data: [
		{
			title: 'सर्वप्रथम',
			content:
				'जैसे ही आप बाहर से आते हैं, अपने हाथों को साबुन और पानी से धोएं या सैनिटाइज़र से साफ करें\
				हाथ धोने के निर्देश ठीक से हाथ धोने वाले खंड में दिए गए हैं\
				यदि संभव हो तो, घर में कुछ भी छूने से पहले स्नान करें',
			image: HW_1
		},
		{
			title: 'दूसरा',
			image: HW_3,
			content:
				'इन समयों में केवल आवश्यक सामान लाएं और यदि संभव हो तो उन्हें ब्लीच या सैनिटाइज़र के साथ कीटाणुरहित करें\
				किसी भी अनावश्यक सामान को घर पर लाने से बचें'
		},
		{
			title: 'तीसरा',
			image: HW_4,
			content:
				'यदि आप कई बार उपयोग किए जाने वाले मास्क पहन रहे हैं तो इसे बाहर से आने पर हर बार धोएं\
				बाहर से आने के बाद अपने कपड़े धोना बहुत आवश्यक है'
		}
	],

	recommendations: [
		{
			URL: 'https://youtu.be/sRFkbw44MxA',
			icon: Handwashing,
			title: 'Recommended Video 1'
		},
		{
			URL: 'https://youtu.be/8sAnmP_PaIA',
			icon: Handwashing,
			title: 'Recommended Video 2'
		},
		{
			URL: 'https://youtu.be/StMCcxiRSL8',
			icon: Handwashing,
			title: 'Recommended Video 3'
		}
	]
}

export default { WOMEN_NUTRITION, VIRUS_SYMPTOMS, VIRUS_HANDWASHING, VIRUS_OUTDOOR, VIRUS_INDOOR, VIRUS_OUTDOOR_TO_INDOOR }
