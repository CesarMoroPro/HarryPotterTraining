//! STEP À LA DEMANDE
//^ Import de la fonction vanillaDragonFlyingAboveTheCastle()
import { vanillaDragonFlyingAboveTheCastle } from "../../utils/vanillaFunctions.js";

//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
export function init() {
    //* Je récupère le dragon au dessus du château
    let dragon          = $('#dragon-silhouette');

    //* Animation avec valeur non-numériques
    // donc utilisation d'une fonction Vanilla JS !
    /** //? Je n'oublie pas que jQuery $('') renvoie un objet !
     * donc console.log(dragon) retourne "S.fn.init [img#dragon-silhouette]"
     * donc il faut agir sur l'index !
    */
    vanillaDragonFlyingAboveTheCastle(dragon[0]);
}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);