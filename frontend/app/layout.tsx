// app\layout.tsx
'use client';
import {ReactNode} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

export const metadata = {
    icons: {
        icon: 'public/favicon.ico',
        shortcut: 'public/favicon.ico',
        apple: 'public/favicon.ico',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: 'public/favicon.ico',
        }
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    }
}

/**
 * This is the root layout for the application.
 * It is used to wrap all the pages.
 * This required layout is shared across all pages in an application.
 * Root layouts must contain html and body tags.
 * @params children
 * @constructor
 */
export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="es">
        <body>
        <main>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{
                    height: '100%',
                    minHeight: '100vh',
                    maxHeight: '?',
                    backgroundImage: 'url(/images/common_background.png)',
                    backgroundRepeat: 'repeat-y',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={1}
                        md={2}
                        sx={{
                            backgroundColor: 'rgba(234,234,234,0.44)',
                            marginTop: '6rem',
                            marginBottom: '1rem',
                            borderRadius: '1rem',
                        }}
                    >
                        <Grid container
                              justifyContent={"center"}
                              alignItems={"center"}
                              padding={"1rem"}
                              paddingTop={"6rem"}
                              rowGap={"6rem"}
                        >
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://w10.naukri.com/mailers/2021/naukri-learning/nov/22nov-v2/Google-Ads.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://w10.naukri.com/mailers/2021/naukri-learning/nov/22nov-v2/Google-Ads.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://w10.naukri.com/mailers/2021/naukri-learning/nov/22nov-v2/Google-Ads.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={10}
                        md={8}
                        sx={{
                            backgroundColor: 'rgba(242,243,244,0.9)',
                            padding: '1rem',
                            marginTop: '6rem',
                            marginBottom: '1rem',
                            borderRadius: '1rem',
                        }}
                    >
                        {/*FIS and EPN logos start*/}
                        <Grid
                            container
                            bgcolor={"transparent"}
                            justifyContent={"center"}
                        >
                            <Grid item xs={12} sm={6} md={4}
                                  bgcolor={"#707070"}
                                  height={"1rem"}
                                  marginBottom={"2rem"}
                                  sx={{
                                        borderRadius: '1rem',
                                  }}
                            >
                            </Grid>
                        </Grid>
                        {/*FIS and EPN logos end*/}
                        {children}
                    </Grid>
                    <Grid
                        item
                        xs={false}
                        sm={1}
                        md={2}
                        sx={{
                            backgroundColor: 'rgba(234,234,234,0.44)',
                            marginTop: '6rem',
                            marginBottom: '1rem',
                            borderRadius: '1rem',
                        }}
                    >
                        <Grid container
                              justifyContent={"center"}
                              alignItems={"center"}
                              padding={"1rem"}
                              paddingTop={"6rem"}
                              rowGap={"6rem"}
                        >
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://www.zoomwings.com/wp-content/uploads/2021/09/Google-News.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://www.zoomwings.com/wp-content/uploads/2021/09/Google-News.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={12}>
                                <picture>
                                    <img
                                        src={"https://www.zoomwings.com/wp-content/uploads/2021/09/Google-News.png"}
                                        alt={"Imagen de FIS"}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </picture>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </main>
        </body>
        </html>
    )
}
