import { declareIndexPlugin, ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';
import '../App.css';

async function onActivate(plugin: ReactRNPlugin) {
  // Register settings
  await plugin.app.registerWidget(
    'right_sidebar',
    WidgetLocation.RightSidebar,
    {
      dimensions: {
        height: 'auto',
        width: 350,
      },
    },
  );
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
