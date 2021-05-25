import Jus from '../../Assets/img/jus.png';
import Bulle from '../../Assets/img/bulle.png';

import TxtCard from '../../Components/TxtCard/TxtCard';
import TxtImgCard from '../../Components/TxtImgCard/TxtImgCard';

export default function Soft() {

    return (
        <>

            <TxtCard>
                <h3>Nos softs</h3>

                <p>Pour vos enfants, convives ou vous-même, en remplacement de boissons
                alcoolisées ou au goûter, petit déjeuner,… nos jus, de même qualité
                que pour nos Pineaux  sont une solution « sans alcool », plat ou gazéifié,
                à vous de choisir !
                        </p>
            </TxtCard>

            <TxtImgCard>
                <h3>Jus de raisin rouge</h3>

                <div className="img">
                    <img src={Jus} alt="jus" />
                </div>

                <div className="txt">

                    <p>C’est nos raisins rouges pressés, après un petit temps de décantation,
                    qui sont pasteurisés et mis en bouteille. Avec un traitement de jus
                    limité, le goût du fruit est très présent, vous aurez l’impression
                    de revenir au temps des vendange.

                    Etant naturellement riche en sucre, il peut se diluer jusqu’à moitié d’eau.
                    </p>
                </div>
            </TxtImgCard>

            <TxtImgCard>
                <h3>Bulles de raisin</h3>
                <div className="txt">

                    <p>C’est nos raisins blanc pressés, après un petit temps de décantation,
                    qui sont pasteurisés, rendus effervescents et mis en bouteille. Il rend
                    l’apéritif plus festif pour ceux qui ne boivent pas d’alcool mais aussi
                    pour les amateurs de coktail, notamment avec notre « Cognac Apéritif » ;
                        </p>
                </div>
                <div className="img">
                    <img src={Bulle} alt="bulle" />
                </div>
            </TxtImgCard>


        </>
    );

}