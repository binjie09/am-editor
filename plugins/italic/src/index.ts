import { MarkPlugin, PluginOptions } from '@aomao/engine';

export interface Options extends PluginOptions {
	hotkey?: string | Array<string>;
	markdown?: string;
}
export default class extends MarkPlugin<Options> {
	static get pluginName() {
		return 'italic';
	}

	tagName = 'em';

	markdown =
		this.options.markdown === undefined ? '_' : this.options.markdown;

	hotkey() {
		return this.options.hotkey || 'mod+i';
	}

	conversion() {
		return [
			{
				from: {
					span: {
						style: {
							'font-style': 'italic',
						},
					},
				},
				to: this.tagName,
			},
			{
				from: 'i',
				to: this.tagName,
			},
		];
	}
}
