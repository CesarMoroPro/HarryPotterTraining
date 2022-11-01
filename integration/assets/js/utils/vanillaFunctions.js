//= Ce fichier contiendra des fonctions custom en Vanilla
//= Pour contourner les limites de jQuery .animate() - valeurs non-numériques

//^ Fonction vanillaSlideUp()
export function vanillaSlideUpMultiple(elementList, duration, heightElementList = 0) {
    /**
     * Dans cette fonction, l'argument fourni est un tableau
     * Il faut donc boucler sur chaque élément du tableau pour modifier les propriétés CSS
     */
    for (const element of elementList) {
        element.style.transitionDuration        = duration/1000 + 's';
        element.style.transform                 = 'translateY(-' + heightElementList + 'px)';
    }
}

//^ Fonction vanillaDragonFlyingAboveTheCastle()
export function vanillaDragonFlyingAboveTheCastle(personnage) {
    
    //* Je récupère la div contenant l'image du chateau
    let divCastle    = $('#castle-header-images'); //? objet !
    // Puis sa largeur WIDTH
    let widthCastle   = divCastle[0].offsetWidth;

    //* Je récupère les données de positionnement du personnage passé en argument
    let personnagePositionX = Math.round(personnage.getBoundingClientRect().x); // abscisse
    let personnagePositionY = Math.round(personnage.getBoundingClientRect().y); // ordonnée
    
    /**
     * J'initialise une variable globale
     * qui sera utilisée dans le traitement de la fonction calcPosX()
     */
    let calculatedPosX;

    /**
     * Je déclare une fonction "calcPosX()"
     * qui prend deux paramètres : 1/ la position en abscisse du dragon ; 2/ une valeur pour le taux, par défaut à 2.5
     * La fonction stocke dans la variable globale "calculatedPosX" la valeur de position X du personnage otée de 2.5% par défaut
     * Enfin, la fonction retourne le résultat de ce calcul.
     */
    function calcPosX(positionX, value = 2.5) {

        return calculatedPosX    = positionX - (Math.round(positionX * value/100));
    }

    //= personnage.style.transform                  = 'translateX(' + personnagePositionX + '-800)';

}
