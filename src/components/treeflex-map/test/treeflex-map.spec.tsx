import { newSpecPage } from '@stencil/core/testing';
import { TreeflexMap } from '../treeflex-map';

describe('treeflex-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TreeflexMap],
      html: `<treeflex-map></treeflex-map>`,
    });
    expect(page.root).toEqualHtml(`
      <treeflex-map>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </treeflex-map>
    `);
  });
});
