import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const fadeIn2 = keyframes`
from {opacity: 0; transform: translateY(-20px)}
to {opacity: 1;}
`;

export const fadeOut = keyframes`
from {opacity:1;} 
to {opacity:0; display:none;}
`;

export const fadeOut2 = keyframes`
0%, 50% {opacity:1;} 
100% {opacity:0; display:none;}
`;

export const showUp = keyframes`
from {transform: translateY(-15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const showUp2 = keyframes`
from {transform: translateY(15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const showDown = keyframes`
from {transform: translateY(0px); opacity:1;}
to {transform: translateY(15px); opacity:0;}
`;

export const widthZeroToFull = keyframes`
from {width: 0; opacity:0;}
to {width: 100%; opacity:1;}
`;
