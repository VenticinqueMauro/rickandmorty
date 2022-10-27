import React from 'react'

export const InputSearch = ({setText}) => {
    
    return (
        <div className="form-control">
            <div className="bg-transparent input">
                <input type="text" placeholder="Search Name…" className="bg-transparent input input-bordered" onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )
}
