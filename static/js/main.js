import intersectingObjects from "./intersectingObjects.js";
import textTypingEffect from "./textTypingEffect.js";
import background from "./background.js";
import navigation from "./navigation.js";
import form from "./form.js";
import projectsMovingLine from "./projects.js";
import model from "./model.js";

async function safeExecute(func) {
    try {
        await func();
    } catch (error) {
        console.error(`Error in ${func.name}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    safeExecute(intersectingObjects);
    safeExecute(textTypingEffect);
    safeExecute(background);
    safeExecute(navigation);
    safeExecute(form);
    safeExecute(projectsMovingLine);
    safeExecute(model);
});