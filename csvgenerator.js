var names = ["Helaine Angert", "Johnathon Markee", "Dorian Kumar", "Xuan Sandridge", "Elida Earnshaw", "Bridgett Lown", "Ilene Mershon", "Rolanda Denley", "Lucienne Bianco", "Elfriede Stebbins", "Halley Stage", "Trisha Kearl", "Nenita Reedy", "Gaynell Lucky", "Corrina Kraemer", "Krysta Mcfetridge", "Candace Barksdale", "Robena Hetzler", "Tianna Lafreniere", "Stephany Ridenhour", "Ervin Gardener", "Earlie Tallmadge", "Rosalba Christianson", "Tamesha Bouska", "Sabrina Burtch", "Herschel Paez", "Annabell Bruns", "Ranee Claro", "Anisa Geise", "Nelle Rueter", "Shanna Buse", "Carri Ramsay", "Luvenia Debolt", "Elva Yung", "Reagan Linscott", "Joyce Gettings", "Mozella Mcwhorter", "Kenia Corchado", "Burl Chau", "Staci Lauria", "Winford Manigault", "Laurinda Kerley", "Wally Geyer", "Maryann Tyrrell", "Rufina Littler", "Shanae Brisker", "Timothy Lansberry", "Nickie Threet", "Ray Boring"];
var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+<>?}{[]";
var accountCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
var urls = ["facebook.com/", "twitter.com/", "google.com/", "youtube.com/", "linkedin.com/", "wordpress.org/", "instagram.com/", "pinterest.com/", "wikipedia.org/", "wordpress.com/", "blogspot.com/", "apple.com/", "adobe.com/", "tumblr.com/", "youtu.be/", "amazon.com/", "vimeo.com/", "goo.gl/", "godaddy.com/", "yahoo.com/", "microsoft.com/", "flickr.com/", "bit.ly/", "qq.com/", "buydomains.com/", "whoisprivacyprotect.com/", "w3.org/", "vk.com/", "nytimes.com/", "reddit.com/", "baidu.com/", "t.co/", "europa.eu/", "ascii.co.uk/", "bbc.co.uk/", "statcounter.com/", "weebly.com/", "myspace.com/", "gov.uk/", "yandex.ru/", "soundcloud.com/", "blogger.com/", "mozilla.org/", "google.de/", "github.com/", "bluehost.com/", "cnn.com/", "wix.com/", "addthis.com/", "parallels.com/", "creativecommons.org/", "huffingtonpost.com/", "issuu.com/", "miitbeian.gov.cn/", "feedburner.com/", "nih.gov/", "go.com/", "imdb.com/", "theguardian.com/", "digg.com/", "stumbleupon.com/", "forbes.com/", "google.co.jp/", "123-reg.co.uk/", "paypal.com/", "tinyurl.com/", "wsj.com/", "wp.com/", "jimdo.com/", "msn.com/", "dropbox.com/", "miibeian.gov.cn/", "wixsite.com/", "washingtonpost.com/", "slideshare.net/", "amazonaws.com/", "yelp.com/", "weibo.com/", "google.co.uk/", "eventbrite.com/", "telegraph.co.uk/", "archive.org/", "etsy.com/", "addtoany.com/", "reuters.com/", "typepad.com/", "sourceforge.net/", "free.fr/", "domainmarket.com/", "livejournal.com/", "bloomberg.com/", "about.com/", "ebay.com/", "dailymail.co.uk/", "aol.com/", "bing.com/", "mail.ru/", "sina.com.cn/", "usatoday.com/", "ameblo.jp/", "fc2.com/", "amazon.co.uk/", "51.la/", "time.com/", "secureserver.net/", "macromedia.com/", "e-recht24.de/", "taobao.com/", "domainactive.co/", "wikimedia.org/", "constantcontact.com/", "gravatar.com/", "yahoo.co.jp/", "eepurl.com/", "amazon.de/", "harvard.edu/", "latimes.com/", "npr.org/", "cdc.gov/", "guardian.co.uk/", "xing.com/", "surveymonkey.com/", "live.com/", "dailymotion.com/", "webs.com/", "namejet.com/", "mit.edu/", "blogspot.co.uk/", "amzn.to/", "list-manage.com/", "stanford.edu/", "wired.com/", "bbb.org/", "icio.us/", "opera.com/", "apache.org/", "tripadvisor.com/", "businessinsider.com/", "rambler.ru/", "hostnet.nl/", "nasa.gov/", "kickstarter.com/", "independent.co.uk/", "cnet.com/", "cpanel.net/", "hatena.ne.jp/", "bandcamp.com/", "bbc.com/", "gnu.org/", "geocities.com/", "cpanel.com/", "scribd.com/", "amazon.co.jp/", "joomla.org/", "elegantthemes.com/", "ted.com/", "163.com/", "imgur.com/", "photobucket.com/", "google.it/", "behance.net/", "tripod.com/", "directdomains.com/", "delicious.com/", "medium.com/", "1und1.de/", "google.fr/", "googleusercontent.com/", "deviantart.com/", "un.org/", "disqus.com/", "trustpilot.com/", "pbs.org/", "github.io/", "ca.gov/", "who.int/", "wiley.com/", "nationalgeographic.com/", "mashable.com/", "google.es/", "cbsnews.com/", "ibm.com/", "goodreads.com/", "berkeley.edu/", "google.ca/", "whitehouse.gov/", "barnesandnoble.com/", "homestead.com/", "detik.com/", "nbcnews.com/", "spotify.com/", "foxnews.com/", "theatlantic.com/", "one.com/", "rakuten.co.jp/", "nature.com/", "buzzfeed.com/", "techcrunch.com/", "plesk.com/", "cornell.edu/", "beian.gov.cn/", "usda.gov/", "squarespace.com/", "sciencedirect.com/", "loopia.se/", "mijndomein.nl/", "change.org/", "ft.com/", "vkontakte.ru/", "blogspot.com.es/", "visma.com/", "loopia.com/", "cbc.ca/", "doubleclick.net/", "sakura.ne.jp/", "epa.gov/", "noaa.gov/", "blogspot.ca/", "ow.ly/", "php.net/", "blogspot.de/", "webmd.com/", "economist.com/", "loc.gov/", "springer.com/", "meetup.com/", "sfgate.com/", "spiegel.de/", "4.cn/", "technorati.com/", "nps.gov/", "themeforest.net/", "networksolutions.com/", "bizjournals.com/", "usnews.com/", "ning.com/", "cbslocal.com/", "wikia.com/", "engadget.com/", "prnewswire.com/", "chicagotribune.com/", "wp.me/", "xinhuanet.com/", "newyorker.com/", "gizmodo.com/", "abc.net.au/", "list-manage1.com/", "bola.net/", "slate.com/", "cnbc.com/", "cloudfront.net/", "skype.com/", "jiathis.com/", "hp.com/", "about.me/", "fda.gov/", "foursquare.com/", "line.me/", "mapquest.com/", "nydailynews.com/", "blogspot.fr/", "wufoo.com/", "umich.edu/", "businessweek.com/", "acquirethisname.com/", "marriott.com/", "domainname.de/", "booking.com/", "house.gov/", "state.gov/", "1and1.fr/", "unesco.org/", "bigcartel.com/", "fortune.com/", "yale.edu/", "columbia.edu/", "indiegogo.com/", "ustream.tv/", "ed.gov/", "youku.com/", "irs.gov/", "storify.com/", "phpbb.com/", "sogou.com/", "sedo.com/", "rs6.net/", "geocities.jp/", "google.com.au/", "examiner.com/", "google.nl/", "vice.com/", "myshopify.com/", "nifty.com/", "upenn.edu/", "boston.com/", "indiatimes.com/", "naver.com/", "a8.net/", "washington.edu/", "hibu.com/", "fb.me/", "hilton.com/", "marketwatch.com/", "histats.com/", "home.pl/", "livedoor.jp/", "axs.com/", "doi.org/", "ocn.ne.jp/", "weather.com/", "oracle.com/", "zdnet.com/", "nhs.uk/", "afternic.com/", "smh.com.au/", "1and1.com/", "senate.gov/", "ucla.edu/", "archives.gov/", "theverge.com/", "samsung.com/", "android.com/", "businesswire.com/", "fb.com/", "domainnameshop.com/", "linksynergy.com/", "uk2.net/", "phoca.cz/", "theglobeandmail.com/", "nypost.com/", "utexas.edu/", "umn.edu/", "wunderground.com/", "umblr.com/", "wisc.edu/", "scientificamerican.com/", "domeneshop.no/", "fastcompany.com/", "enable-javascript.com/", "alibaba.com/", "psu.edu/", "debian.org/", "dribbble.com/", "ap.org/", "academia.edu/", "ox.ac.uk/", "thetimes.co.uk/", "uol.com.br/", "campaign-archive1.com/", "sagepub.com/", "clickbank.net/", "bestfwdservice.com/", "campaign-archive2.com/", "nazwa.pl/", "salon.com/", "dreamhost.com/", "mailchimp.com/", "sciencemag.org/", "si.edu/", "worldbank.org/", "ftc.gov/", "goo.ne.jp/", "wikihow.com/", "census.gov/", "intel.com/", "mozilla.com/", "gofundme.com/", "walmart.com/", "google.com.br/", "princeton.edu/", "nymag.com/", "discovery.com/", "t-online.de/", "evernote.com/", "elpais.com/", "mirror.co.uk/", "fbcdn.net/", "drupal.org/", "houzz.com/", "usgs.gov/", "mlb.com/", "hostgator.com/", "inc.com/", "networkadvertising.org/", "cam.ac.uk/", "rollingstone.com/", "nyu.edu/", "hbr.org/", "alexa.com/", "cisco.com/", "thedailybeast.com/", "oxfordjournals.org/", "arstechnica.com/", "prweb.com/", "lemonde.fr/", "newsweek.com/", "entrepreneur.com/", "icann.org/", "xiti.com/", "politico.com/", "studiopress.com/", "google.pl/", "exblog.jp/", "tandfonline.com/", "oecd.org/", "dropboxusercontent.com/", "cmu.edu/", "uchicago.edu/", "aboutcookies.org/", "target.com/", "odin.com/", "espn.com/", "globo.com/", "hollywoodreporter.com/", "feedly.com/", "hhs.gov/", "allaboutcookies.org/", "lifehacker.com/", "ok.ru/", "list-manage2.com/", "mysql.com/", "shareasale.com/", "livestream.com/", "hubspot.com/", "dell.com/", "stackoverflow.com/", "zendesk.com/", "aljazeera.com/", "office.com/", "news.com.au/", "smugmug.com/", "youronlinechoices.com/", "web.de/", "tripadvisor.co.uk/", "admin.ch/", "researchgate.net/", "jugem.jp/", "bls.gov/", "adweek.com/", "cafepress.com/", "usc.edu/", "variety.com/", "att.com/", "duke.edu/", "bmj.com/", "unc.edu/", "mtv.com/", "redcross.org/", "shinystat.com/", "nhk.or.jp/", "today.com/", "ieee.org/", "example.com/", "box.com/", "ewebdevelopment.com/", "accuweather.com/", "themegrill.com/", "com.com/", "fao.org/", "apa.org/", "ebay.co.uk/", "ucsd.edu/", "telnames.net/", "liveinternet.ru/", "seattletimes.com/", "istockphoto.com/", "army.mil/", "va.gov/", "nielsen.com/", "nsw.gov.au/", "venturebeat.com/", "register.it/", "managemy.tel/", "netflix.com/", "bostonglobe.com/", "teamviewer.com/", "washingtontimes.com/", "vox.com/", "pcworld.com/", "dot.gov/", "symantec.com/", "warnerbros.com/", "google.co.in/", "telegram.me/", "blogspot.jp/", "ibtimes.com/", "bund.de/", "gpo.gov/", "antaranews.com/", "shop-pro.jp/", "dandomain.dk/", "prezi.com/", "netscape.com/", "google.ru/", "eventbrite.co.uk/", "usa.gov/", "nginx.org/", "aliyun.com/", "windowsphone.com/"];
var generateButton = document.getElementById("button");

particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
});

