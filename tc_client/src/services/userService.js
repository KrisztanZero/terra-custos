import { users } from '../data/users';
import { generateUniqueId } from '../utils/idCreator';

export function getAllUsers() {
    try {
        return [...users];
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
}

export function getUserByUsername(username) {
    try {
        return users.find((user) => user.username === username);
    } catch (error) {
        console.error('Error fetching user by username:', error);
        throw error;
    }
}

export function getUserById(id) {
    try {
        return users.find((user) => user.id === id);
    } catch (error) {
        console.error('Error fetching user by username:', error);
        throw error;
    }
}

export function getUserByEmail(email) {
    try {
        return users.find((user) => user.email === email);
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
}

export function addUser(user) {
    try {
        const newUser = { ...user, id: generateUniqueId(users) };
        users.push(newUser);
        return newUser;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}