import React from 'react';

const Button = (props) =>{

    const {href, text, extraClasses} = props;
    const classes = `${extraClasses} text-white text-sm px-4 py-2 rounded-full hover:bg-orange-700 lg:text-lg lg:px-6 lg:py-3 lg:rounded-full`;

    return(
        <button href={href} className={classes} aria-label={text}>
            {text}
        </button>
    )
}

export default Button;
