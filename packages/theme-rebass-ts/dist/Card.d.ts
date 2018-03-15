/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, ColorProps, BorderRadiusProps, BoxShadowProps } from 'styled-system-types';
export interface CardProps extends SpaceProps, ColorProps, BorderRadiusProps, BoxShadowProps {
}
export declare const Card: StyledComponentClass<CardProps & React.HTMLProps<HTMLElement>, any>;
export default Card;
