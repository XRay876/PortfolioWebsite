import intersectingObjects from "./intersectingObjects.js";
import textTypingEffect from "./textTypingEffect.js";
import background from "./background.js";
import navigation from "./navigation.js";
import form from "./form.js";
import projectsMovingLine from "./projects.js";
import model from "./model.js";

document.addEventListener('DOMContentLoaded', () => {
    intersectingObjects(); 
    textTypingEffect(); 
    background();
    navigation();
    form();
    projectsMovingLine();
    model();
})