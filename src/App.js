import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import * as React from 'react'

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">ISIT</Typography>
            <Box>
              <Button
                aria-controls={open ? 'navbar-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Typography variant="h6">sadfasdf</Typography>
                test
              </Button>
              <Menu id="navbar-menu" anchorEl={anchorEl} open={open}>
                <MenuItem>dalsi</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
