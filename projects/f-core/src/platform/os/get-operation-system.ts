import { EOperationSystem } from './e-operation-system';

export function getOperationSystem(): EOperationSystem | undefined {

  let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i,
    iosPlatforms = /(iphone|ipad|ipod)/i;

  let result: EOperationSystem | undefined;

  if (macosPlatforms.test(userAgent)) {
    result = EOperationSystem.MAC_OS;
  } else if (iosPlatforms.test(userAgent)) {
    result = EOperationSystem.IOS;
  } else if (windowsPlatforms.test(userAgent)) {
    result = EOperationSystem.WINDOWS;
  } else if (/android/.test(userAgent)) {
    result = EOperationSystem.ANDROID;
  } else if (!result && /linux/.test(userAgent)) {
    result = EOperationSystem.LINUX;
  }

  return result;
}
