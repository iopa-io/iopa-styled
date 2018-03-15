/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, SpaceProps, WidthProps } from 'styled-system-types';
export interface BlockLinkProps extends ColorProps, SpaceProps, WidthProps {
}
export declare const BlockLink: StyledComponentClass<BlockLinkProps & React.HTMLProps<HTMLElement>, any>;
export default BlockLink;
