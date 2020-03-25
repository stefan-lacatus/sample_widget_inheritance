import { TWWidgetDefinition, autoResizable, description, property, defaultValue, bindingTarget, service, event, bindingSource, nonEditable, willSet, didSet, TWPropertySelectOptions, selectOptions, hidden } from 'typescriptwebpacksupport/widgetidesupport';
import {BMPresentationControllerAnchorKind} from './shared/constants'
import { NO, YES } from 'bm-core-ui';

@TWWidgetDefinition('BaseWidget')
export abstract class IqnoxBaseWidget extends TWComposerWidget {    
    // @override - TWComposerWidget

    
    // @override - TWComposerWidget
    beforeDestroy(): void {
        
    }


}

/**
 * Widget 1
 */
@description('Widget 1')
@TWWidgetDefinition('Wdg 1')
export class IqnoxWdg1 extends IqnoxBaseWidget {
    afterRender?(): void {
    }

    /**
     * Test Prop.
     */
    @description('Test Prop.')
    @property('BOOLEAN', defaultValue(true)) test: boolean;

    // @override - TWComposerWidget
    widgetIconUrl(): string {
        return require('./images/icon.png').default;
    }
    
    // @override - TWComposerWidget
    renderHtml(): string {
        require('./styles/ide.css');
        return `<div class="widget-content">Widget 1</div>`;
    };

}

/**
 * Widget 2
 */
@description('Widget 2')
@TWWidgetDefinition('Wdg 2')
export class IqnoxWdg2 extends IqnoxBaseWidget {
    afterRender?(): void {
    }


    // @override - TWComposerWidget
    widgetIconUrl(): string {
        return require('./images/icon.png').default;
    }
    
    // @override - TWComposerWidget
    renderHtml(): string {
        require('./styles/ide.css');
        return `<div class="widget-content">Widget 2</div>`;
    };

}
