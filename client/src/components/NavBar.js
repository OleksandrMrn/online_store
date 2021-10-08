import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Container, Nav, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>
          Device Store
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: 'white' }}>
            <ButtonGroup>
              <Button
                variant={'outline-light'}
                className="m-1"
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Admin-panel
              </Button>
              <Button
                variant={'outline-light'}
                className="m-1"
                onClick={() => logOut()}
              >
                Logout
              </Button>
            </ButtonGroup>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }}>
            <Button
              className="m-1"
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
