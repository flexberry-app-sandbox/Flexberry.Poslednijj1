import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPoslednijjДокумПоставкиLForm from './forms/i-i-s-poslednijj-докум-поставки-l';
import IISPoslednijjКлиентыLForm from './forms/i-i-s-poslednijj-клиенты-l';
import IISPoslednijjОрганизацияLForm from './forms/i-i-s-poslednijj-организация-l';
import IISPoslednijjПунктПогрузкиLForm from './forms/i-i-s-poslednijj-пункт-погрузки-l';
import IISPoslednijjСписокБаржLForm from './forms/i-i-s-poslednijj-список-барж-l';
import IISPoslednijjСписокКонтейLForm from './forms/i-i-s-poslednijj-список-контей-l';
import IISPoslednijjТоварыLForm from './forms/i-i-s-poslednijj-товары-l';
import IISPoslednijjФормирДокРаспрLForm from './forms/i-i-s-poslednijj-формир-док-распр-l';
import IISPoslednijjФормирРезПосLForm from './forms/i-i-s-poslednijj-формир-рез-пос-l';
import IISPoslednijjДокумПоставкиEForm from './forms/i-i-s-poslednijj-докум-поставки-e';
import IISPoslednijjКлиентыEForm from './forms/i-i-s-poslednijj-клиенты-e';
import IISPoslednijjОрганизацияEForm from './forms/i-i-s-poslednijj-организация-e';
import IISPoslednijjПунктПогрузкиEForm from './forms/i-i-s-poslednijj-пункт-погрузки-e';
import IISPoslednijjСписокБаржEForm from './forms/i-i-s-poslednijj-список-барж-e';
import IISPoslednijjСписокКонтейEForm from './forms/i-i-s-poslednijj-список-контей-e';
import IISPoslednijjТоварыEForm from './forms/i-i-s-poslednijj-товары-e';
import IISPoslednijjФормирДокРаспрEForm from './forms/i-i-s-poslednijj-формир-док-распр-e';
import IISPoslednijjФормирРезПосEForm from './forms/i-i-s-poslednijj-формир-рез-пос-e';
import IISPoslednijjДокумПоставкиModel from './models/i-i-s-poslednijj-докум-поставки';
import IISPoslednijjИнфОЗаказеModel from './models/i-i-s-poslednijj-инф-о-заказе';
import IISPoslednijjКлиентыModel from './models/i-i-s-poslednijj-клиенты';
import IISPoslednijjОрганизацияModel from './models/i-i-s-poslednijj-организация';
import IISPoslednijjПунктПогрузкиModel from './models/i-i-s-poslednijj-пункт-погрузки';
import IISPoslednijjСписокБаржModel from './models/i-i-s-poslednijj-список-барж';
import IISPoslednijjСписокКонтейModel from './models/i-i-s-poslednijj-список-контей';
import IISPoslednijjТоварыModel from './models/i-i-s-poslednijj-товары';
import IISPoslednijjФормирДокРаспрModel from './models/i-i-s-poslednijj-формир-док-распр';
import IISPoslednijjФормирРезПосModel from './models/i-i-s-poslednijj-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-poslednijj-докум-поставки': IISPoslednijjДокумПоставкиModel,
    'i-i-s-poslednijj-инф-о-заказе': IISPoslednijjИнфОЗаказеModel,
    'i-i-s-poslednijj-клиенты': IISPoslednijjКлиентыModel,
    'i-i-s-poslednijj-организация': IISPoslednijjОрганизацияModel,
    'i-i-s-poslednijj-пункт-погрузки': IISPoslednijjПунктПогрузкиModel,
    'i-i-s-poslednijj-список-барж': IISPoslednijjСписокБаржModel,
    'i-i-s-poslednijj-список-контей': IISPoslednijjСписокКонтейModel,
    'i-i-s-poslednijj-товары': IISPoslednijjТоварыModel,
    'i-i-s-poslednijj-формир-док-распр': IISPoslednijjФормирДокРаспрModel,
    'i-i-s-poslednijj-формир-рез-пос': IISPoslednijjФормирРезПосModel
  },

  'application-name': 'Poslednijj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Poslednijj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Poslednijj',
          title: 'Poslednijj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-poslednijj-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-poslednijj-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-poslednijj-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-poslednijj-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-poslednijj-пункт-погрузки-l': {
              caption: 'Пункты погрузки',
              title: 'Пункт погрузки'
            }
          },
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-poslednijj-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-poslednijj-формир-док-распр-l': {
              caption: 'Формирование документа распределения',
              title: 'Формир док распр'
            },
            'i-i-s-poslednijj-формир-рез-пос-l': {
              caption: 'Формирования результата поставки',
              title: 'Формир рез пос'
            },
            'i-i-s-poslednijj-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            }
          }
        },
        poslednijj: {
          caption: 'Poslednijj',
          title: 'Poslednijj',
          'i-i-s-poslednijj-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-poslednijj-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-poslednijj-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-poslednijj-формир-док-распр-l': {
            caption: 'Формир док распр',
            title: ''
          },
          'i-i-s-poslednijj-докум-поставки-l': {
            caption: 'Докум поставки',
            title: ''
          },
          'i-i-s-poslednijj-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-poslednijj-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-poslednijj-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-poslednijj-товары-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-poslednijj-докум-поставки-l': IISPoslednijjДокумПоставкиLForm,
    'i-i-s-poslednijj-клиенты-l': IISPoslednijjКлиентыLForm,
    'i-i-s-poslednijj-организация-l': IISPoslednijjОрганизацияLForm,
    'i-i-s-poslednijj-пункт-погрузки-l': IISPoslednijjПунктПогрузкиLForm,
    'i-i-s-poslednijj-список-барж-l': IISPoslednijjСписокБаржLForm,
    'i-i-s-poslednijj-список-контей-l': IISPoslednijjСписокКонтейLForm,
    'i-i-s-poslednijj-товары-l': IISPoslednijjТоварыLForm,
    'i-i-s-poslednijj-формир-док-распр-l': IISPoslednijjФормирДокРаспрLForm,
    'i-i-s-poslednijj-формир-рез-пос-l': IISPoslednijjФормирРезПосLForm,
    'i-i-s-poslednijj-докум-поставки-e': IISPoslednijjДокумПоставкиEForm,
    'i-i-s-poslednijj-клиенты-e': IISPoslednijjКлиентыEForm,
    'i-i-s-poslednijj-организация-e': IISPoslednijjОрганизацияEForm,
    'i-i-s-poslednijj-пункт-погрузки-e': IISPoslednijjПунктПогрузкиEForm,
    'i-i-s-poslednijj-список-барж-e': IISPoslednijjСписокБаржEForm,
    'i-i-s-poslednijj-список-контей-e': IISPoslednijjСписокКонтейEForm,
    'i-i-s-poslednijj-товары-e': IISPoslednijjТоварыEForm,
    'i-i-s-poslednijj-формир-док-распр-e': IISPoslednijjФормирДокРаспрEForm,
    'i-i-s-poslednijj-формир-рез-пос-e': IISPoslednijjФормирРезПосEForm
  },

});

export default translations;
