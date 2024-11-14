const filled = '★';
const outlined = '✩';

function RatingBar({ rate }) {
    const start = new Array(10);
    start.fill(outlined);
    start.fill(filled, 0, rate);
    return(
        <>
        {start.map((e, id) => <span key={id}>{e}</span>)}    
        </>
    );
}

export default RatingBar;