/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, FontWeightProps, ColorProps, AlignItemsProps, MinHeightProps } from 'styled-system-types';
export interface MessageProps extends SpaceProps, FontWeightProps, ColorProps, AlignItemsProps, MinHeightProps {
}
export declare const Message: StyledComponentClass<MessageProps & React.HTMLProps<HTMLElement>, any>;
export default Message;
