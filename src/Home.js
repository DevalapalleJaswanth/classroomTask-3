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

export function Home() {
  return (
    <div style={{ padding: '2px', margin: '1px' }}>
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
              <Link
                to="/Login"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>Dashboard</CardContent>
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
  const navigate = useNavigate();
  return (
    <div>
      "Login page"
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export function AdminLogin() {
  const navigate = useNavigate();
  return (
    <div>
      "Admin Login page"
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export function StudentLogin() {
  const navigate = useNavigate();
  return (
    <div>
      " Student Login page"
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      "Contact us page"
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
