import React from 'react';
import styled from 'styled-components';
import '../../Components/Slider/Slider.css'
// icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SliderItems } from '../../Data/SliderData';

// styled components
const Container = styled.div({
    backgroundColor: '#fff',
    height: '80.5vh',
    display: 'flex',
    position: 'relative',
    paddingLeft:10,
    paddingRight:10,
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
    left: ${props=>props.direction === "left" && "2rem"};
    right: ${props=>props.direction === "right" && "2rem"};
    display: flex;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    position: relative;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
    display: flex;
    padding-left: 5rem;
    padding-right: 5rem;
    margin: 0;
    justify-content: flex-start;
    align-items: center;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw!important;
    height: 80vh;
    background-color: ${(props)=>props.bg};
    position: relative;
    margin-right: 25rem;
`;

const ImgContainer = styled.div`
    display: flex;
    flex:1;
    width: 100%!important;
`;

const InfoCon = styled.div`
   flex: 1;
   width: 100%!important;  

`;

const Image = styled.img`
    height: 100%;
    width: 49vw;
    object-fit: cover;
`;

const Title = styled.h3`
    color: black;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
`;

const Desc = styled.p`
    font-size: 15px;
    text-transform: lowercase;
    text-align: left;
    width: 30vw;
    margin-top: 15px;
`;

const Button = styled.button`
    padding-left:10px;
    font-size: 20px;
    background-color: transparent;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
`;

const Slider = () => {
    
    // methods and setters
    const [slideIndex,setSlideIndex] = React.useState(0);

    const handleBtnClick=(direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }
    
    return (
        <Container>

            {/* left arrow */}
            <ArrowWrapper direction="left" onClick={()=>handleBtnClick("left")}>
                <ArrowBackIosIcon/>
            </ArrowWrapper>

            {/* start screen content */}
            
                 <Wrapper slideIndex={slideIndex}>

                {
                    SliderItems.map((item)=>(
                        <Slide key={item.id} bg={item.bg}>

                            <ImgContainer>
                                <Image src={item.image}/>
                            </ImgContainer>

                            {/* information container */}
                            <InfoCon>
                                <Title>{item.name}</Title>
                                <Desc>{item.description}</Desc>
                                <Button>Get More Info</Button>
                            </InfoCon>

                        </Slide>
                    ))
                }
                
            </Wrapper>
           
           

            {/* right arrow */}
            <ArrowWrapper direction="right" onClick={()=>handleBtnClick("right")}>
                <ArrowForwardIosIcon/>
            </ArrowWrapper>
            
        </Container>
    );
}

export default Slider;
