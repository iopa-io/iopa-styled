/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, SpaceProps } from 'styled-system-types';
export interface BlockquoteProps extends FontSizeProps, SpaceProps {
}
export declare const Blockquote: StyledComponentClass<BlockquoteProps & React.HTMLProps<HTMLElement>, any>;
export default Blockquote;
