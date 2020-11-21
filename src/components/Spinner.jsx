import React from 'react'

const Spinner = ({ isLoading }) => {
    return (
        <div className="d-flex justify-content-center">
          {isLoading && <div className="spinner-border" id="spinner"></div>}
        </div>
    )
}

export default Spinner
