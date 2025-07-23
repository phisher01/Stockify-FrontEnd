

export default function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {

    return (
        <div className="container mt-5  mb-5">
            <div className="row">

                <div className="col-6   " style={{marginLeft:"8vw"}}>
                    <img    src={imageURL} alt="" />
                </div>
                <div className="col-6   mt-5  " style={{width:"35%", marginLeft:"5vw" ,color:"rgb(82, 82, 76)" }}>
                    <h3>{productName}</h3>
                    <p style={{lineHeight:2,fontSize:16}}>{    productDescription}</p>
                    <div>

                    <a href={tryDemo}>Try Demo  <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a  style={{marginLeft:"15px"}} href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i>    </a>
                    </div>

<div  className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"  /></a>
                    <a   style={{marginLeft:"15px"}} href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
    </div>
                </div>
            </div>

        </div>


    )
}   