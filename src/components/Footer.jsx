import React from 'react'

export const Footer = () => {
    return (
        <footer className="items-center p-4 footer bg-neutral text-neutral-content lg:px-10">
            <div className="items-center grid-flow-col place-self-center md:place-self-auto">
                <p>Copyright © 2022 - All right reserved - Mauro Venticinque</p>
            </div>
            <div className="grid-flow-col gap-4 place-self-center md:justify-self-end ">
                <a href='https://www.linkedin.com/in/mauro-venticinque-39a256235/' target={'_blank'}><i className="text-xl fa-brands fa-linkedin-in hover:text-success"></i>
                </a>
                <a href='https://github.com/VenticinqueMauro' target={'_blank'}><i className="text-xl fa-brands fa-github-alt hover:text-success"></i></a>
                <a href='https://twitter.com/VenticinqueMa' target={'_blank'}><i className="text-xl fa-brands fa-twitter hover:text-success"></i></a>
            </div>
        </footer>
    )
}
