/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { injectable } from '@dbeaver/core/di';

import { ISettingsSource } from './ISettingsSource';
import { SettingsSource } from './SettingsSource';

@injectable()
export class ServerSettingsService extends SettingsSource {

  constructor(fallback: ISettingsSource) {
    super(fallback);
  }

  setValue(key: string, value: string) {
    this.fallback?.setValue(key, value);
  }

  setSelfValue(key: string, value: string) {
    super.setValue(key, value);
  }

  clear() {
    this.store.clear();
  }
}
