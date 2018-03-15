/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, SpaceProps, ColorProps, BordersProps, BorderColorProps } from 'styled-system-types';
export interface PanelFooterProps extends FontSizeProps, SpaceProps, ColorProps, BordersProps, BorderColorProps {
}
export declare const PanelFooter: StyledComponentClass<PanelFooterProps & React.HTMLProps<HTMLElement>, any>;
export default PanelFooter;
