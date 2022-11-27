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
         ** L'épaisseurs (height) des sorts doit être définie ici et non dans la partie commune de "spellsActions()"
         * ...afin de générer des épaisseurs différentes aux deux sorts ! Effet visuel plus naturel et plus beau.
         */
         
        //* Pour faire varier les épaisseurs de manière aléatoire, je crée une fonction générant un nombre aléatoire qui sera retourné
        function randomNumberSpellsHeight() {

            /**
             * Je multiplie ce nombre par 20 pour avoir des nombres entre 0 et 19,999...
             *...J'exclus les valeurs proches de 0 en arrondissant au dessus avec .ceil()...
             *...J'exclus les petites valeurs en ajoutant 3 par exemple
             */
            
            let randomNumber = Math.ceil(Math.random()*20)+3;
            return randomNumber;
        }

        //* Puis j'utilise cette fonction dès lors que je veux générer une épaisseur aléatoire
        if(paramSpell === avadaSpell) {

            setInterval(() => {
                //* Je définit la nouvelle épaisseur de l'élément grâce à la fonction retournant mon nombre aléatoire
                paramSpellJQueryObject.css({
                    'height': randomNumberSpellsHeight()
                });
            }, 500);
            
        } else if(paramSpell === expelliarmusSpell) {

            setInterval(() => {

                //* Idem que dans la condition "if"
                paramSpellJQueryObject.css({
                    'height': randomNumberSpellsHeight()
                });
            }, 500);
        }
    };

    spellsAction(avadaSpell, avadaSpellJQueryObject);
    spellsAction(expelliarmusSpell, expelliarmusSpellJQueryObject);
}