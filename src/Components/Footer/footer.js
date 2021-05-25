import './Footer.css';
import Fb from '../../Assets/img/fb.png';
import Vig from '../../Assets/img/vigneron.jpg';
import Fermier from '../../Assets/img/producteurs.png';

export default function Footer() {

    return (
        <footer id="footer">
            <div className="container">

                <div>
                    <a href="https://www.facebook.com/Vignoble-rousteau-104943488395682">
                        <img src={Fb} alt="facebook" />
                    </a>
                    <a href="https://www.vigneron-independant.com/">
                        <img src={Vig} alt="vigneron independant" />
                    </a>
                    <a href="https://www.producteursfermiers.fr/">
                        <img src={Fermier} alt="producteur fermier" />
                    </a>
                </div>
                <div>
                    <p>L'ABUS DE L'ALOOL EST DANGEUREUX POUR LA SANTE</p>
                </div>


            </div>
        </footer>
    );
}