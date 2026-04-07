function HabilidadeItem( {children, data} ) {
    function clicado(e) {
        console.log("e", e.currentTarget)
        console.log("data", data)
    }

    return(
        <>
            <div className="habilidade-tecnologia" onClick={clicado} dataset={data}>{children}</div>
        </>
    )
}

export default HabilidadeItem