import mongoose, { Schema } from 'mongoose';
import mongooseKeywords from 'mongoose-keywords';

// Basic Item Schema
const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name required']
  },
  description: {
    type: String,
    required: [true, 'description required']
  }
});

itemSchema.methods = {
  view(full) {
    let view = {};
    let fields = ['id','name'];

    if (full) {
      fields = [...fields, 'description'];
    }

    fields.forEach(field => {
      view[field] = this[field];
    });

    return view;
  }
};

itemSchema.plugin(mongooseKeywords, { paths: ['name'] });

const model = mongoose.model('Item', itemSchema);

export const schema = model.schema;

export default model;