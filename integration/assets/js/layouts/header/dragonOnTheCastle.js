//! STEP 2 = = = = = = = = = = = IMPORTS = = = = = = = = = = = 
//^ Import de la fonction vanillaDragonFlyingAboveTheCastle()
import { vanillaDragonFlyingAboveTheCastle } from '../../utils/vanillaFunctions/vanillaDragonFly.js';

//! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
export function init() {   
    //* Je récupère le dragon au dessus du château
    let dragon          = $('#dragon-silhouette');
    /* //? Je n'oublie pas que jQuery $('') renvoie un objet !
     * ...donc console.log(dragon) retourne "S.fn.init [img#dragon-silhouette]"
     * ...donc il faut agir sur l'index du tableau retourné !
    */
    dragon              = dragon[0];

    //* Je récupère les données de positionnement du personnage passé en argument
    /**
     * Ces données doivent être déclarées à ce niveau 
     * ...afin d'être utilisées dans toutes les potentielles fonctions internes de la présente fonction
     * ...et afin de mettre à jour la position du personnage
     */
    let personnageAbscisse = Math.round(dragon.getBoundingClientRect().x);
    let personnageOrdonnee = Math.round(dragon.getBoundingClientRect().y);

    //* Animation avec valeur non-numériques donc utilisation d'une fonction Vanilla JS !
    /**
     * J'englobe le tout dans un setInterval afin d'agir via la fonction créée en Vanilla JS :
     * ...argument 1/ la fonction vanilla JS
     * ...argument 2/ le délai de l'interval
     * Et puisqu'une fonction de callback dans un `setInterval()` n'accepte pas d'argument :
     * ...argument 3/ le personnage ciblé par la fonction vanilla
     * ...argument 4/ la position abscisse ciblée par la fonction vanilla
     */

    setTimeout(vanillaDragonFlyingAboveTheCastle, 500, dragon, personnageAbscisse, personnageOrdonnee);

    //! STEP 4 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //^ La suite se passe dans le fichier JS utils > vanillaFunctions > vanillaDragonFly.js
}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);