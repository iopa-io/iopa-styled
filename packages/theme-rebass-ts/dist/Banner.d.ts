/// <reference types="react" />
import { StyledComponentClass } from 'styled-components';
import { SpaceProps, FlexDirectionProps, AlignItemsProps, JustifyContentProps, BackgroundSizeProps, BackgroundPositionProps, ColorProps, MinHeightProps, BackgroundImageProps } from 'styled-system-types';
export interface BannerProps extends SpaceProps, FlexDirectionProps, AlignItemsProps, JustifyContentProps, BackgroundSizeProps, BackgroundPositionProps, ColorProps, MinHeightProps, BackgroundImageProps {
}
export declare const Banner: StyledComponentClass<BannerProps & React.HTMLProps<HTMLElement>, any>;
export default Banner;
