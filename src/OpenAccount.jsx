import { Link } from "react-router-dom";
export default function OpenAccount() {
    return (


        <div className="container mb-5">
            <div className="row p-5  text-center">
                <h1>
                Open a Zerodha account
            </h1>

            <p >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/signup"><button className=' btn  btn-primary mb-5 ' style={{ width: "20%", margin: "0 auto" }}>
                Signup Now
            </button>
            </Link>
        </div>
         </div >
   
   
    );
}