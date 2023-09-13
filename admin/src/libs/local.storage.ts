
/**
 * x-jwt
 */

export const setLocalStorage = (name: string, value: string) => {
  localStorage.setItem(name, value);
}

export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name);
}