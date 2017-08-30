import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisSchemasProvider } from 'ui/vis/schemas';

// THe provider function, which must return our new visualization type
function TagcloudProvider(Private) {
	var TemplateVisType = Private(TemplateVisTypeProvider);

    // Include the Schemas class, which will be used to define schemas
    var Schemas = Private(VisSchemasProvider);
  
	// Describe our visualization
	return new TemplateVisType({
		name: 'trTagcloud', // The internal id of the visualization (must be unique)
		title: 'trTagcloud', // The title of the visualization, shown to the user
		description: 'Tagcloud visualization', // The description of this vis
		icon: 'fa-cloud', // The font awesome icon of this visualization
		template: require('plugins/tr-k4p-tagcloud/tagcloud.html'), // The template, that will be rendered for this visualization
        schemas: new Schemas([
          {
            group: 'metrics',
            name: 'tagsize',
            title: 'Tagsize',
            min: 1,
            max: 1,
            aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
          },
          {
            group: 'buckets',
            name: 'tags',
            title: 'Tags',
            min: 1,
            max: 1,
            aggFilter: '!geohash_grid'
          }
        ])
	});
}

VisTypesRegistryProvider.register(TagcloudProvider);
