import type { Config, Configs, NestedConfigs } from '@config-manager/types';
declare const createFeature: (group: string, enabled: boolean | Config, configs?: NestedConfigs) => Configs;
export { createFeature };
