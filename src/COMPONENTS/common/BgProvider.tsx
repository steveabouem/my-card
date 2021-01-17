import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledBaseBG } from './styles';
import bg from '../../ASSETS/purple_by_Luke_Chesser.jpg';
// import ScrollMagic from 'scrollmagic';

interface IBgProviderProps {
  bgCoordinates?: string;
}
// init controller
// var controller = new ScrollMagic.Controller();

// const scene1 = new ScrollMagic.Scene({
//   duration: 900, // the scene should last for a scroll distance of ...px
//   offset: 2 // start this scene after scrolling for ...px
// })
//   .setPin('#ladies') // pins the element for the the scene's duration
//   .addTo(controller); // assign the scene to the controller

// const scene2 = new ScrollMagic.Scene({
//   duration: 300, // the scene should last for a scroll distance of ...
//   offset: 50 // start this scene after scrolling for ...
// })
//   .setPin('#gentlemen') // pins the element for the the scene's duration
//   .addTo(controller); // assign the scene to the controller


const style = {
  height: "200vh",
  background: "black",
  color: "red",
  display: "flex",
  backgroundImage: "url(https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
  alignItems: "center"
};
 
const style2: any = {
  position: "absolute",
  color: "yellow",
  height: "15%",
  background: "white",
  width: "30%",
  top: "33%",
  backgroundImage: "url(https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80)"
};
const BgProvider = ({  bgCoordinates}: IBgProviderProps):JSX.Element => {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    setMobile(!mobile);
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  // const getBgCoordinates = (): IBgCoordinates => {
    let numbers = [];
    
    for (let i = 0; i < 400; i++) {
      numbers.push(i)
    }
    
  //   return { x: `${Math.round(Math.random() * numbers.length * -1)}`, y: `${Math.round(Math.random() * numbers.length * -1)}`};
  // };

  return (
    <StyledBaseBG  style={{backgroundImage: `url(${bg})`}}/>
  );
};

export default BgProvider;