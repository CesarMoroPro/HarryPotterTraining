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
        //element.style.position='absolute';
        element.style.transform                 = 'translateY(-' + heightElementList + ')';
    }
    
}
