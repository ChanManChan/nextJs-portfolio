import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

/**A rectangular <<shape>()> of the form rect(<top>, <right>, <bottom>, <left>) or rect(<top> <right> <bottom> <left>) (which is a more backwards-compatible syntax). The <top> and <bottom> values specify offsets from the inside top border edge of the box, while <right> and <left> specify offsets from the inside left border edge of the box — that is, the extent of the padding box. */

/**box-shadow:-
 *
 * Values:
  inset:
      If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
      The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
  <offset-x> <offset-y>:
      These are two <length> values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. <offset-y> specifies the vertical distance. Negative values place the shadow above the element. See <length> for possible units.
      If both values are 0, the shadow is placed behind the element (and may generate a blur effect if <blur-radius> and/or <spread-radius> is set).
  <blur-radius>:
      This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
  <spread-radius>:
      This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element)
  <color>:
      See <color> values for possible keywords and notations.
      If not specified, the color used depends on the browser - it is usually the value of the color property, but note that Safari currently paints a transparent shadow in this case.
 */

const clipRect = keyframes`
 0%, 100% {clip: rect(0px, 55px, 2px, 0px); }
  25% {clip: rect(0px, 2px, 55px, 0px); }
  50% {clip: rect(53px, 55px, 55px, 0px); }
  75% {clip: rect(0px, 55px, 55px, 53px); }
`;

const Logo = styled.a`
  grid-column: 1/2;
  margin-right: 2rem;
  width: 5rem;
  height: 5rem;
  text-decoration: none;
  position: relative;
  z-index: 1;
  color: #69ca62;
  background: rgba(0, 0, 0, 0.1) url('/favicon.png') no-repeat center;
  background-size: cover;
  box-shadow: inset 0 0 0 3px rgba(105, 202, 98, 0.5);
  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    z-index: -1;
    margin: -2.5px;
    box-shadow: inset 0 0 0 0.2rem;
    animation: ${clipRect} 8s linear infinite;
  }
  &:before {
    animation-delay: -4s;
  }
  @media (max-width: 81.25rem) {
    margin: 0;
    text-align: center;
  }
`;

const HeaderLogo = () => (
  <Link href='/' passHref>
    <Logo />
  </Link>
);
export default HeaderLogo;
