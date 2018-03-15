/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, SpaceProps, ColorProps, BordersProps, BorderColorProps } from 'styled-system-types';
export interface PanelHeaderProps extends FontSizeProps, SpaceProps, ColorProps, BordersProps, BorderColorProps {
}
export declare const PanelHeader: StyledComponentClass<PanelHeaderProps & React.HTMLProps<HTMLElement>, any>;
export default PanelHeader;
