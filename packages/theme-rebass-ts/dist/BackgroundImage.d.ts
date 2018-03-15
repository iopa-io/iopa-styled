/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { WidthProps, RatioProps, BackgroundSizeProps, BackgroundPositionProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface BackgroundImageProps extends WidthProps, RatioProps, BackgroundSizeProps, BackgroundPositionProps, SpaceProps, ColorProps {
}
export declare const BackgroundImage: StyledComponentClass<BackgroundImageProps & React.HTMLProps<HTMLElement>, any>;
export default BackgroundImage;
