import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокПост: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-poslednijj-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-poslednijj-организация', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-poslednijj-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-poslednijj-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокПост: {
    descriptionKey: 'models.i-i-s-poslednijj-докум-поставки.validations.номерДокПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-poslednijj-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-poslednijj-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-poslednijj-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-poslednijj-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-poslednijj-клиенты', 'Клиент', {
      заказчик: attr('Клиент', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'заказчик' }),
    организация: belongsTo('i-i-s-poslednijj-организация', 'Организация', {
      наимОрганиз: attr('Организация', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наимОрганиз' }),
    инфОЗаказе: hasMany('i-i-s-poslednijj-инф-о-заказе', 'Информация о заказе', {
      количество: attr('Количество', { index: 1 }),
      товары: belongsTo('i-i-s-poslednijj-товары', 'Наименование товара', {
        единицыИзмер: attr('Единицы измерения', { index: 2 }),
        масса: attr('Масса', { index: 3 }),
        цена: attr('Цена', { index: 4 })
      }, { index: 0, displayMemberPath: 'наимТовара' })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-poslednijj-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-poslednijj-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 2 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-poslednijj-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
