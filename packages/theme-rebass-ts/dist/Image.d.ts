/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, WidthProps, ColorProps } from 'styled-system-types';
export interface ImageProps extends SpaceProps, WidthProps, ColorProps {
}
export declare const Image: StyledComponentClass<ImageProps & React.HTMLProps<HTMLElement>, any>;
export default Image;
