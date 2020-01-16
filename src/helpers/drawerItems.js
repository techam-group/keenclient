import React from 'react'
import { EditOutlined, Add, OndemandVideoOutlined, PersonalVideoOutlined, HomeOutlined } from '@material-ui/icons'

export const drawerItemsOne = [
  {
    name: 'My Dashboard',
    to: '/dashboard',
    icon: <HomeOutlined />
  },
  {
    name: 'Create Blog',
    to: '/dashboard/create-blog',
    icon: <Add />
  },
  {
    name: 'All Blogs',
    to: '/dashboard/blogs',
    icon: <EditOutlined />
  }
];

export const drawerItemsTwo = [
  {
    name: 'Create Vlog',
    to: '/dashboard/create-vlog',
    icon: <OndemandVideoOutlined />
  },
  {
    name: 'All Vlogs',
    to: '/dashboard/vlogs',
    icon: <PersonalVideoOutlined />
  }
];
