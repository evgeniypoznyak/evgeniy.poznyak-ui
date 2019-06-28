import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
title: {
    flexGrow: 1
},
    content: {
    padding: 10
    }
}));
export default function ScrollDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    function handleClose() {
        setOpen(false);
    }


    return (
        <div>
            <Button onClick={handleClickOpen('paper')}>Read more</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                fullWidth={true}
                maxWidth={'lg'}
            >
                <DialogTitle id="scroll-dialog-title">
                    {props.title}
                </DialogTitle>
                <DialogContent dividers={true} className={classes.content}>
                    <DialogContent className={classes.content}>
                        {props.children}
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
