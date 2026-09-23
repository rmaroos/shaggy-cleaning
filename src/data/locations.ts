import type { Location } from '../types/content';

export const locations: Location[] = [
{
  slug: 'hobart',
  name: 'Hobart',
  short: 'Homes and businesses across the Hobart CBD and inner suburbs.',
  intro:
  'Our team is based in Hobart and works across the CBD and inner suburbs every day — from Battery Point terraces to Sandy Bay offices.',
  suburbs: ['Hobart CBD', 'Sandy Bay', 'Battery Point', 'Dynnyrne', 'North Hobart', 'West Hobart', 'South Hobart', 'Mount Stuart'],
  info: [
  { label: 'Typical response', value: 'Same or next business day' },
  { label: 'Service days', value: 'Monday to Saturday' },
  { label: 'After-hours commercial', value: 'Available' },
  { label: 'Parking', value: 'We arrange our own where possible' }]

},
{
  slug: 'greater-hobart',
  name: 'Greater Hobart',
  short: 'Eastern Shore, Kingborough and surrounding suburbs.',
  intro:
  'Across the river and down the channel — we service the Eastern Shore and Kingborough with the same teams and standards as the city.',
  suburbs: ['Rosny', 'Bellerive', 'Howrah', 'Lindisfarne', 'Kingston', 'Blackmans Bay', 'Taroona', 'Lauderdale'],
  info: [
  { label: 'Typical response', value: 'Within one business day' },
  { label: 'Service days', value: 'Monday to Saturday' },
  { label: 'After-hours commercial', value: 'Available' },
  { label: 'Travel fee', value: 'None within listed suburbs' }]

},
{
  slug: 'northern-suburbs',
  name: 'Northern Suburbs',
  short: 'Glenorchy, Moonah, New Town and beyond.',
  intro:
  'Regular home and commercial cleaning across the northern suburbs, including industrial and warehouse sites along the Brooker corridor.',
  suburbs: ['New Town', 'Moonah', 'Glenorchy', 'Lutana', 'Claremont', 'Berriedale', 'Derwent Park', 'Bridgewater'],
  info: [
  { label: 'Typical response', value: 'Within one business day' },
  { label: 'Service days', value: 'Monday to Saturday' },
  { label: 'Industrial sites', value: 'Available by arrangement' },
  { label: 'Travel fee', value: 'None within listed suburbs' }]

},
{
  slug: 'other-service-areas',
  name: 'Other Service Areas',
  short: 'Surrounding areas by arrangement — just ask.',
  intro:
  'Outside our core suburbs? We regularly travel to surrounding areas for regular contracts and larger one-off jobs. Tell us where you are and we will confirm.',
  suburbs: ['Sorell', 'Midway Point', 'Huonville', 'Cambridge', 'Richmond', 'New Norfolk', 'Snug', 'Margate'],
  info: [
  { label: 'Typical response', value: '1–2 business days' },
  { label: 'Availability', value: 'Confirmed at quote' },
  { label: 'Regular contracts', value: 'Preferred' },
  { label: 'Travel fee', value: 'May apply — quoted upfront' }]

}];


export const featuredSuburbs = [
'Hobart',
'Sandy Bay',
'Battery Point',
'Dynnyrne',
'New Town',
'Moonah',
'Glenorchy',
'Kingston',
'Rosny',
'Bellerive',
'Howrah'];