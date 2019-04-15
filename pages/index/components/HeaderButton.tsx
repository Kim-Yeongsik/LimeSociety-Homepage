import {
  Button as MuiButton,
  createStyles,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'

const styles = theme =>
  createStyles({
    root: {
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightMedium,
      padding: `${theme.spacing.unit * 2 - 1}px ${theme.spacing.unit * 4}px`,
      fontSize: theme.typography.pxToRem(14),
      boxShadow: 'none',
      '&:active, &:focus': {
        boxShadow: 'none'
      }
    },
    sizeSmall: {
      padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px`,
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: `${theme.spacing.unit * 3 - 3}px ${theme.spacing.unit * 6}px`,
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        fontSize: theme.typography.pxToRem(15)
      },
      borderRadius: 5
    }
  })

type HeaderButtonProps = MuiButtonProps & WithStyles<typeof styles>

class HeaderButton extends React.Component<HeaderButtonProps> {
  render () {
    return <MuiButton {...this.props} />
  }
}

export default withStyles(styles)(HeaderButton)
