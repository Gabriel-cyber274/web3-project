import React from 'react'
import { useRouter, useNavigate } from 'react-router-dom';


function Mainpage() {
  const navigate = useNavigate();

  return (
    <div className='main_page_cont'>
        <div className="second_sec py-5 px-3">
            <div className="overlay"></div>
            <div className='first'>
                <h1>
                    We are the <span>fastest</span> <br />
                    food delivery hub. 
                </h1>
                <p className='mb-5 mt-3'>Pay with your crypto account available</p>
                <button>Explore</button>
            </div>
        </div>
        <div className="third_sec pt-3 pb-5">
            <p className='text-center mb-5'>*Discounted prices available only at Joeron</p>
            <div className='first'>
                <input className='search mb-4' type="text" placeholder='Search...' name="" id="" />

                <div className='d-flex px-3 trend_head justify-content-between align-items-center'>
                    <h3>Trending meals</h3>

                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#F5422A"/>
                    <path d="M12.5001 9.74994L19.4993 16.2107C19.4997 16.2111 19.4997 16.2118 19.4993 16.2122L12.5001 22.2499" stroke="#F2F2F2" stroke-width="1.5"/>
                    </svg>
                </div>

                <div className='meals px-3 mt-3'>
                    <div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div>
                    <div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div><div className='meal' onClick={()=> navigate('/trending')}>
                        <img src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                        <h4 className='text-center my-2'>Egusi soup</h4>
                        <button className='py-1 px-2'>Try this <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 0.75L4.74924 4.24924C4.74965 4.24965 4.74962 4.25032 4.74918 4.2507L1.25 7.25" stroke="#F2F2F2"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer px-3 py-4">
            <a href=''><h4>Get help</h4></a>
            <a href=''><h4>Add your restaurant</h4></a>
            <a href=''><h4>Sign up as a driver</h4></a>
            <a href=''><h4>Promotions</h4></a>
            <a href=''><h4>About Joeron</h4></a>
            <a href=''><h4>English</h4></a>
            <a href=''><h4>Privacy policy</h4></a>
            <a href=''><h4>Terms and conditions</h4></a>
        </div>
    </div>
  )
}

export default Mainpage