/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { ColorProps, BorderRadiusProps, BordersProps, BorderColorProps, SpaceProps } from 'styled-system-types';
export interface PanelProps extends ColorProps, BorderRadiusProps, BordersProps, BorderColorProps, SpaceProps {
}
export declare const Panel: StyledComponentClass<PanelProps & React.HTMLProps<HTMLElement>, any>;
export default Panel;
