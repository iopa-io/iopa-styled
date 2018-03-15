/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, SpaceProps, AlignItemsProps, ColorProps } from 'styled-system-types';
export interface LabelProps extends FontSizeProps, SpaceProps, AlignItemsProps, ColorProps {
}
export declare const Label: StyledComponentClass<LabelProps & React.HTMLProps<HTMLElement>, any>;
export default Label;
