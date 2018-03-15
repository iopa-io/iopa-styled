/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, ColorProps, FontSizeProps, FontWeightProps, TextAlignProps, LineHeightProps } from 'styled-system-types';
export interface TextProps extends SpaceProps, ColorProps, FontSizeProps, FontWeightProps, TextAlignProps, LineHeightProps {
}
export declare const Text: StyledComponentClass<TextProps & React.HTMLProps<HTMLElement>, any>;
export default Text;
