import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgApi from 'enl-api/images/photos';
import { ProductCard } from '../../../../components';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
});

function EcommerceCard(props) {
  const { classes } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="center"
      direction="row"
      spacing={2}
    >
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Product Card</Typography>
        <ProductCard
          thumbnail={imgApi[21]}
          name="Lorem ipsum dolor sit amet"
          desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
          rating={5}
          price={30}
        />
      </Grid>
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Product with discount</Typography>
        <ProductCard
          discount="10%"
          thumbnail={imgApi[22]}
          name="Cras convallis lacus orci"
          desc="Phasellus ante massa, aliquam non ante at"
          rating={3}
          price={18}
          prevPrice={20}
        />
      </Grid>
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Sold Out Product</Typography>
        <ProductCard
          soldout
          thumbnail={imgApi[23]}
          name="Lorem ipsum dolor sit amet"
          desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
          rating={4}
          price={44}
        />
      </Grid>
      <Grid item md={12}>
        <Typography variant="button" className={classes.divider}>List Mode</Typography>
        <ProductCard
          discount="10%"
          thumbnail={imgApi[24]}
          name="Lorem ipsum dolor sit amet"
          desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
          rating={5}
          price={30}
          prevPrice={20}
          list
        />
      </Grid>
      <Grid item md={12}>
        <ProductCard
          thumbnail={imgApi[25]}
          name="Lorem ipsum dolor sit amet"
          desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
          rating={0}
          price={20}
          list
        />
      </Grid>
    </Grid>
  );
}

EcommerceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EcommerceCard);
