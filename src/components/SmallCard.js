import React from 'react';
import PropTypes from 'prop-types';

function SmallCard(props) {
    const { title, color, cuantity, icon } = props;

    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body text-gray-800">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-uppercase mb-1 text-${color}`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold">{cuantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */
SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuantity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */
SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cuantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    icon: PropTypes.string.isRequired
}

export default SmallCard;
