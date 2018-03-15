/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, MaxWidthProps } from 'styled-system-types';
export interface ContainerProps extends SpaceProps, MaxWidthProps {
}
export declare const Container: StyledComponentClass<ContainerProps & React.HTMLProps<HTMLElement>, any>;
export default Container;
