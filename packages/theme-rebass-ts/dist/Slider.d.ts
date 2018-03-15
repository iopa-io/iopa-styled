/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { WidthProps, SpaceProps, ColorProps, BorderRadiusProps } from 'styled-system-types';
export interface SliderProps extends WidthProps, SpaceProps, ColorProps, BorderRadiusProps {
}
export declare const Slider: StyledComponentClass<SliderProps & React.HTMLProps<HTMLElement>, any>;
export default Slider;
