import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { faGooglePlay, faApple, faTwitter, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';


function HomePage() {
    const [users, setUsers] = useState(0);
    const [supplier, setSupplier] = useState(0);
    const [company, setCompany] = useState(0);
    const [product, setProduct] = useState(0);
    const [city, setCity] = useState(0);
    const [showNav, setShowNav] = useState(false);

    const secondSecRef = useRef(null);


    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        // console.log(rect.bottom)
        return (
          rect.top+150 >= 0 &&
          rect.left >= 0 &&
          rect.bottom-220 <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(()=> {
        // console.log(secondSecRef.current.getBoundingClientRect().bottom, 'nigg')
        let li = document.querySelectorAll('.first_sec li');
        console.log(li)
        li.forEach(element => {
            element.addEventListener('mouseover', ()=> {
                for (let i = 0; i < li.length; i++) {
                    li[i].children[0].classList.remove('on'); 
                }
                element.children[0].classList.add('on');

            })
            element.addEventListener('mouseout', ()=> {
                for (let i = 0; i < li.length; i++) {
                    li[i].children[0].classList.remove('on'); 
                }
                // element.children[0].classList.add('on');
            })

        });
    }, [document]);

    useEffect(() => {
        let isInSecondSec = false;
        let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        function handleScroll() {
            var sections = document.querySelectorAll('.section');
            const secArr = [];
            let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    
            if ((currentScrollPos > prevScrollPos) && (window.scrollY > secondSecRef.current.offsetTop - 400 ) ) {
                // Scrolling down
                console.log('Scrolling down');
                isInSecondSec = true;

            } else if((currentScrollPos < prevScrollPos) && window.scrollY == 0) {
                // Scrolling up
                console.log('Scrolling up');
                isInSecondSec = false;
            }
        
            prevScrollPos = currentScrollPos;

            if(window.scrollY > 0) {
                setShowNav(true);
            }else {
                setShowNav(false);
            }


            // sections.forEach(function(section) {
            //     if (isElementInViewport(section)) {
            //         // console.log(section);
                    
            //     }
            // });


            if (isInSecondSec) {
                const intervalId = setInterval(() => {
                    setUsers((prevUsers) => (prevUsers < 30 ? prevUsers + 1 : 30));
                }, 400);
            
                const intervalId2 = setInterval(() => {
                    setSupplier((prev) => (prev < 470 ? prev + 10 : 470));
                }, 200);
            
                const intervalId3 = setInterval(() => {
                    setCompany((prev) => (prev < 150 ? prev + 10 : 150));
                }, 300);
            
                const intervalId4 = setInterval(() => {
                    setProduct((prev) => (prev < 8 ? prev + 1 : 8));
                }, 500);
            
                const intervalId5 = setInterval(() => {
                    setCity((prev) => (prev < 5 ? prev + 1 : 5));
                }, 500);


            
                return () => {
                    clearInterval(intervalId);
                    clearInterval(intervalId3);
                    clearInterval(intervalId4);
                    clearInterval(intervalId5);
                    clearInterval(intervalId2);
                };
            }
             else {
                setUsers(0);
                setSupplier(0);
                setCompany(0);
                setCity(0);
                setProduct(0);
            }

            

        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [secondSecRef]);
    

    
    
  return (
    <>
        <div className='home_cont'>
            <div className='first_sec section d-flex justify-content-center pt-5' >
                <div className='first'>
                    <nav className={`d-flex justify-content-between ${showNav && 'fixed_nav'}` }>
                        <div className='logo_cont'>
                        </div>
                        <div className='list'>
                            <ul>
                                <li>Features
                                    <span></span>
                                </li>
                                <li>About us
                                    <span></span>
                                </li>
                                <li>Blog
                                    <span></span>
                                </li>
                                <li>Product solution
                                    <span></span>
                                </li>
                                <li>Contact us
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                        <div className='bars btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <FontAwesomeIcon icon={faBars} size="xl" />
                        </div>

                    </nav>
                    <div className='first_content d-lg-flex d-block justify-content-between mt-5 py-4'>
                        <div className='ff'>
                            <h1>FMCG <br />
                                <span>ONE STOP SHOP</span>
                            </h1>
                            <p>Davkart is A B2B marketplace that empowers Distributors and Small Businesses to run their operations more seamlessly and efficiently. Davkart aggregates the scattered network of small shops, connects them to FMCG manufacturers,wholesalers & Distributors with a network of logistics & End fulfillment services.
        With Davkart,our broad users can elevate their operations,enhance efficiency,discover new avenue for growth,Extend their influence and unleash their full potential.</p>

                            <div className="stores d-sm-flex ">
                                <div className='store py-2'>
                                <span><FontAwesomeIcon icon={faGooglePlay} /></span> 
                                    <div className='ms-2'>
                                        <h5>Available on</h5>
                                        <h4>Google Play</h4>
                                    </div>
                                </div>
                                <div className='ms-sm-3 mt-3 mt-sm-0 store py-2'>
                                <span><FontAwesomeIcon icon={faApple} /></span> 
                                    <div className='ms-2'>
                                        <h5>Available on</h5>
                                        <h4>App Store</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='firstI'>
                            <motion.div
                            className='dd'
                            initial={{ y: -20 }} // Initial position above the starting point
                            animate={{ y: 0 }}     
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}  // Bouncing transition
                            >
                            <img src="/assets/enterface-1.png" alt="" />
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_sec section" ref={secondSecRef}>
                <div className="overlay"></div>
                <div className="main">
                    <div>
                        <img src="/assets/2a-users.png" alt="" />
                        <h1 className='mt-3'><span>{users}</span>,000 +</h1>
                        <p>RETAIL USERS</p>
                    </div>
                    <div>
                        <img src="/assets/2a-suppliers.png" alt="" />
                        <h1 className='mt-3'>{supplier} +</h1>
                        <p>SUPPLIERS</p>
                    </div><div>
                        <img src="/assets/2a-companies.png" alt="" />
                        <h1 className='mt-3'>{company} +</h1>
                        <p>COMPANIES PARTNERSHIPS</p>
                    </div><div>
                        <img src="/assets/2a-products.png" alt="" />
                        <h1 className='mt-3'><span>{product}</span>,600 +</h1>
                        <p>PRODUCTS</p>
                    </div><div>
                        <img src="/assets/2a-cities.png" alt="" />
                        <h1 className='mt-3'>{city}</h1>
                        <p>CITIES</p>
                    </div>
                </div>
            </div>
            <div className="third_sec section d-flex justify-content-center">
                <div className='cont d-flex justify-content-between'>
                    <div className='first'>
                        <img src="/assets/enterface-1.png" alt="" />
                    </div>
                    <div className='second'>
                        <div className='text-center'>
                            <h1>FUTURE DRIVEN</h1>
                            <h4>A Technology-Integrated Solution</h4>
                            {/* <a href="tel:07018521912">call us</a> */}
                        </div>

                        <div className='third_pr my-5'>
                            <div className="pr d-flex">
                                <img className='me-3' src="/assets/Business-Model.png" alt="" />
                                <p>By adopting an asset-light business model, Cartona aims to empower the marketplace rather than disrupt it.</p>
                            </div>
                            
                            <div className="pr d-flex">
                                <img className='me-3' src="/assets/5-easy2use.png" alt="" />
                                <p>Our user-friendly network offers customized app solutions to maximize the gains of retailers, suppliers, and sales teams.</p>
                            </div>

                            
                            <div className="pr d-flex">
                                <img className='me-3' src="/assets/5-cashless.png" alt="" />
                                <p>We embrace a cashless society and adopt BNPL (buy now, pay later) financing methods, investing in embedded finance and providing retailers and suppliers with integrated solutions to boost financial inclusion.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="fourth_sec section d-flex justify-content-center">
                <div className="cont">
                    <h1 className='text-center'>OUR CULTURE</h1>
                    <p className='text-center'>We are a tech-driven, youth-led, entrepreneurial and innovative company with a meaningful impact.</p>
                    <h2 className='mt-4 text-center'>Meet The Team</h2>

                    <div className="people d-flex justify-content-center">
                        <div className='person me-4'>
                            <div className="circle"></div>
                            <h3 className='text-center'>imoh gabriel</h3>
                            <h4 className='text-center'>Co-founder</h4>
                        </div>
                        <div className='person me-4'>
                            <div className="circle"></div>
                            <h3 className='text-center'>imoh gabriel</h3>
                            <h4 className='text-center'>Co-founder</h4>
                        </div>
                        <div className='person me-4'>
                            <div className="circle"></div>
                            <h3 className='text-center'>imoh gabriel</h3>
                            <h4 className='text-center'>Co-founder</h4>
                        </div>
                        <div className='person me-4'>
                            <div className="circle"></div>
                            <h3 className='text-center'>imoh gabriel</h3>
                            <h4 className='text-center'>Co-founder</h4>
                        </div>
                        <div className='person me-4'>
                            <div className="circle"></div>
                            <h3 className='text-center'>imoh gabriel</h3>
                            <h4 className='text-center'>Co-founder</h4>
                        </div>
                    </div>

                    <h5 className='text-center'>Our passionate, accomplished, and exceptional talents are its greatest asset. We are always looking to hire great people. If you’re an agile and creative problem solver, check out our current vacancies here.</h5>
                </div>

            </div>
            <div className="fifth_section section d-flex justify-content-center">
                <div className="cont">
                    <h1 className='text-center'>OUR PARTNERS</h1>

                <marquee scrollamount="20" class="d-flex" behavior="alternate" direction="">
                    <div className='d-flex partners justify-content-center'>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/hienz.png" alt="" />
                        </div>
                        
                        
                    </div>
                </marquee>

                </div>
            </div>
            <div className="sixth_sec section d-flex justify-content-center">
                <div className="cont">
                    <h1 className='text-center'>Get In Touch</h1>
                    <p  className='text-center'>Have any questions, feedback, or concerns? Reach out to us.</p>
                    <div className='infos d-flex justify-content-between'>
                        <div className='first px-3'>
                            <div className='info'>
                                <div className='d-flex address'>
                                    <div className='circle'>
                                        <FontAwesomeIcon icon={faMapMarker} size="lg" color="#e76D21" />
                                    </div>
                                    <div>
                                        <h2 className='ms-2'>Address</h2>
                                        <h4>83A, God's Provide School, Amaechi,  Enugu</h4>
                                    </div>

                                </div>

                                <div className='d-flex email'>
                                    <div className='circle'>
                                        <FontAwesomeIcon icon={faEnvelope} size="lg" color="#e76D21" />
                                    </div>
                                    <div>
                                        <h2 className='ms-2'>E-Mail</h2>
                                        <a href="mailto:info.davkart@gmail.com"><h4>info.davkart@gmail.com</h4></a>
                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className='second px-3'>
                            <form action="">
                                <div className='mb-3'>
                                    <label htmlFor="Name">Name <span>*</span></label>
                                    <input type="text" id='Name' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <input type="email" id='email' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="Number">Contact Number <span>*</span></label>
                                    <input type="tel" id='number' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="message">Message <span>*</span></label>
                                    <textarea name="" id="message" cols="30" rows="10"></textarea>
                                </div>
                                <button>Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer d-flex justify-content-center">
                <div className="cont">
                    <div className='d-flex justify-content-center'>
                        <div className='socials d-flex justify-content-between'>
                            <div className='first'>
                                <div>
                                    <div className='logo_cont'>
                                    </div>
                                    <div className='d-flex justify-content-sm-evenly mt-3'>
                                        <a href="https://twitter.com/Davkarthq?s=09" target="_blank">
                                            <div className='circle p-2'>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100084698052794" target="_blank">
                                            <div className='circle p-2'>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/company/davkart/" target="_blank">
                                            <div className='circle p-2'>
                                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                            <div className='second px-4'>
                                <h2>Download</h2>
                                <div className="stores d-flex ">
                                <div className='store py-2'>
                                <span><FontAwesomeIcon icon={faGooglePlay} /></span> 
                                    <div className='ms-2'>
                                        <h5>Available on</h5>
                                        <h4>Google Play</h4>
                                    </div>
                                </div>
                                <div className='ms-lg-3 mt-2 store py-2'>
                                <span><FontAwesomeIcon icon={faApple} /></span> 
                                    <div className='ms-2'>
                                        <h5>Available on</h5>
                                        <h4>App Store</h4>
                                    </div>

                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                    <h1>Copyright © 2023 Davkart</h1>
                </div>

            </div>
        </div>
    


    {/* offcanvas */}
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
            <div className='logo_cont'>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div className='offNav'>
                <ul>
                    <li type="button" data-bs-dismiss="offcanvas" aria-label="Close">Features
                        <span></span>
                    </li>
                    <li type="button" data-bs-dismiss="offcanvas" aria-label="Close">About us
                        <span></span>
                    </li>
                    <li type="button" data-bs-dismiss="offcanvas" aria-label="Close">Blog
                        <span></span>
                    </li>
                    <li type="button"  data-bs-dismiss="offcanvas" aria-label="Close">Product solution
                        <span></span>
                    </li>
                    <li type="button" data-bs-dismiss="offcanvas" aria-label="Close">Contact us
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage