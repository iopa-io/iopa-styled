/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontSizeProps, LineHeightProps } from 'styled-system-types';
export interface LeadProps extends FontSizeProps, LineHeightProps {
}
export declare const Lead: StyledComponentClass<LeadProps & React.HTMLProps<HTMLElement>, any>;
export default Lead;
