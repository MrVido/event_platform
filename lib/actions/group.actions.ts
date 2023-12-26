import { connectToDatabase } from "../database"
import Group from '../database/models/group.model'; // Adjust the import path as needed
import User from '../database/models/user.model';
import Event from '../database/models/event.model';




// Group creation parameters interface
interface CreateGroupParams {
  name: string;
  description: string;
  createdBy: string; // User ID of the creator
}

// Create a new group
export async function createGroup(params: CreateGroupParams) {
  await connectToDatabase();
  const { name, description, createdBy } = params;

  const newGroup = new Group({
    name,
    description,
    createdBy,
    members: [createdBy], // Automatically add creator as a member
  });

  await newGroup.save();
  return newGroup;
}

// Add a member to a group
export async function addMemberToGroup(groupId: string, userId: string) {
  await connectToDatabase();

  const group = await Group.findById(groupId);
  if (!group) {
    throw new Error('Group not found');
  }

  // Check if user is already a member
  if (group.members.includes(userId)) {
    throw new Error('User already a member of the group');
  }

  group.members.push(userId);
  await group.save();
  return group;
}

// Remove a member from a group
export async function removeMemberFromGroup(groupId: string, userId: string) {
  await connectToDatabase();

  const group = await Group.findById(groupId);
  if (!group) {
    throw new Error('Group not found');
  }

  group.members = group.members.filter((member: string) => member.toString() !== userId);
  await group.save();
  return group;
}

// Associate an event with a group
export async function associateEventWithGroup(groupId: string, eventId: string) {
    await connectToDatabase();
  
    const group = await Group.findById(groupId);
    if (!group) {
      throw new Error('Group not found');
    }
  
    const MyEvent = Event; // Alias it here if needed
    if (!event) {
      throw new Error('Event not found');
    }
  
    group.events.push(eventId);
    await group.save();
    return group;
  }

// Disassociate an event from a group
export async function disassociateEventFromGroup(groupId: string, eventId: string) {
    await connectToDatabase();
  
    const group = await Group.findById(groupId);
    if (!group) {
      throw new Error('Group not found');
    }
  
    group.events = group.events.filter((event: string) => event.toString() !== eventId);
    await group.save();
    return group;
  }
