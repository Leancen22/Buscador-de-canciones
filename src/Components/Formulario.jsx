import { useState } from "react"
import useLetras from "../Hooks/useLetras"

const Formulario = () => {

    const {setAlerta, busquedaLetras} = useLetras()

    const [ busqueda, setBusqueda ] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca nombre de artista y cancion')
            return
        }

        busquedaLetras(busqueda)
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Buscar por artista y cancion</legend>

        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input
                    type="text"
                    name="artista"
                    placeholder="Busca por artista"
                    value={busqueda.artista}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            <div>
                <label>Cancion</label>
                <input
                    type="text"
                    name="cancion"
                    placeholder="Busca por cancion"
                    value={busqueda.cancion}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <input type="Submit" value="Buscar"/>
        </div>
    </form>
  )
}

export default Formulario