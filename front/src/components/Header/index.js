import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Prepartion of the curtain menu link
import { Link } from 'react-router-dom';

// import pour la modal
import {
  Modal,
  Backdrop,
  Fade,
  makeStyles,
  ClickAwayListener,
} from '@material-ui/core';
// ClickAwayListener is here to spot the click outside its parent element
// Import pour les îcones de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Import de notre logo

// eslint-disable-next-line import/no-extraneous-dependencies
import logo from 'src/assets/logo_PopCorn.png';

// Import css
import './style.scss';

/* makeStyle = import for modal use, modal: handling placement of the modal, paper: handling style
for the modal, back ground collor, border... backDrop: handling modal background.
-> All those information available in browser's console.
*/
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    outline: 'none',
    padding: '5vh',
    borderRadius: '50px',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginRight: 50,
  },

  backDrop: {
    backgroundColor: 'rgb(197 197 197 / 84%)',
  },
}));

// Creation of my component Header
export default function Header({ isConnected, deconnect }) {
  // Hook for modal with two function, opening and closing.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Hook for the curtain menu
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleClickAway = () => setSidebar(false);
  const classes = useStyles();
  const getStarted = <div> Get <br /> started </div>;
  return (
    <header className="header">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <FontAwesomeIcon
            icon={faEllipsisH}
            className={sidebar ? 'header-ellipsis--onSidebar' : 'header-ellipsis'}
            onClick={showSidebar}
          />

          <nav className={sidebar ? 'sidebar active' : 'sidebar'}>

            <ul onClick={showSidebar}>
              <li><Link to="/">Picky Find</Link></li>
              <li><Link to="/mood">Picky Mood</Link></li>
              <li><Link to="/wish">Picky Wish</Link></li>
              <li><Link to="/about">A propos</Link></li>
            </ul>
          </nav>
        </div>
      </ClickAwayListener>
      <Link to="/">
        <img src={logo} className="header-logo" alt="Logo Picky" />
      </Link>
      { !isConnected && (
        <>
          <div className="login">
            <Link
              to="/signIn"
              className="linkSignIn"
            >
              Se connecter
            </Link>
            <Link
              to="/signUp"
              className="linkSignUp"
            >
              S'inscrire
            </Link>

            <Link
              className="getStarted"
              to="/signIn"
            >
              {getStarted}
            </Link>
          </div>
          <Link
            className="getStarted"
            to="/signIn"
          >
            {getStarted}
          </Link>
        </>
      )}
      { isConnected && (
      <div>
        <FontAwesomeIcon
          onClick={handleOpen}
          icon={faUserCircle}
          className="header-iconProfil"
        />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            className: classes.backDrop,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <ul className="test">
                <li>
                  <Link to="/profil"> Profil </Link>
                </li>
                <li onClick={deconnect}>
                  Se deconnecter
                </li>
              </ul>
            </div>
          </Fade>
        </Modal>
      </div>
      )}
    </header>
  );
}
Header.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};
