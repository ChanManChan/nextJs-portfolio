import styled, { keyframes } from 'styled-components';

const Section_center = styled.div`
  display: block;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #1d4456;
  box-shadow: 0 0 50px 5px rgba(255, 148, 0, 0.1);
  border: 10px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transform: translate(-50%, -50%);
  -webkit-transition: all 500ms linear;
  transition: all 500ms linear;
`;

//! MOON [START]
const moon_animation = keyframes`
0%{
  box-shadow:
		inset -20px 2px 0 0px #c0c3c9,
        0 0 10px 5px rgba(228,228,222,.4);
}
50%{
  box-shadow:
		inset -20px 2px 0 0px #c0c3c9,
        0 0 15px 8px rgba(228,228,222,.4);
}
`;

const Moon = styled.div`
  position: absolute;
  top: 50px;
  left: 115px;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  background-color: #b2b7bc;
  box-shadow: inset -20px 2px 0 0px #c0c3c9,
    0 0 10px 5px rgba(228, 228, 222, 0.4);
  z-index: 1;
  animation: ${moon_animation} 4s alternate infinite;
  -webkit-transition: all 2000ms linear;
  transition: all 2000ms linear;
  > div:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 12%;
    height: 12%;
    border-radius: 50%;
    border: 1px solid #adaca2;
    border-radius: 50%;
    box-shadow: inset 2px -1px 0 0px #85868b;
    opacity: 0.4;
  }
  > div:nth-child(2) {
    position: absolute;
    top: 20%;
    left: 38%;
    width: 16%;
    height: 16%;
    border-radius: 50%;
    border: 1px solid #adaca2;
    border-radius: 50%;
    box-shadow: inset 2px -1px 0 0px #85868b;
    opacity: 0.4;
  }
  > div:nth-child(3) {
    position: absolute;
    top: 60%;
    left: 45%;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    border: 1px solid #adaca2;
    border-radius: 50%;
    box-shadow: inset 2px -1px 0 0px #85868b;
    opacity: 0.4;
  }
`;
//! MOON [END]

//! STARS [START]
const starShine = keyframes`
0% {
		transform: scale(0.3) rotate(0deg);
		opacity: 0.4;
	}
	25% {
		transform: scale(1) rotate(360deg);
		opacity: 1;
	}
	50% {
		transform: scale(0.3) rotate(720deg);
		opacity: 0.4;
	}
	100% {
		transform: scale(0.3) rotate(0deg);
		opacity: 0.4;
	}
`;

const Star = styled.div`
  z-index: 2;
  position: absolute;
  top: 185px;
  left: 25px;
  background-image: url('/star.png');
  background-size: 15px 15px;
  width: 15px;
  height: 15px;
  opacity: 0.4;
  animation: ${starShine} 3.5s linear infinite;
  -webkit-transition: all 1200ms linear;
  transition: all 1200ms linear;
`;
const Star2 = styled(Star)`
  top: 100px;
  left: 310px;
  animation-delay: 1s;
`;
const Star3 = styled(Star)`
  top: 130px;
  left: 100px;
  animation-delay: 1.4s;
`;
const Star4 = styled(Star)`
  top: 20px;
  left: 200px;
  animation-delay: 1.8s;
`;
const Star5 = styled(Star)`
  top: 85px;
  left: 220px;
  animation-delay: 2.2s;
`;
const animShootingStar = keyframes`
  from {
		transform: translateY(0px) translateX(0px) rotate(-45deg);
		opacity: 1;
		height: 5px;
	}
	to {
		transform: translateY(1280px) translateX(1280px) rotate(-45deg);
		opacity: 1;
		height: 800px;
	}
`;
const Shooting_star = styled.div`
  z-index: 2;
  width: 1px;
  height: 50px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  position: absolute;
  top: 0;
  left: -70px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
  animation: ${animShootingStar} 6s linear infinite;
  -webkit-transition: all 2000ms linear;
  transition: all 2000ms linear;
`;

const animShootingStar_2 = keyframes`
from {
		transform: translateY(0px) translateX(0px) rotate(-45deg);
		opacity: 1;
		height: 5px;
	}
	to {
		transform: translateY(1920px) translateX(1920px) rotate(-45deg);
		opacity: 1;
		height: 800px;
	}
`;
const Shooting_star2 = styled.div`
  z-index: 2;
  width: 1px;
  height: 50px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  position: absolute;
  top: 0;
  left: 200px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
  animation: ${animShootingStar_2} 9s linear infinite;
  -webkit-transition: all 2000ms linear;
  transition: all 2000ms linear;
`;
//! STARS [END]

const Circle = styled.div`
  position: absolute;
  z-index: 6;
  right: -300px;
  bottom: -450px;
  width: 750px;
  height: 700px;
  border-radius: 100%;
  background-color: #112630;
`;

