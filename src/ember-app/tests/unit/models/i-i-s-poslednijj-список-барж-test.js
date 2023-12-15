import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-poslednijj-список-барж', 'Unit | Model | i-i-s-poslednijj-список-барж', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-poslednijj-докум-поставки',
    'model:i-i-s-poslednijj-инф-о-заказе',
    'model:i-i-s-poslednijj-клиенты',
    'model:i-i-s-poslednijj-организация',
    'model:i-i-s-poslednijj-пункт-погрузки',
    'model:i-i-s-poslednijj-список-барж',
    'model:i-i-s-poslednijj-список-контей',
    'model:i-i-s-poslednijj-товары',
    'model:i-i-s-poslednijj-формир-док-распр',
    'model:i-i-s-poslednijj-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
