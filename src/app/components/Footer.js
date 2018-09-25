import React from "react";
import PropTypes from "prop-types"

//functional component
//no life cycle methods

export default function Footer({year,company}){
    return(
        <div>
            <hr />
            <p> Copyrights @{year}, {company}</p>
        </div>
    )
}

Footer.PropTypes = {
    year: PropTypes.number.isRequired,//mandatory
    company:PropTypes.string
}

Footer.defaultProps = {
    year:2018,
    company:"React webpack Application"
}