const Wood = styled.div`
  position: absolute;
  z-index: 21;
  left: 50%;
  bottom: 12%;
  width: 100px;
  margin-left: -50px;
  height: 36px;
  background-image: url('/wood.png');
  background-size: 100px 36px;
`;

const Wood_circle = styled.div`
  position: absolute;
  z-index: 20;
  left: 50%;
  bottom: 11%;
  width: 120px;
  margin-left: -60px;
  height: 26px;
  border-radius: 100%;
  background-color: #0a171d;
`;

const Tree_1 = styled.div`
  position: relative;
  top: 150px;
  left: 50px;
  width: 0;
  height: 0;
  z-index: 8;
  display: block;
  border-bottom: 90px solid #0a171d;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  &:before {
    position: absolute;
    bottom: -110px;
    left: 50%;
    margin-left: -4px;
    width: 8px;
    display: block;
    height: 30px;
    z-index: 7;
    content: '';
    background-color: #000;
  }
`;

const Tree_2 = styled.div`
  position: relative;
  top: 0;
  left: 250px;
  width: 0;
  height: 0;
  z-index: 8;
  display: block;
  border-bottom: 90px solid #0a171d;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  &:before {
    position: absolute;
    bottom: -110px;
    left: 50%;
    margin-left: -4px;
    width: 8px;
    display: block;
    height: 30px;
    z-index: 7;
    content: '';
    background-color: #000;
  }
`;

//! FIRE [START]
const Fire_on = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#1d4456, #112630);
  opacity: 1;
  z-index: 1;
  -webkit-transition: all 1200ms linear;
  transition: all 1200ms linear;
`;
const fire_animation = keyframes`
0%, 100%{
	box-shadow:
		0 0 10px 5px rgba(244,110,28,0.8),
		0 0 20px 10px rgba(244,110,28,0.6),
		0 0 30px 15px rgba(244,110,28,0.3);
	}
	50%{
	box-shadow:
		0 0 14px 7px rgba(244,110,28,0.8),
		0 0 28px 14px rgba(244,110,28,0.6),
		0 0 42px 21px rgba(244,110,28,0.3);
	}
`;
const Fire = styled.div`
  position: absolute;
  z-index: 39;
  width: 2px;
  margin-left: -1px;
  left: 50%;
  bottom: 80px;
  -webkit-transition: all 1200ms linear;
  transition: all 1200ms linear;
  > span {
    display: block;
    position: absolute;
    bottom: -15px;
    margin-left: -20px;
    height: 0px;
    width: 0px;
    border: 30px solid #febd08;
    border-radius: 50%;
    border-top-left-radius: 0;
    left: -9px;
    box-shadow: 0 0 10px 5px rgba(244, 110, 28, 0.8),
      0 0 20px 10px rgba(244, 110, 28, 0.6),
      0 0 30px 15px rgba(244, 110, 28, 0.3);
    transform: scale(0.45, 0.75) rotate(45deg);
    animation: ${fire_animation} 2.5s alternate infinite;
    z-index: 9;
    -webkit-transition: all 1200ms linear;
    transition: all 1200ms linear;
    &:after {
      display: block;
      position: absolute;
      bottom: -30px;
      content: '';
      margin-left: -5px;
      height: 30px;
      width: 12px;
      background-color: rgba(244, 110, 28, 0.7);
      border-radius: 80px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: 0 0 20px 10px rgba(244, 110, 28, 0.7);
      left: -9px;
      opacity: 0.8;
      transform: rotate(-50deg);
    }
  }
  > span:nth-child(2) {
    left: -22px;
    transform: scale(0.3, 0.55) rotate(15deg);
    z-index: 8;
    animation: ${fire_animation} 1.5s alternate infinite;
  }
  > span:nth-child(3) {
    left: 4px;
    transform: scale(0.3, 0.55) rotate(80deg);
    z-index: 8;
    animation: ${fire_animation} 2s alternate infinite;
  }
`;
//! FIRE [END]

//! SMOKE [START]
const smokeLeft = keyframes`
	0%   { transform: scale(0.2, 0.2) translate(0, 0) rotate(-45deg) }
	10%  { opacity: 1; transform: scale(0.2, 0.3) translate(0, -5px) rotate(-45deg) }
	60%  { opacity: 0.6; transform: scale(0.3, 0.5) translate(-10px, -80px) rotate(-45deg) }
	100% { opacity: 0; transform: scale(0.4, 0.8) translate(-20px, -120px) rotate(-45deg) }
