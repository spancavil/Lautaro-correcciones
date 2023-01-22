import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faPlaystation, faXbox, faDiscord } from '@fortawesome/free-brands-svg-icons'


const footer = () => {
return (
    <footer className='footer' >
        <div class="redescontainer">
            <ul>
                <li className='liFooter'><a className='aFooter' href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://twitter.com/?lang=es" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faPlaystation}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faXbox}/></a></li>
                <li className='liFooter'><a className='aFooter' href="https://es-la.facebook.com/" target="_blank"><FontAwesomeIcon icon={faDiscord}/></a></li>
            </ul>
        </div>
    </footer>
    )
}

export default footer