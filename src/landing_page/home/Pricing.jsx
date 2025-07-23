export default function Pricing() {

    return (

        <div className="container mb-5 p-5">
            <div className="row">

            <div className="col-4">
                <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a  href="">  See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
  </div>
            <div className="col-2"></div>
            <div className="col-6   mb-5">
                <div className="row text-center ">
                    <div className="col border p-3" >
                        <h1  className=" mb-3"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                        <p>Free equity delivery  and  <br />direct mutual funds</p>
                        </div>
                    <div className="col border p-3">
                        <h1 className="mb-3"><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                        <p>Intraday F&O</p>
                        </div>
                </div>
            </div>
            </div>
        </div>
       
   
    );
}