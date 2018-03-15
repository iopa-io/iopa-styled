/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { TopProps, LeftProps, SpaceProps, ColorProps, BorderRadiusProps, MaxWidthProps, MaxHeightProps, WidthProps } from 'styled-system-types';
export interface ModalProps extends TopProps, LeftProps, SpaceProps, ColorProps, BorderRadiusProps, MaxWidthProps, MaxHeightProps, WidthProps {
}
export declare const Modal: StyledComponentClass<ModalProps & React.HTMLProps<HTMLElement>, any>;
export default Modal;
