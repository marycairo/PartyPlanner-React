import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import { TextField, Button, Typography } from "@mui/material"
import { useState, useEffect } from 'react'
import instalacionService from 'src/Services/instalaciones.service'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const InstalacionModal = ({ openModal, cerrarModal, instalacion, actualizarInstalacion }) => {
    const [nombre, setNombre] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [costoInstalacion, setCostoInstalacion] = useState('')
    const [capacidadInstalacion, setCapacidadInstalacion] = useState('')
    const [descripcionInstalacion, setDescripcionInstalacion] = useState('')
    const [imagenPrincipal, setImagenPrincipal] = useState('')



    useEffect(() => {
        if (instalacion) {
            setNombre(instalacion.nombreDeInstalacion || '')
            setLocalidad(instalacion.localidadDeInstalacion || '')
            setCostoInstalacion(instalacion.costoDeInstalacion || '')
            setCapacidadInstalacion(instalacion.capacidadInstalacion || '')
            setDescripcionInstalacion(instalacion.descripcionDeInstalacion || '')
            setImagenPrincipal(instalacion.imagenPrincipal || '')
        }
        else {
            limpiarDatos()
        }
    }, [instalacion])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const datosInstalacion = {
            nombreDeInstalacion: nombre,
            localidadDeInstalacion: localidad,
            costoDeInstalacion: costoInstalacion,
            capacidadInstalacion: capacidadInstalacion,
            descripcionDeInstalacion: descripcionInstalacion,
            imagenPrincipal: imagenPrincipal,
        }

        try {
            if (instalacion) {
                const respuestaEditar = await instalacionService.actualizarInstalacion({
                    ...datosInstalacion,
                    id: instalacion.id
                })
                console.log("Respuesta de edición de instalación:", respuestaEditar)
                console.log("Instalación editada exitosamente.")
            } else {
                const respuestaCrearInstalacion = await instalacionService.crearInstalacion(datosInstalacion)
                console.log("Respuesta de creación de instalación:", respuestaCrearInstalacion)
                console.log("Instalación creada exitosamente.")
            }
            cerrarModal()
            limpiarDatos()
            actualizarInstalacion()

        } catch (error) {
            console.error('Error al guardar la instalación:', error)
        }
    }

    const limpiarDatos = () => {
        setNombre('')
        setLocalidad('')
        setCostoInstalacion('')
        setCapacidadInstalacion('')
        setDescripcionInstalacion('')
        setImagenPrincipal('')
    }

    return (
        <Modal
            open={openModal}
            onClose={cerrarModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h6" align="center" gutterBottom>
                    {instalacion ? 'Editar Instalación' : 'Crear Instalación'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            variant="standard"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            id="localidad"
                            name="localidad"
                            label="Localidad"
                            variant="standard"
                            value={localidad}
                            onChange={(e) => setLocalidad(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            id="costo"
                            name="costo"
                            label="Costo"
                            variant="standard"
                            value={costoInstalacion}
                            onChange={(e) => setCostoInstalacion(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            id="capacidad"
                            name="capacidad"
                            label="Capacidad"
                            variant="standard"
                            value={capacidadInstalacion}
                            onChange={(e) => setCapacidadInstalacion(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            id="descripcion"
                            name="descripcion"
                            label="Descripción"
                            variant="standard"
                            value={descripcionInstalacion}
                            onChange={(e) => setDescripcionInstalacion(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            id="imagen"
                            name="imagen"
                            label="Imagen"
                            variant="standard"
                            value={imagenPrincipal}
                            onChange={(e) => setImagenPrincipal(e.target.value)}
                            style={{ marginBottom: "1rem" }}
                        />

                        {/* Agrega más campos si es necesario para la instalación */}
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button variant="text" onClick={cerrarModal}>Cancelar</Button>
                            <Button type="submit" variant="text">
                                {instalacion ? 'Guardar Cambios' : 'Crear'}
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

InstalacionModal.propTypes = {
    openModal: PropTypes.bool,
    cerrarModal: PropTypes.func,
    instalacion: PropTypes.object,
    actualizarInstalacion: PropTypes.func.isRequired,

}


export default InstalacionModal
