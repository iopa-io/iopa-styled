/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { RatioProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface EmbedProps extends RatioProps, SpaceProps, ColorProps {
}
export declare const Embed: StyledComponentClass<EmbedProps & React.HTMLProps<HTMLElement>, any>;
export default Embed;
