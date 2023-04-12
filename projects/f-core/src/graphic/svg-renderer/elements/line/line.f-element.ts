import { ILineElementModel } from './i-line-element-model';
import { IBaseSvgElement } from '../i-base.f-element';
import { DomElementExtensions } from '../../../../dom-element';

export class LineFElement extends IBaseSvgElement<SVGLineElement, ILineElementModel> {

  constructor(element?: SVGLineElement) {
    super(element || DomElementExtensions.createSvgElement('line'));
  }
}
