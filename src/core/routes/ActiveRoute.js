export class ActiveRoute {
  static path() {
    return window.location.hash.slice(1);
  }

  static get param() {
    return ActiveRoute.path().split('/')[1];
  }

  static navigate(path) {
    window.location.hash = path;
  }
}
