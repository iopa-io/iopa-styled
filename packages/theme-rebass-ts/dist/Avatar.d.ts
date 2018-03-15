/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SizeProps, BorderRadiusProps, SpaceProps, ColorProps } from 'styled-system-types';
export interface AvatarProps extends SizeProps, BorderRadiusProps, SpaceProps, ColorProps {
}
export declare const Avatar: StyledComponentClass<AvatarProps & React.HTMLProps<HTMLElement>, any>;
export default Avatar;
