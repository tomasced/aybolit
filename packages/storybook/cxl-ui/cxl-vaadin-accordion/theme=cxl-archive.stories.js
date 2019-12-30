import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import archiveData from './theme=cxl-archive.data.json';

export default {
  title: 'CXL UI|cxl-vaadin-accordion'
};

export const CxlVaadinAccordionThemeArchive = () => {
  let lastEntryTitle1stLetter = 'Z';

  const firstLetterHeading = el => {
    const firstLetter = el.title.raw.charAt(0);
    let heading = html``;

    if (firstLetter !== lastEntryTitle1stLetter) {
      heading = html`
        <h3 id="letter-${firstLetter}">${firstLetter}</h3>
      `;
      lastEntryTitle1stLetter = firstLetter;
    }

    return heading;
  };

  return html`
    <style>
      .plural .entry-title {
        margin: 0;
      }
      .entry-title a {
        color: inherit;
      }
    </style>
    <cxl-vaadin-accordion
      id="cxl-vaadin-accordion-26107"
      class="archive archive-certificate plural"
      theme="cxl-archive"
    >
      ${archiveData.map(
        el => html`
          ${firstLetterHeading(el)}
          <vaadin-accordion-panel
            id="${el.cxl_hybrid_attr_post['@attributes'].id}"
            class="${el.cxl_hybrid_attr_post['@attributes'].class}"
            theme="cxl-archive"
          >
            <header class="entry-header" slot="summary">
              <h3 class="entry-title no-anchor" itemprop="headline">${el.title.raw}</h3>
              <img
                class="landscape cw-greater thumbnail shop_catalog lazyloaded"
                alt="${el.title.raw}"
                itemprop="image"
                src="${el.cxl_featured_media.shop_catalog}"
                data-src="${el.cxl_featured_media.shop_catalog}"
                loading="lazy"
                width="150"
                height="150"
              />
              <div class="entry-byline">
                <iron-icon icon="lumo:clock"></iron-icon>${el.conversionxl_live_course_duration}
                <hr />
                Instructors: ${el.conversionxl_certificate_instructor}
              </div>
            </header>
            <div class="entry-summary" itemprop="description">
              ${unsafeHTML(el.content.cxl_get_extended_main)}
            </div>
            <div class="entry-footer" style="text-align: right;">
              <a href="${el.conversionxl_certificate_sales_page}"
                >View training<iron-icon icon="lumo:angle-right"></iron-icon
              ></a>
            </div>
          </vaadin-accordion-panel>
        `
      )}
    </cxl-vaadin-accordion>
  `;
};

// @todo localStorage data panel?
CxlVaadinAccordionThemeArchive.story = {
  name: 'Theme: Archive'
};
