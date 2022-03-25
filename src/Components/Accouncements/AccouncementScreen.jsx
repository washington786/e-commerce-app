import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';

const Container = styled.div({
    height: 50,
    // width: '80%!important',
    backgroundColor: '#ff0000', 
    display: 'flex',
    alignItems: 'center',
    paddingLeft:10
})

const AnnouncementsScreen = () => {
    return (
        <Container>
            <InfoIcon style={{color:'white', fontSize:'30px'}}/>
            <p className="info" style={{color:'white', fontSize:'20px', paddingLeft:10}}>Exclusive sale for you today, 50% off on all items!</p>
        </Container>
    );
}

export default AnnouncementsScreen;