const perfixList = {
	visa: [
		"4539",
		"4556",
		"4916",
		"4532",
		"4929",
		"4485",
		"4716",
	],
	masterCard: [
		"51",
		"52",
		"53",
		"54",
		"55"
	],
	amex: [
		"34",
		"37"
	],
	discover: [
		"6011"
	],
	diners: [
		"300",
		"301",
		"302",
		"303",
		"36",
		"38"
	],
	enRoute: [
		"2014",
		"2149"
	],
	jcb: [
		"35"
	],
	voyager: [
		"8699"
	]
};

function getRandomEntryFromArray(arr) {
	return arr[Math.floor(Math.random() * (arr.length))];
}

var generator = {
	url: function() {
		var url = getRandomEntryFromArray(urls);
		return url;
	},
	username: function() {
		var username = "";
		for (let i = 0; i < 5; i++) {
			username += getRandomEntryFromArray(accountCharacters);
		}
		return username + "@gmail.com";
	},
	password: function() {
		var password = "";
		for (let i = 0; i < 36; i++) {
			password += getRandomEntryFromArray(passwordCharacters);
		}
		return password;
	},
	cardNumber: function() {
		let key = getRandomEntryFromArray(Object.keys(perfixList));
		var cardPrefix = getRandomEntryFromArray(perfixList[key]);
		var numbersToGenerate = (16 - cardPrefix.length);
		var cardNumber = "";
		for (let i = 0; i < numbersToGenerate; i++) {
			cardNumber += Math.floor(Math.random() * 10)
		}
		return ("" + cardPrefix + cardNumber);
	},
	cvv: function() {
		var cvv = "";
		for (let i = 0; i < 3; i++) {
			cvv += Math.floor(Math.random() * 10);
		}
		return cvv;
	},
	expDate: function() {
		var firstTwo = "";
		var lastTwo = "";
		for (let i = 0; i < 2; i++) {
			firstTwo = Math.floor(Math.random() * 12 + 1);
			lastTwo = Math.floor(Math.random() * 50 + 10);
		}
		return (firstTwo + "/" + "20" + lastTwo);
	},
	name: function() {
		var name = [getRandomEntryFromArray(names)];
		return name;
	},
	title: function() {
		var length = Math.floor(Math.random() * 10 + 1);
		var title = "";
		for (let i = 0; i < length; i++) {
			title += getRandomEntryFromArray(passwordCharacters);
		}
		return title;
	},
	content: function() {
		var length = Math.floor(Math.random() * 100 + 1);
		var content = "";
		for (let i = 0; i < length; i++) {
			content += getRandomEntryFromArray(passwordCharacters);
		}
		return content;
	}
};

