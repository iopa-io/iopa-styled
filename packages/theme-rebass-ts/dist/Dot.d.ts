/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, SizeProps, ColorProps, BorderRadiusProps, BordersProps, BorderColorProps, FocusProps, HoverProps, DisabledProps } from 'styled-system-types';
export interface DotProps extends SpaceProps, SizeProps, ColorProps, BorderRadiusProps, BordersProps, BorderColorProps, FocusProps, HoverProps, DisabledProps {
}
export declare const Dot: StyledComponentClass<DotProps & React.HTMLProps<HTMLElement>, any>;
export default Dot;
