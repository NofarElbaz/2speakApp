import { createRealmContext, Realm } from '@realm/react';

export class Word {
  constructor(name,image) {
    this.name = name;
    this._id = new Realm.BSON.ObjectId();
    this.recordsURI = [];
    this.imageURI = image;
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static wordSchema = {
    name: 'Word',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      recordsURI: 'string[]',
      imageURI: 'string'
    },
  };
}

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Word.wordSchema],
  deleteRealmIfMigrationNeeded: true,
});