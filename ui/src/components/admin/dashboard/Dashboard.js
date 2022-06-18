import * as React from 'react';
import { Row, Col } from "react-bootstrap";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import logo from '../../../logo_transparent.png';
import "./Dashboard.css";
import ArticleIcon from '@mui/icons-material/Article';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HotelIcon from '@mui/icons-material/Hotel';
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import NavigationList from './navigation/NavigationList';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#757ce8',
            main: '#000812',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#fff',
            dark: '#ba000d',
            contrastText: '#000',
        },
        white: {
            main: 'light'
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="dashboard-wrapper">
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                shadow="unset"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>


                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open} className="dark-bg border-end-0 custom-drawer">
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                            className="custom-toolbar">
                            <div className='navbar-brand'>
                                <img src={logo} />
                            </div>
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon fill="#724d80" />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List component="nav">
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                                className="tab-wrapper"
                            >
                                <Tab label="Users" {...a11yProps(0)} icon={<PersonIcon />} className="tab-item" />
                                <Tab label="Navigation" {...a11yProps(1)} icon={<MenuIcon />} className="tab-item" />
                                <Tab label="News" {...a11yProps(2)} icon={<ArticleIcon />} className="tab-item" />
                                <Tab label="Things to do" {...a11yProps(3)} icon={<DownhillSkiingIcon />} className="tab-item" />
                                <Tab label="Places to stay" {...a11yProps(4)} icon={<HotelIcon />} className="tab-item" />
                                <Tab label="Countries" {...a11yProps(5)} icon={<FlagIcon />} className="tab-item" />
                            </Tabs>

                            {/* <Divider sx={{ my: 1 }} />
                            {secondaryListItems} */}
                        </List>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: '#000812',
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
                            <TabPanel value={value} index={0} className="tabpanel-item">
                                Item One
                            </TabPanel>
                            <TabPanel value={value} index={1} className="tabpanel-item">
                                <NavigationList />
                            </TabPanel>
                            <TabPanel value={value} index={2} className="tabpanel-item">
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={3} className="tabpanel-item">
                                Item Four
                            </TabPanel>
                            <TabPanel value={value} index={4} className="tabpanel-item">
                                Item Five
                            </TabPanel>
                            <TabPanel value={value} index={5} className="tabpanel-item">
                                Item Six
                            </TabPanel>
                            <TabPanel value={value} index={6} className="tabpanel-item">
                                Item Seven
                            </TabPanel>
                        </Container>
                    </Box>

                </Box>
            </ThemeProvider>
        </div>
    );
}