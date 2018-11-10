import React from 'react';

export default (props)=> {
    const {info} = props
    return(
        <div className="container">
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={info['im:image'][2].label}/>
                </div>
                <div className='col-sm-2'>
                    <h3>{info['im:name'].label}</h3>
                </div>
                <div className='col-sm-8'>
                    <p>{info.summary.label}</p>
                </div>
            </div>
        </div>
    )
}