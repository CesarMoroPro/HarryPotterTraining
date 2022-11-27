//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//^ Je déclare de la fonction "vanillaAvadaExperlliarmus()"
export function vanillaAvadaVsExpelliarmus() {

    //! STEP 2 = = = = = = LOGIQUE PROGRAMMATIQUE = = = = = = = = = = = = = = = = = = = = = = = =
    //! STEP 2.A = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //^ Déclaration des variables
    /**
     * Il s'agit des deux divs d'ID "avada-spell" et "expelliarmus-spell"
     * ? Rappel : via jQuery, on récupère un objet !!!
     */
    let avadaSpellJQueryObject                    = $('#avada-spell');
    let avadaSpell                                = avadaSpellJQueryObject[0];
    let expelliarmusSpellJQueryObject             = $('#expelliarmus-spell');
    let expelliarmusSpell                         = expelliarmusSpellJQueryObject[0];
 
    //! STEP 2.B = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //^ Fonction interne pour donner du mouvement aux sortilèges
    /**
     ** Je crée une fonction générique "spellsAction()" pour les mouvements des sortilèges.
     * Cette fonction prend un seul paramètre, qui aura pour argument le sort concerné.
     */
    function spellsAction(paramSpell, paramSpellJQueryObject) {

        /**
         *= STEP 2.B.1 : Dans cette première partie, je prépare tout ce qui sera commun aux deux sortilèges :
         * ... - Transition : Durée + Ease
         * ... - Width des div sortilèges
         * ... - faire "vaguer" les sorts
         * ... - former une boule au point de rencontre
         * ... - ajouter (opacité + flou) en mode aléatoire
         */

         paramSpellJQueryObject.css({
            'transition'    : '3s ease-in',
            'width'         : '100%'
        })

        

        /**
         *= STEP 2.B.2 : Dans cette seconde partie, j'inclus une condition selon le sort concerné :
         * ... - si le sort est 'avadaSpell', alors bloc d'instructions;
         * ... - sinon si le sort est 'expelliarmusSpell', alors bloc d'instructions.
         * 
         * ...Attention : faire varier les épaisseurs (height) des sorts
         * ...doit être défini ici et non dans la partie commune de "spellsActions()"
         * ...afin de générer des épaisseurs différentes aux deux sorts ! Effet visuel plus naturel et plus beau.
         * ...Pour faire varier les épaisseurs de manière aléatoire, on englobe le tout dans une fonction générant un nombre aléatoire
         * ...Pour ce faire, on utilise la fonction "randomNumberSpellsHeight()" dans les utils > vanillaFunctions
         */
        if(paramSpell === avadaSpell) {
            /**
             ** Ici, je fais appel à la fonction setInterval
             * ...pour modifier l'épaisseur du sort toutes les xxx millisecondes spécifiées.
             */
            setInterval(() => {
                /**
                 ** Je génère un nombre aléatoire entre [0, 1[
                 * Je multiplie ce nombre par 20 pour avoir des nombres entre 0 et 19,999...
                 * J'exclus les valeurs proches de 0 en arrondissant au dessus avec .ceil()
                 * J'exclus les petites valeurs en ajoutant 3 par exemple
                 */
                let randomNumber1 = Math.ceil(Math.random()*20)+3;

                //* Je définit la nouvelle épaisseur de l'élément 
                paramSpellJQueryObject.css({
                    'height': randomNumber1
                });
            }, 500);            
        } else if(paramSpell === expelliarmusSpell) {
            setInterval(() => {
                /**
                 ** Je génère un autre nombre aléatoire selon les mêmes critères
                *...mais une seconde fois afin d'avoir des nombres différents sur les deux sorts
                */
                let randomNumber2 = Math.ceil(Math.random()*20)+3;

                //* Je définit la nouvelle épaisseur de l'élément 
                paramSpellJQueryObject.css({
                    'height': randomNumber2
                });
            }, 500);
        }
    };

    spellsAction(avadaSpell, avadaSpellJQueryObject);
    spellsAction(expelliarmusSpell, expelliarmusSpellJQueryObject);
}