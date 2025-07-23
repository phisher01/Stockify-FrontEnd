
export default function RightSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {

    return (
        <div className="container mt-5 mt-5 ">
            <div className="row">

                <div className="col-6   mt-5  " style={{width:"35%", marginLeft:"8vw",color:"rgb(82, 82, 76)" }}>
                    <h3>{productName}</h3>
                    <p style={{lineHeight:2,fontSize:16}}>{    productDescription}</p>
                    <div>

                    
                    <a   href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i>    </a>
                    </div>


                </div>
                <div className="col-6   " style={{marginLeft:"5vw"}}>
                    <img    src={imageURL} alt="" />
                </div>
            </div>

        </div>


    )
}