export default function Team() {
    return (

        <div className="container ">

            <div className="row   mx-5   border-top">
                <h1 className=" fs-4  mt-3 text-center " style={{ lineHeight: "1.6", fontWeight: "500", color: "rgb(60,60,60" }}>                  People   </h1>
            </div>

            <div className="row   mx-5   mb-5 " style={{ lineHeight: "1.8", fontSize: "1em" }}>
                <div className="col-6   text-center text-muted"  >
                    <img src="media/images/nithinKamath.jpg" style={{ borderRadius: "100%", width: "50%" }} alt="" />

                    <h4 className=" mt-5"> Nitin Kamath</h4>
                    <h6 >Founder, CEO</h6>
                </div>
                <div className="col-6  p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p>

                        Playing basketball is his zen.
                    </p>
                    <p>Connect on <a href=""> Homepage </a> / <a href=""> TradingQnA </a> / <a href=""> Twitter  </a> </p>


                </div>
            </div>

        </div>
    )
}