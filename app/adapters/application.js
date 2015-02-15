var db = new PouchDB('idbdtest');

export default EmberPouch.Adapter.extend({
  db: db
});
