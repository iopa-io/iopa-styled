/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, ColorProps } from 'styled-system-types';
export interface CheckboxProps extends SpaceProps, ColorProps {
}
export declare const Checkbox: StyledComponentClass<CheckboxProps & React.HTMLProps<HTMLElement>, any>;
export default Checkbox;
