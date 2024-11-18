import model from "./model.js";
import slider from "./slider.js";
import intersectingProjects from "./intersectingProjects.js";

async function safeExecute(func) {
    try {
        await func();
    } catch (error) {
        console.error(`Error in ${func.name}:`, error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    safeExecute(model);
    safeExecute(slider);
    safeExecute(intersectingProjects);
})