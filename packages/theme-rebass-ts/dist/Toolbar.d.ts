/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, ColorProps, AlignItemsProps, MinHeightProps } from 'styled-system-types';
export interface ToolbarProps extends SpaceProps, ColorProps, AlignItemsProps, MinHeightProps {
}
export declare const Toolbar: StyledComponentClass<ToolbarProps & React.HTMLProps<HTMLElement>, any>;
export default Toolbar;
