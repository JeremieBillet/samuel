import Carousel2 from '../../Components/Carousel/Carousel'

import TxtCard from '../../Components/TxtCard/TxtCard';


export default function Accueil() {

    return (

        <>
            <TxtCard>
                <h3>Accueil</h3>
                <p>Nous vous souhaitons bienvenus sur notre site encore en amélioration.</p>
                <p>
                Si le cœur vous en dit, vous serez aussi bienvenus à "la ferme" pour déguster
                nos Pineaux, Cognacs, et Jus de raisin afin de vous aider à choisir. Lors de l’accès à
                la cave, vous visiterez gratuitement notre distillerie et notre chai, ce sera l’occasion
                pour vous de nous poser vos questions de vive voix sur notre passion que nous aimons
                raconter.
                Du raisin à la bouteille nous faisons de notre mieux pour perpétuer la tradition
                viticole familiale depuis 1870.
                </p>
            </TxtCard>

            <Carousel2 />

            <TxtCard>
                <h3>Notre Histoire</h3>
                <ul>
                    <li>2020 : Philippe Rousteau  apprend quelques astuces à Corentin pour perpétuer la
                    tradition avec Samuel</li>

                    <li>2011 : Samuel, le fils de Philippe, rejoint l’aventure familiale</li>

                    <li>2002 : Pierre Rullaud, oncle de Philippe, fait confiance à la relève pour commencer à ralentir le rythme</li>

                    <li>1993 : Philippe succède à Marcel Rullaud, son beau-père.</li>

                    <li>1970 : Pierre et Marcel Rullaud prennent la suite de leur père Jean Rullaud.</li>

                    <li>1946 : Jean Rullaud fait ses premières expéditions de bouteilles et autres denrées vers Paris.</li>

                    <li>1870 : Les grands-parents de Andrée Bon, femme de Jean Rullaud, achètent la propriété actuelle au
                    Maine Dorin. Ils déplacèrent  un alambic depuis leur ancienne ferme vers le lieu actuel.
                    Même si il ne fonctionne plus, il est encore visible lors de la visite de la ditillerie à côté
                l’alambic de 1996. </li>

                </ul>
            </TxtCard>
        </>
    );
}