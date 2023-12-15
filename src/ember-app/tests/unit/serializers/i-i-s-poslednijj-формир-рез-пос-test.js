import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-poslednijj-формир-рез-пос', 'Unit | Serializer | i-i-s-poslednijj-формир-рез-пос', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-poslednijj-формир-рез-пос',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-poslednijj-ед-изм',
    'transform:i-i-s-poslednijj-состоян-заказа',
    'transform:i-i-s-poslednijj-уд-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
