import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SideBarData =[
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: '/dashboard'
    },
    {
        title: "Instructor",
        icon: <AccountBoxIcon />,
        link: "/profile"
    },
    {
        title: "Courses",
        icon: <ListAltIcon />,
        link: "/course"
    },
    {
        title: "Reports",
        icon: <AssessmentIcon />,
        link: "/report"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    },
    {
        title: "LogOut",
        icon: <ExitToAppIcon />,
        link: "/logiut"
    }

]


