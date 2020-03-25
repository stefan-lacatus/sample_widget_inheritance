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
 * A controller that manages the lifecycle of a mashup that is displayed as a popover.
 */
@description('A controller that manages the lifecycle of a mashup that is displayed as a popover.')
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
 * A controller that manages the lifecycle of a mashup that is displayed as a window.
 */
@description('A controller that manages the lifecycle of a mashup that is displayed as a window.')
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