class Box {
	constructor(opts) {
		this.id = opts.id;
		this.adapter = opts.adapter;
		this.inputId = opts.inputId;
		this.min = opts.min;
		this.max = opts.max;
		let button = this.id,
			input = this.inputId;
		button.addEventListener("click", function(ev) {
			if (ev.target.tagName === 'INPUT')
				return;
			button.classList.toggle('active');
			input.classList.remove('wrongInput');
			input.value = "";
			input.focus();
			errorMsg.innerHTML = "";
			ev.preventDefault();
		});
	}
	isValid() {
		let valid = (this.getNumber() >= this.min && this.getNumber() <= this.max);
		if (!valid) {
			this.inputId.classList.add('wrongInput');
			alert(`Please enter a value between ${this.min} and ${this.max}`);
		} else {
			this.inputId.classList.remove('wrongInput');
		}
		return valid;
	}
	getNumber() {
		return this.inputId.value;
	}
	isSelected() {
		return this.id.classList.contains("active");
	}
	generate() {
		if (!this.isSelected()) {
			return;
		}
		if (!this.isValid()) {
			throw new Error('InvalidNumber')
		}
		downloadCSV((new ItemList(this.adapter, this.getNumber())).toCSV(), this.adapter.getFileName());
	}
}

class Item {
	get() {
		return {};
	}
	static getCSVHeaders() {
		return [];
	}
	toCSV(params) {
		params = params || [];
		return params.join(",");
	}
}

