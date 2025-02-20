
"use strict";

self.addEventListener("message", async (e) => {
    if (e.data === "loadSlickSlider") {
        importScripts("../../via/controller/object.js", "../../via/controller/property.js", "../../via/controller/controller.js");
        Via.postMessage = (data) => self.postMessage(data);
        await loadSlickSlider();
    } else {
        Via.OnMessage(e.data);
    }
});

async function loadSlickSlider() {
    try {
        const response = await fetch("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js");
        const script = await response.text();

        self.postMessage({ script: script, success: true, message: "Slick Slider loaded successfully!" });
    } catch (error) {
        self.postMessage({ success: false, message: "Failed to load Slick Slider: " + error.message });
    }
}
