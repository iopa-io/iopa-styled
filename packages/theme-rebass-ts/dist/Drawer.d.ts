/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, SizeProps, PositionProps, SpaceProps } from 'styled-system-types';
export interface DrawerProps extends ColorProps, SizeProps, PositionProps, SpaceProps {
    open: 'boolean';
}
export declare const Drawer: StyledComponentClass<DrawerProps & React.HTMLProps<HTMLElement>, any>;
export default Drawer;
