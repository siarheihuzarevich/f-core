import { IHasHostElement } from '../../../dom-element';

export abstract class IBaseSvgElement<T extends SVGElement, K> implements IHasHostElement {

  public get hostElement(): T {
    return this.element;
  }

  protected constructor(
    protected element: T
  ) {
  }

  public addClass(value: string): IBaseSvgElement<T, K> {
    if (!this.element.classList.contains(value)) {
      this.element.classList.add(value);
    }
    return this;
  }

  public removeClass(value: string): IBaseSvgElement<T, K> {
    this.element.classList.remove(value);
    return this;
  }

  public setAttributeNS(name: string, value: string): IBaseSvgElement<T, K> {
    this.element.setAttributeNS('http://www.w3.org/2000/xmlns/', name, value);
    return this;
  }

  public setAttribute(name: string, value: string): IBaseSvgElement<T, K> {
    this.element.setAttribute(name, value);
    return this;
  }

  public appendChild(element: SVGElement | HTMLElement): IBaseSvgElement<T, K> {
    this.element.appendChild(element);
    return this;
  }

  public removeChild(element: SVGElement | HTMLElement): IBaseSvgElement<T, K> {
    this.element.removeChild(element);
    return this;
  }

  public hide(): IBaseSvgElement<T, K> {
    this.element.style.display = 'none';
    return this;
  }

  public show(): IBaseSvgElement<T, K> {
    this.element.style.display = 'block'
    return this;
  }

  public draw(object: Partial<K>): void {
    Object.keys(object).forEach((key: string) => {
      // @ts-ignore
      this.hostElement.setAttribute(key, object[ key ]);
    });
  }
}
