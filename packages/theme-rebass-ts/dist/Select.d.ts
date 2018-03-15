/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, WidthProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps, ColorProps } from 'styled-system-types';
export interface SelectProps extends SpaceProps, WidthProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps, ColorProps {
}
export declare const Select: StyledComponentClass<SelectProps & React.HTMLProps<HTMLElement>, any>;
export default Select;
