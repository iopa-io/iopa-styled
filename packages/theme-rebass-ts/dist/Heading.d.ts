/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, FontWeightProps, LineHeightProps, SpaceProps, ColorProps, TextAlignProps } from 'styled-system-types';
export interface HeadingProps extends FontSizeProps, FontWeightProps, LineHeightProps, SpaceProps, ColorProps, TextAlignProps {
}
export declare const Heading: StyledComponentClass<HeadingProps & React.HTMLProps<HTMLElement>, any>;
export default Heading;
