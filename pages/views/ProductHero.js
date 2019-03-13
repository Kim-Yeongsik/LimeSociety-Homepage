import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'

const backgroundImage =
  'https://cdn.pixabay.com/photo/2018/05/17/09/04/american-3408110_960_720.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 250,
  },
  h5: {
    marginBottom: theme.spacing.unit *4,
    marginTop: theme.spacing.unit *4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
})

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h1" style={{marginBottom: '25px'}}>
        Challenge the Future
      </Typography>
      <Typography color="inherit" align="center" variant="h3">
        with Commitment and Passion
      </Typography>
      
      <container xs={12} style={{ height: '75px' }}></container>
      <Button
        // color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/" variant="button" />
        )}
      >
        Tell Me More
      </Button>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHero)