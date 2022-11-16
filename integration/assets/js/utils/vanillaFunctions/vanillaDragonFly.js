//! STEP 1 = = = = = = = = = = = IMPORTS = = = = = = = = = = = 
import { durationFlyingDragon } from "../variables/durationVariables.js";

//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = =
//^ Fonction vanillaDragonFlyingAboveTheCastle()
/**
 * Le paramètre déclaré dans la déclaration de cette présente fonction aura comme argument
 * ...le troisième argument de la fonction `setInterval` si la fonction est utilisée dans ce contexte.
 */
export function vanillaDragonFlyingAboveTheCastle(paramPersonnage, paramPositionX, paramPositionY, paramValue = 2.5) {

    //* Je déclare une variable stockant les ratios "abscisse * taux" et "ordonnee * taux"
    let ratioPositionXOnValue = Math.round(paramPositionX * 55 /100);
    let ratioPositionYOnValue = Math.round(paramPositionY * 5 /100);

    //* J'affecte à la variable d'abscisse la nouvelle valeur calculée
    paramPositionX -= ratioPositionXOnValue;
    //* Et à la variable d'ordonnée la nouvelle valeur également calculée
    paramPositionY += ratioPositionYOnValue;

    //! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = =
    //* J'applique au style css la nouvelle position en abscisse et ordonnée du personnage
     paramPersonnage.style.transform                = 'translate(-' + paramPositionX + 'px, ' + paramPositionY + 'px) scale(3.5)';
     paramPersonnage.style.transitionDuration       = durationFlyingDragon/1000 + 's';
}