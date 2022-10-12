import React from 'react'

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';


const calculator = () => {
  return (
    <Container maxWidth="false" className='vh-100 overflow-hidden p-0'>
      <Grid container spacing={2} className='vh-100 d-flex align-items-center' >
        <Grid xs={6}>
          <Container maxWidth="xs" style={{ marginStart: '100px' }}>
            <Typography variant="h4" align="center" gutterBottom className='fw-semibold'>
              Calculadora
            </Typography>
            <Stack spacing={2}>
              <Container className='d-flex flex-column gap-3'>
                <Container className='d-flex align-items-center gap-2 p-0'>
                  <div className='p-2 rounded-circle' style={{ width: 35, height: 35, backgroundColor: '#FF724A' }}>
                    <Typography className='text-white' align="center" variant="subtitle2" gutterBottom>
                      1
                    </Typography>
                  </div>

                  <Typography className='fw-bold' variant="subtitle2" gutterBottom>
                    Peso
                  </Typography>
                </Container>
                <TextField
                  id="outlined-start-adornment"
                  fullWidth
                  type="number"
                  variant="filled"
                  hiddenLabel
                  InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }}

                  helperText="Some important text"
                />
              </Container>
              <Container className='d-flex flex-column gap-3'>
                <Container className='d-flex align-items-center gap-2 p-0'>
                  <div className='p-2 rounded-circle' style={{ width: 35, height: 35, backgroundColor: '#FF724A' }}>
                    <Typography className='text-white' align="center" variant="subtitle2" gutterBottom>
                      2
                    </Typography>
                  </div>

                  <Typography className='fw-bold' variant="subtitle2" gutterBottom>
                    Alimento
                  </Typography>
                </Container>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["hola", "Adios", "chao"]}
                  fullWidth
                  renderInput={(params) => <TextField fullWidth {...params} label="Movie" variant="filled" helperText="Some important text" />}
                />
              </Container>
              <Container className='d-flex flex-column gap-3'>
                <Container className='d-flex align-items-center gap-2 p-0'>
                  <div className='p-2 rounded-circle' style={{ width: 35, height: 35, backgroundColor: '#FF724A' }}>
                    <Typography className='text-white' align="center" variant="subtitle2" gutterBottom>
                      3
                    </Typography>
                  </div>

                  <Typography className='fw-bold' variant="subtitle2" gutterBottom>
                    Cantidad consumida
                  </Typography>
                </Container>
                <TextField
                  id="outlined-start-adornment"
                  fullWidth
                  type="number"
                  variant="filled"
                  hiddenLabel
                  InputProps={{
                    startAdornment: <InputAdornment position="start">g/día</InputAdornment>,
                  }}
                  helperText="Some important text"
                />
              </Container>
              <Button variant="outlined" className='w-25 mx-auto' color='primary'>
                Disabled
              </Button>
            </Stack>
          </Container>
        </Grid >
        <Grid xs={6}>
          <Container className='p-0 d-flex justify-content-center align-items-center' style={{ height: '70vh', borderRadius: '250px 0px 0px 250px', backgroundColor: '#d9d9d9' }}>
            Completa los campos requeridos
          </Container>
        </Grid>
      </Grid >
    </Container >

  )
}

export default calculator
