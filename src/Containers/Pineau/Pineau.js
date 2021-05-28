import P5B from '../../Assets/img/pineaub5.png';
import P5R from '../../Assets/img/pineaur5.png';
import P10B from '../../Assets/img/pineaub10.png';
import P10R from '../../Assets/img/pineaur10.png';
import PHA from '../../Assets/img/pineauha.png';
import { Helmet } from 'react-helmet';

import TxtCard from '../../Components/TxtCard/TxtCard';
import TxtImgCard from '../../Components/TxtImgCard/TxtImgCard';


export default function Pineau() {

    return (
        <>
            <Helmet>
                <title>Pineau</title>
                <meta name="description" content="Pineau Rousteau Rulleau" />
                <meta name="keywords" content="Rousteau, pineau, cognac" />
            </Helmet>

            <TxtCard>
                <h3>Nos Pineaux</h3>

                <p>Nos pineaux sont, comme le demande le cahier des charges de l'AOP Pineau des
                Charentes, le mélange, vieilli en fût de chêne, de nos jus de raisin
                suffisamment sucrés et de notre eau de vie.
                
                Afin de conserver le meilleur de notre nectar, nous les avons fabriqués
                avec assez d'alcool pour éviter l’utilisation du souffre pendant le veillissement.
                Cette méthode ne nous permet de ne vous proposer que du pineau blanc (capsule noir
                ou doré) et du pineau rosé (capsule rouge).
                
                La mise en bouteille se fait sans traitement afin de préserver les arômes et votre
                santé, du coup il peut y avoir un léger depôt à caus des variations de température,
                il ne change rien à la qualité.
                </p>
            </TxtCard>

            <TxtImgCard>
                <h3>Nos jeunes  « pas vraiment jeunes »</h3>
                <div className="img">
                    <img src={P5B} alt="pineau" />
                    <img src={P5R} alt="pineau" />
                </div>
                <div className="txt">
                    <p>Ces 2 Pineaux des Charentes ont veillli environ 5 ans dans notre chai,
                    en fût de chêne et commence à mûrir. Leur jeunesse fait mieux ressortir
                    notre eau de vie et les goûts de fruit. Ceux-ci rappellent la récolte
                    avec bien sûr le goût du raisin mais avec des nuances en fonction de la couleur.
                    Cela en fait des produits faciles à consommer à apéritif.
                    Les arômes du blanc sont plus subtils et font aussi penser à l'amande, la poire,
                    la pomme. La capsule est toute noire.
                    Les arômes du rosé, rappellent les cerises ou les fraises. Il est tout trouvé pour
                    accompagner le melon dans la recette du melon au pineau. La capsule est toute rouge.
                </p>
                </div>

            </TxtImgCard>

            <TxtImgCard>
                <h3>Nos « vieux »</h3>
                <div className="txt">
                    <p>Ces 2 Pineaux des Charentes ont veilli environ 10 ans dans notre chai, en fût
                    de chêne. Une nette évolution est perçue au nez ou en bouche. A cet âge là,
                    ils ont eu le droit d’être nommés « vieux pineau » . Un goût de boisé, confit,
                    rancio caractérise cette appellation. Le mélange s’est homogénéisé, ce qui le
                    rend plus rond et complexe. Ils rendront vos apéritifs plus originaux et relevés,
                    certains les consomment aussi en dessert ou sur certains plats.
                    Pour le vieux pineau blanc, en complément de la poire, pêche, amande ; les arômes
                    de maturation, nets,  apportent de la longueur en bouche. La capsule est dorée et
                    blanche.
                    Pour le vieux rosé, on ressent comme pour le plus jeune, plus de fruit rouge.
                    Cela rappelle un peu le goût de confiture. Il a perdu un peu de sa couleur car,
                    avec l’absence de souffre, celle-ci s’est oxydée. La capsule est rouge et blanche.
                        </p>
                </div>

                <div className="img">
                    <img src={P10B} alt="pineau" />
                    <img src={P10R} alt="pineau" />
                </div>
            </TxtImgCard>


            <TxtImgCard>
                <h3>Notre « Hors d’age »</h3>
                <div className="img">
                    <img src={PHA} alt="pineau" height="150px" />
                </div>
                <div className="txt">
                    <p>La quintessence des produits de la maison. Une belle robe ambrée dorée le fait
                    confondre avec un cognac. Le vieillissement est à son comble. Passé le goût
                    de rancio (de rance) vous sentirez des notes de noisettes, de vanille, de
                    beurre, vieille noix, caramel, épices …
                    Idéal pour l’apéritif (avec du foie gras), il est également très prisé en fin de
                    repas sur des crèmes ou des gâteaux… Il n’existe qu’en blanc, la capsule est
                    toute dorée.
                </p>
                </div>
            </TxtImgCard>

            <TxtCard>
                <h3>Dégustation générale du pineau</h3>

                <p>Pour apprécier toutes les saveurs du Pineau, sa température doit se situer
                entre 10 et 12 ° C.
                Le meilleur moment est en fin de demi-journée (avant le déjeuner ou le dîner),
                les glandes salivaires et nos papilles sont au maximum de leurs facultés.
                Laisser le temps à l’œil d’apprécier la beauté du produit et au nez le temps de
                se remplir des divers parfums émanant du verre.
                Le porter en bouche, apprécier la première attaque (acide, amer, sucré…), se
                laisser remplir la bouche de toutes ces saveurs et ensuite seulement le boire
                en se laissant aller à imaginer tout ce que ce produit a subi de transformation
                et d’évolution depuis son doux mélange de jus de raisin (mout) et d’eau de vie
                (cognac).
                Et là, si vous connaissez déjà nos chais ou d’autres similaires, laissez vous
                aller à faire vibrer en vous ces anges, qui eux aussi en prennent une bonne part …
                    </p>
            </TxtCard>





        </>
    );
}