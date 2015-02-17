i18n.lang = {
	//locale properties
	"langCode": "fr-FR",
	"langName": "French - France",
	"fromCode": "en-US",
	"direction": "ltr",
	"load": function () {
		//this would be run after loading (translating to) this locale
		console.log('locale load function');
		$('<div></div>', {id: 'note', text: 'Note: translations have been done using Google translate.'}).appendTo('body');
	},
	"unload": function () {
		//this would be run after unloading this locale
		//usually undo things done in load
		console.log('locale unload function');
		$('#note').remove();
	},
	/* translations */
	"context": {
		"i18n.js usage example": "Exemple d'utilisation i18n.js",
		"This is a test header": "Ce est une tête de test",
		"i18n.js is a flexible internationalization library for JavaScript.": "i18n.js est une bibliothèque d'internationalisation flexible pour JavaScript.",
		"customContext": {
			"Number test:": "Nombre test:",
			"Date test:": "Date de l'essai:",
			"Current locale:": "Locale actuelle:",
		},
	}
};
