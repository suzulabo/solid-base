import { createRoot } from 'solid-js';
import { insert, template, createComponent } from 'solid-js/web';
import BaseStyles from '../src/components/BaseStyle';

export const decorators = [
  (Story) =>
    createRoot(() => {
      const el = template(`<div></div>`, 2).cloneNode(true);
      insert(el, createComponent(BaseStyles, {}));
      insert(el, createComponent(Story, {}));
      return el;
    }),
];