class Password extends Item {
	constructor() {
		super();
		this.username = generator.username();
		this.password = generator.password();
		this.url = generator.url();
	}
	static getCSVHeaders() {
		return ["Username", "Password", "URL"];
	}
	static getFileName() {
		return "passwords.csv"
	}
	get() {
		return {
			username: this.username,
			password: this.password,
			url: this.url,
		}
	}
	toCSV() {
		return super.toCSV([this.username, this.password, this.url]);
	}
}

class CreditCard extends Item {
	constructor() {
		super();
		this.cardNumber = generator.cardNumber();
		this.name = generator.name();
		this.exp = generator.expDate();
		this.cvv = generator.cvv();
	}
	static getFileName() {
		return "creditcards.csv"
	}
	static getCSVHeaders() {
		return ["Card Number", "Name", "Expiry Date", "CVV"];
	}
	get() {
		return {
			cardNumber: this.cardNumber,
			name: this.name,
			exp: this.exp,
			cvv: this.cvv,
		}
	}
	toCSV() {
		return super.toCSV([this.cardNumber, this.name, this.exp, this.cvv]);
	}
}

class Note extends Item {
	constructor() {
		super();
		this.title = generator.title();
		this.content = generator.content();
	}
	static getFileName() {
		return "notes.csv"
	}
	static getCSVHeaders() {
		return ["Title", "Content"];
	}
	get() {
		return {
			title: this.title,
			content: this.content
		}
	}
	toCSV() {
		return super.toCSV([this.title, this.content]);
	}
}

