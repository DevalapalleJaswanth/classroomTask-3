import React from 'react';
import './style.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '2px', margin: '1px' }}>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guvi
              </Typography>
              <Button color="inherit">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  Login
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/StudentLogin" element={<StudentLogin />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                to="/ContactUs"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                CONTACT US
              </Link>
            </Button>
          </CardActions>
        </Card>
        <br />
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained">
              <Link
                to="/AdminLogin"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Admin Login
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">
              <Link
                to="/StudentLogin"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Student Login
              </Link>
            </Button>
          </Grid>
        </Grid>
      </BrowserRouter>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular JS</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export function Login() {
  return <div>"Login page"</div>;
}

export function AdminLogin() {
  return <div>"Admin Login page"</div>;
}

export function StudentLogin() {
  return <div>" Student Login page"</div>;
}

export function ContactUs() {
  return <div>"Contact us page"</div>;
}
