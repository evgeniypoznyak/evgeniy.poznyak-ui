import React, {Fragment, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {NavLink} from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import {State} from '../../../shared/StateManager';

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
};

function Header(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 10,
            width: 60,
            height: 60,
        },
        skillName: {
            margin: 'auto'
        }
    }));

    const skills = useContext(State);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const classes = useStyles();

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };
    const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
    const leftSideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {/* todo replace this loop */}
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <Typography variant={'h6'} align={'center'}>
                    My skills
                </Typography>
                {skills.data.rawData.map(skill => (
                    <Fragment key={skill.id}>
                        <ListItem
                            alignItems={'center'}
                            button
                            component={AdapterLink}
                            to={"/skills/" + skill.id}>
                            <ListItemAvatar>
                                <Avatar alt={skill.name} src={skill.logo}/>
                            </ListItemAvatar>
                            <ListItemText primary={skill.name} className={classes.skillName}/>
                        </ListItem>
                        <Divider component="li"/>
                    </Fragment>
                ))}
            </List>
        </div>
    );
    const rightSideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Typography variant={'h6'} align={'center'}>
                    Admin menu
                </Typography>
                {/* todo replace this loop */}
                {['Right-Inbox', 'Right-Starred', 'Right-Send email', 'Right-Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {/* todo replace this loop */}
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    let adminMenu = null;

    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer('left', true)}
                                    color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink
                                to={"/"}
                                style={{textDecoration: 'none', color: 'inherit'}}
                                activeClassName={classes.active}>
                                <Button color="inherit">Evgeniy Poznyak</Button></NavLink>
                        </Typography>
                        <Button
                            href={"https://evgeniy.poznyaks.com/docs/resume/Evgeniy_Poznyak_Resume.pdf"}
                            color="inherit"
                            target="_blank"
                        >Resume</Button>
                        {adminMenu}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {leftSideList('left')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {rightSideList('right')}
            </Drawer>
        </React.Fragment>
    );
}

export default Header;
