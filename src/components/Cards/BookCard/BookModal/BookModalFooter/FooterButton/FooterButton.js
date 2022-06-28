import React from 'react';
import {Button} from "reactstrap";

const FooterButton = ({link, title}) => {
    return (
        <Button>
            <a
                href={link}
                className='btn-link'
                color='default'
                type='button'
                target='_blank'
                rel='noopener noreferrer'
                style={{textDecoration: 'none', color: 'white'}}
            >
                {title}
            </a>
        </Button>
    );
};

export default FooterButton;
