import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'

const styles = theme => ({
  title: {
    fontSize: 25,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 23,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: theme.palette.main,
  },
})

function AppAppBar(props) {
  const { classes } = props

  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar className={classes.toolbar}>
          {/* <Link
            variant="h5"
            underline="none"
            color="default"
            className={classes.title}
            href="/"
          >
            {'Lime Society'}
          </Link> */}
          <div className={classes.right}>
            <Link
              color="default"
              variant="h5"
              underline="none"
              className={classes.rightLink}
              href="/"
            >
              {'PRODUCT'}
            </Link>
            <Link
              color="default"
              variant="h5"
              underline="none"
              className={classes.rightLink}
              href="/"
            >
              {'BLOG'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppAppBar)
