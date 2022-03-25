import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import '../NavBar/NavBar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Container = styled.div({
    height: 90,
    backgroundColor: '#EFFFFD',
    alignItems: 'center',
    paddingLeft:10,
    paddingRight:10,
    
})

const Wrapper = styled.div({
    justifyContent: 'space-between',
    display: 'flex',
    height: 90,
    alignItems: 'center',
    marginRight:10,
    marginLeft:10
})

const LeftCon= styled.div({
    flex: 1,
})

const CenterCon= styled.div({
    flex: 1.3,
    padding:10,
})

const RightCon= styled.div({
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
    
})

const LanguageCon = styled.div({
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
    marginLeft:'40px'
})

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LeftCon>
                    <LanguageCon>
                    <i class="bi bi-explicit-fill icon-logo"></i>
                        <span className="logo">Interim Models</span>
                    </LanguageCon>
                </LeftCon>
                <CenterCon>
                    <div className="search-container">
                        <div className="search-icon-con">
                            <i class="bi bi-search search-icon"></i>
                        </div>
                        
                        <input placeholder="What would you like to buy?" type="search" className="search-input"/>
                    </div>
                </CenterCon>
                <RightCon>
                    <div className="content-right">
                        <div className="buttons-con">
                            <button type="submit" className="login-btn">Login</button>
                            <button type="submit" className="register-btn">Register</button>
                        </div>
                        <div className="cart-con">
                            <Badge badgeContent={3} color="error" style={{padding:'0px'}}>
                                <ShoppingBagIcon style={{fontSize:'40px', color: '#333', padding: '0px'}}/>
                            </Badge>
                        </div>
                    </div>
                </RightCon>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
