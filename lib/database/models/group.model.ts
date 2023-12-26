import { Schema, model, models } from "mongoose";

const GroupSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Group = models.Group || model('Group', GroupSchema);

export default Group;
