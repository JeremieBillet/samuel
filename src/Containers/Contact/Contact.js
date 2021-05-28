import TxtCard from '../../Components/TxtCard/TxtCard';
import { Helmet } from 'react-helmet';

export default function Contact() {




    return (
        <>
            
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Rousteau Rullaud" />
                <meta name="keywords" content="Rousteau, pineau, cognac" />
            </Helmet>
            <TxtCard>
                <h3>Coordonnées</h3>
                <p>N'hésitez pas à nous contacter  ou nous rendre viste</p>
                <p>17 Le Maine Dorin<br />17 600 Corme royal</p>
                <p>+33629954577</p>
                <p>vignoble@rousteaurullaud.com</p>

            </TxtCard>

            <TxtCard>
                <h3>Horaires d’ouverture:</h3>
                <p>Du lundi au vendredi : 8h30-12h15 & 14h-18h30 <br />
                Samedi : sur RDV <br />
                Dimanche & jours fériés : fermé</p>

            </TxtCard>

        </>


    );

}