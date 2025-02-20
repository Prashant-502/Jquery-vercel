"use strict";
self.addEventListener("message", e => {
	if (e.data === "start") {
		importScripts("../../via/controller/object.js",
			"../../via/controller/property.js",
			"../../via/controller/controller.js");
		Via.postMessage = (data => self.postMessage(data));
		Start();
	}
	else {
		Via.OnMessage(e.data);
	}
});
async function Start() {
	await fetch("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
		.then(function () {
			self.postMessage({ success: true });
			console.log('{ success: true }');
		})
		.catch(function (error) {
			self.postMessage({ success: false, message: error.message });
			console.log('{ success: false }' + ' message:' + error.message);
		});
}