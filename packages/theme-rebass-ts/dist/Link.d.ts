/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, SpaceProps } from 'styled-system-types';
export interface LinkProps extends ColorProps, SpaceProps {
}
export declare const Link: StyledComponentClass<LinkProps & React.HTMLProps<HTMLElement>, any>;
export default Link;
