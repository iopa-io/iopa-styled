/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { BordersProps, BorderColorProps, SpaceProps, WidthProps, ColorProps } from 'styled-system-types';
export interface BorderProps extends BordersProps, BorderColorProps, SpaceProps, WidthProps, ColorProps {
}
export declare const Border: StyledComponentClass<BorderProps & React.HTMLProps<HTMLElement>, any>;
export default Border;
