import { Link } from "react-router-dom";
export default function NavBar() {
    return (


        
            <nav class="navbar navbar-expand-lg  sticky-top fixed-bottom border-bottom " style={{backgroundColor :"#fff"}}>
                <div class="container p-2">
                    <Link   class="navbar-brand" to="/"><img src="media/images/logo.svg" style={{width:"25%"}} alt="" /></Link>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">Product </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>
                            
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>

    

    );
}