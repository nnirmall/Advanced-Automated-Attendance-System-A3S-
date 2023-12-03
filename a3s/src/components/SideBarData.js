import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from './AuthContext';

export const SideBarData =[
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: '/dashboard',
        requiresAuth: true,
    },
    {
        title: "Instructor",
        icon: <AccountBoxIcon />,
        link: "/profile",
        requiresAuth: true,
    },
    {
        title: "Courses",
        icon: <ListAltIcon />,
        link: "/course",
        requiresAuth: true,
    },
    {
        title: "Reports",
        icon: <AssessmentIcon />,
        link: "/report",
        requiresAuth: true,
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
        requiresAuth: true,
    },
    {
        title: "LogOut",
        icon: <ExitToAppIcon />,
        link: "/logiut",
        requiresAuth: true,
    }

]


