const LS_KEYS = {
  CART: 'cart',
  USER: 'user',
};

class LocalStorageService {
  static get(key: string) {
    const value = localStorage.getItem(key) as string;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  static set(key: string, value: unknown) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    return localStorage.removeItem(key);
  }
}

export { LocalStorageService, LS_KEYS };
