import React from 'react';
import { render, screen } from '@testing-library/react';
 
import {UserCardItem} from '../components/UserCardItem';

const testUser = {
    name: {
        first: "Test",
        last: "Testing"
    },
    location: {
        street: {
            name: "Test street",
            number: "00000000"
        },
        city: "Test City",
        state: "Test state",
        country: "Test Country"
    }, 
    email: "testtesting@gmail.com", 
    cell: "000000000000", 
    picture: "Test.jpg"
}

const testFn = () => "Testing..."

describe('User Card', () => {
  test('renders user card component', () => {
    render(<UserCardItem user={testUser} setShowUserProfile={testFn} setUser={testFn} showCountry={true}  />); 
  });
});