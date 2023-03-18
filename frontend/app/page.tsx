'use client';

import {Grid, Typography} from "@mui/material";

export default function Home() {
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
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container
                          padding={"2rem"}
                    >
                        <Grid item>
                            <Typography variant={"h6"}>
                                Acciones
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
