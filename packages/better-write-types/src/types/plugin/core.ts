import { Store } from 'pinia';
import { App } from 'vue-demi';
import {
	AbsoluteState,
	AuthState,
	ContextState,
	EditorState,
	LoggerState,
	PDFState,
	ProjectState,
	ShortcutsState,
} from '../../';

export type PluginEmitterName =
	| 'plugin-input-watch-initial'
	| 'plugin-input-watch-last'
	| 'plugin-entity-create'
	| 'plugin-entity-create-empty'
	| 'plugin-entity-delete'
	| 'plugin-entity-swap'
	| 'plugin-entity-page-break'
	| 'plugin-entity-alter-in-page'
	| 'plugin-entity-paste-in-page'
	| 'plugin-theme-set'
	| 'plugin-theme-set-logo'
	| 'plugin-project-page-new'
	| 'plugin-project-page-delete'
	| 'plugin-project-page-swap'
	| 'plugin-project-creative-drafts-delete-draft'
	| 'plugin-project-creative-drafts-create-draft'
	| 'plugin-project-creative-drafts-reset-draft'
	| 'plugin-project-creative-drafts-set-draft'
	| 'plugin-project-creative-drafts-update'
	| 'plugin-auto-save'
	| 'plugin-dropbox-save'
	| 'plugin-editor-mounted';
export interface PluginEmitter {
	on: (name: PluginEmitterName, callback: (...c: any) => any) => void;
	emit: (name: PluginEmitterName, ...c: any) => void;
}

export type ExistingStores =
	| 'absolute'
	| 'auth'
	| 'context'
	| 'editor'
	| 'logger'
	| 'pdf'
	| 'project'
	| 'shortcuts';

export type PluginStore<T extends ExistingStores, B = {}, C = {}, D = {}> = Store<T, B, C, D>;

export interface PluginStores {
	ABSOLUTE: PluginStore<'absolute', AbsoluteState>;
	AUTH: PluginStore<'auth', AuthState>;
	CONTEXT: PluginStore<'context', ContextState>;
	EDITOR: PluginStore<'editor', EditorState>;
	LOGGER: PluginStore<'logger', LoggerState, any, {}>;
	PDF: PluginStore<'pdf', PDFState>;
	PROJECT: PluginStore<'project', ProjectState>;
	SHORTCUTS: PluginStore<'shortcuts', ShortcutsState>;
}

export interface PluginDefines {
	name: string;
}

export type PluginHook = any;

export interface PluginHooks {
	googleFonts: PluginHook;
	dropbox: PluginHook;
	local: PluginHook;
	storage: PluginHook;
	creative: PluginHook;
	defines: PluginHook;
	destroy: PluginHook;
	docx: PluginHook;
	editor: PluginHook;
	entity: PluginHook;
	env: PluginHook;
	factory: PluginHook;
	format: PluginHook;
	graph: PluginHook;
	input: PluginHook;
	keyboard: PluginHook;
	page: PluginHook;
	pdf: PluginHook;
	populate: PluginHook;
	project: PluginHook;
	raw: PluginHook;
	scroll: PluginHook;
	start: PluginHook;
	utils: PluginHook;
	i18n: PluginHook;
}

export type PluginContext = (
	emitter: PluginEmitter,
	stores: PluginStores,
	hooks: PluginHooks
) => void;

export interface Plugin {
	defines: PluginDefines;
	init: PluginContext;
}
export type Plugins = Plugin[];

export interface PluginCore {
	start: (plugins?: Plugins) => void;
}

export interface CoreOption {}

export interface CorePlugin {
	options?: CoreOption;
	start: (stores: PluginStores, plugins: Plugins, hooks: PluginHooks) => void;
	install: (app: App) => void;
}