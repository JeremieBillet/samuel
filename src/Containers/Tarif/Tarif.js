import TxtCard from '../../Components/TxtCard/TxtCard';
import Pdf from '../../Assets/doc/tarif-2018.pdf'
import { Helmet } from 'react-helmet';

export default function Tarif() {

    return (
        <>  
            <Helmet>
                <title>Tarif</title>
                <meta name="description" content="Tarif Rousteau Rulleau" />
                <meta name="keywords" content="Rousteau, pineau, cognac, tarif, prix" />
            </Helmet>
            <TxtCard>
                <p>Nous vous rappelons que nous vous souhaitons bienvenus à "la ferme" pour
                déguster nos Pineaux, Cognacs, et Jus de raisin afin de vous aider à choisir.
                Lors de l’accès à la cave, vous visiterez gratuitement notre distillerie et
                notre chai, ce sera l’occasion pour vous de nous poser vos questions de vive
                voix sur notre passion que nous aimons raconter.
                Les tarifs ci dessous date de 2018 mais sont encore d'actualité en avril 2021.
                N'hésitez pas à nous contacter pour toutes questions.</p>
                <p>
                Pour télécharger le bon de commande, <a href={Pdf}>cliquez ici.</a>
                </p>
            </TxtCard>
            <TxtCard>
                <h3>Nos tarifs</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="3" style={{ textAlign: 'center' }}>
                                TARIF TTC - La bouteille €
                            </th>
                        </tr>
                        <tr>
                            <th>Dénomination</th>
                            <th className="prix">Prix à la propriété</th>
                            <th className="prix">Prix à l’unité rendu domicile par multiple de 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pineau Blanc (75cl - 5 ans)</td>
                            <td className="prix">11.00</td>
                            <td className="prix">14.50</td>
                        </tr>
                        <tr>
                            <td>Pineau Rosé (75cl - 5 ans)</td>
                            <td className="prix">11.00</td>
                            <td className="prix">14.50</td>
                        </tr>
                        <tr>
                            <td>Vieux Pineau Rosé (75cl - 10 ans)</td>
                            <td className="prix">14.00</td>
                            <td className="prix">17.50</td>
                        </tr>
                        <tr>
                            <td>Vieux Pineau Blanc (75cl - 10 ans)</td>
                            <td className="prix">14.00</td>
                            <td className="prix">17.50</td>
                        </tr>
                        <tr>
                            <td>Pineau Hors d’Age (75cl - 25 ans)</td>
                            <td className="prix">22.00</td>
                            <td className="prix">25.50</td>
                        </tr>
                        <tr>
                            <td>Cognac Apéritif (70cl)</td>
                            <td className="prix">20.00</td>
                            <td className="prix">23.50</td>
                        </tr>
                        <tr>
                            <td>Cognac V.S.O.P. (70cl - 15 ans)</td>
                            <td className="prix">38.00</td>
                            <td className="prix">41.50</td>
                        </tr>
                        <tr>
                            <td>Cognac Vieille Réserve 60°(70cl - 30 ans)</td>
                            <td className="prix">55.00</td>
                            <td className="prix">58.50</td>
                        </tr>
                        <tr>
                            <td>Vin métdode traditionnelle (75cl)(Métdode champenoise)</td>
                            <td className="prix">6.50</td>
                            <td className="prix">10.00</td>
                        </tr>
                        <tr>
                            <td>Bulles de raisin (75cl)</td>
                            <td className="prix">3.70</td>
                            <td className="prix">7.20</td>
                        </tr>
                        <tr>
                            <td>Jus de Raisin (1l)</td>
                            <td className="prix">3.00</td>
                            <td className="prix">6.50</td>
                        </tr>
                    </tbody>
                </table>
            </TxtCard>
        </>
    );
}