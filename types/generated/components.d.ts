import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsIconPoints extends Schema.Component {
  collectionName: 'components_sections_icon_points';
  info: {
    displayName: 'icon_points';
    icon: 'brush';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.icon-points': SectionsIconPoints;
    }
  }
}
