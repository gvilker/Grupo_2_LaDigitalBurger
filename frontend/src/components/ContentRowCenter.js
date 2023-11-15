import React from 'react';
import LastProductInDb from './LastProductInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">            
            
            <LastProductInDb />
           
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;