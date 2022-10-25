import React from 'react'

export const Pagination = ({ page, setPage }) => {



    const previusx1 = () => {
        page > 1 && setPage(page - 1)
    }

    const previusx10 = () => {
        page > 10 && setPage(page - 10)
    }

    const nextx1 = () => {
        setPage(page + 1)
    }

    const nextx10 = () => {
        page === 1 ? setPage(page + 9 ) : setPage(page + 10)
        page >= 32 && setPage(false)
    }

    return (
        <div className="btn-group">
            <button className="btn btn-sm"
            onClick={() => previusx10()} disabled={page <= 10 && true}><i className="fa-solid fa-backward hover:text-success"></i></button>
            
            <button className="btn btn-sm"
                onClick={() => previusx1()} disabled={page <= 1 && true}><i className="fa-solid fa-caret-left hover:text-success"></i></button>

            <button className="btn btn-sm hover:text-success">Page: {page}</button>

            <button className="btn btn-sm"
                onClick={() => nextx1()} disabled={page >= 42 && true}><i className="fa-solid fa-caret-right hover:text-success"></i></button>
                
            <button className="btn btn-sm"
            onClick={() => nextx10()} disabled={page >= 32 && true}><i className="fa-solid fa-forward hover:text-success"></i></button>

        </div>
    )
}
