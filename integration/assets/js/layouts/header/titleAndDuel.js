//! STEP À LA DEMANDE
//^ J'importe les variables réutilisables définies dans le fichier Utils/variables.js
import { durationApparitionText, durationApparitionBackground, durationApparitionProfils } from "../../utils/variables.js";

//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
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
        harryPotterLetters.fadeIn(durationApparitionText); // Variable importée

        // L'apparition de la div flash dure 10 secondes
        let blurBackground      = $('#div-flash-header');
        blurBackground.fadeIn(durationApparitionBackground); // Variable importée

        /** Après que l'apparition Harry Potter soit terminée
         *  le slogan et le face à face Voldemort vs Harry
         *  commencent leur apparition. 
         * */
        setTimeout(() => {
            let slogan = $('#slogan-header');
            slogan.fadeIn(durationApparitionText); // Variable importée

            let profilsDuelDiv = $('#div-profils-duel-header');
            profilsDuelDiv.fadeIn(durationApparitionProfils);
        }, durationApparitionText);
    }

    //! STEP 4 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ La suite se passe dans le fichier js/layouts/header/upTitleOnCastle.js
    
}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);

