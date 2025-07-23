
export default function Hero() {
    return (
        <>
            <div className="container-fluid" id="supportHero">
                <div id="supportWrapper" className="p-5">
                    <h4>Support Portal</h4>
                    <a href="">Track Tickets</a>
                </div>
                <div className="row p-5 mx-5">
                    <div className="col-6 p-5">
                        <h1 className="fs-3">Search for answer  or browser  help topics  to create a  ticket</h1>
                        <input type="text " placeholder="Eg. how do i  activate F&O" />
                        <br />
                        <a href="">Track account  opening</a>
                        <a href="">Track account  opening</a>
                        <a href="">Track account  opening</a>
                        <a href="">Track account  opening</a>
                    </div>
                    <div className="col-6 p-5">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li>

                                <a href="">Current  Takeovers and Delisting - January 2025</a>
                            </li>
                            <li>

                                <a href="">Latest  Intraday leverages - MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>

    );
}