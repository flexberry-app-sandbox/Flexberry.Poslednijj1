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
          caption: i18n.t('forms.application.sitemap.poslednijj.caption'),
          title: i18n.t('forms.application.sitemap.poslednijj.title'),
          children: [{
            link: 'i-i-s-poslednijj-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-формир-рез-пос-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-poslednijj-список-барж-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-список-барж-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-poslednijj-организация-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-организация-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-poslednijj-формир-док-распр-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-формир-док-распр-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-формир-док-распр-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-poslednijj-докум-поставки-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-докум-поставки-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-докум-поставки-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-poslednijj-список-контей-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-список-контей-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-poslednijj-клиенты-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-клиенты-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-poslednijj-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-пункт-погрузки-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-poslednijj-товары-l',
            caption: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.poslednijj.i-i-s-poslednijj-товары-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})