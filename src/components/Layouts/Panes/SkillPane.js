import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(0.5),
        textAlign: "center"
    },
    input: {
        display: 'none',
    },
}));
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
const SkillPane = (props) => {
    const classes = useStyles();

    const buttons = props['skills'].map(el => {
        return <Button
            key={el.id}
            component={AdapterLink}
            to={"/skills/" + el.id}
            variant="contained"
            size="small"
            color={el.color}
            className={classes.button}>
            {el.name}
        </Button>
    });

    return (
        <Hidden only={['sm', 'xs']}>
            <Grid item md={2} lg={2}>
                <Paper style={props.styles.Paper}>
                    <Grid container direction={'column'}>
                        {buttons}
                    </Grid>
                </Paper>
            </Grid>
        </Hidden>
    )
};
export default SkillPane
