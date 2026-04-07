function ContatoSocial( {rede, link, icon: Icon} ) {
    return(
        <>
            <div className="contato-rede">
                <a className="contato-rede-link" href={link}>
                    <Icon />

                    <h2 className="contato-rede-subtitulo">{rede}</h2>
                </a>
            </div>
        </>
    )
}

export default ContatoSocial
