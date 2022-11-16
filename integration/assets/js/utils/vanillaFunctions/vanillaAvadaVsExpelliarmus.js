
//! STEP 1 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
//^ Je déclare de la fonction "vanillaAvadaExperlliarmus()"
export function vanillaAvadaVsExpelliarmus() {

    //! STEP 2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //^ Logique programmatique de la fonction

    /**
     * Il s'agit des deux divs d'ID "avada-spell" et "expelliarmus-spell"
     * ? Rappel : via jQuery, on récupère un objet !!!
     */
    let avadaSpellJQueryObjet                    = $('#avada-spell');
    let avadaSpell                               = avadaSpellJQueryObjet[0];
    let expelliarmusSpellJQueryObjet             = $('#expelliarmus-spell');
    let expelliarmusSpell                        = expelliarmusSpellJQueryObjet[0];

    /**
     ** Je crée une fonction générique "spellsAction()" pour les mouvements des sortilèges.
     * Cette fonction prend un seul paramètre, qui aura pour argument le sort concerné.
     */
    function spellsAction(paramSpell) {

        /**
         ** Dans cette première partie, je prépare tout ce qui sera commun aux deux sortilèges :
         * ... - Durée de transition
         * ... - animate.css > pulse
         * ... - faire "vaguer" les sorts
         * ... - former une boule au point de rencontre
         * ... - ajouter (opacité + flou) en mode aléatoire
         */

        // Durée de transition :
        paramSpell.style.transitionDuration          = '2s';

        // Animate.css > pulse
        // 1. Ajouter la class "pulse" aux éléments
        // 2. Englober cette class "pulse" dans un setInterval afin de répéter le mouvement
        setInterval(() => {
            paramSpell.classList.toggle('');
        }, 1000);

        


        


        /**
         ** Dans cette seconde partie, j'inclus une condition selon le sort concerné :
         * ... - si le sort est 'avadaSpell', alors bloc d'instructions;
         * ... - si le sort est 'expelliarmusSpell', alors bloc d'instructions.
         * 
         * ...Attention, faire varier les épaisseurs (hauteurs) des sorts aléatoirement
         * ...doit être défini ici et non dans la partie commune de "spellsActions()"
         * ...afin de générer des épaisseurs différentes aux deux sorts ! Visuellement plus beau et naturel.
         * ...Pour ce faire, on utilise la fonction "randomNumberSpellsHeight()" dans les utils > vanillaFunctions
         */
        if(paramSpell === avadaSpell) {
            paramSpell.style.width            = '100%';
        }
        else if(paramSpell === expelliarmusSpell) {
            paramSpell.style.width     = '100%';
        }
    };

    spellsAction(avadaSpell);
    spellsAction(expelliarmusSpell)
}