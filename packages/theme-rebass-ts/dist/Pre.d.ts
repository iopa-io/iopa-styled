/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, FontFamilyProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface PreProps extends FontSizeProps, FontFamilyProps, SpaceProps, ColorProps {
}
export declare const Pre: StyledComponentClass<PreProps & React.HTMLProps<HTMLElement>, any>;
export default Pre;
