export const REPOSITORY_NAME = '#repository_name';
export const REPOSITORY_DESCRIPTION = '#repository_description';
export const REPOSITORY_VISIBILITY = (option) => `#repository_visibility_${option}`;
export const INITIALIZE_THIS_REPOSITORY_WITH_README = '#repository_auto_init';

export const CHECKBOX_GITIGNORE = '#repository_gitignore_template_toggle';
export const ADD_GITIGNORE = ':nth-child(5) > .form-checkbox-details > .details-reset > .btn';
export const FILTER_GITIGNORE = '#context-ignore-filter-field';
export const GITIGNORE_OPTION_TO_SELECT = '.filterable-active';

export const CHECKBOX_LICENSE = '#repository_license_template_toggle';
export const ADD_LICENSE = 'License:';
export const FILTER_LICENSE = '.SelectMenu-filter > .width-full';
export const LICENSE_OPTION_TO_SELECT = (option) => `//div[@class="SelectMenu-list"]//input[contains(@value, '${option}')]`;

export const CREATE_REPOSITORY = 'div.js-with-permission-fields > .btn-primary';
export const MESSAGE_REPOSITORY_ALREADY_EXISTS = '.error > strong';