//! STEP 2 = = = = = = = = = = = IMPORTS = = = = = = = = = = = 
import { beginSpells } from '../../utils/variables/durationVariables.js';
import { vanillaAvadaVsExpelliarmus } from '../../utils/vanillaFunctions/vanillaAvadaVsExpelliarmus.js';

//! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
export function init() {

    //* Dans ce bloc, je gère l'apparation des sortilèges Voldemort vs Harry Potter dans le header
    /**
     * Je lance l'animation des sorts via une fonction dédiée
     * ...après un délai correspondant à l'apparition des titres et slogan + le slide du duel vers le haut du header.
     * Puisque c'est une fonction totalement custom, elle est codée dans un fichier JS
     * ...dans le répértoire js > utils > vanillaFunctions > vanillaAvadaVsExpelliarmus.js
     */
    setTimeout(vanillaAvadaVsExpelliarmus, 300);

//! STEP 4 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ La suite se passe dans la fonction "vanillaAvadaVsExpelliarmus()" dans le fichier 'spellsDuel.js'
}


//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);