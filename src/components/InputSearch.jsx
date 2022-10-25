import React from 'react'

export const InputSearch = ({setText}) => {
    
    return (
        <div className="form-control">
            <div className="input">
                <input type="text" placeholder="Search Name…" className="input input-bordered" onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )
}
