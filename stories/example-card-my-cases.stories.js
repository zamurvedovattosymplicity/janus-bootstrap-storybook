import { document, setTimeout } from 'global';

import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default {
  title: 'Examples/Cards/My Cases',
  decorators: [withKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybook/a11y/panel',
    },
  },
};

const card_basic_html = `
   <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="d-flex">
          <div class="card-header-icon flex-shrink-1">
            <span class="icn-folders bg-pale-red"></span>
          </div>
          <div class="card-header-text w-100">
            My Cases
          </div>
        </div>
      </h3>
      <nav>
        <ul class="nav nav-tabs border-top border-bottom pt-0 pb-0 p-sm-7 pt-sm-0 pb-sm-0 h5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="subtab1-tab" data-toggle="tab" href="#subtab1" role="tab" aria-controls="subtab1" aria-selected="true">Subtab1</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="subtab2-tab" data-toggle="tab" href="#subtab2" role="tab" aria-controls="subtab2" aria-selected="false">Subtab2</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="subtab3-tab" data-toggle="tab" href="#subtab3" role="tab" aria-controls="subtab3" aria-selected="false">Subtab3</a>
          </li>
        </ul>
      </nav>
      <div class="card-body h5 mb-0">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="subtab1" role="tabpanel" aria-labelledby="subtab1-tab">
            <ul class="list-unstyled lh-lg mb-0">
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="subtab2" role="tabpanel" aria-labelledby="profile-tab">Subtab 2 Content</div>
          <div class="tab-pane fade" id="subtab3" role="tabpanel" aria-labelledby="contact-tab">Subtab 3 Content</div>
        </div>
      </div>
    </div>
  </div>`;

export const CardBasic = () => {

  const icon_bg_color_options = {
    "Pale Green": "bg-pale-green",
    "Pale Orange": "bg-pale-orange",
    "Pale Indigo": "bg-pale-indigo",
    "Pale Purple": "bg-pale-purple",
    "Pale Blue": "bg-pale-blue",
    "Pale Red": "bg-pale-red"      
  }

  const card_title_text = text("Title", "My Cases");
  const card_icon_class = text("Unicon Class", "icn-folders");
  const card_icon_bg_color = select(
      "Icon Background Color",
      icon_bg_color_options,
      "bg-pale-red"
  );

  return `
    <div class="card">
      <h3 class="card-header text-uppercase bg-white">
        <div class="d-flex">
          <div class="card-header-icon flex-shrink-1">
            <span class="${card_icon_class} ${card_icon_bg_color}"></span>
          </div>
          <div class="card-header-text w-100">
            ${card_title_text}
          </div>
        </div>
      </h3>
      <nav>
        <ul class="nav nav-tabs border-top border-bottom pt-0 pb-0 p-sm-7 pt-sm-0 pb-sm-0 h5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="subtab1-tab" data-toggle="tab" href="#subtab1" role="tab" aria-controls="subtab1" aria-selected="true">Subtab1</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="subtab2-tab" data-toggle="tab" href="#subtab2" role="tab" aria-controls="subtab2" aria-selected="false">Subtab2</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="subtab3-tab" data-toggle="tab" href="#subtab3" role="tab" aria-controls="subtab3" aria-selected="false">Subtab3</a>
          </li>
        </ul>
      </nav>
      <div class="card-body h5 mb-0">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="subtab1" role="tabpanel" aria-labelledby="subtab1-tab">
            <ul class="list-unstyled lh-lg mb-0">
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
              <li class="d-flex">
                <div class="flex-shrink-1">
                  <span class="icn-folders"></span>
                </div>
                <div class="w-100 ml-1">
                  <a href="#" class="link-secondary text-decoration-none"><strong>Incident Report</strong>: Richard Gilmore (#IR0001-002)</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="subtab2" role="tabpanel" aria-labelledby="profile-tab">Subtab 2 Content</div>
          <div class="tab-pane fade" id="subtab3" role="tabpanel" aria-labelledby="contact-tab">Subtab 3 Content</div>
        </div>
      </div>
    </div>`
};

CardBasic.storyName = 'My Cases';
  
CardBasic.parameters = { 
  notes: `
  
  #Sample Code 

  \`\`\`html
  ${card_basic_html}
  \`\`\`
  
  `
}
