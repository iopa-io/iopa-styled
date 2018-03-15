/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, FontWeightProps, LineHeightProps, SpaceProps, ColorProps, BorderRadiusProps, BordersProps } from 'styled-system-types';
export interface ButtonProps extends FontSizeProps, FontWeightProps, LineHeightProps, SpaceProps, ColorProps, BorderRadiusProps, BordersProps {
}
export declare const Button: StyledComponentClass<ButtonProps & React.HTMLProps<HTMLElement>, any>;
export default Button;
