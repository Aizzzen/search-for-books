import React from 'react';
import {Button} from "reactstrap";

const FooterButton = ({link, title}) => {
    return (
        <Button>
            <a
                href={link}
                className='footer-button-a btn-link'
                color='default'
                type='button'
                target='_blank'
                rel='noopener noreferrer'
            >
                {title}
            </a>
        </Button>
    )
}

export default FooterButton
