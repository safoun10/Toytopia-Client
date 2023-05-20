import React from 'react';

const SingleToyByCategory = ({toy}) => {
    return (
        <div>
            <dir>
                {toy.toy_name}
            </dir>
        </div>
    );
};

export default SingleToyByCategory;