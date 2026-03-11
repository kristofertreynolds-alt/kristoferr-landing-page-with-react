const Card = () =>{
    
    let Style = {
        width: "18rem",
        margin: "5px",
    }
    
    return (
        <>
            <div className="card" style={Style}>
                <img src="https://picsum.photos/100" className="card-img-top" alt="randomimage" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
};

export default Card;