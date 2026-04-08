function Categoria( {secao, href}) {
    return(
        <>
            <li className="header-categoria">
                <a id="" className="header-categoria-link" href={href}>{secao}</a>
            </li>
        </>
    )
}

export default Categoria