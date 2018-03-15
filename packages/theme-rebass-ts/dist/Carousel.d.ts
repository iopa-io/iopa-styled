/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { WidthProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface CarouselProps extends WidthProps, SpaceProps, ColorProps {
}
export declare const Carousel: StyledComponentClass<CarouselProps & React.HTMLProps<HTMLElement>, any>;
export default Carousel;
