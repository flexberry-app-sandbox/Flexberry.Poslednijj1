import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-poslednijj-докум-поставки-l');
  this.route('i-i-s-poslednijj-докум-поставки-e',
  { path: 'i-i-s-poslednijj-докум-поставки-e/:id' });
  this.route('i-i-s-poslednijj-докум-поставки-e.new',
  { path: 'i-i-s-poslednijj-докум-поставки-e/new' });
  this.route('i-i-s-poslednijj-клиенты-l');
  this.route('i-i-s-poslednijj-клиенты-e',
  { path: 'i-i-s-poslednijj-клиенты-e/:id' });
  this.route('i-i-s-poslednijj-клиенты-e.new',
  { path: 'i-i-s-poslednijj-клиенты-e/new' });
  this.route('i-i-s-poslednijj-организация-l');
  this.route('i-i-s-poslednijj-организация-e',
  { path: 'i-i-s-poslednijj-организация-e/:id' });
  this.route('i-i-s-poslednijj-организация-e.new',
  { path: 'i-i-s-poslednijj-организация-e/new' });
  this.route('i-i-s-poslednijj-пункт-погрузки-l');
  this.route('i-i-s-poslednijj-пункт-погрузки-e',
  { path: 'i-i-s-poslednijj-пункт-погрузки-e/:id' });
  this.route('i-i-s-poslednijj-пункт-погрузки-e.new',
  { path: 'i-i-s-poslednijj-пункт-погрузки-e/new' });
  this.route('i-i-s-poslednijj-список-барж-l');
  this.route('i-i-s-poslednijj-список-барж-e',
  { path: 'i-i-s-poslednijj-список-барж-e/:id' });
  this.route('i-i-s-poslednijj-список-барж-e.new',
  { path: 'i-i-s-poslednijj-список-барж-e/new' });
  this.route('i-i-s-poslednijj-список-контей-l');
  this.route('i-i-s-poslednijj-список-контей-e',
  { path: 'i-i-s-poslednijj-список-контей-e/:id' });
  this.route('i-i-s-poslednijj-список-контей-e.new',
  { path: 'i-i-s-poslednijj-список-контей-e/new' });
  this.route('i-i-s-poslednijj-товары-l');
  this.route('i-i-s-poslednijj-товары-e',
  { path: 'i-i-s-poslednijj-товары-e/:id' });
  this.route('i-i-s-poslednijj-товары-e.new',
  { path: 'i-i-s-poslednijj-товары-e/new' });
  this.route('i-i-s-poslednijj-формир-док-распр-l');
  this.route('i-i-s-poslednijj-формир-док-распр-e',
  { path: 'i-i-s-poslednijj-формир-док-распр-e/:id' });
  this.route('i-i-s-poslednijj-формир-док-распр-e.new',
  { path: 'i-i-s-poslednijj-формир-док-распр-e/new' });
  this.route('i-i-s-poslednijj-формир-рез-пос-l');
  this.route('i-i-s-poslednijj-формир-рез-пос-e',
  { path: 'i-i-s-poslednijj-формир-рез-пос-e/:id' });
  this.route('i-i-s-poslednijj-формир-рез-пос-e.new',
  { path: 'i-i-s-poslednijj-формир-рез-пос-e/new' });
});

export default Router;
