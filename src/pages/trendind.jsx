import React from 'react'
import Bottompart from '../components/Bottompart'
import { useNavigate } from 'react-router-dom';


function Trendind() {
    const navigate = useNavigate();

  return (
    <div className='trending_main'>
        <div className="nav d-flex align-items-center py-3 px-2">
            <svg onClick={()=> navigate(-1)} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0L11.1 2.175L5.775 7.5L24 7.5V10.5L5.775 10.5L11.1 15.825L9 18L0 9L9 0Z" fill="#2F2F2F"/>
            </svg>
            <h2 className='ms-3'>Trending meals</h2>
        </div>

        <div className="main_body">
            <img className='firstI' src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
            
            <div className="options px-2 mt-3">
                <img className='firstI me-2' src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                <img className='firstI me-2' src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
                <img className='firstI' src="https://s3-alpha-sig.figma.com/img/c4ea/0591/76a49a3db00ad4d36673414747ac5dc1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYWl7465YQcwuxhtq1sC4roQ6rAlydVBlezlrileIu7FpQHBAIGfPdv6N2dJXcR7McPQUqAGfW6GrzG7FXENVTx~Xfc8CnpTNwcloxbZGme1aGYOFqVdtGnINMEWnQh4cbTcPdiVUsGP-IqitSamdKjSZ-ppvShHD~D5p8x4DaJReTuk6~3D0iIIbvPSN~0p0UFq1MwJsZMktJ8VATEQpuiFQWwqEGZHInhAGE4ibNoeYDL8x4MH6ga59dQ-t-Ytn97gjnQN-M0eE~Cvf7KKLU1sy--J8~jnjCOszNsYleCLtbcFhSyUFjfo7HycErR6ipdBIdxjo3Y6tV12FeNsww__" alt="" />
            </div>
            <div className='px-2 mt-3'>
                <h3>Jollof rice</h3>

                <h4 className='mt-3'>From Zaddy’s place</h4>
                <h4>25 mins away from your current location</h4>

                <h3 className='mt-4'>Food details</h3>
                <ul className='mt-3 pe-3'>
                    <li>
                        <div className='d-flex justify-content-between'>
                            Rice
                            <span>N 1200</span> 
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between'>
                            Rice
                            <span>N 1200</span> 
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between'>
                            Rice
                            <span>N 1200</span> 
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between'>
                            Rice
                            <span>N 1200</span> 
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between'>
                            Rice
                            <span>0</span> 
                        </div>
                    </li>
                </ul>

            </div>

            <Bottompart trending={true} />
        </div>
    </div>
  )
}

export default Trendind