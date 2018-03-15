/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, LineHeightProps, SpaceProps, WidthProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps, ColorProps } from 'styled-system-types';
export interface InputProps extends FontSizeProps, LineHeightProps, SpaceProps, WidthProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps, ColorProps {
}
export declare const Input: StyledComponentClass<InputProps & React.HTMLProps<HTMLElement>, any>;
export default Input;
