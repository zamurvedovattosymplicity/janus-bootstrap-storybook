import { document, setTimeout } from 'global';

import iconSprite from '../node_modules/@symplicity/tabler-icons/symplicity/tabler-sprite-nostroke.svg';

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
  radios,
} from '@storybook/addon-knobs';

export default {
  title: 'Components/Filters Advanced',
  decorators: [withKnobs],
};

const drilldown_button_parent_html = `
    <div class="dropdown">
      <h3>Drilldown Parent</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    All Jobs and Interviews
                  </span>
                  <button class="py-0 px-2 bg-transparent border-0 me-n3">
                    <span class="d-flex align-items-center">
                      <svg width="1.25rem" height="1.25rem">
                        <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
                      </svg>
                    </span>
                  </button>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Career Fair Postings
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Jobs Matching My Profile
                </span>
              </a>
            </li>
            <ul class="list-unstyled list-unstyled-repeat mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>`;

export const FilterButtonParent = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings');
  const drilldown_option_3 = text(
    'Select Option 3',
    'Jobs Matching My Profile'
  );

  const label = 'Number of items';
  const defaultValue = 15;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };

  const value = number(label, defaultValue, options);

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat');
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li><div class="list-group"><a class="dropdown-item d-flex" href="#"><span class="flex-fill">Option ${
                i + 1
              }</span></a></div></li>`
          )
          .join('')}
    `;
  }, 0);

  return `
    <div class="dropdown">
      <h3>Drilldown Parent</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    ${drilldown_option_1}
                  </span>
                  <button class="py-0 px-2 bg-transparent border-0 me-n3">
                    <span class="d-flex align-items-center">
                      <svg width="1.25rem" height="1.25rem">
                        <use xlink:href="${iconSprite}#tabler-chevron-right" />
                      </svg>
                    </span>
                  </button>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_option_2}
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_option_3}
                </span>
              </a>
            </li>
            <ul class="list-unstyled list-unstyled-repeat mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>
    `;
};

FilterButtonParent.storyName = 'Drilldown Parent';

FilterButtonParent.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${drilldown_button_parent_html}
  \`\`\`

  `,
};

const drilldown_button_child_html = `
    <div class="dropdown">
      <h3>Drilldown Child</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="/path/to/icon-sprite.svg#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2 ">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-left" />
                    </svg>
                  </span>
                  <span class="w-100 text-center">
                    Category 1.3
                  </span>
                </a>
            </li>
          </ul>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    Category 1.3.1
                  </span>
                  <button class="py-0 px-2 bg-transparent border-0 me-n3">
                    <span class="d-flex align-items-center">
                      <svg width="1.25rem" height="1.25rem">
                        <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
                      </svg>
                    </span>
                  </button>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Category 1.3.2
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  Category 1.3.3
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

export const FilterButtonChild = () => {
  const drilldown_parent = text('Position Type', 'Position Type');
  const drilldown_child_option_1 = text('Child Item 1', 'Category 1.3.1');
  const drilldown_child_option_2 = text('Child Item 2', 'Category 1.3.2');
  const drilldown_child_option_3 = text('Child Item 3', 'Category 1.3.3');

  return `
    <div class="dropdown">
      <h3>Drilldown Child</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${drilldown_parent} 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
            <div class="input-group">
              <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
              <span class="input-group-text bg-white">
                  <svg class="icon-lg-font-size">
                    <use xlink:href="${iconSprite}#tabler-search" />
                    <span class="visually-hidden">Search</span>
                  </svg>
              </span>
            </div>
          </form>
          <ul class="list-unstyled mb-2 overflow-auto">
            <li class="mb-0">
              <div class="list-group">
                <a class="dropdown-item d-flex border border-light border-start-0 border-end-0" href="#">
                  <span class="h4 mt-0 mb-0 ms-n2 ">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-left" />
                    </svg>
                  </span>
                  <span class="w-100 text-center">
                    ${drilldown_parent}
                  </span>
                </a>
            </li>
          </ul>
          <ul class="list-unstyled mb-0 overflow-auto">
            <li>
              <div class="list-group">
                <a class="dropdown-item d-flex" href="#">
                  <span class="w-100">
                    ${drilldown_child_option_1}
                  </span>
                  <button class="py-0 px-2 bg-transparent border-0 me-n3">
                    <span class="d-flex align-items-center">
                      <svg width="1.25rem" height="1.25rem">
                        <use xlink:href="${iconSprite}#tabler-chevron-right" />
                      </svg>
                    </span>
                  </button>
                </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_child_option_2}
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item d-flex" href="#">
                <span class="flex-fill">
                  ${drilldown_child_option_3}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
};

FilterButtonChild.storyName = 'Drilldown Child';

FilterButtonChild.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${drilldown_button_child_html}
  \`\`\`

  `,
};

const multi_select_single_level_html = `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 px-7 pt-7 pb-2 overflow-auto">
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between px-3 py-6">
            <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            <button type="button" class="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
    `;

export const MultiSelectSingleLevel = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings');
  const drilldown_option_3 = text(
    'Select Option 3',
    'Jobs Matching My Profile'
  );

  const label = 'Number of items';
  const defaultValue = 15;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };

  const value = number(label, defaultValue, options);

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat');
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li><label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option ${
                i + 1
              }</label></li>`
          )
          .join('')}
    `;
  }, 0);

  return `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 px-7 pt-7 pb-2 overflow-auto">
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between px-3 py-6">
            <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            <button type="button" class="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
    `;
};

MultiSelectSingleLevel.storyName = 'Multi-Select, Single-Level';

MultiSelectSingleLevel.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${multi_select_single_level_html}
  \`\`\`

  `,
};

