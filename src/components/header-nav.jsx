import { useState } from 'react'
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    
} from '@mui/material'
import { AccountCircle } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu'
//import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const HeaderNav = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    //const navigate = useNavigate()

    
   
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="end"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem component={Link} to="/perfilUsuario">My account</MenuItem>
                            <MenuItem component={Link} to="/Login">Cerrar Sesion</MenuItem>
                            
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
