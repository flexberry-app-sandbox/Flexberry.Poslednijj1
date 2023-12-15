import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-poslednijj-товары', { inverse: null, async: false }),
  докумПоставки: DS.belongsTo('i-i-s-poslednijj-докум-поставки', { inverse: 'инфОЗаказе', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-poslednijj-инф-о-заказе.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-poslednijj-инф-о-заказе.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПоставки: {
    descriptionKey: 'models.i-i-s-poslednijj-инф-о-заказе.validations.докумПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфОЗаказеE', 'i-i-s-poslednijj-инф-о-заказе', {
    количество: attr('Количество', { index: 1 }),
    товары: belongsTo('i-i-s-poslednijj-товары', 'Наименование товара', {
      единицыИзмер: attr('Единицы измерения', { index: 2 }),
      масса: attr('Масса', { index: 3 }),
      цена: attr('Цена', { index: 4 })
    }, { index: 0, displayMemberPath: 'наимТовара' })
  });
};
