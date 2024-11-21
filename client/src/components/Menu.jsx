import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from '@mui/material';

const Menu = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Container
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                width: '100%',
                maxWidth: '400px !important',
                zIndex: 1100,
                padding: '16px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                sx={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'transparent',
                    boxShadow: '0 -4px 8px rgba(0, 74, 136, 0.5)',
                    borderRadius: '8px',
                    padding: '8px',
                }}
            >
                <BottomNavigationAction label='Home' icon={<HomeIcon />} />
                <BottomNavigationAction
                    label='Profile'
                    icon={<AccountCircleIcon />}
                />
                <BottomNavigationAction label='About' icon={<InfoIcon />} />
                <BottomNavigationAction
                    label='Notifications'
                    icon={<NotificationsIcon />}
                />
            </BottomNavigation>
        </Container>
    );
};

export default Menu;
