
import Cookie from 'js-cookie'
export function getStorage (key) {
  return Cookie.get(key)
}

export function setStorage (key, value) {
  Cookie.set(key, value)
}

export function removeStroage (key) {
  Cookie.remove(key)
}
