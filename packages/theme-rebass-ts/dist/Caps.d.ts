/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, LetterSpacingProps } from 'styled-system-types';
export interface CapsProps extends FontSizeProps, LetterSpacingProps {
}
export declare const Caps: StyledComponentClass<CapsProps & React.HTMLProps<HTMLElement>, any>;
export default Caps;
