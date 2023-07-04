import type { PresetProperty } from '@storybook/types';
import type { StorybookConfig } from './types';

export const core: PresetProperty<'core', StorybookConfig> = {
  builder: 'storybook-builder-wds',
  renderer: '@storybook/web-components',
};
