
import React from 'react'
import TextField from '@mui/material/TextField'

const MySearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <TextField
      id="outlined-basic"
      label="Buscar"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
  )
}

export default MySearchBar
