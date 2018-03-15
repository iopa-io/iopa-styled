/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, BorderRadiusProps, SpaceProps } from 'styled-system-types';
export interface SwitchProps extends ColorProps, BorderRadiusProps, SpaceProps {
    role: 'string';
}
export declare const Switch: StyledComponentClass<SwitchProps & React.HTMLProps<HTMLElement>, any>;
export default Switch;
