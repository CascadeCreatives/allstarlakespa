/**
 * SINGLE SOURCE OF TRUTH FOR THE SPA'S ADDRESS.
 *
 * TEMPORARY RELOCATION — September 2026
 * Following the fire at the 9 Lake Bellevue Drive location, the spa is
 * operating out of Bellewood Place, reopening Tuesday, September 15, 2026.
 *
 * TO REVERT WHEN THE LAKE BELLEVUE LOCATION REOPENS:
 *   1. Set `relocation.active = false` below.
 *   2. Rebuild / redeploy. Every address, map, schema record and the
 *      announcement bar switch back to Lake Bellevue automatically.
 */

export const permanentAddress = {
  street: '9 Lake Bellevue Drive',
  suite: 'Suite 112',
  streetWithSuite: '9 Lake Bellevue Drive, Suite 112',
  city: 'Bellevue',
  region: 'WA',
  postal: '98005',
  building: 'Lake Bellevue',
  lat: 47.598,
  lng: -122.1875,
  mapsQuery: '9 Lake Bellevue Drive Suite 112 Bellevue WA 98005',
  parking:
    'Free private lot parking. Easy access from I-405 and SR-520. Located in the Lake Bellevue professional complex, minutes from downtown Bellevue.',
};

export const temporaryAddress = {
  street: '2025 112th Ave NE',
  suite: 'Suite 100',
  streetWithSuite: '2025 112th Ave NE, Suite 100',
  city: 'Bellevue',
  region: 'WA',
  postal: '98004',
  building: 'Bellewood Place',
  lat: 47.62846,
  lng: -122.1916,
  mapsQuery: '2025 112th Ave NE Suite 100 Bellevue WA 98004',
  parking:
    'Free on-site parking at Bellewood Place. Just off 112th Ave NE near NE 20th St — easy access from I-405 and SR-520, minutes from downtown Bellevue.',
};

export const relocation = {
  /** Set to false when the Lake Bellevue location reopens. */
  active: true,
  reopenDate: '2026-09-15',
  reopenLabel: 'Tuesday, September 15',
  reopenShort: 'Tue, Sept 15',
  /** How long the spa expects to operate from the temporary location. */
  untilLabel: 'February 2027',
  reason:
    'Following a fire at our Lake Bellevue location, we have temporarily relocated to Bellewood Place.',
};

export const address = relocation.active ? temporaryAddress : permanentAddress;

/** "2025 112th Ave NE, Suite 100, Bellevue, WA 98004" */
export const addressOneLine = `${address.streetWithSuite}, ${address.city}, ${address.region} ${address.postal}`;

/** "2025 112th Ave NE, Suite 100 · Bellevue, WA 98004" */
export const addressDot = `${address.streetWithSuite} · ${address.city}, ${address.region} ${address.postal}`;

export const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(address.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address.mapsQuery)}&output=embed`;

export const phone = {
  display: '425.452.1772',
  tel: '4254521772',
  e164: '+14254521772',
};
