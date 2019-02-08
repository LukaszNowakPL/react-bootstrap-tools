export interface DescribedComponentProps {
    children: any;
    description?: string;
    className?: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    delayHide?: number;
}

export interface ConfigInterface {
    defaultTooltipClassName: string;
    defaultTooltipId: string;
    defaultTooltipPlacement: 'top' | 'bottom' | 'left' | 'right';
}

export interface TooltipProps {
    id: string;
    className: string;
}

export interface OverlayTriggerProps {
    placement: 'top' | 'bottom' | 'left' | 'right';
    overlay: any;
    delayHide?: number;
}