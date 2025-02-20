"use strict";

self.addEventListener("message", async (e) => {
    if (e.data === "loadJQuery") {
        importScripts("../../via/controller/object.js", "../../via/controller/property.js", "../../via/controller/controller.js");
        Via.postMessage = (data) => self.postMessage(data);
        await loadJQuery();
    } else {
        Via.OnMessage(e.data);
    }
});


async function loadJQuery() {
    try {
        const response = await fetch("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js");
        const script = await response.text();
        self.postMessage({ script: script, success: true, message: "jQuery loaded successfully!" });
    } catch (error) {
        self.postMessage({ success: false, message: "Failed to load jQuery: " + error.message });
    }
}