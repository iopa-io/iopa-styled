/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, FontWeightProps, SpaceProps, ColorProps, BordersProps, BorderColorProps, HoverProps } from 'styled-system-types';
export interface TabProps extends FontSizeProps, FontWeightProps, SpaceProps, ColorProps, BordersProps, BorderColorProps, HoverProps {
}
export declare const Tab: StyledComponentClass<TabProps & React.HTMLProps<HTMLElement>, any>;
export default Tab;
