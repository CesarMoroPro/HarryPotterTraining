//^ Fonction vanillaSlideUp()
export function vanillaSlideUpMultiple(elementList, duration, heightElementList = 0) {

    /**
     * Dans cette fonction, l'argument fourni est un tableau car récupéré par jQuery.
     * ...Il faut donc boucler sur chaque élément du tableau pour modifier les propriétés CSS
     */
    for (const element of elementList) {
        element.style.transitionDuration        = duration/1000 + 's';
        element.style.transform                 = 'translateY(-' + heightElementList + 'px)';
    }
}