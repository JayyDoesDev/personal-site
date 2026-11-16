function ua(): string {
  return typeof navigator === "undefined" ? "" : navigator.userAgent;
}

export function isIOS(): boolean {
  const agent = ua();
  if (/iphone|ipad|ipod/i.test(agent)) return true;
  return /macintosh/i.test(agent) && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1;
}

export function isSafari(): boolean {
  const agent = ua();
  return /safari/i.test(agent) && !/chrome|chromium|crios|fxios|edg|android/i.test(agent);
}

export function isWebKitOnly(): boolean {
  return isSafari() || isIOS();
}
