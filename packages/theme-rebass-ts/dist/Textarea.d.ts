/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, WidthProps, FontSizeProps, ColorProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps } from 'styled-system-types';
export interface TextareaProps extends SpaceProps, WidthProps, FontSizeProps, ColorProps, BordersProps, BorderColorProps, BoxShadowProps, BorderRadiusProps {
}
export declare const Textarea: StyledComponentClass<TextareaProps & React.HTMLProps<HTMLElement>, any>;
export default Textarea;
