/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, ColorProps } from 'styled-system-types';
export interface ArrowProps extends SpaceProps, ColorProps {
    direction: 'string';
    k: 'number';
}
export declare const Arrow: StyledComponentClass<ArrowProps & React.HTMLProps<HTMLElement>, any>;
export default Arrow;
