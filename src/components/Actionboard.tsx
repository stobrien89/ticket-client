import React from 'react';
import {Button, Container, Typography, Grid} from '@mui/material'


const Actionboard = ()  => {
    return(
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <Grid 
                    item
                    container
                    direction="row"
                    alignItems="space-between"
                    justifyContent="flex-end"
                    spacing={2}
                    style={{paddingTop: '20px', paddingRight: '20px'}}
                >
                    <Grid item>
                        <Button size="small" variant="outlined">Settings</Button>
                    </Grid>
                    <Grid item>
                        <Button size="small" variant="outlined">Admin</Button>
                    </Grid>
                </Grid>
                <Grid 
                    item
                    container
                    alignItems="center"
                        // justifyContent="center"
                    direction="column"
                >
                    <Typography 
                        variant="h2"
                    >
                        Actionboard
                    </Typography>
                    <input type="text" placeholder="Search.."></input>
                </Grid>
            </Grid>
            <Container>
                <div>
                    <button>tab1</button>
                    <button>tab2</button>
                    <button>tab3</button>
                </div>
                <div>
                    Tab Components
                </div>
            </Container>
        </>
    )
} 

export default Actionboard;