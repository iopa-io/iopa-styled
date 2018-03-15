/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, SpaceProps, ColorProps, FontWeightProps, BorderRadiusProps } from 'styled-system-types';
export interface BadgeProps extends FontSizeProps, SpaceProps, ColorProps, FontWeightProps, BorderRadiusProps {
}
export declare const Badge: StyledComponentClass<BadgeProps & React.HTMLProps<HTMLElement>, any>;
export default Badge;
