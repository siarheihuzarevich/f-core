import { IRectElementModel } from './i-rect-element-model';
import { IBaseSvgElement } from '../i-base.f-element';
import { DomElementExtensions } from '../../../../dom-element';

export class RectFElement extends IBaseSvgElement<SVGRectElement, IRectElementModel> {

  constructor(element?: SVGRectElement) {
    super(element || DomElementExtensions.createSvgElement('rect'));
  }
}
