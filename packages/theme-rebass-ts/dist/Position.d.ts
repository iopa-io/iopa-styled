/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { WidthProps, SpaceProps, ColorProps, ZIndexProps, TopProps, RightProps, BottomProps, LeftProps, PositionProps } from 'styled-system-types';
export interface PositionProps extends WidthProps, SpaceProps, ColorProps, ZIndexProps, TopProps, RightProps, BottomProps, LeftProps, PositionProps {
}
export declare const Position: StyledComponentClass<PositionProps & React.HTMLProps<HTMLElement>, any>;
export default Position;
