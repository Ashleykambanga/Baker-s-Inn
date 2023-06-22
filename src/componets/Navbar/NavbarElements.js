import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
// background: white;
// height: 210px;
// display: flex;
// justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);

// z-index: 12;

`;

export const NavLink = styled(Link)`
// color: #808080;
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;
// &.active {
// 	color:rgb(45, 1, 112);
// 	font-size: 24px;
}
`;

export const Bars = styled(FaBars)`
// display: none;
// color: #808080;
// color: #261B6C;
// @media screen and (max-width: 768px) {
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform: translate(-100%, 75%);
// 	font-size: 1.8rem;
// 	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
font-family: 'MontserratBold';

white-space: nowrap; */
// @media screen and (max-width: 768px) {
// 	display: flex;
}
`;
