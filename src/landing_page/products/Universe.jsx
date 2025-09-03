
import { Link } from "react-router-dom"
export default function Universe() {

    return (
        <div className="container text-center mt-5 mt-5 ">
                <h3>The Zerodha Universe</h3>
                <p >Extend your trading and investment experience even further with our partner platforms</p>
               
            <div className="row mt-5 ">


                    <div className="col-4   p-3 ">
                        <img  style={{width:"150px"}} src="media/images/smallcaseLogo.png" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                   
                </div>
                    <div className="col-4   p-3 ">
                   
                        <img  style={{width:"150px"}} src="media/images/streakLogo.png" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                </div>  
                    <div className="col-4   p-3 ">
                        <img  style={{width:"150px"}} src="media/images/dittoLogo.png" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                   
                </div>

            </div>
            <div className="row mt-5 ">


                    <div className="col-4   p-3 ">
                        <img style={{width:"150px"}} src="media/images/sensibullLogo.svg" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                   
                </div>
                    <div className="col-4   p-3 ">
                   
                        <img  style={{width:"150px"}}src="media/images/zerodhaFundhouse.png" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                </div>  
                    <div className="col-4   p-3 ">
                        <img style={{width:"150px"}} src="media/images/goldenpiLogo.png" alt="" />
                        <p className="text-small text-muted">Lorem ipsum dolor sit amet.</p>
                   
                </div>

            </div>
            <Link to="/signup"><button className=' btn  btn-primary mt-3 mb-5 ' style={{width:"20%",margin:"0 auto" }}> 
Signup Now
</button>
</Link>
            </div>


            )
}