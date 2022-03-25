import React from 'react';
import styled from 'styled-components';

// icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div({
    backgroundColor: '#fff',
    height: '100vh',
    display: 'flex',
    position: 'relative',
})

const ArrowWrapper= styled.div`
    background-color: '#ddd';
    border-radius: 50%;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    align-items: center;
    justify-content: center;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    display: flex;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.26);
`;

const Slider = () => {
    return (
        <Container>

            <ArrowWrapper direction="left">
                <ArrowBackIosIcon/>
            </ArrowWrapper>

            <ArrowWrapper direction="right">
                <ArrowForwardIosIcon/>
            </ArrowWrapper>
            
        </Container>
    );
}

export default Slider;
