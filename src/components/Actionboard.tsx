import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Box, Button, Container, Typography, Grid, InputBase, Tab, Tabs} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


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
                    <Grid item>
                        <Typography 
                            variant="h2"
                        >
                            Actionboard
                        </Typography>
                    </Grid>
                    <Grid item style={{marginTop: '15px'}}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                </Grid>
            </Grid>
            <Container maxWidth={false} style={{marginTop: '30px'}}>
                <Box sx={{ maxWidth: 480, bgcolor: 'rgb(191, 191, 191)' }}>
                    <Tabs
                        // value={value}
                        // onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="scrollable auto tabs example"
                    >
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                            <Tab label="Item Four" />
                            <Tab label="Item Five" />
                            <Tab label="Item Six" />
                            <Tab label="Item Seven" />
                    </Tabs>
                </Box>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    style={{border: '2px solid black'}}
                >

                </Grid>
            </Container>
        </>
    )
} 

export default Actionboard;