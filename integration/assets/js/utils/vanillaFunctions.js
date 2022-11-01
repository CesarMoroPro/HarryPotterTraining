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
     * J'initialise des variables globales
     * qui seront utilisées dans le traitement de la fonction calcPosX()
     */
    let ratioPositionXOnValue;
    let resultPositionXMinusRatio;

    /**
     * Je déclare une fonction "calcPosX()"
     * qui prend deux paramètres : 1/ la position en abscisse du dragon ; 2/ une valeur pour le taux [par défaut à 2.5]
     * La fonction stocke dans la variable globale "ratioPositionXOnValue" le ratio de positionX * 2.5% par défaut
     * et dans la variable globale "resultPositionXMinusRatio" la différence entre positionX - ratio. 
     * Enfin, la fonction retourne cette différence.
     */
    function calcPosX(positionX, value = 2.5) {

        ratioPositionXOnValue = Math.round(value /100 * positionX);
        return resultPositionXMinusRatio = positionX-ratioPositionXOnValue;
    }

    calcPosX(personnagePositionX);
    console.log(resultPositionXMinusRatio);
    calcPosX(personnagePositionX);
    console.log(resultPositionXMinusRatio);
    personnage.style.transform                  = 'translateX(' + personnagePositionX - resultPositionXMinusRatio + ')';


}
