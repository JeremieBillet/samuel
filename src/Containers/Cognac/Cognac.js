import Aperitif from '../../Assets/img/cognac.png';
import VSOP from '../../Assets/img/vsop.jpg';
import Reserve from '../../Assets/img/reserve.png';
import { Helmet } from 'react-helmet';
import TxtCard from '../../Components/TxtCard/TxtCard';
import TxtImgCard from '../../Components/TxtImgCard/TxtImgCard';


export default function Cognac() {

    return (
        <>
            <Helmet>
                <title>Cognac</title>
                <meta name="description" content="Cognac Rousteau Rulleau" />
                <meta name="keywords" content="Rousteau, pineau, cognac" />
            </Helmet>
            <TxtCard>
                <h3>Nos Cognacs</h3>

                <p>Nos Cognacs sont, comme le demande le cahier des charges de l'AOP nos vins distillés 2 fois
                dans notre alambic et veillis en fûts de chêne dans nos chais.

                Vous avez la possibilité de déguster 3 Cognacs variant à la fois par l'âge et par  le taux
                d'alcool. En effet, nous proposons un Cognac "brut de fût", qui a reçu peu d'eau, pour
                conserver sa teneur en arômes.
                        </p>
            </TxtCard>

            <TxtImgCard>
                <h3>Cognac apéritif</h3>
                <div className="img">
                    <img src={Aperitif} alt="cognac" height="150px" />
                </div>
                <div className="txt">
                    <p>Jeune Cognac en cours d’élaboration, de par un bref vieillissement, nous découvrons ici
                    sur des odeurs caractéristiques de l’alambic  en pleine action .Ce cognac à 42% est à
                    servir avec une boisson sucrée ou amère, gazeuse ou plate, bien fraîche dans une
                    proportion de 3 cl par verre de 15/20 cl… Il se marie très bien avec notre « bulles
                    de raisin ».
                    </p>
                </div>
            </TxtImgCard>

            <TxtImgCard>
                <h3>Cognac VSOP</h3>
                <div className="txt txtContainer">
                    <p>D’une belle couleur dorée, ce Cognac « standard » d’environ 15 ans a vieilli en fût de chêne.
                    Son taux d’alcool est de 42%. Ce dernier  est obtenu progressivement grâce à des coupages
                    successifs d’eau distillée . Le vieux, la vanille, le réglisse sont autant de notes qui
                    caractérisent ce produit.
                    </p>
                </div>

                <div className="img imgContainer">
                    <img src={VSOP} alt="cognac" height="150px" />
                </div>
            </TxtImgCard>

            <TxtImgCard>
                <h3>Cognac vieille réserve (35ans)</h3>
                <div className="img imgContainer">
                    <img src={Reserve} alt="cognac" height="150px" />
                </div>
                <div className="txt txtContainer">
                    <p>Laissez de côté ordinateur et téléphone portable, un cognac de cet âge se respecte,
                    laissez-le dire ce qu’il a à vous dire. Dans le creux de la main, tournez le verre en
                    couvrant le dessus avec l’autre main pour arriver à sa température de prédilection
                    (autour de 30 à 35 °C ).

                    Avec l'absence de dilution par l'eau, des notes de vieux bois, de vanille, d’épice, de réglisse,
                    d’agrumes…vous envoûteront  d’abord les narines puis vos papilles . Pour atténuer ces 60%,
                    gardez une gorgée dans votre afin qu’elle se réchauffe avec un petit peu de la salive… Et là !!!
                    Vous apprécierez tous ses parfums qui se développeront et  resteront en bouche très longtemps
                    sans en avoir le feu …
                    </p>
                </div>
            </TxtImgCard>

            <TxtCard>
                <h3>Dégustation générale du cognac</h3>
                <div className="txt">
                    <p>Seuls, le temps, un chai de forte hygrométrie et la patience d’une génération  ont permis à ce
                    Cognac de perdre tranquillement 10 degrés tout en développant les arômes. Malgré ses 60 %,
                    c’est un Cognac tout en saveur à consommer avec parcimonie. Il faut laisser le temps au
                    temps…</p>
                    <p>
                    Et si vous osiez un brûlot charentais avec ce produit :
                    </p>
                    <ul>
                        <li>Dans une tasse avec sa soucoupe</li>
                        <li>remplir la tasse de café froid</li>
                        <li>mettre deux morceaux de sucre dans la soucoupe</li>
                        <li>deux cuillères à soupe de cognac réserve également dans la soucoupe</li>
                        <li>allumer le cognac avec une allumette</li>
                    </ul>

                   <p>
                    Lorsque la flamme s’estompe, mélanger le reste de sucre et de cognac avec le café chaud.
                    Pour les plus téméraires, rincer la tasse avec quelque goutte de cognac…
                        </p>
                </div>
            </TxtCard>

        </>
    );
}