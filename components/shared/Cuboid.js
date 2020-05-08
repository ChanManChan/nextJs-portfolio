import styled from 'styled-components';

//! Cuboid edge thickness
export const Bg_inner = styled.div`
  background: #212121;
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  right: 0.2rem;
  bottom: 0.2rem;
`;

//! Front face (4 edges) of cuboid.
export const Bg = styled.div`
  position: absolute;
  /* left, top, right, bottom <- all 0 to cover up the parent like the overlay i made with the flexbox project. Clinging to the edges of the parent element */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /*"background" <- Front edges color for the button */
  background: ${(p) => p.theme.bg_gradient};
  > ${Bg_inner} {
    /* Button front face "top: 100%" transition */
    transition: all 0.2s ease-in-out;
  }
`;
//! Top face of the cuboid
export const Bg_top = styled.div`
  position: absolute;
  height: 1rem;
  /* "background" <- only for the button */
  background: ${(p) => p.theme.bg_gradient};
  bottom: 100%;
  left: 0.5rem;
  right: -0.5rem;
  transform: skew(-45deg, 0);
  margin: 0;
  > ${Bg_inner} {
    /* setting bottom edge to be null so that the thickness wont double up.*/
    bottom: 0;
  }
`;
//! Right face of the cuboid
export const Bg_right = styled.div`
  position: absolute;
  /* "background" <- only for the button */
  background: rgba(0, 212, 255, 1);
  top: -0.5rem;
  z-index: 0;
  bottom: 0.5rem;
  width: 1rem;
  left: 100%;
  transform: skew(0, -45deg);
  > ${Bg_inner} {
    /*setting left edge to be null so that the thickness wont double up. */
    left: 0;
  }
`;
