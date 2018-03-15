/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SizeProps, AlignItemsProps, BorderRadiusProps, TextAlignProps } from 'styled-system-types';
export interface CircleProps extends SizeProps, AlignItemsProps, BorderRadiusProps, TextAlignProps {
}
export declare const Circle: StyledComponentClass<CircleProps & React.HTMLProps<HTMLElement>, any>;
export default Circle;
