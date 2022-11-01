//! STEP À LA DEMANDE
//^ J'importe les variables réutilisables définies dans le fichier Utils/variables.js
import { durationBeforeGoUpTitleOnCastle, durationSlidingTransition } from "../../utils/variables.js";
//^ J'importe le fichier 'vanillaFunctions.js'
import { vanillaSlideUpMultiple } from "../../utils/vanillaFunctions.js";

//! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Je déclare la fonction init()
export function init() {
    
    //! STEP 3 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ J'utilise un setTimeout pour déclencher la fonction upMainBlocHeader()
    // Cette fonction upMainBlocHeader() sera déclenchée après un délai de 
    // goUpTitleOnCastle défini dans le fichier js des variables
    // soit lorsque les animations d'ouverture définies dans le fichier titleAndDuel.js seront terminées
    setTimeout(upMainBlocHeader, durationBeforeGoUpTitleOnCastle); //variables importées

    //! STEP 4 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
    //^ Je déclare la fonction upMainBlocHeader()
    function upMainBlocHeader() {

        //* Je récupère la div contenant l'image du chateau
        let divCastleImages     = $('#castle-header-images');
        //* J'applique une animation pour la rendre transparante
        divCastleImages.animate({
            opacity: '0.10'
        }, durationSlidingTransition);

        //* Je récupère la div contenant le bloc de titre et le bloc de duel
        // div qui sera glissée vers le haut, au-dessus de la div image chateau
        let divMainBlocHeader   = $('#main-bloc-header');

        //* Puis je récupère dynamiquement la hauteur de divCastleImages (déjà récupérée)
        // afin de dynamiser la suite du code via vanillaSlideUpMultiple()
        /** RAPPEL : le sélecteur jQuery "$('')" renvoie toujours un objet
         * donc divCastleImages.offsetHeight renvoie "undefined"
         * conole.log(divCastleImages) renvoie "S.fn.init [div#castle-header-images]", soit un tableau
         * il faut donc parcourir le tableau à l'index désiré pour manipuler les données
         * */ 
        let hauteurDivCastleImages = divCastleImages[0].offsetHeight;
        /**
         * J'applique une animation pour faire glisser l'élément sans en masquer un autre 
         * J'utilise une fonction custom en Vanilla définie dans le fichier js/utils/vanillaFunctions.js
         * car la propriété transform contient des valeur non-numériques
         * or, jQuery .animate() n'accepte que des valeurs numériques
         * 
         * J'insère cette fonction dans un setTimeout
         */
        setTimeout(vanillaSlideUpMultiple(divMainBlocHeader, durationSlidingTransition, hauteurDivCastleImages), durationBeforeGoUpTitleOnCastle);
        setTimeout(() => {
            // Je supprime la classe 'p-relative' de ce bloc et j'ajoute 'p-absolute'
            divMainBlocHeader.removeClass('p-relative');
            divMainBlocHeader.addClass('p-absolute');
            // Je fourni la valeur de la propriété 'top' de la position absolue
            divMainBlocHeader.css('top', hauteurDivCastleImages + 'px');
        }, durationBeforeGoUpTitleOnCastle + durationSlidingTransition);
    }
}

//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
//^ Quand le DOM est chargé, je lance la fonction init() qui contient tout le code
window.addEventListener('DOMContentLoaded', init);