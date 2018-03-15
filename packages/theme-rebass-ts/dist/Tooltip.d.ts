/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps } from 'styled-system-types';
export interface TooltipProps extends ColorProps {
}
export declare const Tooltip: StyledComponentClass<TooltipProps & React.HTMLProps<HTMLElement>, any>;
export default Tooltip;
