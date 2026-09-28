const UNITS={bit:1,byte:8,kbit:1000,kbyte:8000,mbit:1e6,mbyte:8e6,gbit:1e9,gbyte:8e9,kibibyte:8192,mebibyte:8388608,gibibyte:8589934592};
export function convertDataSize(value, from, to) {
  if(typeof value!=="number"||!Number.isFinite(value))throw new TypeError("Expected finite value");
  const f=UNITS[from.toLowerCase()], t=UNITS[to.toLowerCase()];
  if(!f||!t)throw new RangeError("Unsupported unit");
  return value*f/t;
}
export const bytesToBits=v=>convertDataSize(v,"byte","bit");
export const bitsToBytes=v=>convertDataSize(v,"bit","byte");
