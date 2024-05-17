import { Container, Grid } from "@mui/material"
import EventRoomCard from "src/components/roomCard"
import { useState } from 'react'
import BasicModal from "src/components/modalReservar"
import TextField from '@mui/material/TextField'

const PrincipalView = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [términoDeBúsqueda, setTerminoDeBúsqueda] = useState('') // Estado para el término de búsqueda

    const roomsData = [
        {
            imagen: 'https://cdn0.casamientos.com.ar/vendor/4957/3_2/960/jpg/11146682-1631660073730391-2695685667774858443-o_7_114957.webp',
            nombre: 'Salon Diamante',
            descripcion: 'Diamante es un espacio con dos salones para su casamiento. Decorado de manera elegante y con buen gusto por los detalles, el lugar se convertirá en el escenario ideal para su unión nupcial.',
            costo: '$100',
            capacidad: '100 personas',
            localidad: 'Ciudad 1'
        },
        {
            imagen: 'https://cdn0.casamientos.com.ar/vendor/8760/3_2/640/jpg/micl9085_7_118760-1552680382.webp',
            nombre: 'Salon Mix',
            descripcion: 'Aca escribo algo lindo y descriptivo luego ',
            costo: '$200',
            capacidad: '200 personas',
            localidad: 'Ciudad 2'
        }
    ]

    const handleRoomClick = (room) => {
        setSelectedRoom(room)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const manejarCambioBúsqueda = (evento) => {
        setTerminoDeBúsqueda(evento.target.value.toLowerCase()) // Normalizar término de búsqueda
      }
    
    //   const salasFiltradas = datosSalones.filter((sala) =>
    //     sala.nombre.toLowerCase().includes(términoDeBúsqueda) || // Buscar por nombre de sala
    //     sala.localidad.toLowerCase().includes(términoDeBúsqueda) // Buscar por localidad
    //   )

    return (
      <Container className="main" style={{ marginBottom: '5rem' }}>
        <TextField
          label="Buscar salas"
          variant="outlined"
          margin="normal"
          fullWidth
          value={términoDeBúsqueda}
          onChange={manejarCambioBúsqueda}
          placeholder="Nombre del salón o localidad"
          helperText="Filtrar por nombre del salón o localidad" // Texto de ayuda opcional
        />
        <Grid container spacing={3} justifyContent="center">
          {roomsData.map((room, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <EventRoomCard
                room={room}
                onClick={() => handleRoomClick(room)}
              />
            </Grid>
          ))}
        </Grid>
        <BasicModal
          openModal={openModal}
          cerrarModal={handleCloseModal}
          seleccion={selectedRoom}
        />
      </Container>
    )
}

export default PrincipalView