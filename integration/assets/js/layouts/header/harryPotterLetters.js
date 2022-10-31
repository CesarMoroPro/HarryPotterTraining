//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()

import { apparitionText } from "../../utils/variables.js";
import { apparitionBackground } from "../../utils/variables.js";

export function init() {

    //! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ Je déclare la fonction ouverture() qui s'auto-appelle
    // Elle déclenchera d'autres fonctions afin d'avoir des fonctions synchrones
    (function ouverture() {

        //^ J'appelle la fonction harryPotterLettersFadeIn()
        harryPotterIntroFadeIn();
    })();

    //! STEP 4 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ Je déclare la fonction harryPotterLettersFadeIn()
    // Elle fait apparaître le "logo textuel" Harry Potter et la div flash en fond
    function harryPotterIntroFadeIn() {
        
        // L'apparition Harry Potter dure 7 secondes
        let harryPotterLetters  = $('#harry-potter-letters-header-img');
        harryPotterLetters.fadeIn(apparitionText); // Variable importée

        // L'apparition de la div flash dure 10 secondes
        let blurBackground      = $('#div-flash-header');
        blurBackground.fadeIn(apparitionBackground); // Variable importée

        // Après que l'apparition Harry Potter soit terminée, le slogan commence son apparition 
        setTimeout(() => {
            let slogan = $('#slogan');
            slogan.fadeIn(apparitionText); // Variable importée
        }, apparitionText);
    }
    
}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);