`;

const smokeRight = keyframes`
0%   { transform: scale(0.2, 0.2) translate(0, 0) rotate(-45deg) }
	10%  { opacity: 1; transform: scale(0.2, 0.3) translate(0, -5px) rotate(-45deg) }
	60%  { opacity: 0.6; transform: scale(0.3, 0.5) translate(10px, -80px) rotate(-45deg) }
	100% { opacity: 0; transform: scale(0.4, 0.8) translate(20px, -120px) rotate(-45deg) }
`;

const Smoke = styled.div`
  position: absolute;
  z-index: 40;
  width: 2px;
  margin-left: -1px;
  left: 50%;
  bottom: 106px;
  opacity: 0;
  -webkit-transition: all 800ms linear;
  transition: all 800ms linear;
  > span {
    display: block;
    position: absolute;
    bottom: -35px;
    left: 50%;
    margin-left: -20px;
    height: 0px;
    width: 0px;
    border: 30px solid rgba(0, 0, 0, 0.6);
    border-radius: 22px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    left: -9px;
    opacity: 0;
    transform: scale(0.2, 0.2) rotate(-45deg);
  }
  > span:nth-child(1) {
    animation: ${smokeLeft} 7s 0s infinite;
  }
  > span:nth-child(2) {
    animation: ${smokeRight} 7s 0.7s infinite;
  }
  > span:nth-child(3) {
    animation: ${smokeLeft} 7s 1.4s infinite;
  }
  > span:nth-child(4) {
    animation: ${smokeRight} 7s 2.1s infinite;
  }
  > span:nth-child(5) {
    animation: ${smokeLeft} 7s 2.8s infinite;
  }
  > span:nth-child(6) {
    animation: ${smokeRight} 7s 3.5s infinite;
  }
  > span:nth-child(7) {
    animation: ${smokeLeft} 7s 4.2s infinite;
  }
  > span:nth-child(8) {
    animation: ${smokeRight} 7s 4.9s infinite;
  }
  > span:nth-child(9) {
    animation: ${smokeLeft} 7s 5.6s infinite;
  }
  > span:nth-child(10) {
    animation: ${smokeRight} 7s 6.3s infinite;
  }
`;
//! SMOKE [END]

//! THEME_SWITCH [START]
const SwitchWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translateX(-50%);
  margin-top: 200px;
  -webkit-transition: all 500ms linear;
  transition: all 500ms linear;
`;

const Switch = styled.div.attrs({ id: 'switch' })`
  height: 31px;
  cursor: pointer;
  -webkit-transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
  transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
  width: 60px;
  margin: 0 auto;
  border: 2px solid #fec22a;
  border-radius: 27px;
  background: #ff9400;
  position: relative;
  display: inline-block;
  margin: 0 20px;
  transform: translateY(10px);
  &.switched {
    border-color: #777 !important;
    background: #000 !important;
    > div {
      margin-left: 55%;
      background: #e9e5d5;
    }
  }
  > div {
    height: 31px;
    cursor: pointer;
    -webkit-transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
    transition: all 0.4s cubic-bezier(0.54, 1.6, 0.5, 1);
    margin-top: 5%;
    margin-left: 5%;
    width: 40%;
    height: 80%;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25),
      0 0 0 1px rgba(26, 53, 71, 0.07);
    background: #e9e5d5;
  }
`;
//! THEME_SWITCH [END]

//! WRAPPER
const Body = styled.aside.attrs({ id: 'body' })`
  &.fire-off ${Fire_on} {
    opacity: 0;
  }
  &.fire-off ${Section_center} {
    box-shadow: 0 0 50px 5px rgba(200, 200, 200, 0.2);
  }
  &.fire-off ${Smoke} {
    opacity: 1;
    transition-delay: 0.8s;
  }
  &.fire-off ${Fire} > span {
    bottom: -35px;
    left: -9px;
    transform: scale(0.15, 0.15) rotate(45deg);
  }
`;

const ThemeAnimation = () => (
  <Body>
    <Fire_on />
    <SwitchWrap>
      <Switch
        onClick={() => {
          const target1 = document.querySelector('#body');
          const target2 = document.querySelector('#switch');
          if (target1.classList.contains('fire-off')) {
            target1.classList.remove('fire-off');
            target2.classList.remove('switched');
          } else {
            target1.classList.add('fire-off');
            target2.classList.add('switched');
          }
        }}
      >
        <div></div>
      </Switch>
    </SwitchWrap>
    <Section_center>
      <Moon>
        <div></div>
        <div></div>
        <div></div>
      </Moon>
      <Shooting_star />
      <Shooting_star2 />
      <Star />
      <Star2 />
      <Star3 />
      <Star4 />
      <Star5 />
      <Circle />
      <Wood_circle />
      <Wood />
      <Tree_1 />
      <Tree_2 />
      <Fire>
        <span></span>
        <span></span>
        <span></span>
      </Fire>
      <Smoke>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Smoke>
    </Section_center>
  </Body>
);

export default ThemeAnimation;
