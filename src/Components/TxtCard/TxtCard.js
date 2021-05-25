import './TxtCard.css'

export default function TxtCard(props) {

    return (
        <div className="card my-3 shadow">
            <div className="card-body">
                {props.children}
            </div>

        </div>
    );

}