const multi_select_single_level_with_search_html = `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level, With Search</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 px-7 pt-7 pb-2 overflow-auto">
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
            </li>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between px-3 py-6">
            <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            <button type="button" class="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
    `;

export const MultiSelectSingleLevelWithSearch = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings');
  const drilldown_option_3 = text(
    'Select Option 3',
    'Jobs Matching My Profile'
  );

  const label = 'Number of items';
  const defaultValue = 15;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };

  const value = number(label, defaultValue, options);

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat');
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li><label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option ${
                i + 1
              }</label></li>`
          )
          .join('')}
    `;
  }, 0);

  return `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level, With Search</h3>
      <div>
        <button class="btn btn-outline-secondary filter-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          Position Type 
        </button>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <form class="py-3 px-7 mb-0 bg-white border-bottom-light">
              <div class="input-group">
                <input type="search" class="form-control border-end-0" autocomplete="false" placeholder="Type to search">
                <span class="input-group-text bg-white">
                    <svg class="icon-lg-font-size">
                      <use xlink:href="${iconSprite}#tabler-search" />
                      <span class="visually-hidden">Search</span>
                    </svg>
                </span>
              </div>
            </form>
          <ul class="list-unstyled mb-0 px-7 pt-0 pt-0 pb-0 overflow-auto">
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">${drilldown_option_1}</label>
            </li>
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" checked aria-label="...">${drilldown_option_2}</label>
            </li>
          </ul>
          <div class="dropdown-divider"></div>
          <ul class="list-unstyled mb-0 px-7 pt-2 pt-0 pb-2 overflow-auto">
            <li>
              <label class="list-group-item d-flex border-0 p-0 mb-2"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
          <div class="dropdown-divider m-0"></div>
          <div class="d-flex justify-content-between px-3 py-6">
            <button type="button" class="btn btn-link minw-0 text-secondary text-decoration-none p-0">Clear</button>
            <button type="button" class="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
    `;
};

MultiSelectSingleLevelWithSearch.storyName =
  'Multi-Select, Single-Level, With Search';

MultiSelectSingleLevelWithSearch.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${multi_select_single_level_with_search_html}
  \`\`\`

  `,
};

const multi_select_multi_level_html = `
    <div class="dropdown">
      <h3>Multi-Select, Single-Level</h3>
      <div>
        <div class="btn btn-outline-secondary filter-toggle filter-drop d-inline-flex align-items-center" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          <span class="w-100">
            <input type="text" placeholder="Search Majors" class="border-0 p-0">
          </span>
          <button class="bg-transparent border-0 me-n3 ms-1">
            <span class="d-flex align-items-center">
              <svg width="1.25rem" height="1.25rem">
                <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 px-7 pt-7 pb-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 1</label>
                </span>
                <button class="py-0 px-2 bg-transparent border-0 me-n3 ms-1">
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="/path/to/icon-sprite.svg#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 2</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">Option 3</label>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;

export const MultiSelectMultiLevel = () => {
  const drilldown_option_1 = text('Select Option 1', 'All Jobs and Interviews');
  const drilldown_option_2 = text('Select Option 2', 'Career Fair Postings');
  const drilldown_option_3 = text(
    'Select Option 3',
    'Jobs Matching My Profile'
  );

  const label = 'Number of items';
  const defaultValue = 15;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };

  const value = number(label, defaultValue, options);

  setTimeout(function () {
    const createListItems = document.querySelector('.list-unstyled-repeat');
    createListItems.innerHTML = `
        ${Array(value)
          .fill()
          .map(
            (item, i) =>
              `<li>
                <span class="dropdown-item d-flex">
                  <span class="w-100">
                    <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..."> Option ${
                      i + 1
                    }</label>
                  </span>
                </span>
              </li>`
          )
          .join('')}
    `;
  }, 0);

  return `
    <div class="dropdown">
      <h3>Multi-Select, Multi-Level</h3>
      <div>
        <div class="btn btn-outline-secondary filter-toggle filter-drop d-inline-flex align-items-center" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside">
          <span class="w-100">
            <input type="text" placeholder="Search Majors" class="border-0 p-0">
          </span>
          <button class="bg-transparent border-0 me-n3 ms-1">
            <span class="d-flex align-items-center">
              <svg width="1.25rem" height="1.25rem">
                <use xlink:href="${iconSprite}#tabler-chevron-down" />
              </svg>
            </span>
          </button>
        </div>
        <div class="dropdown-menu filter-menu shadow-sm mt-1 pb-0 pt-0" aria-labelledby="dropdownMenuButton2">
          <ul class="list-unstyled mb-0 pt-7 pb-2 overflow-auto">
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_1}</label>
                </span>
                <button class="py-0 px-2 bg-transparent border-0 me-n3 ms-1">
                  <span class="d-flex align-items-center">
                    <svg width="1.25rem" height="1.25rem">
                      <use xlink:href="${iconSprite}#tabler-chevron-right" />
                    </svg>
                  </span>
                </button>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_2}</label>
                </span>
              </span>
            </li>
            <li>
              <span class="dropdown-item d-flex">
                <span class="w-100">
                  <label class="list-group-item d-flex border-0 p-0 bg-transparent"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">${drilldown_option_3}</label>
                </span>
              </span>
            </li>
            <ul class="list-unstyled list-unstyled-repeat list-group mb-0"></ul>
          </ul>
        </div>
      </div>
    </div>
    `;
};

MultiSelectMultiLevel.storyName = 'Multi-Select, Multi-Level';

MultiSelectMultiLevel.parameters = {
  notes: `
  
  #Sample Code

  \`\`\`html
  ${multi_select_multi_level_html}
  \`\`\`

  `,
};
