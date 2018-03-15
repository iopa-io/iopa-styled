/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { WidthProps, SpaceProps, ColorProps, BorderRadiusProps } from 'styled-system-types';
export interface ProgressProps extends WidthProps, SpaceProps, ColorProps, BorderRadiusProps {
}
export declare const Progress: StyledComponentClass<ProgressProps & React.HTMLProps<HTMLElement>, any>;
export default Progress;
