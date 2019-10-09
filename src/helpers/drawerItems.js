import React from 'react'
import { EditOutlined, Add, OndemandVideoOutlined, PersonalVideoOutlined } from '@material-ui/icons'

export const drawerItemsOne = [
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
]

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
]