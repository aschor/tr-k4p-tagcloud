import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';

// THe provider function, which must return our new visualization type
function TagcloudProvider(Private) {
	var TemplateVisType = Private(TemplateVisTypeProvider);

	// Describe our visualization
	return new TemplateVisType({
		name: 'trTagcloud', // The internal id of the visualization (must be unique)
		title: 'trTagcloud', // The title of the visualization, shown to the user
		description: 'Tagcloud visualization', // The description of this vis
		icon: 'fa-cloud', // The font awesome icon of this visualization
		template: require('plugins/tr-k4p-tagcloud/tagcloud.html') // The template, that will be rendered for this visualization
	});
}

VisTypesRegistryProvider.register(TagcloudProvider);
