import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorMdDirective} from './director/editor-md.directive';
import {EditorConfig} from './model/editor-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorMdDirective],
  exports: [EditorMdDirective, EditorConfig]
})
export class EditorMdModule {
}
