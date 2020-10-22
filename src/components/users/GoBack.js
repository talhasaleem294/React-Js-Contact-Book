import React from 'react';
import { Link } from 'react-router-dom';

const GoBack = () => {
    return ( 
        <div className="container my-4">
            <Link to="/"> <i className="fas fa-arrow-circle-left"></i> Go back to dashboard</Link>
        </div>
     );
}
 
export default GoBack;