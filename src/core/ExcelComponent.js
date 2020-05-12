import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);

    this.name         = options.name || '';
    this.emitter      = options.emitter;
    this.unsubscribes = [];

    this.prepare();
  }

  // Configure component before init()
  prepare() {}

  // Return component template
  toHTML() {
    return '';
  }

  // Notify listeners about 'event'
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscribe to the event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribes.push(unsub);
  }

  // Initialize component
  // Append DOM listeners
  init() {
    this.initDOMListeners();
  }

  // Remove component
  // Remove listeners
  destroy() {
    this.removeDOMListeners();
    this.unsubscribes.forEach(unsub => unsub());
  }
}
