import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);

    this.name         = options.name || '';
    this.emitter      = options.emitter;
    this.subscribe    = options.subscribe || [];
    this.store        = options.store;
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

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // Will receive changes only for the fields that are subscribed
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
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
