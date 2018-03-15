/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { FontFamilyProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface RootProps extends FontFamilyProps, SpaceProps, ColorProps {
}
export declare const Root: StyledComponentClass<RootProps & React.HTMLProps<HTMLElement>, any>;
export default Root;