class ItemList { 
	constructor(ItemClass, number) {
		if (!ItemClass.prototype instanceof Item)
			throw new Error("Invalid Item Class");
		this.items = [];
		this.ItemClass = ItemClass;
		for (let i = 0; i < number; i++) {
			this.items.push(new ItemClass());
		}
	}
	toCSV() {
		let arr = this.items.map(function(item) {
			return item.toCSV();
		})
		arr.unshift(this.ItemClass.getCSVHeaders());
		return arr.join('\n');
	}
}

var boxes = [{
	id: document.getElementById("password"),
	adapter: Password,
	inputId: document.getElementById("passwordNumber"),
	min: 1,
	max: 15000
},
{
	id: document.getElementById("card"),
	adapter: CreditCard,
	inputId: document.getElementById("cardNumber"),
	min: 1,
	max: 20,
},
{
	id: document.getElementById("note"),
	adapter: Note,
	inputId: document.getElementById("noteNumber"),
	min: 1,
	max: 50,
}].map(function(b) {
	return new Box(b);
});

function downloadCSV(csv, fileName) {
	csv = 'data:text/csv;charset=utf-8,' + csv;
	var data = encodeURI(csv);
	var link = document.createElement('a');
	link.setAttribute('href', data);
	link.setAttribute('download', fileName);
	link.click();
}

generateButton.addEventListener("click", function() {
	let valid = true;
	boxes.forEach(function(box) {
		if (box.isSelected() && !box.isValid())
			valid = false;
	});
	if (!valid) {
		throw new Error('not valid');
	}
	boxes.forEach(function(box) {
		box.generate();
	});
});