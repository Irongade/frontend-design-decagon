import React from 'react';
import { render, screen } from '@testing-library/react';
 
import UserProfile from '../components/UserProfile';

const testUser = {
    name: {
        first: "Aaron",
        last: "Cody"
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
    picture: "Test.jpg",
    registered: {
        date: "2020-11-10"
    },
    phone: "00000000000"
}

const testFn = () => "Testing..."

 
describe('App', () => {
  test('renders App component', () => {
    render(
        <UserProfile user={testUser} setShowUserProfile={testFn} showCountry={false} />
    );
  });
});
