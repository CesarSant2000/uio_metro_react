'use client';

import {
    Button,
    Collapse,
    Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle,
    Grid,
    List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";

export default function Home() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isRoute, setIsRoute] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [isFav, setIsFav] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    }

    const handleClick3 = () => {
        setOpen3(!open3);
    }

    const handleClick4 = () => {
        setOpen4(!open4);
    }

    const handleClick5 = () => {
        setOpen5(!open5);
    }

    const handleClick6 = () => {
        setOpen6(!open6);
    }

    const handleRoute = () => {
        console.log("Route");
        setIsRoute(true);
        setIsHome(false);
        setIsFav(false);
        setOpenDialog(true);
    }

    const handleHome = () => {
        console.log("Home");
        setIsRoute(false);
        setIsHome(true);
        setIsFav(false);
        setOpenDialog(true);
    }

    const handleFav = () => {
        console.log("Fav");
        setIsRoute(false);
        setIsHome(false);
        setIsFav(true);
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setIsRoute(false);
        setIsHome(false);
        setIsFav(false);
    }

    return (
        <>
            <Grid container
            >
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container
                          padding={"2rem"}
                    >
                        <Grid item>
                            <Typography variant={"h6"}>
                                Historial
                            </Typography>
                        </Grid>
                        <Grid item>
                            <List sx={{
                                backgroundColor: "rgba(242,243,244,0.95)",
                                borderRadius: '1rem',
                                border: '1px solid #6E6E6EFF'
                            }}>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <DirectionsRailwayFilledIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Partida: Estación Jipijapa -- Destino: Estación Seminario Mayor"/>
                                    {open ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Grid container>
                                        <Grid item xs={9} sm={9} md={9}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partida: Estación Jipijapa "/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Destino: Estación Pradera"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Tiempo de viaje"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Asientos disponibles"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 12:34"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 12:40"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 00:10"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="--     36"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                                <ListItemButton onClick={handleClick2}>
                                    <ListItemIcon>
                                        <DirectionsRailwayFilledIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Partida: Estación Jipijapa -- Destino: Estación Seminario Mayor"/>
                                    {open2 ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <Grid container>
                                        <Grid item xs={9} sm={9} md={9}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partida: Estación Jipijapa "/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Destino: Estación Pradera"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Tiempo de viaje"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Asientos disponibles"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 16:20"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 16:25"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 00:05"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="--     2"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                                <ListItemButton onClick={handleClick3}>
                                    <ListItemIcon>
                                        <DirectionsRailwayFilledIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Partida: Estación El labrador -- Destino: Estación Principal Quitumbe"/>
                                    {open3 ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                                <Collapse in={open3} timeout="auto" unmountOnExit>
                                    <Grid container>
                                        <Grid item xs={9} sm={9} md={9}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Partida: Estación Jipijapa "/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <AltRouteIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Destino: Estación Pradera"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Tiempo de viaje"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemIcon>
                                                        <MoreHorizIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Asientos disponibles"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3}>
                                            <List component="div" disablePadding>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 18:30"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 18:45"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="-- 00:15"/>
                                                </ListItem>
                                                <ListItem sx={{pl: 4}}>
                                                    <ListItemText primary="--     0"/>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container
                          padding={"2rem"}
                    >
                        <Grid item xs={12} sm={12} md={12}
                        >
                            <Typography variant={"h6"}>
                                Acciones
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <List>
                                <ListItemButton onClick={handleRoute}
                                                sx={{
                                                    backgroundColor: "rgba(48,62,117,0.8)",
                                                    borderRadius: "1rem",
                                                    marginBottom: "1rem",
                                                    height: "5rem",
                                                    color: "white",
                                                    ":hover": {
                                                        backgroundColor: "rgb(48,62,117)",
                                                    }
                                                }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            backgroundColor: "rgb(48,62,117)",
                                            borderRadius: "1rem",
                                            textAlign: "center",
                                            justifyContent: "center",
                                            height: "3rem",
                                            width: "3rem",
                                            marginRight: "1rem",
                                            alignContent: "center",
                                            alignItems: "center",
                                            ":hover": {
                                                backgroundColor: "rgba(48,62,117,0.8)",
                                            }
                                        }}
                                    >
                                        <SearchIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Llévame a algún sitio"/>
                                </ListItemButton>
                                <ListItemButton onClick={handleHome}
                                                sx={{
                                                    backgroundColor: "rgba(227,29,27,0.8)",
                                                    borderRadius: "1rem",
                                                    marginBottom: "1rem",
                                                    height: "5rem",
                                                    color: "white",
                                                    ":hover": {
                                                        backgroundColor: "rgb(227,29,27)",
                                                    }
                                                }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            backgroundColor: "rgb(227,29,27)",
                                            borderRadius: "1rem",
                                            textAlign: "center",
                                            justifyContent: "center",
                                            height: "3rem",
                                            width: "3rem",
                                            marginRight: "1rem",
                                            alignContent: "center",
                                            alignItems: "center",
                                            ":hover": {
                                                backgroundColor: "rgba(227,29,27,0.8)",
                                            }
                                        }}
                                    >
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Llévame a casa"/>
                                </ListItemButton>
                                <ListItemButton onClick={handleFav}
                                                sx={{
                                                    backgroundColor: "rgba(248,238,128,0.8)",
                                                    borderRadius: "1rem",
                                                    marginBottom: "1rem",
                                                    height: "5rem",
                                                    color: "white",
                                                    ":hover": {
                                                        backgroundColor: "rgb(248,238,128)",
                                                    }
                                                }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            backgroundColor: "rgb(248,238,128)",
                                            borderRadius: "1rem",
                                            textAlign: "center",
                                            justifyContent: "center",
                                            height: "3rem",
                                            width: "3rem",
                                            marginRight: "1rem",
                                            alignContent: "center",
                                            alignItems: "center",
                                            ":hover": {
                                                backgroundColor: "rgba(248,238,128,0.8)",
                                            }
                                        }}
                                    >
                                        <FavoriteIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Lugares favoritos"/>
                                </ListItemButton>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Manejo de opciones</DialogTitle>
                    {
                        isRoute &&
                        <>
                            <DialogContent>
                                <DialogContentText>
                                    A continuación, se van a mostrar los vagones próximos en base a su ubicación.
                                </DialogContentText>
                                <List>
                                    <ListItem sx={{
                                        backgroundColor: "rgba(255,252,229,0.8)",
                                        borderRadius: "1rem",
                                        marginBottom: "1rem",
                                        height: "3rem",
                                        color: "#000",
                                        ":hover": {
                                            backgroundColor: "rgb(232,229,255)",
                                        }
                                    }}>
                                        <ListItemText primary="16:40 (10 min, 19 asientos disponibles)"/>
                                    </ListItem>
                                    <ListItem sx={{
                                        backgroundColor: "rgba(255,252,229,0.8)",
                                        borderRadius: "1rem",
                                        marginBottom: "1rem",
                                        height: "3rem",
                                        color: "#000",
                                        ":hover": {
                                            backgroundColor: "rgb(232,229,255)",
                                        }
                                    }}>
                                        <ListItemText primary="16:50 (20 min, 74 asientos disponibles)"/>
                                    </ListItem>
                                    <ListItem sx={{
                                        backgroundColor: "rgba(255,252,229,0.8)",
                                        borderRadius: "1rem",
                                        marginBottom: "1rem",
                                        height: "3rem",
                                        color: "#000",
                                        ":hover": {
                                            backgroundColor: "rgb(232,229,255)",
                                        }
                                    }}>
                                        <ListItemText primary="17:00 (30 min, 124 asientos disponibles)"/>
                                    </ListItem>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog}>Cerrar</Button>
                            </DialogActions>
                        </>
                    }
                    {
                        isHome &&
                        <>
                            <DialogContent>
                                <DialogContentText>
                                    A continuación, se muestra los datos del próximo vagón a su casa.
                                </DialogContentText>
                                <List sx={{
                                backgroundColor: "rgba(242,243,244,0.95)",
                                borderRadius: '1rem',
                                border: '1px solid #6E6E6EFF'
                            }}>
                                    <ListItemButton onClick={handleClick4}>
                                        <ListItemIcon>
                                            <DirectionsRailwayFilledIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Partida: Estación Jipijapa -- Destino: Estación La Prensa"/>
                                        {open4 ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={open4} timeout="auto" unmountOnExit>
                                        <Grid container>
                                            <Grid item xs={9} sm={9} md={9}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Partida: Estación Jipijapa "/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Destino: Estación La Prensa"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Tiempo de viaje"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Asientos disponibles"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 16:20"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 16:25"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 00:05"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="--     2"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog}>Cerrar</Button>
                            </DialogActions>
                        </>
                    }
                    {
                        isFav &&
                        <>
                            <DialogContent>
                                <DialogContentText>
                                    A continuación, se muestra los datos de sus rutas favoritas.
                                </DialogContentText>
                                <List sx={{
                                backgroundColor: "rgba(242,243,244,0.95)",
                                borderRadius: '1rem',
                                border: '1px solid #6E6E6EFF'
                            }}>
                                    <ListItemButton onClick={handleClick5}>
                                        <ListItemIcon>
                                            <DirectionsRailwayFilledIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Partida: Estación Seminario Mayor -- Destino: Estación La Prensa"/>
                                        {open5 ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={open5} timeout="auto" unmountOnExit>
                                        <Grid container>
                                            <Grid item xs={9} sm={9} md={9}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Partida: Seminario Mayor "/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Destino: Estación La Prensa"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Tiempo de viaje"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Asientos disponibles"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 18:40"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 18:45"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 00:05"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="--   245"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick6}>
                                        <ListItemIcon>
                                            <DirectionsRailwayFilledIcon/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Partida: Estación Parque Central -- Destino: Estación La Prensa"/>
                                        {open6 ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={open6} timeout="auto" unmountOnExit>
                                        <Grid container>
                                            <Grid item xs={9} sm={9} md={9}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Partida: Estación Parque Central "/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <AltRouteIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Destino: Estación La Prensa"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Tiempo de viaje"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemIcon>
                                                            <MoreHorizIcon/>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Asientos disponibles"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}>
                                                <List component="div" disablePadding>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 13:20"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 16:25"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="-- 00:05"/>
                                                    </ListItem>
                                                    <ListItem sx={{pl: 4}}>
                                                        <ListItemText primary="--     32"/>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Collapse>
                                </List>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog}>Cerrar</Button>
                            </DialogActions>
                        </>
                    }
                </Dialog>
            </Grid>
        </>
    )
}
