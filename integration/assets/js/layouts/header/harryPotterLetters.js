//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
export function init() {

    //! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ Je déclare la fonction ouverture() qui s'auto-appelle
    // Elle déclenchera d'autres fonctions afin d'avoir des fonctions synchrones
    (function ouverture() {

        //^ J'appelle la fonction harryPotterLettersFadeIn()
        harryPotterLettersFadeIn();
        
    })();

    //^ Je déclare la fonction harryPotterLettersFadeIn()
    // Elle fait apparaître le "logo textuel" Harry Potter
    // L'apparition prend 7 secondes
    function harryPotterLettersFadeIn() {
        let harryPotterLetters = $('#harry-potter-letters-header-img');
        harryPotterLetters.fadeIn(7000);
    }
    





}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);

