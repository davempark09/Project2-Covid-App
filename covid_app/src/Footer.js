import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const syringeIcon = <FontAwesomeIcon icon={faSyringe} />
    return (
        <div className='Footer'>
            <ul className='FootList'>
                <li>
                {syringeIcon}
                    Covid Tracker 2021. All rights</li>
            </ul>
        </div>
    )
}

export default Footer
