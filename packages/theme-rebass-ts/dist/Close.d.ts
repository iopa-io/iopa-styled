/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, FontSizeProps, LineHeightProps } from 'styled-system-types';
export interface CloseProps extends SpaceProps, FontSizeProps, LineHeightProps {
}
export declare const Close: StyledComponentClass<CloseProps & React.HTMLProps<HTMLElement>, any>;
export default Close;
