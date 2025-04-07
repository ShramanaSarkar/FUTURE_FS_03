import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Link,
    IconButton,
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import Logo from '../assets/logo.png';
  import { Brightness4, Brightness7 } from '@mui/icons-material';
  
  const Header = ({ toggleSidebar, sidebarVisible, toggleTheme, mode }) => {
    return (
      <AppBar
        position="fixed" // sticky header
        color="default"
        elevation={1}
        sx={{
          ml: sidebarVisible ? '250px' : 0,
          width: sidebarVisible ? 'calc(100% - 250px)' : '100%',
          transition: 'margin-left 0.3s, width 0.3s',
          zIndex: 1201, // ensure it's above sidebar
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left: Hamburger */}
          <Box display="flex" alignItems="center">
            <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Box>
  
          {/* Center: Logo + Title */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1, justifyContent: 'center', marginLeft:'-640px' }}>
            <Box
              component="img"
              src={Logo}
              alt="Wikipedia Logo"
              sx={{ height: 40, marginRight: 1 }}
            />
            <Typography variant="h6" color="textPrimary" noWrap>
              Wikipedia Reimagined
            </Typography>
          </Box>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
  
          {/* Right: Links */}
          <Box>
            <Link href="#" underline="hover" sx={{ mx: 1 }}>
              Donate
            </Link>
            <Link href="#" underline="hover" sx={{ mx: 1 }}>
              Create Account
            </Link>
            <Link href="#" underline="hover" sx={{ mx: 1 }}>
              Login
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
  