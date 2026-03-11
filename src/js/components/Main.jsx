import Hero from "./Hero";
import Cardrow from "./Cardrow";

const Main = () =>{

    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <Hero />
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <Cardrow />
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
};

export default Main;