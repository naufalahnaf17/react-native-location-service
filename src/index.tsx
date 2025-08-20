import LocationService from './NativeLocationService';

export function multiply(a: number, b: number): number {
  return LocationService.multiply(a, b);
}
