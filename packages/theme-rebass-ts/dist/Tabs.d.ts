/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { BordersProps, BorderColorProps } from 'styled-system-types';
export interface TabsProps extends BordersProps, BorderColorProps {
}
export declare const Tabs: StyledComponentClass<TabsProps & React.HTMLProps<HTMLElement>, any>;
export default Tabs;
