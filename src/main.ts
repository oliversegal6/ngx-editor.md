import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {EditorMdModule} from './app/editormd/editor-md.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EditorMdModule)
  .catch(err => console.log(err));
