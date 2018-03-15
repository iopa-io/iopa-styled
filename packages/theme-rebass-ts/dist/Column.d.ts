/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, FlexProps } from 'styled-system-types';
export interface ColumnProps extends SpaceProps, FlexProps {
}
export declare const Column: StyledComponentClass<ColumnProps & React.HTMLProps<HTMLElement>, any>;
export default Column;
