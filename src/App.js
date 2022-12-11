import './assets/styles/main.scss';
import {AppBar, Badge, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

function App() {
    return (
            <div className="App">
                <AppBar>
                    <Toolbar variant="dense">
                        <Typography
                            variant="h6"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            COLLECTION
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                >
                                <NotificationsIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="medium"
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                                >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
            );
}

export default App;
