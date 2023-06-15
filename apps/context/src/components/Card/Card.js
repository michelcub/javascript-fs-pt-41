export default function Card ({title, operator, func}) {
    return(
        <div>
            <h1>{title}</h1>
            {operator && <button onClick={func}>{operator}</button>}
        </div>
    );
}