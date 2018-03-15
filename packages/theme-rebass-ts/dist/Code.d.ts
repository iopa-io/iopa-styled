/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, FontFamilyProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface CodeProps extends FontSizeProps, FontFamilyProps, SpaceProps, ColorProps {
}
export declare const Code: StyledComponentClass<CodeProps & React.HTMLProps<HTMLElement>, any>;
export default Code;
