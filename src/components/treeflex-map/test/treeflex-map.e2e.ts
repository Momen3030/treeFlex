import { newE2EPage } from '@stencil/core/testing';

describe('treeflex-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<treeflex-map></treeflex-map>');

    const element = await page.find('treeflex-map');
    expect(element).toHaveClass('hydrated');
  });
});
