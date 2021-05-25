import './TxtImgCard.css';

export default function TxtImgCard (props) {

    return (
        <div className="card my-3 shadow">
                
                <div className="card-body">
                    {props.children}
                </div>
        </div>
    );
}