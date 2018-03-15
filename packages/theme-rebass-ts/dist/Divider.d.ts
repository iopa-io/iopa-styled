/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, BordersProps, BorderColorProps, ColorProps } from 'styled-system-types';
export interface DividerProps extends SpaceProps, BordersProps, BorderColorProps, ColorProps {
}
export declare const Divider: StyledComponentClass<DividerProps & React.HTMLProps<HTMLElement>, any>;
export default Divider;
