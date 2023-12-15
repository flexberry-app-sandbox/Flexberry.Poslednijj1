import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-poslednijj-клиенты-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-poslednijj-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-poslednijj-клиенты-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-poslednijj-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-список-контей-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-poslednijj-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-организация-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-poslednijj-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-список-барж-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-poslednijj-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-poslednijj-пункт-погрузки-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-poslednijj-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-poslednijj-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-poslednijj-товары-l.title'),
              icon: 'book',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документация.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документация.title'),
            children: [{
              link: 'i-i-s-poslednijj-формир-док-распр-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-формир-док-распр-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-формир-док-распр-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-poslednijj-формир-рез-пос-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-формир-рез-пос-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-формир-рез-пос-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-poslednijj-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-poslednijj-докум-поставки-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})