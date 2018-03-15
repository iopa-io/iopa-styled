/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, FontSizeProps, FontWeightProps, SpaceProps, WidthProps } from 'styled-system-types';
export interface NavLinkProps extends ColorProps, FontSizeProps, FontWeightProps, SpaceProps, WidthProps {
}
export declare const NavLink: StyledComponentClass<NavLinkProps & React.HTMLProps<HTMLElement>, any>;
export default NavLink;
