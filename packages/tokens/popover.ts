import type { InjectionKey } from 'vue';

export type PopoverContext = {
  data?: {
    disableCloseUnderTransfer: boolean;
    closeDelay: number;
  };
  default?: boolean | null;
  visible?: boolean;
  handleCancel?: () => void;
};

export const PopoverContextKey: InjectionKey<PopoverContext> =
  Symbol('ivue-popover');
